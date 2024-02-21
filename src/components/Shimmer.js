import React from "react";

const Shimmer = () => {
  return (
    
    <div className="flex p-5 m-5 flex-wrap gap-4" >
      {
        Array(10).fill("").map((e,index)=>(
            <div key={index} className="bg-slate-200 w-52 h-72">
            <div className="res-card text-wrap">  
            </div>
          </div>
        ))
      }
       {/* <div className="shimmer-card"></div>
    //   <div className="shimmer-card"></div>
    //   <div className="shimmer-card"></div> 
    //   <div className="shimmer-card"></div>
    //   <div className="shimmer-card"></div> 
    //   <div className="shimmer-card"></div>
    //   <div className="shimmer-card"></div> 
    //   <div className="shimmer-card"></div>
    //   <div className="shimmer-card"></div>
    //   <div className="shimmer-card"></div>  */}
     </div>
  );
};

export default Shimmer;
