import React from "react";

import "@/components/utils/CaraouselCard.css";

const CaraouselCard = ({id,image,name,rating,description,price,isHot,hasDiscount,discount,category_id}) => {
  

  const handleRating = (rating) => {

    if (rating > 0) {
     
      return Array.from({ length: rating }, (_, i) => (
        <span key={i} className="text-2xl font-bold">
          *
        </span>
      ));
      }
    }
  
  
  return (
    <>
      <article className="item-card max-w-72 h-full max-h-full px-2 py-4 border-solid border border-neutral-01 transition-all hover:border-solid hover:border hover:border-accent-secondary">
        <div className="item-container flex justify-center relative items-center h-18 max-h-22 aspect-square bg-neutral-03">
          <div className="states absolute top-0 left-0 flex flex-col gap-y-1 p-2 max-w-20">
            
            {isHot ? 
              <div className="hot bg-neutral-01 py-1 px-2 font-bold text-center rounded-lg">
                <span className="">HOT</span>
              </div> : null}

            {hasDiscount ?
              <div className="discount bg-accent-primary rounded-lg py-1 px-2 font-bold text-neutral-01 text-center">
                <span>{`-${discount}%`}</span>
            </div> : null }
  
          </div>

          <img src={image} alt={`${name} imagen`} className="h-fit w-fit" />

          <div className="addtocart w-full h-16 rounded-lg absolute bottom-0 px-2 py-2">
            <button className="addtocartbnt bg-accent-secondary text-neutral-01 w-full h-full rounded-lg opacity-0">
              Add to cart
            </button>
          </div>
        </div>

        <div className="info py-2 flex flex-col gap-1">
          
          <div className="rating w-full h-[10%] min-h-fit">
            {handleRating(rating)}
          </div>
            
            <span className="name-description font-bold text-md w-full text-balance">{name + " - " + description}</span>
            
            <span className="price font-bold text-md">{`$ ${price}`}</span>

        </div>
      </article>
    </>
  );
};

export default CaraouselCard;
