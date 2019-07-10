import React, { useState, useEffect } from 'react';
import style from './Modal.module.css'
import { connect } from 'react-redux'
import { add, update, remove } from '../../Redux/actions'

const Modal = (props) => {

    let inputs = [];

    const handleClick = () => {
        let payload = []
        switch (props.actionType) {
            case "add":
                payload = {
                    dataStruct: props.dataStruct,
                    inputs: inputs.map((input, index) => {
                        return { key: input.key, value: input.ref.value }
                    })
                }
                console.log("test");
                
                props.add(payload);
                break;
            case "update":
                payload = {
                    dataStruct: props.dataStruct,
                    inputs: inputs.map((input, index) => {
                        return { key: input.key, value: input.ref.value }
                    })
                }
                props.update(payload);
                break;
            case "remove":
                // payload = {dataStruct: props.dataStruct, id: }ד
                props.remove(payload);
                break;

            default:
                break;
        }
    }

    return (
        <div className={style.Modal}>
            <div class={style.layout}></div>
            <div>
                {Object.entries(props.data).map((entry, index) =>
                    <div className="">
                        {entry[0]}
                        {
                            (props.actionType === "add") ?
                                <input
                                    type="text"
                                    ref={(ref) => inputs[index] = { ref: ref, key: entry[0] }}
                                ></input> :
                                <input
                                    type="text"
                                    value={entry[1]}
                                    ref={(ref) => inputs[index] = { ref: ref, key: entry[0] }}
                                    disabled={entry[0] === "id" ? true : false}
                                ></input>
                        }
                    </div>
                )}
                {
                    (props.actionType === "delete") ? <h3>Are you sure you want to delete {props.data.name}?</h3> : null
                }
                <button onClick={() => { handleClick() }}>{props.actionType}</button>
                <button>cancel</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    // stateVar: state.moviesReducer.items
});

const mapDispatchToProps = (dispatch) => {
    return {
        add: (payload) => dispatch(add(payload)),
        update: (payload) => dispatch(update(payload)),
        remove: (payload) => dispatch(remove(payload)),
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);