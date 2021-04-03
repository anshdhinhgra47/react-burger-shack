import React, { Component } from 'react';
import Burger from '../../components/Burger/BurgerIngredient/Burger';
import Aux from '../../hoc/Aux';

class BurgerBuilder extends Component {
    render() {
        return(
            <Aux>
                <Burger />
                <div>All the Burger Ingredients</div>
            </Aux>
        );
    }
};

export default BurgerBuilder;