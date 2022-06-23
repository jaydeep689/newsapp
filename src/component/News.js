import React, { Component } from "react";
import Newsiteam from "./Newsiteam";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    pageSize: 8,
    category: "entertainment",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=93b62cc7d98e44b1893c8ee91711b7d3&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsdata = await data.json();
    this.setState({ article: parsdata.articles });
  }

  perv = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=93b62cc7d98e44b1893c8ee91711b7d3&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsdata = await data.json();
    this.setState({ article: parsdata.articles, page: this.state.page - 1 });
  };
  next = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=93b62cc7d98e44b1893c8ee91711b7d3&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsdata = await data.json();
    this.setState({ article: parsdata.articles, page: this.state.page + 1 });
  };

  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-center my-3 ">Top Headline</h1>
        <div className="row ">
          {this.state.article.map((element) => {
            return (
              <div className="col-md-3 my-3" key={element.url}>
                <Newsiteam
                  title={element.title}
                  description={element.description}
                  imgUrl={element.urlToImage}
                  urlId={element.url}
                  source={element.source.name}
                  updated={element.publishedAt}
                ></Newsiteam>
              </div>
            );
          })}
        </div>
        <div className="contianer d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary btn-sx"
            onClick={this.perv}
          >
            Prev
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sx"
            onClick={this.next}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
