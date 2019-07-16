import React, { useState, useEffect } from 'react';
import style from './Main.module.css'
import { connect } from 'react-redux'

const Main = (props) => {

    const [locationsToRender, setlocationsToRender] = useState([]);
    const [placeId, setPlaceId] = useState(null);
    let categorySelected = null;
    let locationselected = null;
    let apikey = "AIzaSyAw7dBz3fBk-f9SwRFaFqvPln6e20Tnu9Q";

    useEffect(() => {
        oncategorySelected();
    }, [props.categories])

    const oncategorySelected = () => {
        const filtered = props.locations.filter(
            location => location.category === categorySelected.value
        )

        setlocationsToRender(filtered);

        if (filtered.length > 0) {
            let address = filtered[0].address.split(' ').join('+');
            setPlaceId(address);
        } else {
            setPlaceId(null);
        }
    }

    const onlocationselected = () => {
        console.log(JSON.parse(locationselected.value));

        setPlaceId(JSON.parse(locationselected.value).address.split(' ').join('+'));
    }

    return (
        <div className={style.Main}>

            <h3>categories</h3>
            <select
                ref={(ref) => categorySelected = ref}
                onChange={() => { oncategorySelected(); }}
                defaultValue={props.categories.length > 0 ? props.categories[0].name : "none"}
            >
                {props.categories.length > 0 && props.categories !== undefined ?
                    (props.categories.map((category) => {
                        return <option value={category.id} key={category.id}>
                            {category.name}
                        </option>
                    })) : <option value="none">No categories Found</option>}
            </select>
            <h3>locations</h3>
            <select
                ref={(ref) => locationselected = ref}
                onChange={() => { onlocationselected(); }}>
                {locationsToRender.length > 0 ?
                    (locationsToRender.map((location) => {
                        return <option value={JSON.stringify(location)} key={location.id}>
                            {location.name}
                        </option>
                    })) : <option value="none">No locations Found</option>}
            </select>
            {console.log(placeId)
            }
            {placeId !== null ? <iframe title="maps" width="600" height="450" frameBorder="0"
                src={`https://www.google.com/maps/embed/v1/place?q=${placeId}&key=${apikey}`}
                allowFullScreen></iframe>
                : null}
        </div >
    )
}

const mapStateToProps = state => ({
    categories: state.mainReducer.categories,
    locations: state.mainReducer.locations,
});

export default connect(
    mapStateToProps,
)(Main);