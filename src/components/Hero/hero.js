import React from "react"

import "../Hero/hero.css"

const Hero = props => {
  return (
    <div className={props.classes}>
      <div className="hero-text">
        <svg
          className="myLogo"
          style={{ position: `relative` }}
          version="1.1"
          width="210"
          height="135"
          xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(0 2.292724609375)">
            <g transform="scale(0.39622641509433965)">
              <g className="logo-ctn">
                <g transform="translate(188.23175048828125 0) scale(2.4271481171232563)">
                  <polygon
                    points="0.996,52.508 16.382,67.979 0.996,7.813 "
                    fill="#515151"></polygon>
                  <polygon
                    points="17.092,66.401 17.092,38.231 26.981,47.164 0,0.001 "
                    fill="#4c9fd8"></polygon>
                  <polygon
                    points="36.293,47.159 46.167,38.235 46.167,66.401 63.258,0 "
                    fill="#4c9fd8"></polygon>
                  <polygon
                    points="62.264,7.811 46.876,67.981 62.264,52.508 "
                    fill="#515151"></polygon>
                  <polygon
                    points="59.424,4.855 31.635,31.794 3.839,4.86 31.637,52.838 "
                    fill="#4c9fd8"></polygon>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <h1 className="tracking-in-contract-bck-top">{props.h1Text}</h1>
        <h3 className="tracking-in-expand">{props.h3Text}</h3>
      </div>
    </div>
  )
}

export default Hero
