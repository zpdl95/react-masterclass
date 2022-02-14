import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 5px;
`;

interface IDragableCard {
  toDo: string;
  index: number;
}

function DragableCard({ toDo, index }: IDragableCard) {
  return (
    <Draggable draggableId={toDo} index={index}>
      {(magic) => (
        <Card
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
