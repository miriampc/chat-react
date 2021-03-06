import React from 'react'

const HeaderPanel = ({nameContact, imgContact}) => {
    return(
        <div className="header-panel">            
            <img src={imgContact} alt="foto perfil" className="avatar"/>     
            <div>
                <span className="contact-name">{nameContact}</span>
                <p className="contact-name">Online</p>
            </div>
            <img src="https://image.ibb.co/e5Udxm/icons_right.png"/>
        </div>
    );
}

export default HeaderPanel