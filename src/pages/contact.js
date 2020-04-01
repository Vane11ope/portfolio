import React from "react"
import styled from "styled-components"
import "./Contact.scss"

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

const Contact = () => (
    <>
        <Container>
            <h1>こんたくと</h1>
            <a href="mailto: vane11opeschw33tz@gmail.com">
                <div id="mail">
                    <img class="bottom" src={require('../images/mail_0.png')} alt="" />
                    <img class="top" src={require('../images/mail_1.png')} alt="" />
                </div>
            </a>
        </Container>
    </>
)

export default  Contact