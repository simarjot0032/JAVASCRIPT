import { TODO } from "./Todo";
interface Props {
  TODO: TODO;
  onRemove: () => any;
  //   onChange: () => any;
}

import "../Styles/ToDoItem.scss";
import { FaRegCircleXmark } from "react-icons/fa6";

export default function ToDoItem({ TODO, onRemove }: Props) {
  return <></>;
}
