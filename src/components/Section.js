import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
// 01:00:00

function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImage,
}) {
  return (
    <Wrap bgImage={backgroundImage}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade clear>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  /* background: skyblue; */

  /* for better background image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between; //vertical
  align-items: center; //:horizontal
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  /* background: green; */
`;

const Buttons = styled.div`
  margin-bottom: 3px;
`;

const ButtonGroup = styled.div`
  display: flex;
  /* background: red; */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: capitalize;
  cursor: pointer;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  margin-top: 5px;
  height: 15px;
  cursor: pointer;
  animation: animateDown infinite 1.5s;
`;
