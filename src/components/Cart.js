import React from "react";
import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
    const productCart = useSelector(state => state.kcart)
    
    const dispatch = useDispatch();
    const removeItem = (pid) => {
        dispatch(remove(pid))
    }

    const cartCards = productCart.map(produc => (
        <div className="col-md-3" key={produc.id}>
        <Card style={{ width: '18rem' }}>
            <div className="text-center">
            <Card.Img
                variant="top"
                style={{ width: '100px', height: '130px' }}
                src={produc.image}
            />
            </div>
            <Card.Body>
            <Card.Title>{produc.title}</Card.Title>
            <Card.Text>${produc.price}</Card.Text>
            <Button variant="danger" onClick={() => removeItem(produc.id)}>Remove Cart</Button>
            </Card.Body>
        </Card>
        </div>
    ))
    
    return (
       <div className="row">
            {cartCards}
       </div>
    )
    
}
export default Cart;