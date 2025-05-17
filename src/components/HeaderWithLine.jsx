import React from "react";

function HeaderWithLine({ header, subtext, h_level = "h2" }) {
  return (
    <div className="header_with_line">
      {h_level === "h1" ? (
        <h1
          className="large_header"
          dangerouslySetInnerHTML={{ __html: header }}
        />
      ) : (
        <h2
          className="large_header"
          dangerouslySetInnerHTML={{ __html: header }}
        />
      )}

      {subtext ? <h4 className="subtext">{subtext}</h4> : ""}
    </div>
  );
}

export default HeaderWithLine;
//     <h1 dangerouslySetInnerHTML={{ __html: header }} />
//   ) : h_level === "h2" ? (
//     <h2 dangerouslySetInnerHTML={{ __html: header }} />
//   ) : h_level === "h3" ? (
//     <h3 dangerouslySetInnerHTML={{ __html: header }} />
//   ) : h_level === "h4" ? (
//     <h4 dangerouslySetInnerHTML={{ __html: header }} />
//   ) : h_level === "h5" ? (
//     <h5 dangerouslySetInnerHTML={{ __html: header }} />
//   ) : (
//     <h6 dangerouslySetInnerHTML={{ __html: header }} />
//   )
