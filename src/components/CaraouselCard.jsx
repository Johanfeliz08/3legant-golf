import React from "react";

// Card component
import "@/components/styles/CaraouselCard.css";

const CaraouselCard = ({
  id,
  image,
  name,
  rating,
  description,
  price,
  isHot,
  hasDiscount,
  discount,
  category_id,
}) => {

  const handleRating = (rating) => {
    if (rating > 0) {
      return Array.from({ length: rating }, (_, i) => (
        <span key={i} className="">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z"
              fill="#343839"
            />
          </svg>
        </span>
      ));
    }
  };

  const handleDiscount = (price,discount) => {

    let finalPrice; 
    const originalPrice = price; 

    const USDollar = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    
    if(hasDiscount) {

      const finalDiscount = price * (discount / 100)
      finalPrice = price - finalDiscount

    } else {
      finalPrice = price
    }

  
    return (
      <>
        <span className="price font-bold text-md">{`${USDollar.format(finalPrice)}`}</span>
        {hasDiscount ? <span className="original-price font-regular text-neutral-04 text-md line-through">{`${USDollar.format(originalPrice)}`}</span> : null }
      </>
    )


  }

  return (
    <>
      <article className="item-card max-w-72 h-full max-h-full px-2 py-4 border-solid border border-neutral-01 transition-all hover:border-solid hover:border hover:border-accent-secondary">
        <div className="item-container flex justify-center relative items-center h-18 max-h-22 aspect-square bg-neutral-03">
          <div className="states absolute top-0 left-0 flex flex-col gap-y-1 p-2 max-w-20">
            {isHot ? (
              <div className="hot bg-neutral-01 py-1 px-2 font-bold text-center rounded-lg">
                <span className="">HOT</span>
              </div>
            ) : null}

            {hasDiscount ? (
              <div className="discount bg-accent-primary rounded-lg py-1 px-2 font-bold text-neutral-01 text-center">
                <span>{`-${discount}%`}</span>
              </div>
            ) : null}
          </div>

          <img draggable="false" src={image} alt={`${name} imagen`} className="h-fit w-fit" />

          <div className="addtocart w-full h-16 rounded-lg absolute bottom-0 px-2 py-2">
            <button className="addtocartbnt bg-accent-secondary text-neutral-01 w-full h-full rounded-lg opacity-0 hover:bg-accent-primary">
              Add to cart
            </button>
          </div>
        </div>

        <div className="info py-4 flex flex-col gap-2">
          <div className="flex flex-row rating w-full h-[10%] min-h-fit">
            {handleRating(rating)}
          </div>

          <span className="name-description font-[600] text-md w-full text-balance line-clamp-2">
            {name + " - " + description}
          </span>
          <div className="price flex flex-row gap-3">
            {handleDiscount(price,discount)}
          </div>
        </div>
      </article>
    </>
  );
};

export default CaraouselCard;
