import React, { useEffect, useState } from 'react'

function Main() {
    const [coins, setCoins] = useState([]);

    async function getCoins() {
        await fetch("https://api.coinstats.app/public/v1/coins?skip=0&limit=10")
        .then(res=>res.json()).then(data=>setCoins(data.coins))
    }

    useEffect(()=>{
        getCoins()
    }, [])
  return (
    <div>
        <h1>Coins</h1>
        {coins.map(coin=>{
            return(<h1>{coin.name}</h1>)
        })}
    </div>
  )
}

export default Main