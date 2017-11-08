import React from 'react'
import PanelLeft from './PanelLeft/index'
import PanelRight from './PanelRight/index'

const Main = ({contacts}) => {
    return(
        <div>
            <PanelLeft contacts={contacts}/>
            <PanelRight/>
        </div>
    )
}

export default Main