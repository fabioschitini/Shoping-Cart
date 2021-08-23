import { useState, useEfect } from 'react'

const Shop = (props) => {
 const {submit}=props
    function increment(e) {
        if (parseFloat(e.target.parentNode.children[1].value)) {
                    e.target.parentNode.children[1].value=parseFloat(e.target.parentNode.children[1].value)+1

        }
       
        else e.target.parentNode.children[1].value=e.target.parentNode.children[1].value+1
    }
    function decrement(e) {
         if (parseFloat(e.target.parentNode.children[1].value)) {
                    e.target.parentNode.children[1].value=parseFloat(e.target.parentNode.children[1].value)-1

         }
         else if (parseFloat(e.target.parentNode.children[1].value) === 1) {
             console.log('decreasing')
              e.target.parentNode.children[1].value=''
        }
        else e.target.parentNode.children[1].value=e.target.parentNode.children[1].value-1
    }
    
    return <div>
        <div id='CellPhone'>
        <figure>
    <img src='https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' alt='missing' />
    <figcaption>The new M20</figcaption>
        </figure>
        <div>
        <label htmlFor ='CellPhone'>Amount</label>
            <input id='cellPhone'></input>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
            <button onClick={submit}>Submit</button>
            </div>
    </div>
}
export default Shop