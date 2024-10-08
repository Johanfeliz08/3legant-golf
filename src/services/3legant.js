
import MockData from "@/utils/MockData.json";

/* How to use */

/* 1. Import the function into the file you need to use it
// ex: import { getBy } from "@/services/3legant.astro"

/* 2. Call the function and pass the parameter you want to filter the data by */
// Ex: const res = getBy("items");

// Returns the main categories which are: "categories", "items" or "articles"
// PD: The other methods depends on this one

export const getBy = (param) => {
  return MockData[param];
};

/* Methods for items */

// Returns only the object which match the property and value

export const getItemBy = (property, value) => {
  const data = getBy("items");

  return data.find((item) => item[property] === value);
};

// Returns all the values of the given property

export const getItemsPropertyValues = (param) => {
  const data = getBy("items");

  const items = data.map((item) => {
    return item[param];
  });

  return items;
};

/* Methods for Categories */

// Returns only the object which match the property and value

export const getCategoryBy = (property, value) => {
  const data = getBy("categories");

  return data.find((category) => category[property] === value);
};

// Returns all the values of the given property

export const getCategoriesPropertyValues = (param) => {
  const data = getBy("categories");

  const categories = data.map((category) => {
    return category[param];
  });

  return categories;
};

/* Methods for articles */

export const getLatestArticles = () => {

  const latestArticles = getBy("articles").slice(-3)
  return latestArticles; 
}

