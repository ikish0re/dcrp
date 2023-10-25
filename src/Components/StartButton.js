import React from 'react'

const StartButton = (props) => {
  return (
    <button className={props.btnType}>{props.description}</button>
  )
}

export default StartButton