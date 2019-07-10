
import {
    ADD,
    UPDATE,
    DELETE,

} from './actions'

const initialState = {
    Category: {
        id: 0,
        name: ""
    },
    Categories: [],
    Location: {
        id: 0,
        name: "",
        Address: "",
        Coordinates: "",
        Category: "",
    },
    Locations: [],
};

function mainReducer(state = initialState, action) {

    console.log("ADD");
    switch (action.type) {
        case ADD:
            
            if (action.payload.dataStruct === state.Location) {
                const newLocations = [...state.Locations];
                // console.log(`Reducer: some change was made to state.change`);
                newLocations.push(action.payload.inputs);
                return { ...state, Locations: newLocations };
            } else {
                const newCategories = [...state.Categories];
                // console.log(`Reducer: some change was made to state.change`);
                newCategories.push(action.payload.inputs);
                return { ...state, Categories: newCategories };
            }
            break;
        case UPDATE:
            if (action.payload.location) {
                const newLocations = [...state.Locations];
                // console.log(`Reducer: some change was made to state.change`);
                newLocations.push(action.payload.location);
                return { ...state, Locations: newLocations };
            } else {
                const newCategories = [...state.Categories];
                // console.log(`Reducer: some change was made to state.change`);
                newCategories.push(action.payload.category);
                return { ...state, Categories: newCategories };
            }


        default:
            return state
    }
}

export default mainReducer