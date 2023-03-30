import React from "react";

const Footer = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <footer className="footer">
      <div className="inner">
        <p>Copyright ⓒ choj96 All Right Reserved.</p>
        <div className="contect"></div>
      </div>
    </footer>
  );
};

export default Footer;
