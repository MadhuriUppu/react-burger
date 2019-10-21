import React from 'react';
import Aux from '../../hoc/Aux';
// import classes from './Layout.css';
import '../../App.css'
const layout = (props) => (
    <Aux>
        <div>Toolbar,SideDraswer,Backdrop</div>
        <main className="Content">
            {props.children}
        </main>
    </Aux>
);

export default layout;