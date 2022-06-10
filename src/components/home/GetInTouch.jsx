import React from "react"

const GetInTouch = ({ heading, message, email }) => {
  return (
    <footer id='footer'>
      <h2 className='display-4 pb-3 text-center pt-0'>{heading}</h2>
      <p className='lead text-center pb-3'>
        {message}, <a href={`mailto:${email}`}>{email}</a>.
      </p>
    </footer>
  )
}

export default GetInTouch
