import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

import axios from 'axios';

import Pacote from '../../assets/pacote.svg'
import Trash from '../../assets/lixeira.svg'

import Button from '../../components/Button'
import Container from '../../components/Background'
import ContainerItens from '../../components/ContainerItens'
import H1 from '../../components/Title'

import {
  Image,
  Order
} from "./style";

function Orders() {

  const [orders, setOrder] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    
    async function fetchOrders() {
      const { data: newOrder } = await axios.get("http://localhost:3001/order")

      setOrder(newOrder)
    }

    fetchOrders()

  }, [])

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/order/${orderId}`)

    const newOrder = orders.filter((order) => order.id !== orderId)

    setOrder(newOrder)

  }

  const goBackPage = () => {
    navigate("/")
  }

  return (
    <Container>
      <Image alt="logo-pacote" src={Pacote} />

      <ContainerItens isTop={true}>
        <H1 >Pedidos</H1>

        <ul>
          {orders.map((order) => (
            <Order key={order.id}>
              <p class="pedido">{order.order}</p> <p class="nome">{order.name}</p>
              <button onClick={() => deleteOrder(order.id)}> <img alt="lixeira" src={Trash}/> </button>
            </Order>
          ))}
        </ul>
      

        <Button isColor={true} onClick={goBackPage}>Voltar</Button>
      </ContainerItens>
    </Container>
  );
}

export default Orders;
