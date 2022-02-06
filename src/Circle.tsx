import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

/* styled-component에 type을 설정하는 방법 */
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  border: 3px solid ${(props) => props.borderColor};
`;

const Circle = ({ bgColor, borderColor }: CircleProps) => {
  /* typescript를 사용하면 state의 값에 대한 type을 default값에 의해 자동으로 알아서 잡아준다 */
  /* useState에 사용되는 state값의 type을 정하는 방법 */
  const [value, setValue] = useState<number | string>(0);
  setValue("sksk");
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? "red"}></Container>
  );
};

/* interface = object의 타입을 알려주는 것 */
interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

export default Circle;
