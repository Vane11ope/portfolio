import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import styled, { keyframes } from "styled-components"

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
    <SEO title="Work" />
    <Container>
      <h1>じんせいのしんちょく</h1>
    </Container>
  </>
)

export default Work
