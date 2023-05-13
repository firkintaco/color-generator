import { useState } from "react";
import Values from "values.js";

const Form = ({ addColor }) => {
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <h3>Shades</h3>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="#ff0000"
      />
      <button type="submit" className="btn" style={{ background: color }}>
        GENERATE
      </button>
    </form>
  );
};

export default Form;
