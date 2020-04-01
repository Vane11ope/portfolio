import PropTypes from "prop-types"
import React from "react"
import styled, { keyframes } from "styled-components"

const Vane11opeWave = keyframes`
  0% { transform: rotate(0deg); }
  60% { transform: rotate(0deg); }
  70% { transform: rotate(25deg); }
  80% { transform: rotate(-25deg); }
  90% { transform: rotate(0deg); }
`;

const TitleWave = keyframes`
  0% { transform: rotate(0deg); }
  10% { transform: rotate(20deg); }
  20% { transform: rotate(0deg); }
`;

const Vane11opeStyles = styled.div` 
  animation: ${Vane11opeWave} 3s linear infinite;
`;

const TitleStyles = styled.div` 
  animation: ${TitleWave} 3s linear infinite;
  animation-delay: ${props => props.delay};
`;

const Wave = ({str}) => { 
  let list = [];
  let delay = 2;
  for (let i = 0; i < str.length; ++i) {
    let char = str.charAt(i);
    delay += i / 64;
    list.push(
      <TitleStyles delay={delay.toString() + 's'}>
        {char}
      </TitleStyles>
    )
  }
  return (
    <>
      {list}
    </>
  )
}

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgb(153, 61, 6)`,
      marginBottom: `5vmin`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `4vmin 4vmin`,
        color: 'rgb(249, 239, 232)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: '5vmin',
        justifyContent: 'center',
      }}
    >
      <Vane11opeStyles>
        <img src={require('../images/vane11ope.png')} alt="" />
      </ Vane11opeStyles>
      <Wave str = {siteTitle} />
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
