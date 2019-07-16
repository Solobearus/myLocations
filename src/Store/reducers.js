
import {
    ADD,
    UPDATE,
    REMOVE,
    INIT,
} from './actions'

const initialState = {
    categoryLastID: 0,
    category: {
        id: 0,
        name: ""
    },
    categories: [],
    locationLastID: 0,
    location: {
        id: 0,
        name: "",
        address: "",
        coordinates: "",
        category: "",
    },
    locations: [],
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
            if (action.payload.dataStruct === state.location) {
                newData = [...state.locations];
                newData.push(action.payload.dataToHandle);
                toLocalStorage = JSON.stringify({ ...state, locations: newData, locationLastID: state.locationLastID + 1 })
                myStorage.setItem("state", toLocalStorage);
                return { ...state, locations: newData, locationLastID: ++state.locationLastID };
            } else {
                newData = [...state.categories];
                newData.push(action.payload.dataToHandle);
                toLocalStorage = JSON.stringify({ ...state, categories: newData, categoryLastID: state.categoryLastID + 1 })
                myStorage.setItem("state", toLocalStorage);
                return { ...state, categories: newData, categoryLastID: ++state.categoryLastID };
            }
        case UPDATE:
            if (action.payload.dataStruct === state.location) {
                newData = [...state.locations];
                index = newData.map(item => item.id).indexOf(action.payload.dataToHandle.id);
                newData[index] = action.payload.dataToHandle;
                toLocalStorage = JSON.stringify({ ...state, locations: newData})
                myStorage.setItem("state", toLocalStorage);
                return { ...state, locations: newData };
            } else {
                newData = [...state.categories];
                index = newData.map(item => item.id).indexOf(action.payload.dataToHandle.id);
                newData[index] = action.payload.dataToHandle;
                toLocalStorage = JSON.stringify({ ...state, categories: newData})
                myStorage.setItem("state", toLocalStorage);
                return { ...state, categories: newData };
            }
        case REMOVE:
            if (action.payload.dataStruct === state.location) {
                newData = [...state.locations];
                index = newData.map(item => item.id).indexOf(action.payload.id);
                newData.splice(index, 1);
                toLocalStorage = JSON.stringify({ ...state, locations: newData})
                myStorage.setItem("state", toLocalStorage);
                return { ...state, locations: newData };
            } else {
                newData = [...state.categories];
                index = newData.map(item => item.id).indexOf(action.payload.id);
                newData.splice(index, 1);
                toLocalStorage = JSON.stringify({ ...state, categories: newData})
                myStorage.setItem("state", toLocalStorage);
                return { ...state, categories: newData };
            }
        default:
            return state
    }
}

export default mainReducer