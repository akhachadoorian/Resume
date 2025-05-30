import React from "react";

function HeaderWithLine({
  header_line_1,
  header_line_2,
  subtext,
  h_level = "h2",
  body,
  theme = 'dark',
}) {
  return (
    <div className={`header_with_line ${theme}`} data-scroll>
      {h_level === "h1" ? (
        <div className="header_with_line-inner" data-scroll>
          <h1 className="large_header" data-scroll-speed="4">{header_line_1}</h1>
          <h1 className="large_header" data-scroll-speed="2">{header_line_2}</h1>
        </div>
      ) : (
        <div className="header_with_line-inner">
          <h2 className="large_header" data-scroll-speed="3">{header_line_1}</h2>
          <h2 className="large_header" data-scroll-speed="2">{header_line_2}</h2>
        </div>
      )}

      {subtext ? <h4 className="subtext">{subtext}</h4> : ""}
      {body ? <p className="body_text">{body}</p> : ''}
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
