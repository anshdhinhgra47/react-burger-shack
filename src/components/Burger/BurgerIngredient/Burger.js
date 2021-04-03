import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient';

const Burger = (props) => {
    const new_ingredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />; 
        }); // Array of 2 elements
    });

    return (
        <div className="burger">
            <BurgerIngredient type="bread-top" />
            {new_ingredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default Burger;