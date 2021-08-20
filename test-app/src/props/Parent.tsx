import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log("clicked")}>
      This is the child component
    </ChildAsFC>
  );
};

export default Parent;
