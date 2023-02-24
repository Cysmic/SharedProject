import "../App.css";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

import {
  restrictToHorizontalAxis,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers";

import { useState } from "react";
import { Card } from "./Card";

function CardSection(props) {
  const [items, setItems] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
  ]);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      color={props.color}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`h-3/12 w-full flex flex-col   my-3 px-2 items-start rounded-lg ${props.color}`}
    >
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToHorizontalAxis, restrictToWindowEdges]}
      >
        <div className="h-1/8 w-11/12">
          <h6 className="text-white font-extrabold text-2xl justify-center">
            {props.text}
          </h6>
        </div>
        <div className="h-7/8 w-11/12 pl-6 flex flex-row overflow-x-scroll scrollbar-hide gap-1 items-start">
          <SortableContext
            items={items}
            strategy={horizontalListSortingStrategy}
          >
            {items.map((item) => (
              <Card key={item} id={item} />
            ))}
          </SortableContext>
        </div>
      </DndContext>
    </div>
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

export default CardSection;
