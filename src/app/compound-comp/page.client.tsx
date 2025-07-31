import React from "react";

export const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4">{children}</div>;
};

const Header = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4">{children}</div>;
};

const Footer = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4">{children}</div>;
};

const Body = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4">{children}</div>;
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
