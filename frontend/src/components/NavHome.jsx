import React from "react";
import "../css/Home.css";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { TbShoppingBag } from "react-icons/tb";
import { HiOutlineUser } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const NavHome = () => {
  return (
    <nav>
      <div className="TopNav">
        <div className="TopNavl">
         
          <h1>Lorem ipsum dolor</h1>
        </div>
        <div className="TopNavl">
          
          <h1>Lorem ipsum dolor</h1>
        </div>
        <div className="TopNavl">
          
          <h1>Lorem ipsum dolor</h1>
        </div>
      </div>
      <div className="midNav">
        <div className="main-logo">
          <img src="/src/assets/logo.svg" alt="" />
        </div>
        <div className="white-logo">
          <h1>Logo</h1>
        </div>
        <div className="nav-icons">
          <div className="nav-icon search-icon">
            <CiSearch />
          </div>
          <div className="nav-icon like-icon">
            <FaRegHeart />
          </div>
          <div className="nav-icon cart-icon">
            <TbShoppingBag />
          </div>
          <div className="nav-icon profile-icon">
            <HiOutlineUser />
          </div>
          <div className="nav-icon menu-icon">
            <FaBars />
          </div>
          <div className="nav-icon language-selector">
            <h1>Eng</h1>
            <IoIosArrowDown className="arrow-icon" />
          </div>
        </div>
      </div>
      <div className="bottom-nav">
        <div className="bottom-nav-item">
          <h1>SHOP</h1>
          <h1>SKILLS</h1>
          <h1>ABOUT</h1>
          <h1>CONTACT us</h1>
        </div>
      </div>
    </nav>
  );
};

export default NavHome;
