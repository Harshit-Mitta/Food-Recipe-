import {useEffect, useState} from 'react'
import styles from './search.module.css'
const URL='enter the url from spoonacular api complex search';
const API_KEY='Enter your api here from postman';
export default function Search({foodData,setFood}){
    const [query,setQuery] = useState("pizza");
    useEffect(()=>{
        async function fetchFood(){
            const res= await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data= await res.json();
            console.log(data.results);
            setFood(data.results);
        }
        fetchFood();
    },[query]);
    return (<div className={styles.search}> 
        <input className={styles.input}
        value={query} 
        onChange={(e)=>setQuery(e.target.value)}
        type="text" />
    </div>)
}
