import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import styled from "styled-components"

function RandomFace() {
    let faces = ["(๑>◡<๑)", "(๑•ૅㅁ•๑)", "♪(๑ᴖ◡ᴖ๑)♪", "٩(๑❛ᴗ❛๑)۶", "(๑•ૅ◡•๑)"];
    let times = Math.floor(Math.random() * Math.floor(5));
    let face = faces[times];
    return (
        <div style={{
            fontFamily: 'sans-serif',
            fontSize: '8rem',
            paddingTop: '5vmin' 
        }}>
            <br /><br />{face}
        </div>
    )
}

const Container = styled.div`
  width: 80vmin;
  height: 40vh;
  margin-top: 10vh;
  padding-top: 3vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(248, 218, 198);
  border-radius: 10px;
`;

const Today = () => (
    <>
        <SEO title="Today" />
        <Container>
            <h1>きょうのヴァネロピ(とくに意味はない)</h1>
            <RandomFace/>
        </Container>
    </>
)

export default Today