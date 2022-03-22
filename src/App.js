import React, { useEffect, useState } from "react";
import Routes from "./components/Routes";
import { UidContext } from "./components/AppContext";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.actions";


const App = () => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      const token = Cookies.get('jwt')
      // if (!token){
      //   return 
      // }
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        headers: {
          Authorization: `Bearer ${token}`
        },
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data.user._id);
        })
        .catch((err) => console.log("No token",err));
    };
    fetchToken();
    if(uid) dispatch(getUser(uid))
  }, [uid,dispatch]);

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  )
}

export default App;