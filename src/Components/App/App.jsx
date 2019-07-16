import React , {useEffect} from 'react'
import style from './App.module.css'
import Main from '../Main/Main.jsx'
import CrudView from '../CrudView/CrudView.jsx'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux'
import {init} from '../../Redux/actions'

const App = (props) => {

    useEffect(() => {
        props.init();
    }, [])

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
            component: () => <CrudView
                dataStruct={props.Category}
                data={props.Categories}
                dataLastID={props.CategoryLastID}>
            </CrudView>
        },
        {
            path: "/locations",
            component: () => <CrudView
                dataStruct={props.Location}
                data={props.Locations}
                dataLastID={props.LocationLastID}>
            </CrudView>
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
    Location: state.mainReducer.Location,
    CategoryLastID: state.mainReducer.CategoryLastID,
    LocationLastID: state.mainReducer.LocationLastID,
});

const mapDispatchToProps = (dispatch) => {
    return {
        init: (payload) => dispatch(init(payload)),
    }
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
