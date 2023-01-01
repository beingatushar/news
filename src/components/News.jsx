import "../styles/news.scss"
import NewsCard from "./NewsCard"
import React, { Component } from 'react'

export default class News extends Component {
    articles = [];
    async componentDidMount() {
        try {
            let url = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c783f7c60828451b8a3909c74cc36447';
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState(this.articles = parsedData.articles);
        }
        catch (e) {
            console.log(e);

        }

    }
    constructor() {
        super();
        this.state = {
            articles: this.articles
        }
    }
    render() {
        return (
            <div className="container news">
                <h2>EXPLORE AND FIND YOUR SUITABLE NEWS LETTER HERE</h2>
                <div className="news-cards">
                    {
                        this.articles.map(article => {
                            return (article.title && article.urlToImage && article.author && article.description && article.url) ?
                                <NewsCard {...article} /> : ""
                        })
                    }
                </div>
            </div>
        )
    }
}
