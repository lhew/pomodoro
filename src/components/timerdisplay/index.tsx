import dayjs from "dayjs";
import React from "react";
import styled from "styled-components";
import { formattedSeconds } from "../../utils/formattedSeconds";

const Wrapper = styled.span`
  font: normal 1.5em sans-serif;
`;
const TimerDisplay = ({ time = 0 }) => {
  return (
    <Wrapper data-testid="timer-display">
      {!isNaN(parseInt(`${time}`)) ? formattedSeconds(time) : "--:--"}
    </Wrapper>
  );
};

export default TimerDisplay;
