import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function App() {
  const onDragEnd = () => {};
  return (
    /* onDragEnd = 드래그가 끝났을때 실행되는 함수 */
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        {/* Droppable = children으로 함수를 받는다 */}
        {/* id도 받아야함 */}
        <Droppable droppableId="one">
          {() => (
            <ul>
              {/* Draggable = children으로 함수를 받는다 */}
              {/* id와 index를 받아야함 */}
              <Draggable draggableId="first" index={0}>
                {() => <li>one</li>}
              </Draggable>
              <Draggable draggableId="second" index={1}>
                {() => <li>two</li>}
              </Draggable>
              <Draggable draggableId="third" index={2}>
                {() => <li>three</li>}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
