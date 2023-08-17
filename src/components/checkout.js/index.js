import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import Swal from "sweetalert2";
import "./index.css";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import { useCartContext } from "../../context/cartcontext";
import ItemCheckout from "../itemcheckout";

export const Checkout = () => {
  
  const navigate = useNavigate();

  const { cart, totalPrice, cleanCart } = useCartContext();
  
  const [datos, setDatos] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleInputChange = (e) => {
    setDatos((datos) => ({ ...datos, [e.target.name]: e.target.value }));
  };

  const enviarDatos = (e) => {
    
    e.preventDefault();
    

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => console.log(id));


    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Muchas gracias por tu compra',
      }).then((result) => {
        if(result.isConfirmed){
          cleanCart();
          navigate("/");
        }
      })
  };

  const order = {
    buyer: datos,
    Items: cart.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
    })),
    total: totalPrice(),
    date: serverTimestamp(),
  };

  return (
    <>
      <div className="containerForm">
        <div className="col-lg-6 col-md-12">
          {cart.map((product) => (
            <ItemCheckout key={product.id} product={product} />
          ))}
        </div>
        <div className="col-lg-6 col-md-12">
          <form
            onSubmit={enviarDatos}
            className="form-control mb-3 mt-2 w-100 col-lg-6"
          >
            <div className="d-flex justify-content-center">
              <h2>Datos de contacto</h2>
            </div>
            <input
              className="form-control mb-3 w-100"
              placeholder="Ingrese el Nombre Completo"
              type="text"
              name="name"
              onChange={handleInputChange}
            ></input>

            <input
              className="form-control mb-3 w-100"
              placeholder="Ingrese su Correo Electronico"
              type="email"
              name="email"
              onChange={handleInputChange}
            ></input>

            <input
              className="form-control mb-3 w-100"
              placeholder="Ingrese su Telefono"
              type="number"
              name="phone"
              onChange={handleInputChange}
            ></input>
            <input
              className="form-control mb-3"
              placeholder="Ingrese su domicilio"
              type="text"
              name="address"
              onChange={handleInputChange}
            ></input>
            <div className="d-flex justify-content-center">
              <button onClick={enviarDatos}>Comprar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;
