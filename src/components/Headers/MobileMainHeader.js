import React, { useState } from "react";
import Link from "next/link";
import CommonLayout from "../Layouts/CommonLayout";
import menu from "../Menus/Menu";
import ActiveMenu from "./ActiveMenu";

const MobileMainHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="py-3 shadow-md">
      <CommonLayout>
        <div className="lg:flex justify-between items-center">
          <div>
            <img className="w-20" src="/assets/logo.svg" alt="RealMate" />
          </div>
          <div
            className="fixed top-0 right-0 h-screen w-4/5 text-right lg:flex lg:items-center lg:space-x-4 lg:pr-4 px-3 py-3">
            <button
              className=" text-3xl focus:outline-none"
              onClick={toggleMenu}
            >
              {menuOpen ? "X" : "☰"}
            </button>
            <ul className={`${menuOpen ? "text-right" : "hidden"
              }`}>
              {menu.main.items.map((item, index) => (
                <li key={index} onClick={toggleMenu} className="py-2">
                  <ActiveMenu path={item.path} menu={item.title} />
                </li>
              ))}
              <br className="py-2" />
              <li className="py-2">
                <Link href={"signin"} onClick={toggleMenu}>
                  <span>Sign in</span>
                </Link>
              </li>
              <li className="py-2">
                <Link href={"/register"} onClick={toggleMenu}>
                  <span className="btn-grade-sm">Register</span>
                </Link>
              </li>
            </ul>
            {menuOpen &&
              <div style={{ zIndex: -1, opacity: 0.5 }} className="fixed top-0 right-0 h-full w-full bg-gradient-to-l from-tertiary to-btngrad"></div>
            }
          </div>
        </div>
      </CommonLayout>
    </header>
  );
};

export default MobileMainHeader;