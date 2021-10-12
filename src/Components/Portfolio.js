import React from 'react'
import '../Styles/Portfolio.scss'

function Portfolio() {
    return (
        <section className="portfolio">
            <div class="container">
                <h2 class="title title_fz16 title__section-title">Portfolio</h2>
                <div class="title title_fz36 title__section-subtitle">My works</div>
                <div class="divider"></div>

                <div class="portfolio__wrapper">
                    <a href="#" class="portfolio__item">
                        <img src="img/works/uber.jpg" alt="uber"></img>
                    </a>
                    <a href="#" class="portfolio__item">
                        <img src="img/works/pulse.jpg" alt="pulse"></img>
                    </a>
                    <a href="#" class="portfolio__item">
                        <img src="img/works/bread.jpg" alt="test"></img>
                    </a>
                    <a href="#" class="portfolio__item vertical">
                        <img src="img/works/plans.jpg" alt="test"></img>
                    </a>
                    <a href="#" class="portfolio__item">
                        <img src="img/works/ipad.jpg" alt="test"></img>
                    </a>        
                </div>
            </div>
        </section>
    )
}

export default Portfolio
