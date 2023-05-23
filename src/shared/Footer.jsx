import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10  border-t-2">
      <div>
        <img className="w-16" src="./../../public/cloneHead.png" alt="" />
        <div>
          <p className="text-3xl font-bold">Imperial Toys</p>
          <div></div>
        </div>
      </div>
      <div>
        <span className="text-xl font-bold">Services</span>
        <Link className="link link-hover">Toys</Link>
        <Link className="link link-hover">Comics</Link>
        <Link className="link link-hover">Design</Link>
        <Link className="link link-hover">Advertisement</Link>
      </div>
      <div>
        <span className="text-xl font-bold">Company</span>
        <Link className="link link-hover">About us</Link>
        <Link className="link link-hover">Contact</Link>
        <Link className="link link-hover">Career</Link>
        <Link className="link link-hover">Press kit</Link>
      </div>
      <div>
        <span className="text-xl font-bold">Legal</span>
        <Link className="link link-hover">Terms of use</Link>
        <Link className="link link-hover">Privacy policy</Link>
        <Link className="link link-hover">Cookie policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
