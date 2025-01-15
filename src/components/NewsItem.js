import React, { Component } from 'react'

export default class NewsItem extends Component {
  
  render() {
    let {title,description,imgUrl,newsUrl,author,date, source} = this.props
    return (
        <>
        <div className="card h-100 mb-3" style={{ width: "18rem"} }>
          <img src={!imgUrl?'https://media.cnn.com/api/v1/images/stellar/prod/still-21163760-50944-still.jpg?c=16x9&q=w_800,c_fill':imgUrl} className="card-img-top" alt="..." />
        <div className="card-body" >
            <h5 className="card-title">{title}  <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={ {left: '90%', zIndex: '1'}}>
    {source}
  </span>
            </h5>
            <p className="card-text " >{!description?'Click on Read More for more Info':description}.</p>
            <p className="card-text"><small className="text-body-secondary">{!author?"Unknown" :author} on {new Date(date).toGMTString() } </small></p>

            <a href= {newsUrl} target="_blank" rel='noreferrer' className="btn btn-primary">Read More</a>
        </div>
    </div>
    </>
    )
  }
}
