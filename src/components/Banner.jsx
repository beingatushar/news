import React from 'react'
import "../styles/banner.scss"
import bannerImg from "../imgs/banner.svg"
function Banner() {
    return (
        <div className="container banner">
            <div className="banner-top">
                <div className="banner-head">
                    <h1>NEWS LETTER</h1>
                    <h2>
                        Discover The News Letter Of Your Choice And Publish Your Passion
                    </h2>
                </div>
                <img src={bannerImg} alt="banner.png" />
            </div>
            <div className="banner-bottom">
                <h3>
                    WHAT IS NEWS LETTER?
                </h3>
                <p>
                    An newsletter is a periodical email sent by a person or business containing news, updates, curated content from the topic that you signed up for. Unlike an automated abandon cart email, upsell email that almost hypnotizes you to ‘buy', ‘join’, or ‘enroll’, a newsletter focuses on delivering free, valuable content.
                </p>
            </div>




        </div>
    )
}

export default Banner