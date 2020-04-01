import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import styled, { keyframes } from "styled-components"
import "./Work.css"

const Flash = keyframes`
    0%, 25%, 75%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
`;

const FlashStyles = styled.div` 
  animation: ${Flash} 2s linear infinite;
`;

const Container = styled.div`
  width: 80vmin;
  height: 150vh;
  margin-top: 10vh;
  padding-top: 3vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(248, 218, 198);
  border-radius: 10px;
`;

const twitterIcon = () => {
  return (
    <div id="twitter">
      <a href="https://twitter.com/vane11ope">
        <img class="bottom" src={require('../images/twitter_0.png')} alt="" />
        <img class="top" src={require('../images/twitter_1.png')} alt="" />
      </a>
    </div>
  )
}

const githubIcon = () => {
  return (
    <div id="github">
      <a href="https://github.com/vane11ope">
        <img class="bottom" src={require('../images/github_0.png')} alt="" />
        <img class="top" src={require('../images/github_1.png')} alt="" />
      </a>
    </div >
  )
}

const hatenaIcon = () => {
  return (
    <a href="http://vane11ope.hatenablog.com">
      <img src={require('../images/hatena.png')} alt="" style={{ width: '24vmin', height: '24vmin', marginTop: '3vmin'}} />
    </a>
  )
}

const Work = () => (
  <>
    <Container>
      <h1>じんせいのしんちょく</h1>
      {twitterIcon()}
      {githubIcon()}
      <FlashStyles>
        {hatenaIcon()}
      </FlashStyles>
    </Container>
  </>
)

export default Work
