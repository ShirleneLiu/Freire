'use client';

import { useState } from 'react';

export default function Page({ params }: { params: { slug: string } }) {
  console.log('params:', params);
  const [inputValue, setInputValue] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Submitted value:', inputValue);
    // 在这里处理提交逻辑，例如发送请求到服务器
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 w-full">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-4xl">
        <form onSubmit={handleSubmit}>
          <label htmlFor="githubOrEmail" className="block text-lg font-medium text-gray-800 mb-4">
            Eligibility check: enter wallet address or user name
          </label>
          <div className="mt-1 flex">
            <input
              type="text"
              id="githubOrEmail"
              name="githubOrEmail"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 block w-full rounded-l-2xl border border-gray-300 focus:border-gray-500 focus:ring-gray-500 sm:text-sm p-3"
              placeholder="Address or username"
            />
            <button
              type="submit"
              className="ml-2 px-6 py-3 border border-transparent text-sm font-medium rounded-r-2xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Check
            </button>
          </div>
        </form>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-lg">
            <p className="text-xl font-medium text-gray-800">你有100点贡献值</p>
            <button
              onClick={handleClosePopup}
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              关闭
            </button>
          </div>
        </div>
      )}
    </div>
  );
}