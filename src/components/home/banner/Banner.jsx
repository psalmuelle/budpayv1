import { banner } from "../../assets/data/data"

export const Banner = () => {
    return (
      <>
        <section className='banner'>
          <div className='posts'>
            {banner.map((items) => (
              <div className='post' key={items.id}>
                <div className='content'>
                  <div className='img'>
                    <img height={600} src={require('./../../assets/images/'+items.cover)} alt='cover' />
                  </div>
                  <div className='text'>
                    <h2>{items.title1}</h2>
                    <h2>{items.title2}</h2>
                    <p>{items.desc}</p>
                    <button className='button'>SHOP NOW</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </>
    )
  }