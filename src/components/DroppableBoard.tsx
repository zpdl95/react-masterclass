import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragableCard from "./DragableCard";

const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 10px;
`;

interface IDroppableBoard {
  toDos: string[];
  boardId: string;
}

function DroppableBoard({ toDos, boardId }: IDroppableBoard) {
  return (
    <Droppable droppableId={boardId}>
      {(magic) => (
        <Board ref={magic.innerRef} {...magic.droppableProps}>
          {/* Draggable = children으로 함수를 받는다 */}
          {/* id와 index를 받아야함 */}
          {toDos.map((toDo, index) => (
            /* key값과 draggableId값이 다르면 오류가 발생함 */
            <DragableCard key={toDo} toDo={toDo} index={index} />
          ))}
          {/* placeholder = 빠진요소의 자리를 채워줌 */}
          {magic.placeholder}
        </Board>
      )}
    </Droppable>
  );
}
export default DroppableBoard;
