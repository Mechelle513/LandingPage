import React from "react";

function Cards(props) {
    return (

        <div className="card" style={{width: "16rem;"}}>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxEbdBK2gIEZ66fDVtIBh5o11_hcS-H61Nw&usqp=CAU"} class="card-img-auto" alt="..." style={{width:"100%", height:"110%;"}} />
            <div className="card-body"> {props.cardBody}
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardText}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>

            </div>
        </div>
    );

}

export default Cards;