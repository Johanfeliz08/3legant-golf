import React, { useState, useRef } from "react";
import "@/components/styles/ProductCaraousel.css";
import CaraouselCard from "./utils/CaraouselCard";
import MockData from "@/components/utils/MockData.json";

const ProductCaraousel = () => {
  const itemsData = Object.values(MockData.items);

  const scrollerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollerRef.current.offsetLeft);
    setScrollLeft(scrollerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    
    if (isDragging) {
    e.preventDefault();
    const x = e.pageX - scrollerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiplica por 2 para aumentar la velocidad de desplazamiento
    scrollerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  // Handle when the mouse left the scroller container

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="flex flex-col gap-y-9 carousel-container min-h-[850px] pl-28 py-16">
      <header className="section-header flex flex-row justify-between items-center pr-44">
        <div className="section-title">
          <h2 className="text-4xl font-medium">Featured</h2>
        </div>
        <div className="pagination flex flex-row gap-1">
          {/* Aquí va tu código SVG */}
        </div>
      </header>

      <div
        ref={scrollerRef}
        className={`scroller flex flex-row gap-x-12 w-full h-[550px] overflow-hidden ${isDragging ? "dragging" : null}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {itemsData.map((item) => (
          <div draggable="false" key={item.id} className="scroller-item min-w-72">
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

