import React from 'react'
import './intro.scss'
import {ProfilePicture} from '../../assets'

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
                <div className="container">
                    <img src={ProfilePicture} alt="" className="profile-picture" />
                    {/* Top glasses */}
                    {/* <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 505.11 45.34">
                    <path class="lineGlasses" d="M366.17-282.3S332.47-315.49,257.91-314s-95.48,34.73-95.48,34.73-42.39-19.41-77.11,0C0-371.66-138.34-290.47-138.34-290.47" transform="translate(138.59 323.94)"/>
                    </svg> */}

                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 498.63 190.85">
                    <path class="lineGlasses" d="M364.64-293.36S321.23-321.11,250-315s-86.55,35.75-86.55,35.75-38.3-19.92-79.66-2C48-339.49-81.66-318.55-81.66-318.55s-51.57,7.66-50.55,26,4.59,88.85,31.66,115.91,65.36,41.37,112.85,31.66S94-209.28,90.15-271.06c34.85-21.45,70.23,1.53,70.23,1.53S140-170,212-141.89c22.75,8.88,51.35,13.71,78.2,4.73A104.27,104.27,0,0,0,330-161.72C373.64-204,364.64-293.36,364.64-293.36Z" transform="translate(132.73 322.72)"/>
                    </svg>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
