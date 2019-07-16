import React , {useEffect} from 'react'
import style from './App.module.css'
import Main from '../Main/Main.jsx'
import CrudView from '../CrudView/CrudView.jsx'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux'
import {init} from '../../Store/actions'

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
                dataStruct={props.category}
                data={props.categories}
                dataLastID={props.categoryLastID}>
                    
            </CrudView>
        },
        {
            path: "/locations",
            component: () => <CrudView
                dataStruct={props.location}
                data={props.locations}
                dataLastID={props.locationLastID}>
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
                            <Link to="/categories">categories</Link>
                        </li>
                        <li>
                            <Link to="/locations">locations</Link>
                        </li>
                    </ul>
                </header>
                {/* {   console.log(props.categories)
                    } */}
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
    categories: state.mainReducer.categories,
    locations: state.mainReducer.locations,
    category: state.mainReducer.category,
    location: state.mainReducer.location,
    categoryLastID: state.mainReducer.categoryLastID,
    locationLastID: state.mainReducer.locationLastID,
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
