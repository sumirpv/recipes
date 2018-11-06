import React from 'react';
import PropTypes from 'prop-types';

const RecipeListItem = ({
    recipe,
    favorite,
    onClick,
    onFavorite,
}) => (

        <li key={recipe.id}
            className="py2 border-bottom border-bottom-dashed pointer"
            onClick={() => onClick(recipe.id)}
        >
            <span
                className="mr1"
                onClick={e => {
                    e.stopPropagation();
                    onFavorite(recipe.id);
                }}
                role="img"
                aria-label="favorite"
            >
                {favorite ? '✅' : '◻️'}
            </span>
            <span>{recipe.name}</span>
            <span>{recipe.category}</span>
        </li>
    );

RecipeListItem.PropTypes = {
    recipe: PropTypes.object,
    favorite: PropTypes.bool,
    onClick: PropTypes.func,
    onFavorite: PropTypes.func
}

export default RecipeListItem;