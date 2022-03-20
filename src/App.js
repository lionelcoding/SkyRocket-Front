import React, { useEffect, useState } from "react";
import Routes from "./components/Routes";
import { UidContext } from "./components/AppContext";
import axios from "axios";
import Cookies from "js-cookie";


const App = () => {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      const token = Cookies.get('jwt')
      if (!token){
        return
      }
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        headers: {
          Authorization: `Bearer ${token}`
        },
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data);
        })
        .catch((err) => console.log("No token"));
    };
    fetchToken();

  }, [uid]);

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  )
}

export default App;