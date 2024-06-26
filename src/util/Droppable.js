import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });

  const style = {
    opacity: isOver ? 1 : 1,
    // backgroundColor: isOver ? 'rgba(0, 0, 255, 0.2)' : 'transparent'
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
