import React from "react";

const botaoCadastrarClientes = <button>Cadastrar Clientes</button>
const botaoListarClientes = <button id="btnListarClientesId" onClick={listarClientes}>Listar clientes</button>
const CONFI_PERMITIR_LISTAR_CLIENTES = true;

const listClientes = [
    {
        id: 1,
        name: 'Lucas da Costa'
    },
    {
        id: 2,
        name: 'Naira Aparecida da Silva Brag'
    },

    {
        id: 3,
        name: 'Moana da Silva Costa'
    },

]

const App = () => {

    //Função para renderizar o objeto cliente
    const renderClientes = (customer, index) =>{
        return(
            <li key={index}>{customer.name}</li>
        )
    }


    //Função para listar clientes
    const listarClientes = () => (
        <header>
        <h1>Bem vindo ao Sistema de Clientes</h1>
        <div>
            <h2>Lista de Clientes</h2>
            <p>Para listar os clientes, clique no botão abaixo:</p>
            {alert("Hellow Baby")}
            {botaoListarClientes}
           
        </div>
    </header>
    )

    //Função para Cadastrar Clientes
    const cadastrarClientes = () => (
        <div>
        <h2>Ainda não existem clientes cadastrados. Clique no botão abaixo para cadastrar.</h2>
        {botaoCadastrarClientes}
    </div>
    )

    //Return padrão React
    return (
        <div className="App">
            {CONFI_PERMITIR_LISTAR_CLIENTES ? listarClientes() : cadastrarClientes()}
        </div>
        
    );
};

export default App;