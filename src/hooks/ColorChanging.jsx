//old version of coloChanging hook

import React, { useEffect } from "react";
import $ from "jquery";

const ColorChanging = ({ src, className, color, width }) => {
  useEffect(() => {
    $("div.img-wrapper").each(function () {
      var $wrapper = $(this);
      var imgURL = $wrapper.attr("data-src");
      $.get(
        imgURL,
        function (data) {
          var $svg = $(data).find("svg");
          $svg = $svg.removeAttr("xmlns:a");
          if (!$svg.attr("viewBox") && $svg.attr("width")) {
            $svg.attr("viewBox", "0 0 " + " " + $svg.attr("width"));
          }
          $svg.css("fill", color);
          $svg.attr("width", width);
          $wrapper.html($svg);
        },
        "xml"
      );
    });
  }, [src, color, width]);

  return <div className={`img-wrapper ${className}`} data-src={src}>
   
  </div>;
};

export default ColorChanging;
