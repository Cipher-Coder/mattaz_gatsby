import React from "react"

import "../Hero/hero.css"

const Hero = props => {
  return (
    <div className={props.classes}>
      <div className="hero-text">
        <h1>{props.h1Text}</h1>
        <h3>{props.h3Text}</h3>
      </div>
    </div>
  )
}

export default Hero
