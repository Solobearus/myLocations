import React, { useState, useEffect } from 'react';
import style from './Main.module.css'
import { connect } from 'react-redux'
import { fetchPhotos } from '../../Redux/actions'

const Main = (props) => {
    return (
        <div className={style.Main}>
            
            <h3>Categories</h3>
            <select>
                {props.Categories ? (props.Categories.map((category) => {
                    return <option value={category.name}>{category.name}</option>
                })) : <option value="none">No Categories Found</option>}
            </select>
            <h3>Locations</h3>
            <select>
                {props.Locations ? (props.Locations.map((location) => {
                    return <option value={location.name}>{location.name}</option>
                })) : <option value="none">No Locations Found</option>}
            </select>
        </div >
    )
}

const mapStateToProps = state => ({
    // stateVar: state.mainReducer.items
});

const mapDispatchToProps = (dispatch) => {
    return {
        // func: (payload) => dispatch(action(payload)),
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);