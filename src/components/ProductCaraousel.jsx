import React from "react";

import "@/components/styles/ProductCaraousel.css";
import CaraouselCard from "./utils/CaraouselCard";

import MockData from "@/components/utils/MockData.json";



const ProductCaraousel = () => {


  const itemsData = Object.values(MockData.items);


  return (
    <>
    <section className="flex flex-col gap-y-9 carousel-container min-h-[800px] pl-28 py-16">

    <header className="section-header flex flex-row justify-between items-center pr-44">
      <div className="section-title">
        <h2 className="text-4xl font-medium">Featured</h2>
      </div>

      <div className="pagination flex flex-row gap-2 text-2xl">
        <span>*</span>
        <span>*</span>
        <span>*</span>
      </div>

    </header>

    <div className="scroller flex flex-row gap-x-12 w-full h-[500px] overflow-hidden">

      {
        itemsData.map((item) => {
          return (
        <div key={item.id} className="scroller-item min-w-72">
          <CaraouselCard
          id={item.id}
          image={item.image}
          name={item.name}
          rating={item.rating}
          description={item.description}
          price={item.price}
          isHot={item.isHot}
          hasDiscount={item.hasDiscount}
          discount={item.discount}
          category_id={item.category_id}
          />
        </div>
          )
        })
      }

    </div>
    </section>
    </>
    
  )






}




export default ProductCaraousel;