import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 10,
        category: 'general'
    }

    static propTypes= {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

   
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7b8ecda91d8b4619a5a0ce2da13c92c8&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults,  loading: false })

    }

    previousClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=7b8ecda91d8b4619a5a0ce2da13c92c8&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    nextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=7b8ecda91d8b4619a5a0ce2da13c92c8&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    render() {
        return (
            <>
                <div className='w-[1200px] m-auto'>
                    <h1 className='text-2xl font-semibold py-5 p-5'>Top Headlines</h1>
                    {this.state.loading && <Spinner />}
                    <div className='grid grid-cols-3'>
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <NewsItem key={element.url} title={element.title} description={element.description} url={element.url} urlToImage={element.urlToImage} publishedAt={element.publishedAt} author={element.author}/>
                        })}
                    </div>
                    <div className='flex justify-between'>
                        <button disabled={this.state.page <= 1} type="button" className='border-gray-300 rounded-full bg-violet-700 text-white px-5 py-2 ml-5 mb-10 disabled:bg-violet-400' onClick={this.previousClick}>&laquo; Previous</button>
                        <button disabled={Math.ceil(this.state.totalResults / this.props.pageSize) <= this.state.page} type="button" className='border-gray-300 rounded-full bg-violet-700 text-white px-5 py-2 mr-5 mb-10 disabled:bg-violet-400' onClick={this.nextClick}>Next &raquo;</button>
                    </div>
                </div>
            </>
        )
    }
}
