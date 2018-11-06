import React from 'react';
import PropTypes from 'prop-types';
import RecipeListItem from './RecipeListItem';

const RecipeList = ({
    style, 
    favorites, 
    recipes,
     ...props,
    } ) => (
        <ul className="list-reset">
            {recipes.map(recipe => (
                <RecipeListItem
                recipe= {recipe}
                favorite= { favorites.includes(recipe.id)}
                {...props}
                />
            ))}
        </ul>
);

RecipeList.propTyped = {
    recipe: PropTypes.array,
    favorites:PropTypes.array,
    style: PropTypes.object
}

export default RecipeList;