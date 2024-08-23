import React from "react";
import { useState } from "react";
import "@/components/styles/NavBar.css";

const NavBar = () => {

  const [isChecked, setIsChecked] = useState(false);


  return (
    <nav className="navbar flex flex-row justify-between items-center px-14 py-5">

      <div className="flex flex-row justify-center items-center gap-1">
        <div className="hambugermenu hidden">
          <label htmlFor="hamburgercb">
            <svg
            className="size-9"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 8H17M7 12H17M7 16H17"
                stroke="#141718"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <input type="checkbox" value={isChecked} onChange={(e) => setIsChecked(e.target.checked)} name="hamburgercb" id="hamburgercb" className="hidden" />
          </label>
        </div>
        <div className="logo">
          <span className="text-xl font-bold">3legant.</span>
        </div>
      </div>

      <ul className={`navitems md:flex md:flex-row gap-14 justify-center items-center ${isChecked ? "flex" : "hidden"}`}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a
            href=""
            className="flex flex-row gap-1 justify-center items-center"
          >
            <span>Shop</span>
            <svg
              className=" stroke-accent-secondary"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.2041 6.75L9.7041 11.25L14.2041 6.75"
                stroke-width="1.125"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <a
            href=""
            className="flex flex-row gap-1 justify-center items-center"
          >
            <span>Product</span>
            <svg
              className=" stroke-accent-secondary"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.2041 6.75L9.7041 11.25L14.2041 6.75"
                stroke-width="1.125"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <a href="">Contact Us</a>
        </li>
      </ul>

      <div className="actions flex flex-row gap-4 justify-center items-center">
        <div className="search flex justify-center items-center">
          <button type="button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5 18.5L22 22M21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21C16.7467 21 21 16.7467 21 11.5Z"
                stroke="#141718"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="user-account flex justify-center items-center">
          <button type="button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5588 19.5488C17.5654 16.8918 15.0036 15 12 15C8.99638 15 6.4346 16.8918 5.44117 19.5488M18.5588 19.5488C20.6672 17.7154 22 15.0134 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.0134 3.33285 17.7154 5.44117 19.5488M18.5588 19.5488C16.8031 21.0756 14.5095 22 12 22C9.49052 22 7.19694 21.0756 5.44117 19.5488M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z"
                stroke="#141718"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="cart">
          <label
            htmlFor="cart"
            className="flex flex-row gap-1 justify-center items-center"
          >
            <input type="checkbox" name="" id="cart" className="hidden" />
            <svg
              className="bag-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6"
                stroke="#141718"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.6115 3H8.38848C6.43313 3 4.76436 4.41365 4.44291 6.3424L2.77624 16.3424C2.36988 18.7805 4.25006 21 6.72182 21H17.2781C19.7499 21 21.6301 18.7805 21.2237 16.3424L19.557 6.3424C19.2356 4.41365 17.5668 3 15.6115 3Z"
                stroke="#141718"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              className="cart-items-count-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_219_7647)">
                <circle cx="10" cy="10" r="10" fill="#141718" />
                <path
                  d="M6.92809 14V12.6705L10.0346 9.79403C10.2988 9.53835 10.5204 9.30824 10.6994 9.10369C10.8812 8.89915 11.019 8.69886 11.1127 8.50284C11.2065 8.30398 11.2534 8.08949 11.2534 7.85938C11.2534 7.60369 11.1951 7.38352 11.0787 7.19886C10.9622 7.01136 10.8031 6.8679 10.6014 6.76847C10.3997 6.66619 10.171 6.61506 9.91531 6.61506C9.64826 6.61506 9.41531 6.66903 9.21644 6.77699C9.01758 6.88494 8.86417 7.03977 8.75621 7.24148C8.64826 7.44318 8.59428 7.68324 8.59428 7.96165H6.84286C6.84286 7.39062 6.97212 6.89489 7.23065 6.47443C7.48917 6.05398 7.85138 5.72869 8.31729 5.49858C8.7832 5.26847 9.32013 5.15341 9.92809 5.15341C10.5531 5.15341 11.0971 5.2642 11.5602 5.4858C12.0261 5.70455 12.3883 6.00852 12.6468 6.39773C12.9054 6.78693 13.0346 7.23295 13.0346 7.7358C13.0346 8.06534 12.9693 8.39062 12.8386 8.71165C12.7108 9.03267 12.4821 9.3892 12.1525 9.78125C11.823 10.1705 11.3585 10.6378 10.7591 11.1832L9.48491 12.4318V12.4915H13.1497V14H6.92809Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_219_7647">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
