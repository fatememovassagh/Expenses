import './card.css'
function card(props){
    return(
        <div className="container">{props.children}</div>
    )
    
}

export default card;