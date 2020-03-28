import PropTypes from "prop-types"
import React from "react"
import styled, { keyframes } from "styled-components"

const FirstWave = keyframes`
    0% { transform: rotate(0deg); }
    40% { transform: rotate(0deg); }
    50% { transform: rotate(25deg); }
    60% { transform: rotate(-25deg); }
    70% { transform: rotate(0deg); }
`;

const SecondWave = keyframes`
    0% { transform: rotate(0deg); }
    65% { transform: rotate(0deg); }
    75% { transform: rotate(10deg); }
    85% { transform: rotate(-10deg); }
    95% { transform: rotate(0deg); }
`;

const Vane11opeStyles = styled.div` 
  animation: ${FirstWave} 3s linear infinite;
`;

const TitleStyles = styled.div` 
  animation: ${SecondWave} 3s linear infinite;
`;

function RandomFace() {
  let faces = ["(๑>◡<๑)", "(๑•ૅㅁ•๑)", "♪(๑ᴖ◡ᴖ๑)♪", "٩(๑❛ᴗ❛๑)۶", "(๑•ૅ◡•๑)"];
  let times = Math.floor(Math.random() * Math.floor(5));
  let face = faces[times];
  return (
    <div style={{
      fontFamily: 'sans-serif',
      paddingLeft: '14vmin',
    }}>
      <br/><br/>{face}
    </div>
  )
}

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgb(153, 61, 6)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
        color: 'rgb(249, 239, 232)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: '2.25rem',
        justifyContent: 'center',
      }}
    >
      <Vane11opeStyles>
        <img src={require('../images/vane11ope.png')} alt="" />
      </ Vane11opeStyles>
      <TitleStyles>
        {siteTitle}
        <RandomFace />
      </TitleStyles>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
