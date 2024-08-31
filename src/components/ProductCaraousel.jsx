import React, { useState, useRef, useEffect } from "react";
import "@/components/styles/ProductCaraousel.css";
import CaraouselCard from "@/components/CaraouselCard";
import { getBy } from "@/services/3legant.astro"


const ProductCaraousel = () => {

  // Data

  const itemsData = getBy("items").filter((items) => items.id <= 10);

  //  Slide functionality with the mouse 

  const scrollerRef = useRef(null); // Get the scroller component after the dom is rendered
  const [isDragging, setIsDragging] = useState(false); // Manage the state
  const [startX, setStartX] = useState(0); // Store the initial position of the mouse
  const [scrollLeft, setScrollLeft] = useState(0); //  Store the initial position of the horizontal scrollbar
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleMouseDown = (e) => { // Mouse click is pressed
    setIsDragging(true); // Set the state to true
    setStartX(e.pageX - scrollerRef.current.offsetLeft); // Get the initial position of the mouse in reference of the scroller container
    setScrollLeft(scrollerRef.current.scrollLeft); // Get the initial position of the horizontal bar of the scroller element
  };

  const handleMouseMove = (e) => { // Mouse is moving
    if (isDragging) { // Managing the event with the state
      e.preventDefault();
      const x = e.pageX - scrollerRef.current.offsetLeft; // Get the final position of the mouse in reference of the scroller container
      const walk = (x - startX) * 1.5; // Calculate the displacement of the mouse by subtracting the final position and the initial position - Multiply by 1.5 increase the speed of the scroll
      scrollerRef.current.scrollLeft = scrollLeft - walk; // Set the horizontal scrollbar position to the new position
    }
  };

  const handleMouseUp = () => { // Mouse click has been release
    setIsDragging(false); // Stop the event, making sure it only works when the mouse click is being pressed
  };

  // Scroll functionality

  const handleScroll = (e) => {
    
    if (scrollerRef.current) { // Make sure the scroller container is rendered in the dom

      scrollerRef.current.scrollLeft += e.deltaY; // Get the current position of the horizontal scrollbar of the scroller element and adds the vertical scroll movement - Converting the vertical scroll movement of the mouse wheel to horizontal scroll movement

      const maxScrollLeft = scrollerRef.current.scrollWidth - scrollerRef.current.clientWidth; // Get the total amount of scroll posible in the scroller component
      const currentScrollLeft = scrollerRef.current.scrollLeft; // Set the current position of the horizontal scroll
      const scrollPerc = (currentScrollLeft / maxScrollLeft) * 100; // Calculate the % dividing the curren position by the total and multiplying by 100
      setScrollPercentage(scrollPerc);
    }
  };

  const handlePagination = () => {
    const pagQuantity = Math.ceil(itemsData.length / 5); // Render a pagination item for each 5 products, using Math.Ceil to manage decimals.

    if (pagQuantity > 0) {
      return Array.from({ length: pagQuantity },(_,i ) => { // This returns an array which has the calculated amount of element, ex: if pagQuantity = 2, will render 2 times the component
        
        // This is a loop, therefore has an index, the index is base on the amount of element, if we want to calculate the % base on the element we just:  
        /* Dividing the index by the total of elements we get the min %
        but if we add 1 to the index, we get the max, and because is a loop it will increase until the max amount of elements that we are rendering */
        const minPercentage = (i / pagQuantity) * 100; 
        const maxPercentage = ((i + 1) / pagQuantity) * 100;
        const isActive = scrollPercentage >= minPercentage && scrollPercentage <= maxPercentage;
          
          return ( <span key={i}>
            <svg
              className={`dot size-4 p-[3px] border border-solid border-[rgba(0,0,0,0)] rounded-full stroke-neutral-04 fill-neutral-04 transition-all ${isActive ? "dot-active" : ""}`}
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              strokeWidth="0.27"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0">
                <rect
                  x="0"
                  y="0"
                  width="15"
                  height="15"
                  rx="7.5"
                  strokeWidth="0"
                />
              </g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
                />
              </g>
            </svg>
          </span>)
        }
      );
    }
  };

  return (
    <section className="carousel-container flex flex-col items-end min-h-fit py-12 w-full sm:pl-12 md:pl-32 lg:pl-40">
      <header className="section-header flex flex-row justify-between items-center w-full min-w-full py-12">
        <div className="section-title">
          <h2 className="text-4xl font-medium">Featured</h2>
        </div>
        <div className="pagination flex flex-row gap-1 md:pr-44 lg:pr-44">
          {handlePagination()}
        </div>
      </header>

      <div
        ref={scrollerRef}
        className={`scroller overscroll-none flex flex-row w-full h-[550px] overflow-scroll sm:gap-x-4 md:gap-x-12 lg:gap-x-12 ${
          isDragging ? "dragging" : null
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleScroll}
      >
        {itemsData.map((item) => (
          <div
            draggable="false"
            key={item.id}
            className="scroller-item min-w-72"
          >
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
        ))}
      </div>
    </section>
  );
};

export default ProductCaraousel;
