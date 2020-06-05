import React from "react"

const DownloadButton = (props) => {
  return (
    <a
      className="download-button btn btn-primary"
      href={props.href}
      target="_blank"
      rel="noopener noreferrer">
      {props.name}
    </a>
  )
}

export default DownloadButton
