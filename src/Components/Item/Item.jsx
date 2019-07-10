import React, { useState, useEffect } from 'react';
import style from './Item.module.css'
import { connect } from 'react-redux'
import { fetchPhotos } from '../Redux/actions'

const Item = (props) => {
    return (
        <div className={style.Item }>
            
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
)(Item);