import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
}

/* styled-component에 type을 설정하는 방법 */
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
`;

const Circle = ({ bgColor }: CircleProps) => {
  return <Container bgColor={bgColor}></Container>;
};

/* interface = object의 타입을 알려주는 것 */
interface CircleProps {
  bgColor: string;
}

export default Circle;
