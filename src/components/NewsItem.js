import React, { Component } from 'react'

export default class NewsItem extends Component {
    constructor(){
        super();

    }
    render() {
    let {title,description,imageUrl}=this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="/newsdetails" className="btn btn-sm btn-primary">More</a>
                    </div>
                </div>
            </div>
        )
    }
}
