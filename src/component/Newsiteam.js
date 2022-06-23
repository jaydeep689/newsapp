import React, { Component } from "react";

export default class Newsiteam extends Component {
  render() {
    let { title, description, imgUrl, urlId, updated, source } = this.props;
    return (
      <div>
        <div className="card shadow-lg p-3 mb-5 rounded-3 ">
          <img src={imgUrl} className="card-img-top" alt=""  />
          <div className="card-body ">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={urlId} className="btn btn-sm text-primary">
              More...
            </a>
          </div>
          <div className="card-footer">
            <small className=" text-muted">Published on : {new Date(updated).toGMTString()}</small>
            <br></br>
            <small className="text-muted">Source: {source}</small>
          </div>
        </div>
      </div>
    );
  }
}
