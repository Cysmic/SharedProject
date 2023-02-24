import { useState } from "react";

import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers";
import { Template1 } from "./Templates";
import CardSection from "./CardSection";

function CardContainer(props) {
  const [items, setItems] = useState([1, 2, 3]);
  const [colors, setColors] = useState([
    "bg-blue-300",
    "bg-green-300",
    "bg-red-300",
  ]);
  const [text, setText] = useState(["-", "--", "---"]);

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <Template1>
          {items.map((item, index) => (
            <CardSection
              key={item}
              id={item}
              color={colors[item - 1]}
              text={text[item - 1]}
            />
          ))}
        </Template1>
      </SortableContext>
    </DndContext>
  );

  function handleDragEnd(event) {
    console.log("Drag end called");
    const { active, over } = event;
    console.log("ACTIVE: " + active.id);
    console.log("OVER :" + over.id);

    if (active.id !== over.id) {
      setItems((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        console.log(arrayMove(items, activeIndex, overIndex));
        return arrayMove(items, activeIndex, overIndex);
      });
    }
  }
}

export default CardContainer;
