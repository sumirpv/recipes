import React from 'react';
import RecipeList from './recipeList';
import RecipeDetail from './RecipeDetail';
import PropTypes from 'prop-types';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentRecipe: null,
        };
    }


    onRecipeClick(id) {
        fetch(`http://reactrecipes.herokuapp.com/v1/recipes/${id}`)
            .then(res => res.json())
            .then((recipe) => {
                this.setState({ currentRecipe: recipe })
            });
    };


    render() {
        const { recipes, favorites } = this.props.state
        const { currentRecipe } = this.state;
        return (

            <main className="px4 flex">
                <div style={{ flex: 3 }}>
                    <h2 className="h2">Recipes</h2>
                    <RecipeList
                        recipes={recipes}
                        favorites={favorites}
                        style={{ flex: 3 }}
                        onClick={this.onRecipeClick}
                        onFavorite={this.props.toggleFavorite}
                    />
                </div>

                <RecipeDetail
                    recipe={currentRecipe}
                    className="ml4 "
                    style={{ flex: 3 }} />
            </main>

        );
    }
}

Home.propTypes = {
    state: PropTypes.object,
    toggleFavorite: PropTypes.func,
}

export default Home;
