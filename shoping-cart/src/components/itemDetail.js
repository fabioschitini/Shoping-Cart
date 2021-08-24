

const Item = (props) => {
    //console.log(match.params.id)
    const { items } = props
    const { match } = props
    const {submit}=props
    const { increment } = props
   const {decrement}=props 
    
    
    let item = items.filter(item => item.id === match.params.id)[0]
    
return <div id={item.id}>
        <figure>
    <img src={item.img} alt='missing' />
        <figcaption>{item.caption }</figcaption>
        </figure>
        <div>
        <label htmlFor ={item.id}>Amount</label>
            <input ></input>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
            <button onClick={submit}>Submit</button>
        </div>  

}
export default Item