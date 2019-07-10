import React, { useState, useEffect } from 'react';
import style from './CrudView.module.css'
import { connect } from 'react-redux'
import Modal from '../Modal/Modal'

const CrudView = (props) => {

    const [modal, setModal] = useState(false);
    const [actionType, setActionType] = useState("add");
    const [data, setData] = useState(props.dataStruct);

    return (
        <div className={style.CrudView}>
            <table>
                <tr>
                    {Object.keys(props.dataStruct).map((key) =>
                        <th>{key}</th>
                    )}
                </tr>
                {props.data.map((item) =>
                    <tr>
                        {Object.values(item).map((value) =>
                            <td>{value}</td>
                        )}
                        <button onClick={() => {
                            setModal(true);
                            setActionType("update");
                            setData(item);
                        }}>Update</button>
                        <button onClick={() => {
                            setModal(true);
                            setActionType("remove");
                            setData(item);
                        }}>Delete</button>
                    </tr>
                )}
            </table>
            <button onClick={() => {
                setModal(true);
                setActionType("add");
                setData(props.dataStruct);
            }}>Add</button>
            {modal ?
                <Modal
                    setModal={setModal}
                    data={data}
                    actionType={actionType}
                    dataStruct={props.dataStruct}>
                </Modal> : null
            }
        </div>
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
)(CrudView);