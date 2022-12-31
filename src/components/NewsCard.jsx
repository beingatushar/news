import React from 'react'
import "../styles/newscard.scss"
function NewsCard(props) {
    return (
        <div className="news-card" >
            <img src={props.urlToImage} alt={props.title} />
            <div className="card">
                <h3>{props.title.slice(0, 75)}...</h3>
                <p>{props.content.slice(0, 150)}...</p>
                <div>BY- {props.author}</div>
                <a href={props.url} target="_blank" rel="noreferrer">Read More!</a>
            </div>
        </div >
    )
}

export default NewsCard