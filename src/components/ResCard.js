import { CDN_URL } from "../utils/constants"

const ResCard=({restaurants})=>{
    const {info}=restaurants
    const {cloudinaryImageId,avgRating,cuisines,locality,areaName,sla}=info
    return(
    <div className="w-52 h-auto rounded-md bg-white-800 hover:border-2 border-black shadow-xl">
      <div className="res-card text-wrap p-2">
        <img className="res-logo"src={CDN_URL+cloudinaryImageId} alt="images"/>
        <h4 className="font-bold text-xl">{info.name} </h4><h5 className="float-right">{avgRating}⭐</h5>
        <article className="break-words"><h5 >{cuisines.join(",")}</h5></article>
        <h5 className="text-wrap">{locality} ,{areaName}</h5>
        <h5>{sla.deliveryTime}MIN</h5>
       
  
      </div>
      
    </div>
    )
  }
  export default ResCard