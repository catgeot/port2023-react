import React from 'react'

import about from "../assets/img/임시프로필.jpg";

const introText = {
  title: "port developer",
  desc: [" 구하라! 주실 것이요",
        "찾으라! 찾을 것이요",
        "두드리라! 열릴 것이니라"]
}

const Intro = () => {
  return (
    <section id="intro">
            <div className="intro_inner">
                <h2 className="intro_title">
                    {introText.title}
                </h2>
               <div className="intro_lines" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
               </div>
               <div className="intro_text">
                    <div className="text">
                    <div>{introText.desc[0]}</div>
                    <div>{introText.desc[1]}</div>
                    <div>{introText.desc[2]}</div>
                    </div>
                    <div className="img">
                        <img src={about} alt="about me" />
                    </div>
               </div> 
               <div className="intro_lines bottom" aria-hidden="true">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
           </div>
            </div>
        </section>
  )
}

export default Intro