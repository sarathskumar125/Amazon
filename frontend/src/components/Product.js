import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Rating from "./Rating";
import { Store } from "../Store";
import Axios from "axios";

const Product = (props) => {
  const { product } = props;

  const { state, Dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const addToCartHandler = async () => {
    const itemExist = await cart.cartItems.find((x) => x._id === product._id);
    const quantity = itemExist ? itemExist.quantity + 1 : 1;
    const data = await Axios.get(
      `/api/products/${product._id}`
    );
    if (data.data.countInStock < quantity) {
      window.alert(
        quantity - 1 + " " + data.data.name + " only left in stock now"
      );
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity },
    });
  };

  var qty= null;
  const item = cart.cartItems.find((x) => x._id === product._id);
  if(item){
    qty = item.quantity
  }

 
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <Card.Img variant="top" src={product.image} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text><strong>$</strong> {product.price}</Card.Text>
        { 
          product.countInStock===qty?  <Button disabled variant="light">
          Out of Stock
        </Button> : <Button variant="primary" onClick={addToCartHandler}>
          Add to cart
        </Button>
        }
       
      </Card.Body>
    </Card>
  );
};

export default Product;
