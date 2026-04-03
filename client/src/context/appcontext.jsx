// src/context/AppContext.jsx
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setuser] = useState(null);
  const [showlogin, setshowlogin] = useState(false);
  const [token, settoken] = useState(localStorage.getItem("token") || "");
  const [credit, setcredit] = useState(0);

  const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  
  const getAuthHeaders = () => ({
    headers: { Authorization: `Bearer ${token}` },
  });

  
  const loadCreditData = async () => {
    if (!token) return; 

    try {
      const { data } = await axios.get(`${backendUrl}/api/user/credit`, getAuthHeaders());
      if (data.success) {
        setcredit(data.creditBalance);
        setuser(data.user);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
      
      if (error.response?.status === 401) logout();
    }
  };

  
  const generateImage = async (prompt) => {
    if (!token) {
      toast.error("Login required to generate images.");
      setshowlogin(true);
      return null;
    }

    try {
      const { data } = await axios.post(
        `${backendUrl}/api/image/generateImage`,
        { prompt },
        getAuthHeaders()
      );

      if (data.success) {
    console.log("Generated image:", data.resultImage);
    loadCreditData();
    return data.resultImage;
}

      else {
        toast.error(data.message);
        await loadCreditData();
        if (data.creditBalance === 0) navigate("/buy");
        return null;
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
      return null;
    }
  };

  
  const logout = () => {
    localStorage.removeItem("token");
    settoken("");
    setuser(null);
    setcredit(0);
  };

  
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      loadCreditData();
    }
  }, [token]);

  const value = {
    user,
    setuser,
    showlogin,
    setshowlogin,
    token,
    settoken,
    credit,
    setcredit,
    backendUrl,
    loadCreditData,
    logout,
    generateImage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;