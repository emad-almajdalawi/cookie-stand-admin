import Form from '../components/Form'
import { useState, useEffect } from 'react'
import ReportTable from './ReportTable'
import axios from "axios";

function Main(props) {


  const [formData, setFormData] = useState({})

  const updateData = async (e) => {
    e.preventDefault()
    const config = {
      headers: {
        'Authorization': `Bearer ${props.token}`
      }
    }
    await axios.put(`https://cookies-stand-401.herokuapp.com/api/v1/cookie-stand/${formData.id}/`, formData, config).then(res => {
      props.getData()
      setFormData({})
      document.getElementById('form').reset()
    })
      .catch(err => { console.log(err) })
  }

  return (
    <main className='py-8 px-10 text-center'>
      <dev className='relative mx-auto my-10 self-center'>
        <Form formHandler={props.formHandler} formData={formData} setFormData={setFormData} updateData={updateData} />
      </dev>
      <br />
      <ReportTable token={props.token} setFormData={setFormData} getData={props.getData} data={props.data} />
    </main>
  )
}

export default Main