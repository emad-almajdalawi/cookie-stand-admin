
import Head from 'next/head'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { useState, useEffect } from 'react'
// import responses from '../data'
import axios from "axios";


function CookieStandAdmin(props) {

    const [counter, setCounter] = useState(0);

    function formHandler(e) {
        e.preventDefault();
        setCounter(counter + 1);

        const config = {
            headers: {
                'Authorization': `Bearer ${props.token}`
            }
        }
        const data = {
            location: e.target.location?.value,
            minimum_customers_per_hour: e.target.minimum_customers_per_hour?.value,
            maximum_customers_per_hour: e.target.maximum_customers_per_hour?.value,
            average_cookies_per_sale: e.target.average_cookies_per_sale?.value,
            owner: '2' // hard coded, it should be :  props.*****.owner_id, the ***** is for somthing getting the data based on token
        }
        axios.post("https://cookies-stand-401.herokuapp.com/api/v1/cookie-stand/", data, config).then(res => {
            getData()
        })
            .catch(err => { console.log(err) })
    }


    const [data, setData] = useState([])

    const getData = async () => {
        const config = {
            headers: {
                'Authorization': `Bearer ${props.token}`
            }
        }
        await axios.get("https://cookies-stand-401.herokuapp.com/api/v1/cookie-stand/", config).then(data => {
            setData(data.data.map(record => ({
                ...record, // (...) is a spreader operator, it is used to spread the data from the object. and the {} is to create a new object
                t6AM: randomBetween(record.minimum_customers_per_hour, record.maximum_customers_per_hour),
                t7AM: randomBetween(record.minimum_customers_per_hour, record.maximum_customers_per_hour),
                t8AM: randomBetween(record.minimum_customers_per_hour, record.maximum_customers_per_hour),
                t9AM: randomBetween(record.minimum_customers_per_hour, record.maximum_customers_per_hour),
                t10AM: randomBetween(record.minimum_customers_per_hour, record.maximum_customers_per_hour),
                t11AM: randomBetween(record.minimum_customers_per_hour, record.maximum_customers_per_hour),
                t12PM: randomBetween(record.minimum_customers_per_hour, record.maximum_customers_per_hour),
                t1PM: randomBetween(record.minimum_customers_per_hour, record.maximum_customers_per_hour),
                t2PM: randomBetween(record.minimum_customers_per_hour, record.maximum_customers_per_hour),
                t3PM: randomBetween(record.minimum_customers_per_hour, record.maximum_customers_per_hour),
                t4PM: randomBetween(record.minimum_customers_per_hour, record.maximum_customers_per_hour),
                t5PM: randomBetween(record.minimum_customers_per_hour, record.maximum_customers_per_hour),
                t6PM: randomBetween(record.minimum_customers_per_hour, record.maximum_customers_per_hour),
                t7PM: randomBetween(record.minimum_customers_per_hour, record.maximum_customers_per_hour),
            }))
            )
            console.log(data)
        })
            .catch(err => { console.log(err) })
    }

    function randomBetween(start, end) {

        // used to import random value from array (could use with non-integer values, it uses the index)
        // let  randomNumber = responses[Math.floor(Math.random() * responses.length)];

        return Math.floor(Math.random() * end + start);
    }

    useEffect(() => {
        getData()
    }, [])



    return (
        <>
            <Head>
                <title>Cookie Stand Admin</title>
            </Head>
            <Header setToken={props.setToken} />
            <Main formHandler={formHandler} token={props.token} getData={getData} data={data} />
            <Footer counter={counter} />
        </>
    )
}

export default CookieStandAdmin
