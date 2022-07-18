import React, { useEffect } from 'react'
import { Bar, Line } from "react-chartjs-2"

import { Chart as ChartJS } from "chart.js/auto"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeLimit } from "../Globals";

function Chart({data}) {

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
            <Line data={data} />
        </div>

    </div>
  )
}

export default Chart