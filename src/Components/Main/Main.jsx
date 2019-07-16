import React, { useState, useEffect } from 'react';
import style from './Main.module.css'
import { connect } from 'react-redux'

const Main = (props) => {

    const [locationsToRender, setLocationsToRender] = useState([]);
    const [placeId, setPlaceId] = useState(null);
    let categorySelected = null;
    let locationSelected = null;
    let apikey = "AIzaSyAw7dBz3fBk-f9SwRFaFqvPln6e20Tnu9Q";

    useEffect(() => {
        onCategorySelected();
    }, [props.Categories])

    const onCategorySelected = () => {
        const filtered = props.Locations.filter(
            location => location.Category === categorySelected.value
        )

        setLocationsToRender(filtered);

        if (filtered.length > 0) {
            let address = filtered[0].Address.split(' ').join('+');
            setPlaceId(address);
        }else{
            setPlaceId(null);
        }
    }

    const onLocationSelected = () => {
        console.log(JSON.parse(locationSelected.value));

        setPlaceId(JSON.parse(locationSelected.value).Address.split(' ').join('+'));
    }

    return (
        <div className={style.Main}>

            <h3>Categories</h3>
            <select
                ref={(ref) => categorySelected = ref}
                onChange={() => { onCategorySelected(); }}
                defaultValue={props.Categories.length > 0 ? props.Categories[0].name : "none"}
            >
                {props.Categories.length > 0 && props.Categories !== undefined ?
                    (props.Categories.map((category) => {
                        return <option value={category.name} key={category.id}>
                            {category.name}
                        </option>
                    })) : <option value="none">No Categories Found</option>}
            </select>
            <h3>Locations</h3>
            <select
                ref={(ref) => locationSelected = ref}
                onChange={() => { onLocationSelected(); }}>
                {locationsToRender.length > 0 ?
                    (locationsToRender.map((location) => {
                        return <option value={JSON.stringify(location)} key={location.id}>
                            {location.name}
                        </option>
                    })) : <option value="none">No Locations Found</option>}
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
    Categories: state.mainReducer.Categories,
    Locations: state.mainReducer.Locations,
});

export default connect(
    mapStateToProps,
)(Main);