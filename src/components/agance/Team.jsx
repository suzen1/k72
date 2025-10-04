import React from "react";

const Team = () => {
  const value = [
    { name: "Suzen", work: "Developer" },
    { name: "Raj Nadane", work: "Designer" },
    { name: "Mahavir", work: "Manager" },
    { name: "Avinash", work: "Video Editor" ,style:"border-b-1"},
  ];

  return (
    <div>
      <div className="main h-screen w-full text-white mt-5 relative ">
        {value.map((item, index) => (
            
          <div
            key={item.name}
            className={`name-div h-[12vh] w-full border-t-1 relative overflow-hidden  ${
              index === value.length - 1 ? ' border-b-1' : item.style
            }`}
          >
            <div className="overlay absolute bg-[#D3FD50] top-[-100%] h-full w-full transition-all duration-1000 ease-in-out"></div>
            <div
              className="TeamName relative flex justify-between items-center h-full px-3    font-semibold overflow-hidden"
            >
              <h1 className="uppercase text-ellipsis whitespace-nowrap overflow-hidden text-[1.5vw] ">
                {item.work}
              </h1>
              <h1 className="uppercase text-ellipsis whitespace-nowrap overflow-hidden   text-[3.5vw]">
                {item.name} 
              </h1>
            </div>
          </div>
        ))}
        </div>
      
    </div>
  );
};

export default Team;
