import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import { useState, useEfect } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Cart from './components/Cart'
import Shop from './components/Shop'
import Item from './components/itemDetail' 
function App() {
     const [count, setCount] = useState('')
    const [items,setItems]=useState([])
  const submit = (e) => {
          let value= Number(e.target.parentNode.children[0].children[2].innerText.replace(/[^0-9.-]+/g,"")) 
    if (items.length === 0) {
      setItems(items.concat({
        id: e.target.parentNode.id,
        img: e.target.parentNode.children[0].children[0].src,
        amount: e.target.parentNode.children[1].children[1].value,
        caption: e.target.parentNode.children[0].children[1].innerText,
        value:value*e.target.parentNode.children[1].children[1].value
      }))
      countting()
    }
    
    
    else {
      
      console.log(items)
    
      if (!items.filter(item => item.id === e.target.parentNode.id)[0]) {
        console.log('if-----')
        setItems(items.concat({
          id: e.target.parentNode.id,
          img: e.target.parentNode.children[0].children[0].src,
          amount: e.target.parentNode.children[1].children[1].value,
          caption: e.target.parentNode.children[0].children[1].innerText,
        value:value*e.target.parentNode.children[1].children[1].value
        }))
      countting()
      }
      else {
         console.log('else----')
        let yep = items.map((item, index, array) => {
          if (e.target.parentNode.id === item.id) {

            item = {
              id: e.target.parentNode.id,
              img: e.target.parentNode.children[0].children[0].src,
              amount: e.target.parentNode.children[1].children[1].value,
              caption: e.target.parentNode.children[0].children[1].innerText,
        value:value*e.target.parentNode.children[1].children[1].value
            }
        
          }
          return item
        })
        setItems(yep)
      }
    }  
  }
  const remove=(e) => {
    setItems(items.filter(item => item.id !== e.target.parentNode.id))
    if (count === 1) {
      setCount('')
    }
     else setCount(count - 1)
  }
  const countting = () => {
    if (count === '') {
      setCount(1)
    }
    else{ setCount(count+1)}
  }
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
  return (
    <div className="App">
    <i className='fa fa-shopping-cart'></i>
      <Router>
        <Nav count={count }/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop'><Shop submit={submit} increment={increment} decrement={decrement }/></Route>
          <Route path='/cart'><Cart remove={remove} items={items}  /></Route>
          <Route path='/shop/:id' render={(props) => <Item items={items } submit={submit} increment={increment} decrement={decrement } {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
