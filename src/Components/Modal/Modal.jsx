import React, { useState, useEffect } from 'react';
import style from './Modal.module.css'
import { connect } from 'react-redux'
import { add, update, remove } from '../../Redux/actions'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
const Modal = (props) => {

    let inputs = [];

    const [valid, setValid] = useState(true);

    const handleClick = () => {
        let payload = []
        let dataToHandle = {};
        let nonStateValid = true;

        switch (props.actionType) {
            case "add":
                payload = {
                    dataStruct: props.dataStruct,
                    dataToHandle: inputs.reduce((obj, currentEntry) => {
                        if (!currentEntry.ref.value || currentEntry.ref.value === "none")
                            nonStateValid = false;
                        obj[currentEntry.key] = currentEntry.ref.value;
                        return obj;
                    }, dataToHandle)
                }

                setValid(nonStateValid);
                if (nonStateValid)
                    props.add(payload);
                break;
            case "update":
                payload = {
                    dataStruct: props.dataStruct,
                    dataToHandle: inputs.reduce((obj, currentEntry) => {
                        if (!currentEntry.ref.value)
                            nonStateValid = false;
                        obj[currentEntry.key] = currentEntry.ref.value;
                        return obj;
                    }, dataToHandle)
                }
                setValid(nonStateValid);
                if (nonStateValid)
                    props.update(payload);
                break;
            case "remove":
                payload = { dataStruct: props.dataStruct, id: props.data.id };
                props.remove(payload);
                break;

            default:
                break;
        }
    }

    const fields = Object.entries(props.data).map((entry, index) => {
        return < div className={style.modalItem} key={entry[0]} >
            <label>{entry[0]}</label>

            {
                entry[0] === "Category" ?

                    <select
                        ref={(ref) => inputs[index] = { ref: ref, key: entry[0] }}
                        disabled={
                            (props.actionType === "remove") ? true : false
                        }
                        defaultValue={
                            (props.actionType === "add") ?
                                (entry[0] === "id" ? props.dataLastID : "") : entry[1]
                        }>
                        {props.Categories.length > 0 && props.Categories !== undefined ?
                            (props.Categories.map((category) => {
                                return <option value={category.name}
                                    key={category.id}>
                                    {category.name}
                                </option>
                            })) : <option value="none">No Categories Found</option>}
                    </select>
                    :
                    entry[0] === "Address" && props.actionType !== "remove" ?
                        < GooglePlacesAutocomplete
                            className={style.GooglePlacesAutocomplete}
                            ref={(ref) => {inputs[index] = { ref: ref, key: entry[0] };}}
                            initialValue={entry[1]}
                            placeholder={entry[1].description}
                            onSelect={onSelectAdress => {
                                inputs[index].ref.value = onSelectAdress.description;
                            }}
                        />
                        :
                        <input
                            type="text"
                            required
                            ref={(ref) => inputs[index] = { ref: ref, key: entry[0] }}
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
    Categories: state.mainReducer.Categories,
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