import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../header/header";
import "./main.css" ;

import Item from "../item/item";
const Main = ()=> {
    const [oldSchool, setOldSchool] = useState([]);
    const [bestSeller, setBestSeller] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:1337/api/old-schools').then((oldSchool)=>{
            setOldSchool(oldSchool.data.data);
        }).catch(()=>{

        }).finally(()=>{

        });
        axios.get('http://localhost:1337/api/best-sellers').then((bestSeller)=>{
            setBestSeller(bestSeller.data.data);
        }).catch(()=>{

        }).finally(()=>{

        });

    },[])
    return (
        <>
            <Header/>
            <section>
                <article className="best-seller">Best Seller</article>
                {bestSeller.map((item,key)=>{
                    return <Item item={item.attributes}/>
                })}
                <article className="old-school">Old School</article>
                {oldSchool.map((item,key)=>{
                    return <Item item={item.attributes}/>
                })}


            </section>
        </>
    )
}
export default Main;