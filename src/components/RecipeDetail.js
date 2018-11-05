import React from 'react';

const RecipeDetail = (props) => {
    if(!props.recipe){
        return(
        <p  style={props.style}>
            Please select a recipe
        </p>
        )
    }
    return (
        <div style={props.style}>
            <h2>{props.recipe.name}</h2> ­      
            <img src={props.recipe.image} />
            <div>
                <span>{props.recipe.category}</span>
                <span>{props.recipe.calories}</span>
            </div>
            <h3>Ingredients</h3>
            <ul>
                {props.recipe.ingredients.map(ingredient => (
                    <li key={ingredient}>
                    {ingredient}
                    </li>
                ))}
            </ul>
            <h3>Steps</h3>
            <ol>
            {props.recipe.steps.map(step => 
            <li key={step}>
            {step}
            </li>
            )}
            </ol>
        </div>
    );
}
export default RecipeDetail;





// import React from 'react';
// const RecipeDetail =( props) =>(
// <div style={props.style}>
// <h2>The Best Roast Turkey</h2> ­
// <img src="https://s3.amazonaws.com/yummy_uploads2/blog/7162.jpg" />
// <div>
//     <span>Turkey</span>
//     <span>10 to 12 servings</span>
// </div>
// <h3>Ingredients</h3>
// <ul>
//     <li>14­16 pound turkey, fresh or thawed</li>
//     <li>1 teaspoon salt (omit if turkey has been brined)</li>
//     <li>1 teaspoon pepper</li>
//     <li>1 lemon, quartered</li>
//     <li>1 medium onion, peeled and quartered</li>
//     <li>1­2 sprigs fresh parsley</li>
//     <li>1­2 sprigs fresh thyme</li>
//     <li>1­2 sprigs fresh rosemary</li>
//     <li>1­2 sprigs fresh sage</li>
//     <li>2­3 tablespoons olive oil or melted butter
// </li>
// </ul>
// <h3>Directions</h3>
// <ol>
//     <li>Remove turkey from refrigerator and allow to rest at room temperature for 30 minutes.</li>
//     <li>Place oven rack in lowest position. Preheat oven to 400 degrees.</li>
//     <li>Coat roasting pan and rack with cooking spray and set aside.</li>
//     <h4>TO PREP THE TURKEY:</h4>
//     <li>Remove neck and giblets from turkey main and neck cavities. (These can be discarded or used to
// make broth for gravy or soup.)</li>
//     <li>If turkey has a metal or plastic clamp holding the legs together, remove and discard it.</li>
//     <li>Add salt and pepper to the turkey cavity and rub with hand to distribute inside cavity. Stuff the
// cavity with lemon, onion (reserving one onion quarter), and herbs.</li>
//     <li>Overlap skin at cavity opening to cover as much of gap as possible; use toothpicks or small turkey
// skewers, if needed, to hold skin in place. Tie legs together with twine.</li>
//     <li>Insert remaining onion quarter under skin covering neck cavity. Tuck wing tips under turkey body,
// using them to hold skin over neck cavity in place. </li>
// <li>Pat turkey dry with a paper towel and brush breast side all over with olive oil. Flip turkey over,
// breast side down, onto rack in roasting pan. Brush with olive oil so entire turkey is coated.</li>
// <h4>TO COOK THE TURKEY:</h4>
// <li>Place in 400 degree oven uncovered. After 1 hour, lower heat to 350 degrees and cook for an
// additional hour for turkeys 14 pounds or larger (45 minutes for smaller turkeys). </li>
// <li>Remove from oven and flip turkey over so it is breast side up. Insert a remote probe thermometer
// into thickest part of thigh. Return turkey to oven and set thermometer monitor alarm to sound at
// 165 degrees.</li>
// <li>(TIP: To avoid over­browning on top, keep an eye on the turkey in the last hour and loosely tent it.)</li>
//     </ol>
// </div>
// );
// export default RecipeDetail;

