import React from 'react'

const DataRow = ({ data }: any) => {
    return (
        <>
            {!data || data === null || data === undefined ? <h2>No Data</h2> :
                data?.map((element: any) => {
                    return (
                        <div className='DataIndexContainer grid grid-cols-5 '>
                            <div>{element?.name ?? "Hello Name"}</div>
                            <div>
                                <h2 className="contact-h1">
                                    Contact
                                </h2>
                                <p className="contact-data">
                                    {element?.contact ?? "random"}
                                </p>
                            </div>
                            <div>
                                <h2 className="contact-h1">
                                    city
                                </h2>
                                <p className="contact-data">
                                    {element?.city ?? "mumbai"}
                                </p>
                            </div>
                            <div>
                                <h2 className="contact-h1">
                                    state
                                </h2>
                                <p className="contact-data">
                                    {element?.state ?? "maharastra"}
                                </p>
                            </div>
                            <div>
                                <button className="view-btn">View Details</button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default DataRow