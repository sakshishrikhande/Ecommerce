import { useContext } from "react";
import { CartContext } from "../context/cart-context";
import "./item.css"

const Item = ({item})=> {
    const {cartData,addCartData}= useContext(CartContext);
    return (
        <>
        <section className="card">
            <img className="card-image" src={item.image} alt="game"/>
            <article className="card-title">{item.titel}</article>
            <article className="card-description">{item.description}</article>
            <section className="card-footer">
                <article className="price">$ {item.price}</article>
                <button className="cart-button" onClick={()=>{addCartData(item)}}>Add to Cart</button>
            </section>
        </section>
        </>
    )
}
export default Item;