import React from "react";
import { useState } from "react";
import "@/components/styles/NavBar.css";

const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`navbar flex flex-row justify-between items-center px-14 py-3`}>
      <div className="left-column-hamburger flex flex-row justify-center items-center gap-1">
        <div className="hambugericon p-2 lg:hidden">
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
                stroke-witdh="1.5"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="checkbox"
              onChange={(e) => setIsMenuOpen(!isMenuOpen)}
              name="hamburgercb"
              id="hamburgercb"
              className="hidden"
            />
          </label>
        </div>
        <div className="logo">
        <a href="/#"><span className="text-xl font-bold">3legant.</span></a>
        </div>
      </div>

      <div className={`background ${isMenuOpen ? "flex" : "sm:hidden"} sm:flex sm:fixed sm:top-0 sm:left-0 sm:w-screen sm:h-screen sm:z-50 sm:bg-[rgba(0,0,0,0.7)] `}>
        <div
          className={` hamburger-menu-container sm:flex sm:fixed sm:flex-col sm:top-0 sm:left-0  sm:bg-neutral-01 sm:z-50 sm:w-[90%] sm:h-screen sm:p-8 sm:justify-between sm:items-start md:w-[60%]
             lg:flex-row lg:gap-14 lg:justify-center lg:items-center
            `}
        >
          <div className={`top sm:flex sm:flex-col sm:w-full sm:gap-y-4`}>
            <div className={`close-bar sm:flex sm:flex-row sm:justify-between sm:w-full sm:py-2 lg:hidden` }>
              <div className={`logo sm:flex lg:hidden`}>
                <span className={`sm:text-xl sm:font-bold lg:hidden`}>3legant.</span>
              </div>
              <div className={`closeicon sm:flex lg:hidden`}>
                <label htmlFor="hamburger-close-cb">
                  <svg
                    className=" fill-neutral-05 size-8"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.4419 5.44194C15.686 5.19786 15.686 4.80214 15.4419 4.55806C15.1979 4.31398 14.8021 4.31398 14.5581 4.55806L10 9.11612L5.44194 4.55806C5.19786 4.31398 4.80214 4.31398 4.55806 4.55806C4.31398 4.80214 4.31398 5.19786 4.55806 5.44194L9.11612 10L4.55806 14.5581C4.31398 14.8021 4.31398 15.1979 4.55806 15.4419C4.80214 15.686 5.19786 15.686 5.44194 15.4419L10 10.8839L14.5581 15.4419C14.8021 15.686 15.1979 15.686 15.4419 15.4419C15.686 15.1979 15.686 14.8021 15.4419 14.5581L10.8839 10L15.4419 5.44194Z"
                    ></path>
                  </svg>
                  <input
                    type="checkbox"
                    onChange={(e) => setIsMenuOpen(!isMenuOpen)}
                    name="hamburger-close-cb"
                    id="hamburger-close-cb"
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            <div className={`search-bar sm:flex sm:flex-row sm:gap-3 sm:p-5 sm:border sm:border-solid sm:border-accent-secondary sm:rounded-md lg:hidden`}>
              <svg
                className={`${isMenuOpen ? " size-6" : "hidden"}`}
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

              <input
                className={`${isMenuOpen ? "h-full w-full focus:outline-none":"hidden"} `}
                type="text"
                name="searchbar"
                id="searchbar"
                placeholder="Search"
              />
            </div>

            <ul className={`navitems sm:flex sm:flex-col sm:w-full lg:flex lg:gap-10 lg:py-4`}>
            <li className={`sm:border-b sm:border-neutral-03 sm:border-solid font-medium sm:text-lg sm:py-5`}>
                <a href="">Home</a>
              </li>
              <li className={`sm:border-b sm:border-neutral-03 sm:border-solid font-medium sm:text-lg sm:py-5`}>
                <a href="" className="flex flex-row gap-1 sm:justify-between">
                  <span>Shop</span>
                  <svg
                    className=" stroke-accent-secondary lg:size-6 sm:size-8"
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.2041 6.75L9.7041 11.25L14.2041 6.75"
                      stroke-witdh="1.125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className={`sm:border-b sm:border-neutral-03 sm:border-solid font-medium sm:text-lg sm:py-5`}>
                <a href="" className="flex flex-row gap-1 sm:justify-between">
                  <span>Product</span>
                  <svg
                    className=" stroke-accent-secondary lg:size-6 sm:size-8"
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.2041 6.75L9.7041 11.25L14.2041 6.75"
                      stroke-witdh="1.125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className={`sm:border-b sm:border-neutral-03 sm:border-solid font-medium sm:text-lg sm:py-5`}>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className={`bottom sm:flex sm:flex-col sm:gap-2 sm:w-full lg:hidden`}>
            <div className={`cart sm:font-medium sm:text-neutral-04 sm:text-lg sm:py-4 sm:border-b sm:border-neutral-03 sm:border-solid lg:hidden `}>
              <a href="" className=" flex flex-row justify-between">
                <span>Cart</span>
                <div className="icon flex flex-row justify-center items-center gap-1">
                  <svg
                    className="bag-icon size-7"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6"
                      stroke="#141718"
                      stroke-witdh="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.6115 3H8.38848C6.43313 3 4.76436 4.41365 4.44291 6.3424L2.77624 16.3424C2.36988 18.7805 4.25006 21 6.72182 21H17.2781C19.7499 21 21.6301 18.7805 21.2237 16.3424L19.557 6.3424C19.2356 4.41365 17.5668 3 15.6115 3Z"
                      stroke="#141718"
                      stroke-witdh="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    className="cart-items-count-icon size-6"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_219_7647)">
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
                </div>
              </a>
            </div>

            <div className={`wish-list sm:font-medium sm:text-neutral-04 sm:text-lg sm:py-4 sm:border-b sm:border-neutral-03 sm:border-solid lg:hidden `}>
              <a href="" className="flex flex-row justify-between">
                <span>Wishlist</span>
                <div className="icon flex flex-row justify-center items-center gap-1">
                  <svg
                    className="likeicon size-7"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.6924 7.58373C12.3055 7.95505 11.6945 7.95505 11.3076 7.58373L10.6152 6.91927C9.80477 6.14154 8.70994 5.66667 7.5 5.66667C5.01472 5.66667 3 7.68139 3 10.1667C3 12.5493 4.28979 14.5167 6.15176 16.1332C8.01532 17.7511 10.2434 18.8241 11.5746 19.3717C11.853 19.4862 12.147 19.4862 12.4254 19.3717C13.7566 18.8241 15.9847 17.7511 17.8482 16.1332C19.7102 14.5167 21 12.5493 21 10.1667C21 7.68139 18.9853 5.66667 16.5 5.66667C15.2901 5.66667 14.1952 6.14154 13.3848 6.91927L12.6924 7.58373ZM12 5.47624C10.8321 4.35548 9.24649 3.66667 7.5 3.66667C3.91015 3.66667 1 6.57682 1 10.1667C1 16.5349 7.97034 20.0517 10.8138 21.2214C11.5796 21.5364 12.4204 21.5364 13.1862 21.2214C16.0297 20.0517 23 16.5349 23 10.1667C23 6.57682 20.0899 3.66667 16.5 3.66667C14.7535 3.66667 13.1679 4.35548 12 5.47624Z"
                      fill="#141718"
                    />
                  </svg>
                  <svg
                    className="wishlist-count size-6"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_219_7647)">
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
                </div>
              </a>
            </div>

            <div className={`sign-in sm:w-full sm:bg-accent-secondary sm:text-neutral-01 sm:text-2xl sm:p-5 sm:rounded-md sm:text-center sm:hover:bg-accent-primary sm:transition-colors lg:hidden `}>
              <button type="button">Sign In</button>
            </div>

            <div className={`social-media-icons sm:flex sm:flex-row sm:gap-6 sm:py-4 lg:hidden `}>
              <a href="">
                <svg
                  className="size-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="4"
                    stroke="#141718"
                    stroke-width="1.5"
                  />
                  <circle cx="18" cy="6" r="1" fill="#141718" />
                  <circle
                    cx="12"
                    cy="12"
                    r="5"
                    stroke="#141718"
                    stroke-width="1.5"
                  />
                </svg>
              </a>
              <a href="">
                <svg
                  className="size-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 3H15C12.2386 3 10 5.23858 10 8V10H6V14H10V21H14V14H18V10H14V8C14 7.44772 14.4477 7 15 7H18V3Z"
                    stroke="#141718"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a href="">
                <svg
                  className="size-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="3"
                    width="20"
                    height="18"
                    rx="4"
                    stroke="#141718"
                    stroke-width="1.5"
                  />
                  <path
                    d="M10.4472 8.72361L15.2111 11.1056C15.9482 11.4741 15.9482 12.5259 15.2111 12.8944L10.4472 15.2764C9.78231 15.6088 9 15.1253 9 14.382V9.61803C9 8.87465 9.78231 8.39116 10.4472 8.72361Z"
                    stroke="#141718"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="actions right-column flex flex-row gap-4 justify-center items-center">
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
                stroke-witdh="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
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
                stroke-witdh="1.5"
                strokeLinejoin="round"
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
                stroke-witdh="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.6115 3H8.38848C6.43313 3 4.76436 4.41365 4.44291 6.3424L2.77624 16.3424C2.36988 18.7805 4.25006 21 6.72182 21H17.2781C19.7499 21 21.6301 18.7805 21.2237 16.3424L19.557 6.3424C19.2356 4.41365 17.5668 3 15.6115 3Z"
                stroke="#141718"
                stroke-witdh="1.5"
                strokeLinejoin="round"
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
              <g clipPath="url(#clip0_219_7647)">
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
