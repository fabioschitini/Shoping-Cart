

const Item = (props) => {
    //console.log(match.params.id)
    const { items } = props
    const { match } = props
    const {submit}=props
    const { increment } = props
   const {decrement}=props 
    
    
    let item = items.filter(item => item.id === match.params.id)[0]
    if (!item) {
        return null
    }
    
    return <div className='products'id={item.id}>
        <figure>
    <img src={item.img} alt='missing' />
        <figcaption>{item.caption }</figcaption>
        </figure>
        <div>
        <label htmlFor ={item.id}>Amount<br></br></label>
            <input defaultValue={1} ></input>
             <i className="fas fa-arrow-up" onClick={increment}></i>
             <i className="fas fa-arrow-down" onClick={decrement}></i>
        </div>
            <button onClick={submit}>Submit</button>
        </div>  

}
export default Item