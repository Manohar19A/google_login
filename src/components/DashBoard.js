import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline";
const DashBoard = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [load, setLoad] = useState(false);
  const [location, setLocation] = useState(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.312817&lng=80.418503"
  );
  const isOnline = useOnline();
  useEffect(() => {
    fetchResList();
  }, [location]);
  const fetchResList = async () => {
    setLoad(true);
    const res = await fetch(location);
    const json = await res.json();
    setResList(
      json?.data?.cards[1]?.card.card.gridElements.infoWithStyle.restaurants
    );
    setLoad(false);
  };
  if (!isOnline) {
    return <h1>You are Offline</h1>;
  }
  if (!resList) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="search p-1 m-2 rounded-xl">
        <input
          data-testid="input"
          className="p-2 border-solid border-2 border-black rounded-md"
          // className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          type="search"
          placeholder="Search Restaurents"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="bg-cyan-400 p-2 m-2 rounded-md text-white hover:bg-cyan-800"
          onClick={() => {
            setResList(resList.filter((i) => i.info.avgRating > 4));
          }}
        >
          Top Restaurents
        </button>
        <select
          value={location}
          className="p-2 m-2 bg-rose-600 text-white rounded-md"
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.312817&lng=80.418503">
            Guntur
          </option>
          <option value="https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.43378466891938&lng=78.38146830163323">
            Hyderabad
          </option>
          <option value="https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.5057232&lng=80.049922">
            Ongole
          </option>
          <option value="https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.6818877&lng=77.6005911">
            Ananthapuram
          </option>
          <option value="https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5061743&lng=80.6480153">
            Vijayawada
          </option>{" "}
        </select>
      </div>
      {load ? (
        <Shimmer />
      ) : (
        <div
          data-testid="res-list"
          className="flex p-5 m-5 flex-wrap gap-4 rounded-md hover:border-red-700"
        >
          {resList
            ?.filter((i) =>
              i.info.name.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((restaurent, index) => (
              <Link
                className="linkitem"
                key={restaurent.info.id}
                to={`/restaurent/${restaurent.info.id}`}
              >
                {" "}
                <ResCard restaurants={restaurent} />
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};
export default DashBoard;





