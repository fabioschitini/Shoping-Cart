import { useState, useEfect } from 'react'

const Shop = (props) => {
 const {submit}=props
    const { increment } = props
   const {decrement}=props 
    
    return <div>
        <div id='CellPhone'>
        <figure>
    <img src='https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' alt='missing' />
                <figcaption>The new M20</figcaption>
                 <p>$100</p>
        </figure>
        <div>
        <label htmlFor ='CellPhone'>Amount</label>
            <input id='cellPhone'></input>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
            <button onClick={submit}>Submit</button>
        </div>
        <div id='Bike'>
        <figure>
    <img src='https://a-static.mlcdn.com.br/618x463/bicicleta-sport-gold-aro-29-mountain-bike-freio-a-disco-quadro-em-aco-carbono-21-marchas-kls/rideshop/25/4ec7b47c76f21c0744a3549e684223f9.jpg' alt='missing' />
                <figcaption>The Bike</figcaption>
                <p>$200</p>
        </figure>
        <div>
        <label htmlFor ='bike'>Amount</label>
            <input id='bike'></input>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
            <button onClick={submit}>Submit</button>
        </div>
        
    </div>
}
export default Shop