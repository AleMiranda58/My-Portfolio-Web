import React from 'react'
import './intro.scss'
import me from '../../images/me.png'

const Intro = () => {
    return (
        <div className="intro" id="about">
            <div className="left">
                <div className="wrapper">
                    <h2 className="greeting">Hi, my name is</h2>
                    <h1 className="name">Alejandra Miranda</h1>
                    <div className="title">
                        <div className="wrapper-titles">
                            <div className="item">Front-End Developer</div>
                            <div className="item">Multimedia Integrator</div>
                            <div className="item">web creator</div>
                        </div>
                    </div>
                    <div className="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis felis at mi pharetra fermentum. Vivamus a felis non arcu fermentum commodo quis at nisi. Aliquam cursus scelerisque lorem at auctor. Suspendisse dictum quis sem a maximus. Curabitur sodales tincidunt eleifend. Sed vitae risus feugiat, feugiat lectus eu, bibendum urna. Suspendisse vel facilisis augue, eu volutpat dolor.</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="background">
                {/* <img src={me} alt="" className="profile-picture" /> */}
                <img src={me} alt="" className="profile-picture" />
                </div>
            </div>

        </div>
    )
}

export default Intro
