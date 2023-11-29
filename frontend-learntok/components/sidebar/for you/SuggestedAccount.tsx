import React from 'react'
import Account from './Account';

const SuggestedAccount = () => {
  return (
    <div className="w-full h-1/3  hidden xl:block">
      <p className="text-gray-500 font-semibold hidden xl:block">
        Suggested Accounts
      </p>

      <div className="w-full flex flex-col ">
        <Account />
        <Account />
        <Account />
      </div>
    </div>
  );
}

export default SuggestedAccount