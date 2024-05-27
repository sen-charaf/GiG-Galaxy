import React from "react";

function MessageInput() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="bg-white border-y h-full flex justify-center items-center">
      <div className="w-full px-5">
        <form onSubmit={handleSubmit}>
          <div className="flex w-full">
            <input
              className="border rounded rounded-r-none outline-none  w-full p-2 "
              type="text"
              placeholder="Type a message"
            />
            <button className=" border w-24 bg-white border-primary text-primary hover:bg-primary hover:text-white transition-all duration-150 active:bg-purple-700 rounded rounded-l-none  p-2">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MessageInput;
