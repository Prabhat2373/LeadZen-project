import React from 'react'

const DataRow = ({ data }: any) => {
    // console.log("DATA :", data);
    const [ID, setID] = React.useState("");
    const [Expand, setExpand] = React.useState(false);
    // console.log("EXPAND :", Expand)
    return (
        <>
            {!data || data === null || data === undefined ? <div className='flex justify-center items-center h-full'>
                <svg className='svg' viewBox="25 25 50 50">
                    <circle r="20" cy="50" cx="50"></circle>
                </svg>
            </div> :
                data?.map((element: any) => {
                    return (
                        <>

                            <div className='DataIndexContainer grid grid-cols-5 '>
                                <div>{element?.name ?? "Hello Name"}</div>
                                <div>
                                    <h2 className="contact-h1">
                                        Contact
                                    </h2>
                                    <p className="contact-data text-sm">
                                        {element?.phone ?? "random"}
                                    </p>
                                </div>
                                <div>
                                    <h2 className="contact-h1">
                                        city
                                    </h2>
                                    <p className="contact-data">
                                        {element?.address?.city ?? "mumbai"}
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
                                    <button className="view-btn" onClick={() => {
                                        setID(element?.id)
                                        setExpand((prev) => !prev)
                                        if (ID !== element?.id) {
                                            setExpand(true)
                                        }
                                        // console.log(Expand)
                                    }}>{Expand && element?.id === ID ? "Hide" : "View"} Details</button>
                                </div>

                            </div>
                            {Expand === true && element?.id === ID && <div className="expanded transition-all duration-300">
                                <div className="expand-row mx-10 my-auto p-4">
                                    <div className='font-semibold'>
                                        <h1>Description</h1>
                                        <p>{element?.company?.catchPhrase ?? "N.A."}</p>
                                    </div>
                                    <div className="expand-grid grid grid-cols-2 gap-4 pt-4">
                                        <div>
                                            <h1 className='font-semibold'>Contact Person</h1>
                                            <p>{element?.name ?? "N.A."}</p>
                                        </div> <div>
                                            <h1 className='font-semibold'>Address</h1>
                                            <p>{`${element?.address?.city} ${element?.address?.street} ${element?.address?.zipcode}`}</p>
                                        </div> <div>
                                            <h1 className='font-semibold'>Designation</h1>
                                            <p>{element?.company?.name}</p>
                                        </div> <div>
                                            <h1 className='font-semibold'>City</h1>
                                            <p>{element?.address?.city}</p>
                                        </div> <div>
                                            <h1 className='font-semibold'>Emails</h1>
                                            <p>{element?.email}</p>
                                        </div> <div>
                                            <h1 className='font-semibold'>State</h1>
                                            <p>{element?.address?.street}</p>
                                        </div> <div>
                                            <h1 className='font-semibold'>Phone</h1>
                                            <p>{element?.phone}</p>
                                        </div> <div>
                                            <h1 className='font-semibold'>Country</h1>
                                            <p>{element?.country ?? "India"}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </>
                    )
                })
            }
        </>
    )
}

export default DataRow