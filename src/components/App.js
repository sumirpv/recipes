import React from 'react';
import Header from './Header';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';


class App extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            recipes:[],
            currentRecipe:null,
        };
        this.onRecipeClick = this.onRecipeClick.bind(this);
    }
    componentDidMount(){
       // fetch(`${API_URL}'/v1/recipes`)
     fetch('http://reactrecipes.herokuapp.com/v1/recipes')
        .then(res => res.json())
        .then( recipes=> {
            this.setState({recipes})
        })
    }

    onRecipeClick(id){
        fetch(`http://reactrecipes.herokuapp.com/v1/recipes/${id}`)
        .then(res => res.json())
        .then( recipe=> {
            this.setState({currentRecipe:recipe})
        });
    }
render(){
    const {recipes, currentRecipe} = this.state;
        return(
        <div>
            <Header />
            <main style ={{display: 'flex'}}>
            <RecipeList 
            recipes ={recipes} 
            style ={{flex: 3}} 
            onClick={this.onRecipeClick}
            />
            <RecipeDetail
            recipe = {currentRecipe}
            style ={{flex: 3}}/>
            </main>
        </div>
        );
    }
}

export default App;
