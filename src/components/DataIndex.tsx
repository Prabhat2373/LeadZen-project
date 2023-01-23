import React, { useEffect } from 'react'
import DataRow from './DataRow';
import Pagination from './Pagination';
import { useTestQuery } from '../services/rtk/CoreApi';

const DataIndex = () => {
  const { data: ApiRes } = useTestQuery("");
  const [Response, setResponse] = React.useState([])
  useEffect(() => {
    setResponse(ApiRes)
  }, [ApiRes])

  const Data = [{
    name: "Random",
    contact: "123345",
    city: "PUNE",
    state: "maharastra"
  }, {
    name: "Random",
    contact: "123345",
    city: "PUNE",
    state: "maharastra"
  }, {
    name: "Random",
    contact: "123345",
    city: "PUNE",
    state: "maharastra"
  }]
  // console.log("API RESPONSE :", ApiRes)
  // console.log("STATE RESPONSE :", Response)
  return (
    <>
      <div className='h-[85vh] overflow-scroll'>
        <DataRow data={Response} />
      </div>
      <Pagination PageSize={Response?.length ?? 0} />
    </>
  )
}

export default DataIndex;