import React, { useState, useEffect } from 'react';
import style from './{{pascalCase name}}.module.css'
import { connect } from 'react-redux'
import { fetchPhotos } from '../Redux/actions'

const {{ pascalCase name }} = (props) => {
    return (
        <div className={style.{{ pascalCase name }} }>
            
        </div >
    )
}

const mapStateToProps = state => ({
    // stateVar: state.moviesReducer.items
});

const mapDispatchToProps = (dispatch) => {
    return {
        func: (payload) => dispatch(action(payload)),
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)({{ pascalCase name }});