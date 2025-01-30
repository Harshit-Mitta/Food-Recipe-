import { useEffect, useState } from "react";
import styles from './fooddetails.module.css';
import ItemList from './ItemList'
export default function FoodDetails({foodId}){
   const[food,setFood]=useState({});
   const[isLoading,setLoading]=useState(true);
   const URL= `enter the api of information from spoonacular api`;
   const API_KEY='enter the same api used in search.jsx';
   useEffect(()=>{
        async function fetchFood() {
            const res =  await fetch(`${URL}?apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data);
            setFood(data);
            setLoading(false);
        }
        fetchFood();
    },[foodId])

    return (<div>
                <div className={styles.recipeCard}>
                    <h1 className={styles.recipeName}>{food.title}</h1>
                    <img className={styles.recipeImage}src={food.image} alt="" />
                    <div className={styles.recipeDeatils}>
                      <span><strong>⏱{food.readyInMinutes} Minutes</strong></span>
                      <span><strong>👨‍👩‍👧‍👦 Serves {food.servings} </strong></span>
                      <span><strong>Vegetarian OR Non-Vegetarian:{food.vegetarian ? "🥕Vegetarian":" 🥩Non-Vegetarian"}</strong> </span>
                      <span>{food.vegan? "Vegan":""}</span>
                    </div>
                    <div>
                        <span>💲{food.pricePerServing/100} Per serve</span>
                    </div> 
                    <h2>Ingredients</h2>
                    <ItemList food={food} isLoading={isLoading}/>
                    <h2>Instructions</h2>
                    <div className={styles.recipeInstructions}>
                    <ol>
                    {isLoading?<p>Loading....</p>:food.analyzedInstructions[0].steps.map((step)=><li>
                    {step.step}
                    </li>)}
                    </ol>
                    </div>  
                </div>     
          </div>)
}
