import React, { useState, useEffect } from 'react'
import Coin from './Coin';

function Dashboard() {
    const [limit, setLimit] = useState(10)
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
    <div className='container py-5'>
        <div className='row'>
            <div className='col-md-8'></div>
            <div className='col-md'>
                <input
                type="number"
                placeholder='Select the number of coins'
                min="0"
                max="100"
                onChange={(e)=>{
                    setLimit(e.target.value)
                }}
                />
            </div>
        </div>
        <div className='container-fluid row'>
            {coins.map(coin=>{
                return(
                    <Coin
                        rank={coin.rank}
                        name={coin.name}
                        icon={coin.icon}
                        price={coin.price}
                        url={coin.websiteUrl}
                    />
                )
            })}
        </div>

    </div>
  )
}

export default Dashboard