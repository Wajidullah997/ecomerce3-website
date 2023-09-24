import React from 'react'
import { logoDark, imgCart } from '../assets'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

const Header = () => {
  const productData = useSelector((state)=> state.bazar.productData)
    return (
      <div className="w-full bg-white h-20 border-b-[1px] border-gray-800 font-titleFont sticky top-0 z-50">
        <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
          <Link to="/">
            <div>
              <img className="w-28" src={logoDark} alt="logoDark" />
            </div>
          </Link>
          <div className="flex items-center gap-8">
            <ul className="flex items-center gap-8">
              <li
                className="text-base text-black font-bold hover:text-orange-900
               hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
              >
                Home
              </li>
              <li
                className="text-base text-black font-bold hover:text-orange-900
               hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
              >
                Pages
              </li>
              <li
                className="text-base text-black font-bold hover:text-orange-900
               hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
              >
                Shop
              </li>
              <li
                className="text-base text-black font-bold hover:text-orange-900
               hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
              >
                Element
              </li>
              <li
                className="text-base text-black font-bold hover:text-orange-900
               hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
              >
                Blog
              </li>
            </ul>
            <Link to="/cart">
              <div className="relative">
              <img src={imgCart} className="w-8 h-9 bg-black" alt="Cart" />
              <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center">
                {productData.length}
              </span>
            </div>
            </Link>
            <img
              className="w-8 h-8 rounded-full"
              src="https://static.thenounproject.com/png/117632-200.png"
              alt="userlogo"
            />
          </div>
        </div>
        <ToastContainer
          position='top-right'
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
        />
      </div>
    );
};

export default Header
