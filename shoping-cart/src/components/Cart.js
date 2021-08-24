import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom'
import { useState, useEfect, useEffect } from 'react'

const Cart = (props) => {
    const [total, setTotal] = useState(0)
    useEffect(() => {
       let totalArray= items.map(item => {
            return item.value
       })
       
        setTotal(totalArray.reduce((a,b)=>a+b,0))
    })

    const [ex,setEx]=useState(0)
    const { items } = props
    const {remove}=props
    
    if (total===0) {

        return null
    }
    else 
        return <div>
            {items.map(item => {
                return (
                    <div className='products' key={item.id} id={item.id}>
                        <figure>
                            <img src={item.img} alt='missing' />
                            <figcaption>{item.caption}</figcaption>
                        </figure>
                        <div>
                            <Link key={item.id} to={`/shop/${item.id}`
                            }>
                                <p >Amount:{item.amount}</p></Link>
                            <p>${item.value}</p>
                     
                        </div>
                        <button onClick={remove} >Delete</button>
                    </div>
              
    
                )
            })}

                <h1>Total ${total}</h1>

             </div>
                
}
export default Cart 