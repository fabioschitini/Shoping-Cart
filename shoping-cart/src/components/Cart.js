import { useState,  useEffect } from 'react'

const Cart = (props) => {
    const { items } = props
    const {remove}=props
    const [total, setTotal] = useState(0)
    useEffect(() => {
       let totalArray= items.map(item => {
            return item.value
       })
       
        setTotal(totalArray.reduce((a,b)=>a+b,0))
    },[])

    
    
    
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
                           
                                <p >Amount:{item.amount}</p>
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