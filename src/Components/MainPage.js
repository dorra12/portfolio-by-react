import React from 'react'
import '../Styles/MainPage.scss'
function MainPage() {
    return (
        <section className="mainPage">
            <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="container">
                <div className="title title_fz16 mainPage__subtitle">My name is Dorra Habaieb</div>
                <h1 className="title title_fz48 mainPage__title">I'm a web-developer from Luxembourg</h1>
                <div className="mainPage__btns">
                    <a href="#" className="mainPage__link btn">Portfolio</a>
                    <a href="#" className="mainPage__link btn">About me</a>
                </div>
            </div>
        </section>
    )
}

export default MainPage
