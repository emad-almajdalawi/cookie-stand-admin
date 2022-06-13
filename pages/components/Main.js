import Form from '../components/Form'
// import { useState } from 'react'
import ReportTable from './ReportTable'

function Main(props) {

  // This for creating JSON objects for the cookie stand data thar coms from the form.
  // const [report, setReport] = useState({});

  // function formHandle(event) {
  //   event.preventDefault();
  //   const CreateReport = {
  //     location: event.target.location?.value,
  //     minCust: event.target.minCust?.value,
  //     maxCust: event.target.maxCust?.value,
  //     avgCookies: event.target.avgCookies?.value,
  //   };

  //   setReport(CreateReport);
  // }


  return (
    <main className='py-8 px-10 text-center'>
      <dev className='relative mx-auto my-10 self-center'>
        <Form formHandler={props.formHandler} />
      </dev>
      <br />
      {/* <p>{JSON.stringify(report)}</p> */}
        <ReportTable customersCountList={props.customersCountList} />
    </main>
  )
}

export default Main