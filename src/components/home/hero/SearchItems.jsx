import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

export const SearchItems = ({ value, product, onSearch }) => {
  return (
    <>
      <section>
        <div className='product_items'>
          {product
            .filter((items) => {
              const searchKey = value.toLowerCase();
              const title = items.title.toLowerCase();
              return (
                searchKey && title.startsWith(searchKey) && title !== searchKey
              );
            })
            .slice(0, 10)
            .map((items) => (
              <div className='box' key={items.id}>
                <div className='img'>
                  <img src={items.cover} alt='cover' />
                  <div className='overlay'>
                    <button className='button'>
                      <FiShoppingBag />
                    </button>
                    <button className='button'>
                      <AiOutlineHeart />
                    </button>
                    <button className='button'>
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
      </section>
    </>
  );
};
