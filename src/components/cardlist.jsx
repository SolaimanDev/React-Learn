

function CardList(props)

{
 
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.titleText}</h5>
                    <p className="card-text">{props.titleDescription}.</p>
                    <a href="#" className="btn btn-primary">Details</a>
                </div>
            </div>
            
        </div>
    )
}

export default CardList