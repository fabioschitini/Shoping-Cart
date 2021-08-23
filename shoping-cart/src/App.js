import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import { useState, useEfect } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Cart from './components/Cart'
import Shop from './components/Shop'
function App() {
     const [count, setCount] = useState(0)
    const [items,setItems]=useState([])
  const submit = (e) => {
         
            console.log(e.target.parentNode.children[0].children[1])

    setItems(items.concat({
      id:e.target.parentNode.id,
        img:e.target.parentNode.children[0].children[0].src,
      amount: e.target.parentNode.children[1].children[1].value,
      caption:e.target.parentNode.children[0].children[1].innerText,

    }))
        console.log(items)
        setCount(count+1)
    }
  return (
    <div className="App">
    <i className='fa fa-shopping-cart'></i>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/shop'><Shop submit={submit} /></Route>
          <Route path='/cart'><Cart items={items}/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
