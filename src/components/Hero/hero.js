import React from "react"

import "../Hero/hero.css"

const Hero = props => {
  return (
    <div className={props.classes}>
      <div className="hero-text">
        <h1 className="tracking-in-contract-bck-top">{props.h1Text}</h1>
        <h3 className="tracking-in-expand">{props.h3Text}</h3>
      </div>
    </div>
  )
}

export default Hero
