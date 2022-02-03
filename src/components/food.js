import React from 'react';
import "./../styles/food.css";

function Food(){
    return(
        <>
        <div className="flex-box">
            <div className="food-heading"><h1>Celebrating The Awesomeness Of Food</h1></div>
            <div className="food-img"></div>
            <div className="food-img1"></div>
            <div className="food-img2"></div>
            <div className="food-img3"></div>
            <div><h1 className="food-heading">Most Popular Recipes</h1></div>
            <div className="food-card">
               <div className="card-img">
               
                    <div className="food-desc">
                    <h2 >Gajar Ka Halwa</h2>
                    <p style = {{"margin-top" : "23px" , "font-weight" : "bold"}}>Rating : 4.1</p>
                    </div>
                   
                </div>
            </div>
            <div className="food-card">
                <div className="card-img1">
                <div className="food-desc">
                    <h2 >Choclate shake Recipe</h2>
                    <p style={{"margin-top" : "23px" , "font-weight" : "bold"}}>Rating : 4.34</p>
                    </div>
                </div>
            </div>
            <div className="food-card">
                <div className="card-img2">
                <div className="food-desc">
                    <h2>Belgium waffle Recipe</h2>
                    <p style={{"margin-top" : "23px" , "font-weight" : "bold"}}>Rating : 4.2</p>
                    </div>
                </div>
            </div>
            <div className="food-card">
                <div className="card-img3">
                <div className="food-desc">
                    <h2 >Butter Paneer Recipe</h2>
                    <p style={{"margin-top" : "23px" , "font-weight" : "bold"}}>Rating : 4.1</p>
                    </div>
                </div>
            </div>
            <div className="food-card">
                <div className="card-img4">
                <div className="food-desc">
                    <h2 >Fried Rice Recipe</h2>
                    <p style={{"margin-top" : "23px" , "font-weight" : "bold"}}>Rating : 4.4</p>
                    </div>
                </div>
            </div>

            <div className="food-heading">
                <h1>Super Easy Recipes</h1>
            </div>
            <div className="bottom-card">
                <div className="samosa-img"></div>
                <h2 className="bottom-heading">Indian Samosa Recipe</h2>
                <p className="bottom-desc">A samosa is a fried or baked pastry with a savory filling, including ingredients such as spiced potatoes, onions, peas, chicken and/or other meats.</p>
            </div>
            <div className="bottom-card">
                <div className="dinner-img"></div>
                <h2 className="bottom-heading">Indian Cuisine Recipe</h2>
                <p className="bottom-desc">Spicy, rich, flavourful and diverse are terms that are frequently used to describe Indian food. All these words are apt in describing Indian cuisine, for it is diverse in variety and taste</p>
            </div>
            <div className="bottom-card">
                <div className="momos-img"></div>
                <h2 className="bottom-heading"> Momos Recipe</h2>
                <p className="bottom-desc">Momo is a type of steamed dumpling with some form of filling. Momo has become a traditional delicacy in Nepal, Tibet, as well as among Nepalese and Tibetan communities in Bhutan</p>
            </div>
            <div className="bottom-card">
                <div className="pasta-img"></div>
                <h2 className="bottom-heading">Mac and Cheese Pasta Recipe</h2>
                <p className="bottom-desc">This creamy and delicious Italian pasta recipe is a crossover with the classic comfort food from America, Mac and cheese. </p>
            </div>
        </div>
        
        </>
    );
}
export default Food;