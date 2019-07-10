import React from 'react'
import style from './App.module.css'
import Main from '../Main/Main.jsx'
import CrudView from '../CrudView/CrudView.jsx'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

const App = (props) => {

    const routes = [
        {
            path: "/",
            exact: true,
            component: () => <Main></Main>
        },
        {
            path: "/main",
            component: () => <Main></Main>
        },
        {
            path: "/categories",
            component: () => <CrudView dataStruct={props.Category} data={props.Categories}></CrudView>
        },
        {
            path: "/locations",
            component: () => <CrudView dataStruct={props.Location} data={props.Locations}></CrudView>
        }
    ];

    return (
        <div className={style.App}>
            <Router>
                <header>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/categories">Categories</Link>
                        </li>
                        <li>
                            <Link to="/locations">Locations</Link>
                        </li>
                    </ul>
                </header>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))}
            </Router>
        </div>
    )
}
const mapStateToProps = state => ({
    Categories: state.mainReducer.Categories,
    Locations: state.mainReducer.Locations,
    Category: state.mainReducer.Category,   
    Location: state.mainReducer.Location
});

const mapDispatchToProps = (dispatch) => {
    return {
        // func: (payload) => dispatch(action(payload)),
    }
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
