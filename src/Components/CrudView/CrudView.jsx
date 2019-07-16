import React, { useState } from 'react';
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
                <thead>
                    <tr>
                        {Object.keys(props.dataStruct).map((key) =>
                            <th key={key}>{key}</th>
                        )}
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((item) =>
                        <tr key={item.id}>
                            {Object.entries(item).map((value) =>
                                <td key={value[0]}>
                                    {
                                        value[0] === "Address"?
                                        value[1].description :
                                        value[1]
                                    }
                                </td>
                            )}
                            <td>
                                <button onClick={() => {
                                    setModal(true);
                                    setActionType("update");
                                    setData(item);
                                }}>Update</button>
                            </td>
                            <td>
                                <button onClick={() => {
                                    setModal(true);
                                    setActionType("remove");
                                    setData(item);
                                }}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button className={style.Add} onClick={() => {
                setModal(true);
                setActionType("add");
                setData(props.dataStruct);
            }}>Add</button>
            {modal ?
                <Modal
                    setModal={setModal}
                    data={data}
                    actionType={actionType}
                    dataStruct={props.dataStruct}
                    dataLastID={props.dataLastID}>
                </Modal> : null
            }
        </div>
    )
}

const mapStateToProps = state => ({
    // stateVar: state.moviesReducer.items
});


export default connect(
    mapStateToProps,
)(CrudView);