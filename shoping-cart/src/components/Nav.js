import {BrowserRouter as Router,Switch,Route,Link,withRouter} from 'react-router-dom'


const Nav = () => {
    return (
        <nav>
            <ul>
             <Link to="/"> <li>Homepage</li></Link>
               <Link to="/shop"><li>Shop</li></Link>
               <Link to="/cart"><li>Cart-StateNumberOfItems</li></Link>
            </ul>
        </nav>
    )
}
export default withRouter(Nav)