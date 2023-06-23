import React, { useState } from "react";
import { AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { ADD } from "../../../controller/action";

export const ProductItem = ({ data }) => {
  const [openImage, setOpenImage] = useState(false);
  const [img, setImg] = useState("");

  const onOpenImg = (src) => {
    setImg(src);
    setOpenImage(true);
  };

  const dispatch = useDispatch()

  const addToCart = (e)=>{
   dispatch(ADD(e))
  }
  return (
    <>
      <div className='product_items'>
        {data.map((items) => (
          <div className='box' key={items.id}>
            <div className='img'>
              <img src={require('../../assets/images/'+items.cover)} alt='cover' />
              <div className='overlay'>
                <button className='button'>
                  <FiShoppingBag onClick={()=> addToCart(items)}/>
                </button>
                <button className='button'>
                  <AiOutlineHeart />
                </button>
                <button
                  className='button'
                  onClick={() => onOpenImg(items.cover)}>
                  <FiSearch />
                </button>
              </div>
            </div>
            <div className='details'>
              <h3>{items.title}</h3>
              <p>{items.author}</p>
              <h3>Price: NGN{items.price}</h3>
            </div>
          </div>
        ))}
      </div>  

      <div className={openImage ? "modelOpen" : "modalClose"}>
        <div className='onClickImage'>
          <img src={img} alt='product' />
          <button className='button' onClick={() => setOpenImage(false)}>
            <AiOutlineClose />
          </button>
        </div>
      </div>
    </>
  );
};
