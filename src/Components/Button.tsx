import React from "react";
import "../App.css";
import { Outlet, Link } from "react-router-dom";

export type ButtonProps = {
  className?: string;
  alt?: string;
  title?: string;
  link: string;
};

function Button(props: ButtonProps) {
  return (
    <>
      <Link
        to={`/` + props.link}
        className="button-link"
      >
        {props.title}
      </Link>
      <Outlet />
    </>
  );
}

export default Button;
