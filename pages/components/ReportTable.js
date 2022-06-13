
function ReportTable(props) {
    if (props.customersCountList.length === 0) {
        return (<h2 className="">No Cockie Stands Available</h2>)
    }

    return (
        <div className=" grid grid-cols-1 grid-rows-1 justify-items-center">
            <table className="border-collapse table-fixed bg-emerald-400 w-3/4 border-2 border-black shadow-lg">
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
                            <tr>
                                <td>{props.location}</td>
                                <td>{props.t6AM}</td>
                                <td>{props.t7am}</td>
                                <td>{props.t8am}</td>
                                <td>{props.t9am}</td>
                                <td>{props.t10am}</td>
                                <td>{props.t11am}</td>
                                <td>{props.t12pm}</td>
                                <td>{props.t1pm}</td>
                                <td>{props.t2pm}</td>
                                <td>{props.t3pm}</td>
                                <td>{props.t4pm}</td>
                                <td>{props.t5pm}</td>
                                <td>{props.t6pm}</td>
                                <td>{props.t7pm}</td>
                                <td>{props.total}</td>
                                <td><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg></td>
                            </tr>
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td>{props.total6am}</td>
                        <td>{props.total7am}</td>
                        <td>{props.total8am}</td>
                        <td>{props.total9am}</td>
                        <td>{props.total10am}</td>
                        <td>{props.total11am}</td>
                        <td>{props.total12pm}</td>
                        <td>{props.total1pm}</td>
                        <td>{props.total2pm}</td>
                        <td>{props.total3pm}</td>
                        <td>{props.total4pm}</td>
                        <td>{props.total5pm}</td>
                        <td>{props.total6pm}</td>
                        <td>{props.total7pm}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default ReportTable