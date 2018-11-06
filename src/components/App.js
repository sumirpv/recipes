import React from 'react';
import Header from './header';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Favorites from './Favorites';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            favorites: [],
        };
    }

    componentDidMount() {
        // fetch(`${API_URL}'/v1/recipes`)
        fetch('http://reactrecipes.herokuapp.com/v1/recipes')
            .then(res => res.json())
            .then((recipes) => {
                this.setState({ recipes })
            })
    }


    toggleFavorite = id => {
        this.setState(({ favorites, ...state }) => {
            if (favorites.includes(id)) {
                return { ...state, favorites: favorites.filter(f => f !== id) }
            }

            return { ...state, favorites: [...favorites, id] };
        });
    }


    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Redirect from="/home" to="/" />
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <Home state={this.state} toggleFavorite={this.toggleFavorite} />
                            )}
                        />
                        <Route
                            path="/Favorites"
                            render={() => (
                                <Favorites state={this.state} toggleFavorite={this.toggleFavorite} />
                            )}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}



export default App;