import React, { Component } from 'react';
import Burger from '../../components/Burger/BurgerIngredient/Burger';
import Aux from '../../hoc/Aux';

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
                <div>All the Burger Ingredients</div>
            </Aux>
        );
    }
};

export default BurgerBuilder;