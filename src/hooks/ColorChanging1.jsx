import React, { useEffect, useRef } from "react";

const ColorChanging = ({ src, className, color, width }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    fetch(src)
      .then((response) => response.text())
      .then((data) => {
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(data, "image/svg+xml");

        const svgElement = svgDoc.documentElement;
        svgElement.removeAttribute("xmlns:a");

        if (
          !svgElement.getAttribute("viewBox") &&
          svgElement.getAttribute("width")
        ) {
          svgElement.setAttribute(
            "viewBox",
            `0 0 ${svgElement.getAttribute("width")} ${svgElement.getAttribute(
              "height"
            )}`
          );
        }

        svgElement.style.fill = color;
        svgElement.setAttribute("width", width);
        wrapperRef.current.innerHTML = "";
        wrapperRef.current.appendChild(svgElement);
      });
  }, [src, color, width]);

  return <div className={`img-wrapper ${className}`} ref={wrapperRef}></div>;
};

export default ColorChanging;
