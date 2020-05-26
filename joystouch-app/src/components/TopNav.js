import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from './Home'
import Shop from './Shop'
import About from './About'
import Contact from './Contact'
import Bridal from './Bridal'
import Cart from './Cart'

const TopNav = () => {
    return (
        <Router>
             <div>
                <Link to="/cart">
                    <button>View Cart</button>
                </Link>
            </div>

            <nav>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/shop">shop</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                    <li><Link to="/bridal">joystouch bridal</Link></li>
                </ul>
            </nav>

            <div>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route path="/shop" component={ Shop } />
                    <Route path="/about" component={ About } />
                    <Route path="/contact" component={ Contact } />
                    <Route path="/bridal" component={ Bridal } />
                    <Route path="/cart" component={ Cart } />
                </Switch>
            </div>
        </Router>
    );
};

export default TopNav;