import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props
    return (
        <div className="my-3">
            <div className="card" style={{width: "18rem"}}>
                <img src={!imageUrl?"https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/2262/production/_129220880_bbc-sport-index-imagery-2-split-images-gradient-c7d2cd9e-a383-40dc-8ab5-ab15abe5d0bb.png":imageUrl} className="card-img-top" alt=''/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
  }
}

export default NewsItem
