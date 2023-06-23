import React, { useEffect, useState } from "react";
import cartimg from "../assets/images/cart.png";
import { BiSearch } from "react-icons/bi";
import { BsBagCheck } from "react-icons/bs";
import { RiUser3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { navlist } from "../assets/data/data";
import {
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineDelete,
} from "react-icons/ai";
import { connect, useDispatch, useSelector } from "react-redux";
import { DELETE } from "../../controller/action";
import { BudPayButton, closeBudPayPaymentModal } from "budpay-react-v2";

const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const header = this.document.querySelector("header");
      header?.classList.toggle("active", this.window.scrollY > 100);
    });
  }, []);

  const [mobile, setMobile] = useState(false);

  const [cartList, setCartList] = useState(false);
  const handleClose = () => {
    setCartList(null);
  };

  // cart add in shop
  const getdata = useSelector((state) => state.cartReducer.carts);
  console.log(getdata);

  // delete cart
  const dispatch = useDispatch();
  const delet = (id) => {
    dispatch(DELETE(id));
  };

  // total prcie
  const [price, setPrice] = useState(0);
  console.log(price);

  const totals = () => {
    let price = 0;
    getdata.map((e, i) => {
      price = parseFloat(e.price) * e.qty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    totals();
  }, [totals]);

  const handleCloses = () => {
    setCartList(null);
  };

  const config ={
    api_key: process.env.SECRET_KEY,
    email: 'user"email.com',
  amount: '100',
  first_name: 'John',
  last_name: 'Doe',
  currency: 'NGN',
  
  }
  const budPayConfig = {
    ...config,
    text: 'Pay with BudPay',
    btnSize: 'small',
    callback_url: 'https://localhost:3000/',
    callback: function (response) {
      closeBudPayPaymentModal(); 
      alert('Payment complete! Reference: ' + response.reference + ', Status: ' + response.status);
    },
    onClose: function (response) {
      console.log(response);
      alert('Transaction was not completed, window closed.');
    },
  };
  
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
                  <AiOutlineMenu className='open heIcon' />
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
              <button className='button' onClick={() => setCartList(!cartList)}>
                <BsBagCheck className='shop heIcon' />
                MY CART({getdata.length})
              </button>

              <div className={cartList ? "showCart" : "hideCart"}>
                {getdata.length ? (
                  <section className='details'>
                    <div className='details_title'>
                      <h3>Photo</h3>
                      <p>Product Name</p>
                    </div>
                    {getdata.map((e) => (
                      <div className='details_content'>
                        <div className='details_content_img'>
                          <Link to={`/cart/${e.id}`} onClick={handleCloses}>
                            <img src={require('../assets/images/2.jpg')} alt='' />
                          </Link>
                        </div>
                        <div className='details_content_detail'>
                          <div className='details_content_detail_price'>
                            <p>{e.title.slice(0, 20)}...</p>
                            <p>Price : ${e.price}</p>
                            <p>Quantity : {e.qty}</p>
                          </div>
                        </div>
                        <div className='details_content_detail_icon'>
                          <i onClick={() => delet(e.id)}>
                            <AiOutlineDelete />
                          </i>
                        </div>
                      </div>
                    ))}
                    <div className='details_total'>
                      <h4>Total : NGN{price}</h4>
                    <div className="right">
                    <BudPayButton {...budPayConfig}/>
                    </div>
                    </div>
                  </section>
                ) : (
                  <div className='empty'>
                    <p>Your cart is empty</p>
                    <img src={cartimg} alt='cart' />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    amount: state.amount,
  };
};
connect(mapStateToProps)(Header);

export default Header;
