// ** React Imports
import { useEffect, useState } from "react";

// ** Axios Import
import axios from "axios";

/**
 * direct api for nav items we can set here
 */
const ServerSideNavItems = () => {
  // ** State
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios.get("/api/vertical-nav/data").then((response) => {
      const menuArray = response.data;

      setMenuItems(menuArray);
    });
  }, []);

  return { menuItems };
};

export default ServerSideNavItems;
