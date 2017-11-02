
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

ReactDOM.render(
    <Header title="WhatsApp" class="header" search="fa fa-search" ellipsis="fa fa-ellipsis-v" direction="right"/>,
    document.getElementById('root')
);