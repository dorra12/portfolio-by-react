import React from 'react'
import '../Styles/About.scss'

function About() {
    return (
        <section className="about"> <a name="about"></a>
            <div className="container">
                <div className="about__wrapper">
                    <div className="about__img">
                        <img src="asset/img/dorra_photo.jpg" alt=""></img>
                    </div>
                    <div className="about__descrip">
                        <h2 className="title title_fz16 about__title">About Me</h2>
                        <div className="title title_fz36 about__subtitle">My name is Dorra</div>
                        <div className="divider"></div>
                        <p className="about__text">I'm a web developer. I was working in pharmaceutical industry. And i want to continue my path as a Front-end Developer. Focused on integrating experience and new skills into the Front end Developer position as much as possible.</p>
                    </div>
                    <div className="about__skills">
                        <div className="about__skills-item">
                            <div className="about__skills-circle">
                                <img src=""></img>
                            </div>
                            <div>
                                <div className="title title_fz14">
                                    Web Developement
                                </div>
                                <div className="about__skills-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                            </div>
                        </div>
                        <div className="about__skills-item">
                            <div class="about__skills-circle">
                                <img src="" alt=""></img>
                            </div>
                            <div>
                                <div className="title title_fz14">
                                    Design
                                </div>
                                <div className="about__skills-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>    
        </section>
    )
}

export default About
