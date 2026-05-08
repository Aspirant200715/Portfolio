import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-6 fixed top-0 z-20 ${
        scrolled ? "bg-[#0a0c10]/60 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      } transition-all duration-500`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-3'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* Hybrid 'S' & Profile Logo */}
          <div className='relative w-12 h-12 flex items-center justify-center transform hover:rotate-6 transition-all duration-300'>
            <div className='w-full h-full rounded-xl bg-gradient-to-br from-[#58a6ff] to-[#bc8cf2] flex items-center justify-center shadow-[0_0_20px_rgba(88,166,255,0.4)]'>
              <span className='text-white text-3xl font-black italic'>S</span>
            </div>
            <div className='absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-[#0a0c10] overflow-hidden shadow-lg'>
              <img src="/soham.jpg" alt="soham" className='w-full h-full object-cover' />
            </div>
          </div>
          <p className='text-white text-[22px] font-extrabold cursor-pointer flex tracking-tighter'>
            Soham &nbsp;
            <span className='sm:block hidden font-semibold text-[#bc8cf2]'> | AI Engineer</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-12'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white scale-110" : "text-secondary"
              } hover:text-[#58a6ff] text-[20px] font-bold cursor-pointer transition-all duration-300 hover:tracking-widest`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
