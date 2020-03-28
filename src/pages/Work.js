import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import styled, { keyframes } from "styled-components"

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
  height: 100vh;
  margin-top: 10vh;
  padding-top: 3vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(248, 218, 198);
  border-radius: 10px;
`;

const Work = () => (
  <>
    <Container>
      <FlashStyles>
        <h1>じんせいのしんちょく</h1>
      </FlashStyles>
    </Container>
  </>
)

export default Work
