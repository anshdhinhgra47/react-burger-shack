import React, { Component } from 'react';
import Burger from '../../components/Burger/BurgerIngredient/Burger';
import Aux from '../../hoc/Aux';
import BuildControls from '../../components/Burger/BurgerIngredient/Build Controls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.7,
    meat: 1.5,
    bacon: 0.4
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients // distributes the properties of the old ingredient state into the new one
        };

        updateIngredients[type] = newCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({totalPrice: newPrice, ingredients: updateIngredients});
    }

    removeIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) {
            return;
        }
        const newCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients // distributes the properties of the old ingredient state into the new one
        };

        updateIngredients[type] = newCount;
        const priceDeletion = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeletion;

        this.setState({totalPrice: newPrice, ingredients: updateIngredients});

    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                ingredientAdded={this.addIngredient} 
                ingredientRemoved={this.removeIngredient}
                disabled={disabledInfo} />
            </Aux>
        );
    }
};

export default BurgerBuilder;