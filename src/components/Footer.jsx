import React from "react"
import Container from "react-bootstrap/Container"

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#ccba9e" }
  // "#E9DCC9"
  return (
    <footer style={bgStyle} className='mt-auto py-5 text-center '>
      <Container>
        {props.children}
        <i className='fas fa-code' /> with <i className='fas fa-heart' /> by{" "}
        <a
          className='badge badge-dark'
          rel='noopener'
          href='https://github.com/himanshu12145'
          aria-label='My GitHub'
        >
          Himanshu Shekhar Sahoo
        </a>{" "}
        using <i className='fab fa-react' />
      </Container>
    </footer>
  )
}

export default Footer
