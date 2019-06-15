import React, { useState, useEffect } from 'react';
import style from './Popup.module.css'
import { connect } from 'react-redux'
// import { fetchPhotos } from '../Redux/actions'

const Popup = (props) => {

    const [show, setshow] = useState(false)

    const handleClick = {

    }

    return (
        <div className={style.Popup}>
            <div onClick={() => { setshow(true) }}>הירשמו עכשיו לניוזלטר ותתחילו ליהנות>></div>

            {show ?
                <div className={style.layout} onClick={() => { setshow(false) }}></div>
                : null}
            {show ?
                <div className={style.form}>
                    <form id="usrform" action="#">
                        <h3>השאירו פרטים כדי להיות הראשונים לדעת</h3>
                        <input type="text" name="fname" placeholder="שם מלא" /><br />
                        <input type="email" name="lname" placeholder="אימייל" /><br />
                        <textarea rows="4" form="usrform" placeholder="כתבו לנו"/><br />
                        <input type="submit" value="שלח" />
                    </form>
                </div>
                : null}
        </div >
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
)(Popup);