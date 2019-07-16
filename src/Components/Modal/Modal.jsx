import React, { useState, useEffect } from 'react';
import style from './Modal.module.css'
import { connect } from 'react-redux'
import { add, update, remove } from '../../Store/actions'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
const Modal = (props) => {

    let inputs = {};

    const [valid, setValid] = useState(true);

    const handleClick = () => {
        let payload = []
        let dataToHandle = {};
        let nonStateValid = true;

        if (props.actionType === "remove") {
            payload = { dataStruct: props.dataStruct, id: props.data.id };
            props.remove(payload);
        } else {
            payload = {
                dataStruct: props.dataStruct,
                dataToHandle: Object.entries(inputs).reduce((obj, currentEntry) => {
                    if (currentEntry[0] === "address" && currentEntry[1].value === undefined)
                        currentEntry[1].value = document.querySelector("#google-places-autocomplete-input").value;

                    if (!currentEntry[1].value || currentEntry[1].value === "none")
                        nonStateValid = false;

                    obj[currentEntry[0]] = currentEntry[1].value;
                    return obj;
                }, dataToHandle)
            }

            setValid(nonStateValid);

            if (nonStateValid) {
                if (props.actionType === "add")
                    props.add(payload);
                else
                    props.update(payload);
            }
        }
    }

    const fields = Object.entries(props.data).map((entry, index) => {
        let entryElement = < div className={style.modalItem} key={entry[0]} >
            <label>{entry[0]}</label>

            {
                entry[0] === "category" ?

                    <select
                        ref={(ref) => inputs[entry[0]] = ref}
                        disabled={
                            (props.actionType === "remove") ? true : false
                        }
                        defaultValue={
                            (props.actionType === "add") ?
                                (entry[0] === "id" ? props.dataLastID : "") : entry[1]
                        }>
                        {props.categories.length > 0 && props.categories !== undefined ?
                            (props.categories.map((category) => {
                                return <option value={category.id}
                                    key={category.id}>
                                    {category.name}
                                </option>
                            })) : <option value="none">No categories Found</option>}
                    </select>
                    :
                    entry[0] === "address" && props.actionType !== "remove" ?
                        < GooglePlacesAutocomplete
                            className={style.GooglePlacesAutocomplete}
                            ref={(ref) => { inputs[entry[0]] = ref }}
                            initialValue={entry[1]}
                            onSelect={onSelectAdress => {
                                inputs[entry[0]].value = onSelectAdress.description;
                            }}
                        >
                        </GooglePlacesAutocomplete>
                        :
                        <input
                            type="text"
                            required
                            ref={(ref) => inputs[entry[0]] = ref}
                            disabled={
                                (entry[0] === "id" ||
                                    props.actionType === "remove") ? true : false
                            }
                            defaultValue={
                                (props.actionType === "add") ?
                                    (entry[0] === "id" ? props.dataLastID : "") : entry[1]
                            }
                        ></input>

            }
        </div >

        return entryElement;
    })


    return (
        <div className={style.Modal}>
            <div className={style.layout} onClick={() => { props.setModal(false) }}></div>
            <div className={style.modal}>
                {fields}
                {
                    (props.actionType === "remove") ?
                        <h3>Are you sure you want to delete {props.data.name}?</h3>
                        : null
                }
                {
                    (valid === false) ?
                        <h3>All fields are mendatory</h3>
                        : <div></div>
                }
                <div className="">
                    <button onClick={() => { handleClick() }}>{props.actionType}</button>
                    <button onClick={() => { props.setModal(false) }}>cancel</button>
                </div>

            </div>
        </div>
    )
}


const mapStateToProps = state => ({
    categories: state.mainReducer.categories,
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