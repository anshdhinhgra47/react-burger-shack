import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' }
];

const BuildControls = (props) => (
    <div className="buildControls">
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label} />
        ))}
    </div>
);

export default BuildControls;