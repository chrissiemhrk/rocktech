import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed w-full z-50 top-0 bg-transparent duration-300 outline-none">
      <div className="flex justify-between h-20 mx-52">
        <div className="flex lg:w-1/5 items-center cursor-pointer">
          <div className="relative flex w-20 h-4.5">
            <Link href="/">
              <a className="opacity-100 block w-full cursor-pointer">
                <svg
                  viewBox="0 0 96 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <g clipPath="url(#Logo_svg__clip0)">
                    <path
                      d="M0 .435h6.88c3.509 0 5.711 1.969 5.711 5.557 0 2.068-1.078 3.813-2.867 4.76l4.06 7.126H9.037l-2.361-4.81c-.414-.846-.872-1.195-1.537-1.195H3.947v6.005H0V.435zm6.56 7.95c1.398 0 2.178-.798 2.178-2.169 0-1.37-.78-2.142-2.179-2.142H3.944v4.31h2.615zm17.797.173c1.124-1.844 2.568-3.439 5.367-3.439 3.096 0 5.527 2.317 5.94 5.532h-3.531c-.299-1.196-1.216-1.97-2.432-1.97-1.307 0-1.903.798-2.844 2.344l-2.156 3.512c-.963 1.596-2.386 3.638-5.573 3.638-3.44 0-6.123-2.816-6.123-6.528 0-3.713 2.568-6.528 6.008-6.528 2.545.001 3.83 1.171 5.344 3.439zm-5.139 6.056c.184 0 .39-.025.551-.05.941-.224 1.49-1.022 2.294-2.293l.39-.622-.39-.623c-.963-1.52-1.536-2.343-2.845-2.343-1.513 0-2.729 1.221-2.729 2.966 0 1.744 1.216 2.965 2.73 2.965zM36.672.434h3.67v8.697l3.28-3.713h4.542l-4.22 4.783 4.587 7.676h-4.197l-2.867-4.86-1.124 1.272v3.588h-3.67V.435h-.001zm11.053 0h12.408v3.639h-4.22v13.805H51.97V4.073h-4.244V.435zM58.3 11.65c0-3.714 2.592-6.529 6.008-6.529 3.418 0 6.009 2.817 6.009 6.529v1.096h-8.394c.32 1.22 1.216 1.993 2.385 1.993.734 0 1.353-.299 1.789-.822h3.876c-.826 2.542-2.982 4.26-5.665 4.26-3.416 0-6.008-2.814-6.008-6.527zm8.326-1.297c-.367-1.096-1.216-1.794-2.316-1.794-1.1 0-1.95.698-2.316 1.794h4.632zm4.494 1.297c0-3.714 2.592-6.529 6.008-6.529 3.096 0 5.527 2.318 5.94 5.532h-3.53c-.321-1.196-1.216-1.969-2.408-1.969-1.49 0-2.523 1.221-2.523 2.966 0 1.744 1.032 2.965 2.523 2.965 1.192 0 2.087-.772 2.407-1.969h3.532c-.414 3.215-2.845 5.532-5.94 5.532-3.417 0-6.009-2.815-6.009-6.528zm18.577-3.115c-1.1 0-1.926.897-1.926 2.192v7.152H84.1V.435h3.67V6.39c.78-.798 1.789-1.271 2.959-1.271 2.361 0 4.311 1.645 4.311 4.959v7.799h-3.647v-7.152c0-1.294-.596-2.191-1.697-2.191z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M27.108 12.745c1.01 1.42 1.606 1.87 2.592 1.87 1.216 0 2.133-.773 2.432-1.97h3.531c-.413 3.215-2.821 5.532-5.803 5.532-2.224 0-3.555-1.022-4.633-2.367l1.881-3.065z"
                      fill="#00B35B"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="Logo_svg__clip0">
                      <path fill="#fff" d="M0 0h95.04v18H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </Link>
          </div>
        </div>
        <div className="lg:hidden flex items-center ml-auto">
          <ul>
            <li className="opacity-100 text-base uppercase">
              <span>
                <a
                  aria-hidden="true"
                  className="leading-snug tracking-default inline-block font-primary font-light"
                >
                  de
                </a>
                <span className="inline-block mx-1 align-middle rounded-full font-primary text-2xl font-light">
                  <svg
                    width="2"
                    height="22"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      d="M1 1v20"
                    ></path>
                  </svg>
                </span>
              </span>
              <span>
                <a
                  aria-hidden="true"
                  className="leading-snug tracking-default inline-block font-primary font-semibold"
                >
                  en
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div className="lg:flex hidden flex-grow w-full justify-end items-center">
          <ul className="lg:flex xl:space-x-9 space-x-5 text-black text-base">
            <Link className="opacity-100 " href="/about">
              <a className="text-wide cursor-pointer letter-spacing font-semibold uppercase">
                Why Rock Tech
              </a>
            </Link>
            <Link
              className="opacity-100 font-semibold uppercase"
              href="/product"
            >
              <a className="text-wide cursor-pointer letter-spacing font-semibold uppercase">
                Product
              </a>
            </Link>
            <Link
              className="opacity-100 font-semibold uppercase"
              href="/sustainability"
            >
              <a className="text-wide cursor-pointer letter-spacing font-semibold uppercase">
                Sustainability
              </a>
            </Link>
            <Link
              className="opacity-100 font-semibold uppercase"
              href="/investors"
            >
              <a className="text-wide cursor-pointer letter-spacing font-semibold uppercase">
                Investors
              </a>
            </Link>
            <Link className="opacity-100 " href="/career">
              <a className="text-wide cursor-pointer letter-spacing font-semibold uppercase">
                Career
              </a>
            </Link>
          </ul>
        </div>
        <ul className="lg:flex lg:w-1/5 justify-end self-center xl:space-x-9 space-x-5 text-black text-base">
          <li className="opacity-100 uppercase hidden lg:flex cursor-pointer items-center">
            <div>
              <span>
                <a
                  aria-hidden="true"
                  className="inline-block align-middle letter-spacing font-light"
                >
                  de
                </a>
              </span>
              <span className="inline-block align-middle mx-1 rounded-full font-primary text-2.5xl font-light text-line-height leading-snug">
                <svg
                  width="2"
                  height="22"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    d="M1 1v20"
                  ></path>
                </svg>
              </span>
            </div>
            <div>
              <span>
                <a
                  aria-hidden="true"
                  className="inline-block align-middle letter-spacing font-semibold"
                >
                  en
                </a>
              </span>
            </div>
          </li>
          <button
            className="outline-none"
            id="headlessui-menu-button-undefined"
            type="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <li className="nav-item self-center font-primary">
              <svg
                width="31"
                height="18"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="outline-none"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M1 1.5h29M1 8.5h29M1 16.5h29"
                ></path>
              </svg>
            </li>
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Header;
