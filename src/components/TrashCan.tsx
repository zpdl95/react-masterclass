import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const TrashCanArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  align-self: center;
  background-color: #e1b12c;
  max-width: 300px;
  height: 100px;
  border-radius: 10px;
  h2 {
    font-size: 18px;
    font-weight: 600;
  }
  span {
    font-size: 40px;
  }
`;

function TrashCan() {
  return (
    <Droppable type={"Boards"} droppableId="TrashCan">
      {(magic) => (
        <>
          <TrashCanArea ref={magic.innerRef} {...magic.droppableProps}>
            <h2>보드 제거</h2>
            <span>🚮</span>
          </TrashCanArea>
          {magic.placeholder}
        </>
      )}
    </Droppable>
  );
}
export default TrashCan;
