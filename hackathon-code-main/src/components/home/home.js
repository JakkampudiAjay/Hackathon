import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import "../home/homestyle.css"
import Iphone from '../assets/images/iphone.jpg';
import Oneplus from '../assets/images/OnePlus_10_Pro_image.avif'
import Category from '../category/category.js';
import noise1 from '../assets/images/noise buds x prime.jpg';
import noise2 from '../assets/images/noise air buds pro.jpg';
import tv1 from '../assets/images/sony bravia 8.jpg';
import tv2 from '../assets/images/sony bravia 3.jpg';
import deal from '../assets/images/banner.jpg';
import blacktshirt1 from '../assets/images/cloths/blacktshirt.jpg';
import blacktshirt2 from '../assets/images/cloths/blacktshirt2.jpg';
import bluejeans from '../assets/images/cloths/bluejeans.jpg';
import creampant from '../assets/images/cloths/creampant.jpg';
import blackShirt from '../assets/images/cloths/blackShirt.jpg';
import brownShirt from '../assets/images/cloths/brownShirt.jpg';
import beauty1 from '../assets/images/beauty/beauty1.jpg';
import beauty2 from '../assets/images/beauty/beauty2.jpg';
import beauty3 from '../assets/images/beauty/beauty3.jpg';
import beauty4 from '../assets/images/beauty/beauty4.jpg';
import beauty5 from '../assets/images/beauty/beauty5.jpg';
import beauty6 from '../assets/images/beauty/beauty6.jpg';



const Home = () => {
    const navigate = useNavigate();
    const onClickcategory = () => {
        navigate('/category');
    };
    return (
        <div className='home'>
            <Header></Header>
            <div className='body'>
                <div className='deals-of-the-day'>
                    <img src={deal} alt="Banner" />
                </div>
                <div className='product-category'>
                    <div className='electronics'  onClick={onClickcategory}>
                        <h1 >Electronics</h1>
                        <div className='productslist'>
                                <div id='e'>
                                    <p> Iphone 16 pro max</p>
                                    <img src={Iphone} alt="Banner" width="170px" height="150px" />
                                </div>
                                <div id='e'>
                                    <p> One Plsu 10 Pro</p>
                                    <img src={Oneplus} alt="Banner" width="170px" height="150px" />
                                </div>
                                <div id='e'>
                                     <p> Sony Bravia 8</p>
                                    <img src={tv1} alt="Banner" width="170px" height="150px" />
                                </div>
                                <div id='e'>
                                    <p> Sony Bravia 3</p>
                                    <img src={tv2} alt="Banner" width="170px" height="150px" />
                                </div>
                                <div id='e'>
                                    <p> Noise Buds X Prime</p>
                                    <img src={noise1} alt="Banner" width="170px" height="150px" />
                                </div>
                                <div id='e'>
                                    <p> Noise Air Buds Pro</p>
                                    <img src={noise2} alt="Banner" width="170px" height="150px" />
                                </div>
                            </div>

                    </div>
                    <div className='cloths'>
                        <h1>Cloths</h1>
                            <div className='productslist'>
                                <div id='e'>
                                    <p>Blue Jeans</p>
                                    <img src={bluejeans} alt="Banner" width="170px" height="150px" />
                                </div>
                                <div id='e'>
                                    <p>Blue T-Shirt</p>
                                    <img src={blacktshirt1} alt="Banner" width="170px" height="150px" />
                                </div>
                                <div id='e'>
                                     <p>Black T-Shirt</p>
                                    <img src={blacktshirt2} alt="Banner" width="170px" height="150px" />
                                </div>
                                <div id='e'>
                                     <p>Blue T-Shirt</p>
                                    <img src={blacktshirt1} alt="Banner" width="170px" height="150px" />
                                </div>
                                <div id='e'>
                                    <p>Brown Shirt</p>
                                    <img src={brownShirt} alt="Banner" width="170px" height="150px" />
                                </div>
                                <div id='e'>
                                    <p>Black Shirt</p>
                                    <img src={blackShirt} alt="Banner" width="170px" height="150px" />
                            </div>
                        </div>
                    </div>
                    <div className='beauty'>
                        <h1>Beauty</h1>
                        <div className='productslist'>
                                <div id='e'>
                                     <p>Summer Fridays</p>
                                    <img src={beauty1} alt="Banner" width="170px" height="150px" />
                                </div>
                                <div id='e'>
                                     <p>Rare Beauty</p>
                                    <img src={beauty2} alt="Banner" width="170px" height="150px" />
                                </div>
                                <div id='e'>
                                     <p>Nars</p>
                                    <img src={beauty3} alt="Banner" width="170px" height="150px" />
                                </div>
                                <div id='e'>
                                    <p>Sauvage</p>
                                    <img src={beauty4} alt="Banner" width="170px" height="150px" />
                                </div>
                                <div id='e'>
                                     <p>Aqualogia</p>
                                    <img src={beauty5} alt="Banner" width="170px" height="150px" />
                                </div>
                                <div id='e'>
                                     <p>Mositurizer for Men</p>
                                    <img src={beauty6} alt="Banner" width="170px" height="150px" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );

};
export default Home;