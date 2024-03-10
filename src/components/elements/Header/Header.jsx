import React from 'react';
import { IMAGES } from '../../../config';
import Button from '../Button/Button';

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white px-[100px] h-[98px]">
      <img src={IMAGES.LOGO} alt="logo" width={224} height={28} />
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
  );
};

export default Header;
