import React from 'react'

const CategoryCard = () => {
    return (
        <div className="categories">
            <div className="card card-1">
                <img src="https://images.unsplash.com/photo-1605408499391-6368c628ef42?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="#" />

                <div className="card-buttons">
                    <button className="main-btn">NEW ARRIVALS</button>
                    <button className="hover-btn">SHOP NOW</button>
                </div>
            </div>

            

            <div className="card card-2">
                <img src="https://images.unsplash.com/photo-1650320079970-b4ee8f0dae33?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="#" />

                <div className="card-buttons">
                    <button className="main-btn">SHOP MEN</button>
                    <button className="hover-btn">MEN'S SHOES</button>
                </div>
            </div>

            <div className="card card-3">
                <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="#" />

                <div className="card-buttons">
                    <button className="main-btn">WOMEN</button>
                    <button className="hover-btn">WOMEN'S SHOES</button>
                </div>
            </div>

            <div className="card card-4">
                <img src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="#" />

                <div className="card-buttons">
                    <button className="main-btn">BEST SELLERS</button>
                    <button className="hover-btn">SHOP BESTSELLERS</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;