import React, { useState } from "react";

const Dropdown = ({Title, options, func }) => {
  const [title, setTitle] = useState(Title);

  return (
    <>
      <div className="dropdown-center">
        <button
          className="btn btn-secondary dropdown-toggle px-8"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {title}
        </button>
        <ul className="dropdown-menu">
          {options.map((o, i) => (
            <li
              key={i}
              onClick={(e) => {
                func(e.target.innerText);
                setTitle(e.target.innerText);
              }}
              className="dropdown-item hover:cursor-pointer"
            >
              {o}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
