import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsBagCheck, BsBagFill } from "react-icons/bs";
import { RiUser3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { navlist } from "../assets/data/data";
import { AiOutlineHeart, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.screenY > 100);
  });

  const [mobile, setMobile] = useState(false);

  return (
    <>
      <header>
        <div className='container'>
          <nav>
            <div className='toggle'>
              <button onClick={() => setMobile(!mobile)}>
                {mobile ? (
                  <AiOutlineClose className='close heIcon' />
                ) : (
                  <AiOutlineMenu  className='open heIcon' />
                )}
              </button>
            </div>
            <div className='left'>
              <figure className='logo'>BudShop</figure>
            </div>

            <div className='center'>
              <ul className={mobile ? "mobile-nav" : "menu"}>
                {navlist.map((nav) => (
                  <li key={nav.id}>
                    <Link key={nav.id} to={nav.path}>
                      {nav.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className='right'>
            <div className='right_search'>
              <input type='text' placeholder='Search Product...' />
              <BiSearch className='searchIcon heIcon' />
            </div>
            <div className='right_user'>
              <RiUser3Line className='userIcon heIcon' />
              <AiOutlineHeart className='userIcon heIcon' />
            </div>
            <div className='right_card'>
              <button className='button'>
                <BsBagCheck className='shop heIcon' />
                MY CART(0)
              </button>

              <div className='showCart'></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
