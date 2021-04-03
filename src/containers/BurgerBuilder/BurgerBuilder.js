import React, { Component } from 'react';
import Burger from '../../components/Burger/BurgerIngredient/Burger';
import Aux from '../../hoc/Aux';
import BuildControls from '../../components/Burger/BurgerIngredient/Build Controls/BuildControls';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render() {
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls />
            </Aux>
        );
    }
};

export default BurgerBuilder;