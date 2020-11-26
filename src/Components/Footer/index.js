import React from "react";

const Footer = () => {
  const style = {
    footer: {
      maxHeight: "60px",
      marginTop: "8%",
      marginLeft: "10%",
      marginRight: "0%",
      marginBottom: "3%",
      textAlign: "center",
      backgroundColor: "grey",
      paddingTop: "810px",
    },
    a: {
      color: "darkWhite",
      position: "fixed",
    },
    p: {
      margin: "0 auto",
      padding: 0,
      color: "lightWhite",
      maxWidth: 335,
    },
  };

  return (
    <div style={style}>
      <a>Author: Yurii Kuzin</a>
    </div>
  );
};

export default Footer;
