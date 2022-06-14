
function ReportTable(props) {
    if (props.customersCountList.length === 0) {
        return (<h2 className="">No Cockie Stands Available</h2>)
    }

    return (
        <div className=" grid grid-cols-1 grid-rows-1 justify-items-center">
            <table className="border-collapse  bg-emerald-400 w-3/4 shadow-lg rounded">
                <thead className="bg-emerald-600">
                    <th>Location</th>
                    <th>6 AM</th>
                    <th>7 AM</th>
                    <th>8 AM</th>
                    <th>9 AM</th>
                    <th>10 AM</th>
                    <th>11 AM</th>
                    <th>12 PM</th>
                    <th>1 PM</th>
                    <th>2 PM</th>
                    <th>3 PM</th>
                    <th>4 PM</th>
                    <th>5 PM</th>
                    <th>6 PM</th>
                    <th>7 PM</th>
                    <th>Total</th>
                </thead>
                <tbody>
                    {
                        props.customersCountList.map(customersCount => {
                            return (
                                <tr>
                                    <td className="grid grid-cols-3 grid-rows-1 justify-items-center"> <div className="col-span-2 ">{customersCount.location}</div> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg></td>
                                    <td>{customersCount.t6AM}</td>
                                    <td>{customersCount.t7AM}</td>
                                    <td>{customersCount.t8AM}</td>
                                    <td>{customersCount.t9AM}</td>
                                    <td>{customersCount.t10AM}</td>
                                    <td>{customersCount.t11AM}</td>
                                    <td>{customersCount.t12PM}</td>
                                    <td>{customersCount.t1PM}</td>
                                    <td>{customersCount.t2PM}</td>
                                    <td>{customersCount.t3PM}</td>
                                    <td>{customersCount.t4PM}</td>
                                    <td>{customersCount.t5PM}</td>
                                    <td>{customersCount.t6PM}</td>
                                    <td>{customersCount.t7PM}</td>
                                    <td>{
                                        Object.keys(customersCount).filter(key => key !== "location").map(key =>
                                            parseInt(customersCount[key])
                                        ).reduce((total, number) => total += number, 0)
                                    }</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot className="bg-emerald-600">
                    <tr>
                        <td>Total</td>
                        {
                            (Object.keys(props.customersCountList[0]).filter(key => key !== "location").map(key =>
                                <td>{props.customersCountList.reduce((total, data) => total += parseInt(data[key]), 0)}</td>
                            ))
                        }
                        <td>{props.customersCountList.reduce((total, data) => total +=
                            parseInt(data.t6AM) + parseInt(data.t7AM) + parseInt(data.t8AM) + parseInt(data.t9AM) + parseInt(data.t10AM) + parseInt(data.t11AM) + parseInt(data.t12PM) + parseInt(data.t1PM) + parseInt(data.t2PM) + parseInt(data.t3PM) + parseInt(data.t4PM) + parseInt(data.t5PM) + parseInt(data.t6PM) + parseInt(data.t7PM)
                            , 0)}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default ReportTable