
function ReportTable(props) {
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
                                <td>{props.c6am}</td>
                                <td>{props.c7am}</td>
                                <td>{props.c8am}</td>
                                <td>{props.c9am}</td>
                                <td>{props.c10am}</td>
                                <td>{props.c11am}</td>
                                <td>{props.c12pm}</td>
                                <td>{props.c1pm}</td>
                                <td>{props.c2pm}</td>
                                <td>{props.c3pm}</td>
                                <td>{props.c4pm}</td>
                                <td>{props.c5pm}</td>
                                <td>{props.c6pm}</td>
                                <td>{props.c7pm}</td>
                                <td>{props.total}</td>
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