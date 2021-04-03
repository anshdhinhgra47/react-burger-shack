import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient';

const Burger = (props) => {
    let new_ingredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />; 
        }); // Fetches the values of the ingredients and converts them in the array
            // to be applied between the top & bottom burger buns
    })
    .reduce((arr, el) => {
        return arr.concat(el);
    }, []); // Concatenating all the array elements in one single array

    if(new_ingredients.length == 0) {
        new_ingredients = <p>Please add some ingredients!</p>;
    }

    return (
        <div className="burger">
            <BurgerIngredient type="bread-top" />
            {new_ingredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default Burger;