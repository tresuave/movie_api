import React from 'react';
import {Link} from 'react-router-dom'

function Nav(props) {

    
    return (
        <div>
               
            <nav >
             <Link to="/">  
            <h3>Home</h3>
            </Link> 
            <ul>
                <Link to="/bloodbone">
                <li>Blood and Bone</li>
                </Link>
                <Link to="/rambo">  
                <li>Rambo</li>
                </Link>
              
            </ul>
            </nav>
        </div>
    );
}

export default Nav;