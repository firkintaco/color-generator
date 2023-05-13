import { nanoid } from "nanoid";
import SingleColor from "./SingleColor";

const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((color, index) => (
        <SingleColor color={color} key={nanoid()} index={index} />
      ))}
    </section>
  );
};

export default ColorList;
