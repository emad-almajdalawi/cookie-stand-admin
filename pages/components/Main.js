import Form from '../components/Form'
import { useState } from 'react'

function Main() {

  const [report, setReport] = useState({});

  function formHandle(event) {
    event.preventDefault();
    const CreateReport = {
      location: event.target.location?.value,
      minCust: event.target.minCust?.value,
      maxCust: event.target.maxCust?.value,
      avgCookies: event.target.avgCookies?.value,
    };

    setReport(CreateReport);
  }

  return (
    <main className='py-8 px-10 text-center'>
      <dev className='relative mx-auto my-10 self-center'>
        <Form formHandle={formHandle} />
      </dev>
      <br />
      <p>Report table comming soon</p>
      <p>{JSON.stringify(report)}</p>
    </main>
  )
}

export default Main