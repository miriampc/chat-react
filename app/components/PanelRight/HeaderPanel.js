import React from 'react'

const HeaderPanel = (props) => {
    console.log("aki propss",props);
    return(
        <div className="header-panel">
            <div>
                <img src="cat.jpg" className="avatar"/>
                <span>{props.nameContact}</span>
            </div>
            <img src="icons-right.png"/>
        </div>
    );
}

export default HeaderPanel