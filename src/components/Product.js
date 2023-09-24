import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { addToCart } from "../redux/bazarSlice";


const Product = () => {
  const dispatch = useDispatch()
  const [details, setDetails] = useState({});
  let [baseQty, setBaseQty] = useState(1)
  const Location = useLocation();

  useEffect(() => {
    setDetails(Location.state.item);
  },[Location.state.item]);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex">
        <div className="w-2/5 relative">
          <img
            className="w-full h-[550px] object-cover"
            src={details.image}
            alt="productImg"
          />
          <div className="absolute top-4 right-0">
            {details.isNew && (
              <p className="bg-black text-white px-6 py-1 font-titleFont font-semibold">
                Sale
              </p>
            )}
          </div>
        </div>
        <div className="w-3/5 flex flex-col px-5 justify-center gap-12">
          <div>
            <h2 className="text-4xl font-semibold">{details.title}</h2>
            <div className="flex items-center gap-6 mt-3">
              <p className="line-through text-gray-500">${details.oldPrice}</p>
              <p className="text-2xl text-gray-900">${details.price}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-base">
            <div className="flex">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className="text-xs text-gray-500">(1 Customer review)</p>
          </div>
          <p className="text-base text-gray-500 -mt-3">{details.description}</p>
          <div className="flex gap-4">
            <div className="w-52 font-bold gap-4 justify-center p-3 border flex items-center">
              <p className="text-sm">Quality</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() =>
                    setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span>{baseQty}</span>
                <button
                  onClick={() => setBaseQty(baseQty + 1)}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            <div className="bg-black text-white active:bg-gray-800 justify-center py-3 px-6">
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      _id: details._id,
                      title: details.title,
                      image: details.image,
                      price: details.price,
                      quantity: baseQty,
                      description: details.description,
                    })
                  ) & toast.success(`${details.title} is added`)
                }
              >
                add to cart
              </button>
            </div>
          </div>
          <p className="text-base text-gray-500">
            Category:
            <span className="font-medium capitalize">{details.category}</span>
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Product;