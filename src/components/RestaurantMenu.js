import { useEffect,useState } from "react";
import {useParams} from "react-router-dom";
import {MENU_API} from "../utils/constant";
function RestaurantMenu() {
  const [resInfo,setresInfo] = useState(null);
  const {resId} = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(MENU_API + resId);
    const data = await response.json();
    console.log(data);
    setresInfo(data.data);
  };

  if (resInfo === null) {
    return <div><h1>Loading...</h1></div>
  }

  const {name, cuisines} = resInfo?.cards[2]?.card?.card?.info ?? {};
  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ?? {};

  return (
    <div className="cusions-menus">
      <h1>{name}</h1>
      <h2>List of Menu</h2>
      <h3>{Array.isArray(cuisines) ? cuisines.join(", ") : ""}</h3>
      <ol>
        {itemCards && itemCards.map((element) => (
          <li key={element.card.info.id}>{element.card.info.name}</li>
        ))}
      </ol>
    </div>
  );
}


export default RestaurantMenu;

