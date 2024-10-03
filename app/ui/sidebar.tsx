import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-20 bg-gray-800 text-white fixed top-0 left-0 h-full p-2 flex flex-col items-center overflow-y-auto">
      <div className="mb-4">
        <img src="/icon.svg" alt="Site Icon" className="w-10 h-10" />
      </div>
      {/* <nav>
        <ul className="space-y-4">
          <li>
            <a href="#" className="text-white block p-2 bg-gray-700 rounded">H</a>
          </li>
          <li>
            <a href="#" className="text-white block p-2 bg-gray-700 rounded">A</a>
          </li>
          <li>
            <a href="#" className="text-white block p-2 bg-gray-700 rounded">C</a>
          </li>
        </ul>
      </nav> */}
    </aside>
  );
};

export default Sidebar;