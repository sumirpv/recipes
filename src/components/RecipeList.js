import React from 'react';
const RecipeList =(props) =>(
<div style ={props.style}>
   <h2>
       Recipes
   </h2>
   <ul>
       <li>
           <span>Chango Bar</span>
           <span>Desert</span>
       </li>
       <li>
           <span>Pecan Praline Blondies</span>
           <span>Desert</span>
       </li>
       <li>
           <span>Roast Turkey </span>
           <span>Turkey</span>
       </li>
       <li>
           <span>Mexican Chopped Salad </span>
           <span>Salad</span>
       </li>
       <li>
           <span>Greek Potatoes</span>
           <span>Sides</span>
       </li>
       <li>
           <span>Chicken Pot Pie Soup</span>
           <span>Soup</span>
       </li>
       <li>
           <span>Pot Roast</span>
           <span>Meat</span>
       </li>
   </ul>
</div>
);
export default RecipeList;