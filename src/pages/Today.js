import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import styled, { keyframes } from "styled-components"

const FaceWave = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(0deg); }
  55% { transform: rotate(0deg); }
  60% { transform: rotate(-25deg); }
  65% { transform: rotate(25deg); }
  70% { transform: rotate(0deg); }
  80% { transform: rotate(0deg); }
  85% { transform: rotate(25deg); }
  90% { transform: rotate(-25deg); }
  95% { transform: rotate(0deg); }
`;

const FaceStyles = styled.div` 
  animation: ${FaceWave} 2s linear infinite;
`;

function RandomFace() {
    let faces = ["(๑>◡<๑)", "(๑•ૅㅁ•๑)", "♪(๑ᴖ◡ᴖ๑)♪", "٩(๑❛ᴗ❛๑)۶", "(๑•ૅ◡•๑)"];
    let times = Math.floor(Math.random() * Math.floor(5));
    let face = faces[times];
    return (
        <div style={{
            fontFamily: 'sans-serif',
            fontSize: '8vmin',
            paddingTop: '7vmin' 
        }}>
            <FaceStyles>
                {face}
            </FaceStyles>
        </div>
    )
}

const Container = styled.div`
  width: 80vmin;
  height: 60vmin;
  margin-top: 10vh;
  padding-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(248, 218, 198);
  border-radius: 10px;
`;

const Today = () => (
    <>
        <Container>
            <h1>きょうのヴァネロピ</h1>
            <RandomFace />
            <h2 style = {{marginLeft: '50%', marginTop: '20%'}}>※ とくに意味はない</h2>
        </Container>
    </>
)

export default Today