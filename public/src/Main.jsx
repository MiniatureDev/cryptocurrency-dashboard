import React, { useState, useEffect } from 'react'
import Dashboard from './components/Dashboard';

import { useSelector } from "react-redux";

function Main() {
   const limit = useSelector((state)=>state.limit.value);
   const[choice, setChoice] = useState("dashboard");

   const [coins, setCoins] = useState([]);

    async function getCoins() {
        await fetch(`https://api.coinstats.app/public/v1/coins?skip=0&limit=${limit}`)
        .then(res=>res.json()).then(data=>setCoins(data.coins))
        .catch(err=>console.error(err))
    }

    useEffect(()=>{
        getCoins()
    }, [limit])


  return (
    <div className="container ml-5 mt-3">
      <div className="row">
        <button
          className="btn btn-outline-primary"
          onClick={() => {
            setChoice("dashboard");
          }}
        >
          <h1>Dashboard</h1>
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => {
            setChoice("chart");
          }}
        >
          <h1>Chart</h1>
        </button>
      </div>
      {choice == "dashboard" ? (
        <Dashboard coins={coins} />
      ) : (
        <h1>chart</h1>
      )}
    </div>
  );
}

export default Main