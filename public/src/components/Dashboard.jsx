import React, { useState, useEffect } from 'react'
import Coin from './Coin';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeLimit } from "../Globals";

function Dashboard(props) {

    const dispatch = useDispatch();
    const limit = useSelector((state)=>state.limit.value);

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
                    dispatch(changeLimit(e.target.value))
                }}
                />
            </div>
        </div>
        <div className='container-fluid row'>
            {props.coins.map(coin=>{
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