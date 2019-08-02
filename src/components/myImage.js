import React from "react"

const MyImage = props => {
  return (
    <div className={props.divClass}>
      <img className={props.imgClass} src={props.myUrl} alt={props.alt} />
      <div className="col-sm-8 first-paragraph">
        <h3 className="desc-text-title">{props.title}</h3>
        <p className="desc-text">{props.content}</p>
      </div>
    </div>
  )
}

export default MyImage
