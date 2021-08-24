import {BrowserRouter as Router,Switch,Route,Link,withRouter} from 'react-router-dom'


const Nav = (props) => {
    const {count}=props
    return (
        <nav>
            <ul>
             <Link to="/"> <li>Homepage</li></Link>
               <Link to="/shop"><li>Shop</li></Link>
                <Link to="/cart"><li id='count'>    <i className='fa fa-shopping-cart'></i>
 {count }</li></Link>
            </ul>
        </nav>
    )
}
export default withRouter(Nav)