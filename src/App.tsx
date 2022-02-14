import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import DroppableBoard from "./components/DroppableBoard";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 10px;
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = (info: DropResult) => {
    const { draggableId, destination, source } = info;
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      if (destination.index === source.index) return;
      setToDos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, draggableId);
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
    }
    if (destination.droppableId !== source.droppableId) {
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]];
        const destBoard = [...allBoards[destination.droppableId]];
        sourceBoard.splice(source.index, 1);
        destBoard.splice(destination.index, 0, draggableId);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destBoard,
        };
      });
    }
  };
  return (
    /* onDragEnd = 드래그가 끝났을때 실행되는 함수 */
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        {/* Droppable = children으로 함수를 받는다 */}
        {/* id도 받아야함 */}
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <DroppableBoard
              key={boardId}
              toDos={toDos[boardId]}
              boardId={boardId}
            />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
