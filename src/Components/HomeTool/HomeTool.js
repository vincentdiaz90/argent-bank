import React from 'react'
import './HomeTool.css'

export default function HomeTool({imgSrc, imgAlt, title, description}) {
  return (
    <div className="hometool">
    <img src={imgSrc} alt={imgAlt} className="hometool-icon" />
    <h4 className="hometool-title">{title}</h4>
    <p>
        {description}
    </p>
</div>
  )
}
