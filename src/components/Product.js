import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

const Product = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((result) => setProducts(result));
  }, []);

  const addToCart=(produ) => {
    // dispatch
    dispatch(add(produ));
  }

  const cards = products.map((prod) => (
    <div className="col-md-3" key={prod.id}>
      <Card style={{ width: '18rem' }}>
        <div className="text-center">
          <Card.Img
            variant="top"
            style={{ width: '100px', height: '130px' }}
            src={prod.image}
          />
        </div>
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Text>${prod.price}</Card.Text>
          <Button variant="primary" onClick={()=> addToCart(prod)}>Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  ));

  return <div className="row">{cards}</div>;
};

export default Product;
