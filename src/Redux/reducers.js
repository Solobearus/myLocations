
import {
    ADD,
    UPDATE,
    REMOVE,
    INIT,
} from './actions'

const initialState = {
    CategoryLastID: 0,
    Category: {
        id: 0,
        name: ""
    },
    Categories: [],
    LocationLastID: 0,
    Location: {
        id: 0,
        name: "",
        Address: "",
        Coordinates: "",
        Category: "",
    },
    Locations: [],
};

const myStorage = window.localStorage;

function mainReducer(state = initialState, action) {
    let newData;
    let index;
    let toLocalStorage;
    switch (action.type) {
        case INIT:
            const stateFromStorage = JSON.parse(myStorage.getItem("state"));
            console.log("INIT");
            
            return { ...state, ...stateFromStorage };
        case ADD:
            if (action.payload.dataStruct === state.Location) {
                newData = [...state.Locations];
                newData.push(action.payload.dataToHandle);
                toLocalStorage = JSON.stringify({ ...state, Locations: newData, LocationLastID: state.LocationLastID + 1 })
                myStorage.setItem("state", toLocalStorage);
                return { ...state, Locations: newData, LocationLastID: ++state.LocationLastID };
            } else {
                newData = [...state.Categories];
                newData.push(action.payload.dataToHandle);
                toLocalStorage = JSON.stringify({ ...state, Categories: newData, CategoryLastID: state.CategoryLastID + 1 })
                myStorage.setItem("state", toLocalStorage);
                return { ...state, Categories: newData, CategoryLastID: ++state.CategoryLastID };
            }
        case UPDATE:
            if (action.payload.dataStruct === state.Location) {
                newData = [...state.Locations];
                index = newData.map(item => item.id).indexOf(action.payload.dataToHandle.id);
                newData[index] = action.payload.dataToHandle;
                toLocalStorage = JSON.stringify({ ...state, Locations: newData})
                myStorage.setItem("state", toLocalStorage);
                return { ...state, Locations: newData };
            } else {
                newData = [...state.Categories];
                index = newData.map(item => item.id).indexOf(action.payload.dataToHandle.id);
                newData[index] = action.payload.dataToHandle;
                toLocalStorage = JSON.stringify({ ...state, Categories: newData})
                myStorage.setItem("state", toLocalStorage);
                return { ...state, Categories: newData };
            }
        case REMOVE:
            if (action.payload.dataStruct === state.Location) {
                newData = [...state.Locations];
                index = newData.map(item => item.id).indexOf(action.payload.id);
                newData.splice(index, 1);
                toLocalStorage = JSON.stringify({ ...state, Locations: newData})
                myStorage.setItem("state", toLocalStorage);
                return { ...state, Locations: newData };
            } else {
                newData = [...state.Categories];
                index = newData.map(item => item.id).indexOf(action.payload.id);
                newData.splice(index, 1);
                toLocalStorage = JSON.stringify({ ...state, Categories: newData})
                myStorage.setItem("state", toLocalStorage);
                return { ...state, Categories: newData };
            }
        default:
            return state
    }
}

export default mainReducer