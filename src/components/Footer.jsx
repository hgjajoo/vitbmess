import React from "react";

const Footer = ({ developedBy = "Someone", maintainedBy = "Someone" }) => {
  return (
    <div className="bg-zinc-900 p-4 text-center text-zinc-400">
      <p>Developed by {developedBy}</p>
      <p>Maintained by {maintainedBy}</p>
    </div>
  );
};

export default Footer;
