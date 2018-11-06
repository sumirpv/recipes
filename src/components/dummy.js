import React from 'react';
import Header from './header';
import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Favorites from './Favorites';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            recipes:[],
            favorites:[],
        };
    }

    componentDidMount(){
        // fetch(`${API_URL}'/v1/recipes`)
      fetch('http://reactrecipes.herokuapp.com/v1/recipes')
         .then(res => res.json())
         .then( (recipes)=> {
             this.setState({recipes})
         })
     }


    toggleFavorite = id =>{
        this.setState(({favorites, ...state}) =>{
  
                if(favorites.includes(id)){
                return{ ...state, favorites: favorites.filter( f =>f !== id)} ;   
            }
            
            return{ ...state, favorites:[...favorites, id]};
        });
    };

    render(){
        return(
        <BrowserRouter>
        <div>
        <Header />
        <Switch>
        <Redirect from="/home" to="/"/> 
        <Route exact path ="/" 
        render ={() => (
            <Home 
            state={this.state} 
            toggleFavorite= {this.toggleFavorite}/>
        )} />
        <Route 
        path ="/Favorites" 
        render ={() =>(
        <Favorites state={this.state} toggleFavorite={this.toggleFavorite} /> 
        )} 
        />
        <Route component ={NotFound}/>
        </Switch>
        </div>
        </BrowserRouter>
        );
    }
}


export default App;

//before changing App.js
import React from 'react';
import Header from './header';
import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Favorites from './Favorites';

const App =() => (
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
    <Redirect from="/home" to="/"/> 
    <Route exact path ="/" component ={Home} />
    <Route path ="/Favorites" component = {Favorites} />
    <Route component ={NotFound}/>
    </Switch>
    </div>
    </BrowserRouter>
);

export default App;

// Home.js
import React from 'react';
import RecipeList from './recipeList';
import RecipeDetail from './RecipeDetail';
import PropType from 'prop-types';


class Home extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            currentRecipe:null,
        };
    }

    onRecipeClick(id){
        fetch(`http://reactrecipes.herokuapp.com/v1/recipes/${id}`)
        .then(res => res.json())
        .then( (recipe)=> {
            this.setState({currentRecipe:recipe})
        });
    };

    // toggleFavorite = id =>{
    //     this.setState(({favorites, ...state}) =>{
    //         const idx = favorites.indexOf(id);

    //         if(idx !== -1){
    //             return{ ...state, favorites: favorites.filter( f =>f.id !== id)}    
    //         }
            
    //         return{ ...state, favorites:[...favorites, id]};
    //     });
    // }



render(){
    const {currentRecipe} = this.state;
    const {recipes,favorites } = this.props.state;
        return(
        <div>
            <main className="px4 flex">
            <RecipeList 
            recipes ={recipes} 
            favorites={favorites}
            style ={{flex: 3}} 
            onClick={this.onRecipeClick}
            onFavorited={this.props.toggleFavorite}
            />
            <RecipeDetail
            recipe = {currentRecipe}
            className="ml4 "
            style ={{flex: 3}}/>
            </main>
        </div>
        );
    }
}
Home.PropType ={
    state: PropType.object,
toggleFavorite:PropTypes.func,
}

export default Home;

//before changes
import React from 'react';
import RecipeList from './recipeList';
import RecipeDetail from './RecipeDetail';


class Home extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            recipes:[],
            favorites:[],
            currentRecipe:null,
        };
    }
    componentDidMount(){
       // fetch(`${API_URL}'/v1/recipes`)
     fetch('http://reactrecipes.herokuapp.com/v1/recipes')
        .then(res => res.json())
        .then( (recipes)=> {
            this.setState({recipes})
        })
    }

    onRecipeClick(id){
        fetch(`http://reactrecipes.herokuapp.com/v1/recipes/${id}`)
        .then(res => res.json())
        .then( (recipe)=> {
            this.setState({currentRecipe:recipe})
        });
    };

    toggleFavorite = id =>{
        this.setState(({favorites, ...state}) =>{
            const idx = favorites.indexOf(id);

            if(idx !== -1){
                return{ ...state, favorites: favorites.filter( f =>f !== id)}    
            }
            
            return{ ...state, favorites:[...favorites, id]};
        });
    }



render(){
    const {recipes,favorites, currentRecipe} = this.state;
        return(
        <div>
            <main className="px4 flex">
            <RecipeList 
            recipes ={recipes} 
            favorites={favorites}
            style ={{flex: 3}} 
            onClick={this.onRecipeClick}
            onFavorite={this.toggleFavorite}
            />
            <RecipeDetail
            recipe = {currentRecipe}
            className="ml4 "
            style ={{flex: 3}}/>
            </main>
        </div>
        );
    }
}

export default Home;

