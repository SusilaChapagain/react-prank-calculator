import React from "react";

export const Button = ({ item, susila }) => {
  return (
    <button className={item.cls} onClick={() => susila(item.label)}>
      {item.label}
    </button>
  );
};
