import React from 'react';
import classNames from 'classnames'
import './Button.css';


function button (props) {
    const btnClass = classNames('Button', props.btnType);
    return <button className={btnClass}
        onClick={props.clicked}>{props.children}</button>
};

export default button;