
const Header = (props) =>{
    return (
        <header className={props.class}>
            <ul>
                <li>{props.title}</li>
                <li><i className={props.search} aria-hidden="true"></i></li>
                <li><i className={props.ellipsis} aria-hidden="true"></i></li>
            </ul>
        </header>
    )
}

ReactDOM.render(
    <Header title="WhatsApp" class="header" search="fa fa-search right" ellipsis="fa fa-ellipsis-v right"/>,
    document.getElementById('root')
);