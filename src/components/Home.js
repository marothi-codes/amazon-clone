import React from "react";

// Components
import Product from "./Product";

// The Stylesheet
import "./Home.css";
/**
 * This is the component for the content section of the homepage.
 */
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Hero Banner"
        />

        <div className="home__row">
          <Product
            id={10001}
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            price={20 * 15}
            rating={5}
          />

          <Product
            id={10002}
            title="Kenwood kMix Stand Mixer for baking, Stylish kitchen mixer with K-Beater, Dough hook and whisk, 5 litre glass boul"
            image="https://m.media-amazon.com/images/I/41no-3PQJML._AC_.jpg"
            price={239 * 15}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id={10003}
            title="Amazon Echo (3rd Generation) Smart Speaker with Alexa, Charcoal Fabric"
            image="https://m.media-amazon.com/images/I/61IxWv3ecpL._AC_UY218_.jpg"
            price={35.326 * 15}
            rating={4}
          />

          <Product
            id={10004}
            title="2020 Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)"
            image="https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_UY218_.jpg"
            price={13299.987}
            rating={5}
          />

          <Product
            id={10005}
            title="Apple Watch Nike Series 6 GPS, 44mm Space Gray Aluminum Case"
            image="https://m.media-amazon.com/images/I/61cTA3L6vDL._AC_UL320_.jpg"
            rating={5}
            price={9999.99}
          />
        </div>

        <div className="home__row">
          <Product
            id={10006}
            title="SAMSUNG 34-Inch Odyssey G5 Ultra-Wide Gaming Monitor with 1000R Curved Screen, 165Hz display"
            image="https://m.media-amazon.com/images/I/61XDeaOrrKL._AC_UY218_.jpg"
            price={8177.12}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
