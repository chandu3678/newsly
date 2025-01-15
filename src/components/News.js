import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {

static propTypes = {
  category: PropTypes.string
}
  
  constructor() {
    super();
    console.log("constructor")
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
  }
   async updateNews()  {
    const url = ` https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=74fc90a023374bd99633c02db5db3cfa&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading: true})
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
  }
  

  async componentDidMount() {
    this.updateNews()
  }

   fetchMoreData = async () => {
    
    const url = ` https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=74fc90a023374bd99633c02db5db3cfa&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
    this.setState({loading: true})
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({ articles: this.state.articles.concat( parsedData.articles),
       totalResults: parsedData.totalResults,
       page: this.state.page + 1,
        loading: false })
  }

  
  render() {
    return (
      <> 
        <div className="container my-3 ">
            <h2  > Top Headlines - {this.props.category} </h2>
            
       
       <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
  
          <div className="row mt-3 " >
          
               {this.state.articles.map((element) => { 
                //eslint-disable-next-line
              if (element.url !== "https://removed.com") {
                return ( <div className="col-md-3 mx-3 my-2" key={element.url}>
                  <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author ={element.author} date = {element.publishedAt} source = {element.source.name} />
                </div> 
                ) } return null
            })}
          </div>
          </InfiniteScroll>
          </div>
        
        </>
      
    )
  }
}
