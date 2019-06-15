import React, { useState, useEffect } from 'react';
import style from './Container.module.css'
import Form from './Form/Form'
import Popup from './Popup/Popup'
import logo from '../../Images/logo.png'
import Picture1 from '../../Images/Picture1.png'
import Picture2 from '../../Images/Picture2.png'
import Picture3 from '../../Images/Picture3.png'

const Container = (props) => {
    return (
        <div className={style.Container}>
            <div class={style.header}>
                <img src={logo} alt="logo" /></div>
            <div class={style.topLanding}>
                <div>
                    <h3>לא משנה מה תעדיפו,</h3>
                    <h4>העיקר שקונים בזול ביחד</h4>
                </div>
            </div>
            <Form></Form>
            <Popup></Popup>
            <div class={style.bottomLanding}>
                <h3>האם כל כלב אוכל אותו הדבר?</h3>
                <h3>למה חשוב לגוון?</h3>
                <h4>ריכזנו לכם את כל התשובות במקום אחד</h4>
                <button>כנסו וגלו>></button>
            </div>
            <div class={style.footer}>
                <img src={Picture1} alt="" />
                <div>
                    <h4>אז נתחיל מהתחלה</h4>
                    <p>ילדה הולכת לים עם כוב
                    משקפי שמש וחברה, יושבת
                    על שמכה</p>
                </div>
            </div>
        </div >
    )
}

export default Container;