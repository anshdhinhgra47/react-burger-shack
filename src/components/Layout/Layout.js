import React from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';
{/* Creating an auxillary (higher order) component from Aux */}

const Layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className="content">
            {props.children}
        </main>
    </Aux>
);

export default Layout;