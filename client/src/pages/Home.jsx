import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import Products from '../components/Products';
import Footer from '../components/Footer';
import FlashSale from '../components/FlashSale';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();
  const [bannerImg, setBannerImg] = useState();

  useEffect(() => {
    fetchBanner();
  }, []);

  const fetchBanner = async () => {
    await axios.get('http://localhost:6001/fetch-banner').then((response) => {
      setBannerImg(response.data);
    });
  };

  return (
    <div className="HomePage">
      <div className="home-banner">
        {bannerImg ? <img src={bannerImg} alt="Banner" /> : ""}
      </div>

      <div className="home-categories-container">
        {[
          { name: 'Fashion', img: 'https://files.cdn.printful.com/o/upload/blog-post-img-upload/cc/cc5379ede867baff5a4b2fd9dcb968a2_l', path: '/category/Fashion' },
          { name: 'Electronics', img: 'https://5.imimg.com/data5/ANDROID/Default/2023/1/SE/QC/NG/63182719/product-jpeg-500x500.jpg', path: '/category/Electronics' },
          { name: 'Mobiles', img: 'https://www.top10mobileshop.com/images/top10mobiles.com/product/2024/08/962146925202408060916.jpg', path: '/category/Mobiles' },
          { name: 'Groceries', img: 'https://hips.hearstapps.com/hmg-prod/images/09dce7b7-ea40-406b-a2c0-a3f57c420b17-1657946362.jpeg?crop=0.660xw:1.00xh;0.0794xw,0&resize=1200:*', path: '/category/Groceries' },
          { name: 'Sports Equipment', img: 'https://images.livemint.com/img/2024/07/29/600x338/sports_equipment_1722242678912_1722242702955.jpg', path: '/category/Sports-Equipment' },
        ].map((category, idx) => (
          <div
            className="home-category-card"
            key={idx}
            onClick={() => navigate(category.path)}
          >
            <img src={category.img} alt={category.name} />
            <h5>{category.name}</h5>
          </div>
        ))}
      </div>

      <div className="flash-sale">
        <FlashSale />
      </div>

      <div id="products-body">
        <Products category="all" />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
