import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Text = styled.p`
  box-sizing: border-box;
  color: red;
  height: ${({ height }) => height + "px"};
`;

export const Blank = styled.p`
  height: ${({ height }) => (height ? height + "px" : "10px")};
`;

const Error = ({ children, setError, time: defaultTime = 5, height = 10 }) => {
  const ref = useRef(null);
  const [time, setTime] = useState(defaultTime);
  if (time === 0) {
    setError({ error: false, msg: "" });
  }
  useEffect(() => {
    ref.current = setInterval(() => setTime(prevTime => prevTime - 1), 1000);
    return () => {
      clearInterval(ref.current);
    };
  }, []);
  return <Text height={height}>{children}</Text>;
};

export default Error;
