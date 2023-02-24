import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { Template2 } from "./Templates";
import CardContainer from "./CardContainer";

function Container(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      className={`h-5/6 ${
        props.index === 1 ? "w-1/3" : "w-1/4"
      } mx-2 my-16 relative cursor-default`}
      ref={setNodeRef}
      style={style}
      {...attributes}
    >
      <span className="absolute top-2 right-2 cursor-move" {...listeners}>
        <svg fill="white" viewBox="0 0 20 20" width="12">
          <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"></path>
        </svg>
      </span>
      {props.id === "A" ? (
        <CardContainer />
      ) : (
        <Template2>
          <h1 className="text-white font-extrabold text-2xl mx-auto">
            Hello, world!
          </h1>
          <p className="text-white">
            Welcome to your new Tailwind CSS + React project!
          </p>
        </Template2>
      )}
    </div>
  );
}

export default Container;
