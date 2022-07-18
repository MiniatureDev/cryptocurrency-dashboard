import React, { useState, useEffect } from 'react'
import Dashboard from './components/Dashboard';

import { useSelector } from "react-redux";
import Chart from './components/Chart';

function Main() {
   const limit = useSelector((state)=>state.limit.value);
   const[choice, setChoice] = useState("dashboard");

   const [coins, setCoins] = useState([]);

    async function getCoins() {
        await fetch(`https://api.coinstats.app/public/v1/coins?skip=0&limit=${limit}`)
        .then(res=>res.json()).then(data=>{
            setCoins(data.coins);
          })
        .catch(err=>console.error(err))
    }

    async function getDataForChart() {
      await fetch(`https://api.coinstats.app/public/v1/coins?skip=0&limit=${limit}`)
        .then(res=>res.json()).then(data=>{
          setChartData({
            labels:coins.map(coin=>coin.name),
            datasets:[{label:"Price change in 1 day", 
            data:coins.map(coin=>coin.priceChange1d)}]
          })})
        .catch(err=>console.error(err))
    }

    useEffect(()=>{
        getCoins();
        getDataForChart();
    }, [limit])

    const [chartData, setChartData] = useState({
      labels: coins.map((coin)=>coin.name),
      datasets: [{
        label: "Price change in 1 day",
        data: coins.map((coin)=>coin.priceChange1d)
      }]
    })


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
          className="btn btn-outline-success"
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
        <Chart data={chartData}/>
      )}
    </div>
  );
}

export default Main