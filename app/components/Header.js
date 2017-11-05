import React from 'react'

const Header = (props) =>{
  return (
      <header className={props.class}>
        <ul>
          <li>{props.title}</li>
          <li className={props.direction}><i className={props.ellipsis} aria-hidden="true"></i></li>
          <li className={props.direction}><i className={props.search} aria-hidden="true"></i></li>
        </ul>
      </header>
  )
}

export default Header