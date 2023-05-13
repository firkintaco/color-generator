import React from "react";
import { ToastContainer, toast } from "react-toastify";

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;
  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      toast.success(`Color with HEX #${hex} copied to clipboard.`);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
      onClick={handleClick}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">£{hex}</p>
    </article>
  );
};

export default SingleColor;
