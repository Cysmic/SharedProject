import { useState } from "react";
import "./App.css";
import { DndContext, closestCenter } from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  restrictToHorizontalAxis,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers";

import Container from "./Components/Container";

function App() {
  const [items, setItems] = useState(["A", "B", "C"]);

  return (
    <div className="bg-gray-800 flex flex-row w-screen h-screen justify-evenly">
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToHorizontalAxis, restrictToWindowEdges]}
      >
        <SortableContext items={items} strategy={horizontalListSortingStrategy}>
          {items.map((item, index) => (
            <Container key={item} id={item} index={index} />
          ))}
        </SortableContext>
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

export default App;
