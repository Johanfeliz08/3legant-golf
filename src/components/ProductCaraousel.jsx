import React, { useState, useRef } from "react";
import "@/components/styles/ProductCaraousel.css";
import CaraouselCard from "./utils/CaraouselCard";
import MockData from "@/components/utils/MockData.json";

const ProductCaraousel = () => {

  // Data

  const itemsData = Object.values(MockData.items);

  //  Slide functionality 

  const scrollerRef = useRef(null); // Get the scroller component after the dom is rendered
  const [isDragging, setIsDragging] = useState(false); // Manage the state
  const [startX, setStartX] = useState(0); // Store the initial position of the mouse
  const [scrollLeft, setScrollLeft] = useState(0); //  Store the initial position of the horizontal scrollbar

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
    
    }

  }

  return (
    <section className="flex flex-col gap-y-9 carousel-container min-h-[850px] pl-28 py-16">
      <header className="section-header flex flex-row justify-between items-center pr-44">
        <div className="section-title">
          <h2 className="text-4xl font-medium">Featured</h2>
        </div>
        <div className="pagination flex flex-row gap-1">
          <svg
            className="size-4 border border-solid border-accent-secondary rounded-full p-[3px]"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
            strokeWidth="0.27"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0">
              <rect
                x="0"
                y="0"
                width="15"
                height="15"
                rx="7.5"
                fill="#000000"
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
                fill="#000000"
              />
            </g>
          </svg>
          <svg
            className="size-4 border border-solid border-accent-secondary rounded-full p-[3px]"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
            strokewidth="0.27"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0">
              <rect
                x="0"
                y="0"
                width="15"
                height="15"
                rx="7.5"
                fill="#000000"
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
                fill="#000000"
              />
            </g>
          </svg>
          <svg
            className="size-4 border border-solid border-accent-secondary rounded-full p-[3px]"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
            strokeWidth="0.27"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0">
              <rect
                x="0"
                y="0"
                width="15"
                height="15"
                rx="7.5"
                fill="#000000"
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
                fill="#000000"
              />
            </g>
          </svg>
        </div>
      </header>

      <div
        ref={scrollerRef}
        className={`scroller overscroll-none flex flex-row gap-x-12 w-full h-[550px] overflow-scroll  ${
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
