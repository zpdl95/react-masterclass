import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragableCard from "./DragableCard";

interface IMagicBoard {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}

const Board = styled.div`
  width: 300px;
  min-height: 300px;
  padding: 10px 0px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 20px;
`;

const MagicBoard = styled.div<IMagicBoard>`
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#a55eea"
      : props.isDraggingFromThis
      ? "#9980FA"
      : props.theme.boardColor};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
  padding: 10px 10px;
`;

interface IDroppableBoard {
  toDos: string[];
  boardId: string;
}

function DroppableBoard({ toDos, boardId }: IDroppableBoard) {
  return (
    <Board>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(magic, info) => (
          <MagicBoard
            isDraggingOver={info.isDraggingOver}
            isDraggingFromThis={Boolean(info.draggingFromThisWith)}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {/* Draggable = children으로 함수를 받는다 */}
            {/* id와 index를 받아야함 */}
            {toDos.map((toDo, index) => (
              /* key값과 draggableId값이 다르면 오류가 발생함 */
              <DragableCard key={toDo} toDo={toDo} index={index} />
            ))}
            {/* placeholder = 빠진요소의 자리를 채워줌 */}
            {magic.placeholder}
          </MagicBoard>
        )}
      </Droppable>
    </Board>
  );
}
export default DroppableBoard;
