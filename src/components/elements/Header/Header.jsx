import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IMAGES } from '../../../config';
import Button from '../Button/Button';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="max-lg:hidden flex justify-between items-center bg-white px-[100px] min-h-[98px] flex-wrap gap-5">
        <img loading="lazy" src={IMAGES.LOGO} alt="logo" width={224} height={28} />
        <ul className="flex items-center gap-[50px]">
          <li>
            <a className="active" href="/">Home</a>
          </li>
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/">Story</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Showcase</a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <Button title="Contact Us" variant="border" />
          <Button title="Sign In" variant="full" />
        </div>
      </header>
      <div className="max-lg:flex justify-between items-center hidden py-[30px] bg-white relative px-2">
        <img loading="lazy" src={IMAGES.LOGO} alt="logo" width={224} height={28} />
        <RxHamburgerMenu className="cursor-pointer" size={30} onClick={() => setOpen(!open)} />
        <div className={['absolute -bottom-[370px] left-0 right-0 w-full z-50 bg-white transition-all ease-in-out duration-300 overflow-hidden', open ? 'max-h-[380px]' : 'max-h-0'].join(' ')}>
          <ul className="flex flex-col items-center gap-5 mt-5">
            <li>
              <a className="active" href="/">Home</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Story</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Showcase</a>
            </li>
          </ul>
          <div className="flex flex-col justify-center items-center gap-4 my-5">
            <Button title="Contact Us" variant="border" />
            <Button title="Sign In" variant="full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
