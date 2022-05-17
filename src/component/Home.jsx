import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";





const Home = () => {





    return (
        <>
            <article className="article">
                <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKbPnJe2WbH-u702Q8vRArVVlyk4C3N6PFxw&usqp=CAU" alt="background" />
                <h3 className="header">ENTER OZWORLD</h3>
                <p className="para">Be the real you. Choose your player and step out in style</p>
                <button className="button">Shop Now</button>
            </article>
            <article className="article">
                <img className="image" src="https://brand.assets.adidas.com/image/upload/f_auto,fl_lossy,q_1/if_w_gt_1920,w_1920/enIN/Images/2880x1280_WB_tcm209-888560.jpg" alt="background" />
                <h3 className="header">SUMMERTIME SAVINGS</h3>
                <p className="para">Upto 40% on selected items</p>
                <p className="btn1">Shop Men</p>
                <p className="btn2">Shop Women</p>
                <p className="btn3">Shop Kids</p>
            </article>
            <div className="popular">
                <h2>POPULAR RIGHT NOW</h2>
                <div className="popular-container">
                    <div>FACE COVERS</div>
                    <div>WHITE SNEAKERS</div>
                    <div>SUPERSTAR</div>
                    <div>ADIDAS ORIGINALS</div>
                    <div>ULTRABOOST</div>
                </div>
            </div>
            <div className="category">
                <h2>WHAT ARE YOU SHOPPING FOR</h2>
                <div className="category-container">
                    <article className="article">
                        <Link to="/mens">
                            <img className="category-container-img" src="https://cdn.fashiola.in/L74367230/adidas-originals-adicolor-lock-up-t-shirt-in.jpg" alt="mens" />

                        </Link>
                        <h3 className="category-container-header">MEN</h3>

                    </article>
                    <article className="article">
                        <Link to="/womens">
                            <img className="category-container-img" src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/14794806/2021/10/22/eaf04748-e03b-4ead-93f2-c951668daa5e1634875473320-ADIDAS-Women-Sweatshirts-5741634875472739-1.jpg" alt="women" />

                        </Link>
                        <h3 className="category-container-header">WOMEN</h3>
                    </article>
                    <article className="article">
                        <Link to="/kids">
                            <img className="category-container-img" src="https://d330gmu8jafas0.cloudfront.net/manufacturer/promo/adidas-rechts.jpg" alt="kids" />

                        </Link>
                        <h3 className="category-container-header">KIDS</h3>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home;