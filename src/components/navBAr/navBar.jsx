import React from 'react'
import './styles.css'

const navBar = () => {
    const content = ["Home","About", "Contact"]
  return (
      <ol>
          {
              content.map((item, index) => {
                  return <li key={index}>{item}</li>
              })
          }
      </ol>
      )
}

export default navBar
