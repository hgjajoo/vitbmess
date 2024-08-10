import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-zinc-800 p-4 rounded-md mb-8 text-center">
      <Link to="/" className="text-white px-3 py-2 rounded-md hover:bg-gray-700">Home</Link>
      <Link to="/mayuri" className="text-white px-3 py-2 rounded-md hover:bg-gray-700">Mayuri</Link>
      <Link to="/crcl" className="text-white px-3 py-2 rounded-md hover:bg-gray-700">CRCL</Link>
      <Link to="/ab" className="text-white px-3 py-2 rounded-md hover:bg-gray-700">AB</Link>
      <Link to="/contribute" className="text-white px-3 py-2 rounded-md hover:bg-gray-700">Contribute</Link>
    </div>
  );
};

export default Header;
