import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
  background-color: ${(props) =>
    props.isDragging ? "#be2edd" : props.theme.cardColor};
  box-shadow: ${(props) => (props.isDragging ? "0px 3px 5px black" : "none")};
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 5px;
  transition: background-color 1s ease-out, box-shadow 1s ease-out;
`;

interface IDragableCard {
  toDo: string;
  index: number;
}

function DragableCard({ toDo, index }: IDragableCard) {
  return (
    <Draggable draggableId={toDo} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}
/* Card를 움직일때마다 Board컴포넌트가 렌더링이 된다. */
/* Board컴포넌트가 렌더링 될때마다 모든 Card컴포넌트가 리렌더링된다 */
/* 움직이지 않은 Card컴포넌트는 리렌더링 되지않기 위해 memo사용 */
export default React.memo(DragableCard);
