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
          {(magic) => (
            <ul ref={magic.innerRef} {...magic.droppableProps}>
              {/* Draggable = children으로 함수를 받는다 */}
              {/* id와 index를 받아야함 */}
              <Draggable draggableId="first" index={0}>
                {(magic) => (
                  <li
                    ref={magic.innerRef}
                    {...magic.draggableProps}
                    {...magic.dragHandleProps}
                  >
                    one
                  </li>
                )}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
