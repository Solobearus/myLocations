import React, { useState, useEffect } from 'react';
import style from './Form.module.css'
import { connect } from 'react-redux'
// import { fetchPhotos } from '../Redux/actions'

const Form = (props) => {
    return (
        <div className={style.Form}>
            <select>
            <option value="" disabled selected>בחר חיה</option>
                <option value="cat">חתול</option>
                <option value="dog">כלב</option>
                <option value="fish">דג</option>
            </select>
            <select>
            <option value="" disabled selected>בחר קטגוריה</option>
                <option value="a">קטגוריה א</option>
                <option value="b">קטגוריה ב</option>
                <option value="c">קטגוריה ג</option>
            </select>
            <button>הזמן</button>
        </div >
    )
}

const mapStateToProps = state => ({
    // stateVar: state.moviesReducer.items
});

const mapDispatchToProps = (dispatch) => {
    return {
        // func: (payload) => dispatch(action(payload)),
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);