import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom'

import axios from 'axios';

import Burguer from '../../assets/burguer.svg'

import Button from '../../components/Button'
import Container from '../../components/Background'
import ContainerItens from '../../components/ContainerItens'
import H1 from '../../components/Title'

import {
  Image,
  InputLabel,
  Input
} from "./style";

function App() {

  const [orders, setOrder] = useState([])
  const inputOrder = useRef()
  const inputName = useRef()
  const navigate = useNavigate()

  async function addNewOrder () {

    const { data: newOrder } = await axios.post("http://localhost:3001/order", { order: inputOrder.current.value, name: inputName.current.value })

    setOrder([...orders, newOrder])

    navigate("/pedidos")
  }

  return (
    <Container>
      <Image alt="logo-burguer" src={Burguer} />

      <ContainerItens>
        <H1>Faça seu pedido</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="1 Coca-Cola, 1 X-Salada" />

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Gabriel Alexsander" />

        <Button onClick={addNewOrder}>Novo Pedido</Button>
      </ContainerItens>
    </Container>
  );
}

export default App;
