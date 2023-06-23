import React, {useState} from "react";
import { BiSearch } from "react-icons/bi";
import { products } from "../../assets/data/data";
import { SearchItems } from "./SearchItems";
const Hero = () => {

  const [value, setValue]= useState('')
  const onChange=(e)=>{
    setValue(e.target.value)
  }

  const onSearch=(key)=>{
setValue(key)
console.log('search', key)
  }

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <h1>
            <label htmlFor=''>
              Over <span>100</span> Resouces,
            </label>
            <br />
            <label>
              In <span>Moneu and Gdska</span> Tehmpleate
            </label>
          </h1>
          <p>
            This is where the supporting text is going to be and this is what i
            am going to write.
          </p>
          <div className='search'>
            <span>All Categories</span>
            <hr />
            <input type='text' placeholder='Search Products...' onChange={onChange} value={value} />
            <button onClick={()=> onSearch(value)}>
              <BiSearch className='searchIcon heIcon' />
            </button>
          </div>
          <SearchItems product={products} value={value} onSearch={onSearch}/>
          <p>
            Examples: Brush, LipSticks, Face Wash, Lip Balm, Cream, Face Wash...
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
