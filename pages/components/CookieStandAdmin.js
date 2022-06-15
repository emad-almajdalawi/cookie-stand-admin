
import Head from 'next/head'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { useState } from 'react'
// import responses from '../data'


function Home(props) {

    const [counter, setCounter] = useState(0);
    const [customersCountList, setcustomersCountList] = useState([]);

    function formHandler(event) {
        event.preventDefault();
        setCounter(counter + 1);

        let minCust = event.target.minCust.value;
        let maxCust = event.target.maxCust.value;
        let CreateCustomer = {
            location: event.target.location.value,
            t6AM: randomBetween(minCust, maxCust),
            t7AM: randomBetween(minCust, maxCust),
            t8AM: randomBetween(minCust, maxCust),
            t9AM: randomBetween(minCust, maxCust),
            t10AM: randomBetween(minCust, maxCust),
            t11AM: randomBetween(minCust, maxCust),
            t12PM: randomBetween(minCust, maxCust),
            t1PM: randomBetween(minCust, maxCust),
            t2PM: randomBetween(minCust, maxCust),
            t3PM: randomBetween(minCust, maxCust),
            t4PM: randomBetween(minCust, maxCust),
            t5PM: randomBetween(minCust, maxCust),
            t6PM: randomBetween(minCust, maxCust),
            t7PM: randomBetween(minCust, maxCust),
            // Total: 5,
        }


        setcustomersCountList([...customersCountList, CreateCustomer]);
        console.log(customersCountList)


        function randomBetween(start, end) {

            // used to import random value from array (could use with non-integer values, it uses the index)
            // let  randomNumber = responses[Math.floor(Math.random() * responses.length)];

            return Math.floor(Math.random() * end + start);
        }


    }

    return (
        <>
            <Head>
                <title>Cookie Stand Admin</title>
            </Head>
            <Header setLoggedIn={props.setLoggedIn} />
            <Main formHandler={formHandler} customersCountList={customersCountList} />
            <Footer counter={counter} />
        </>
    )
}

export default Home
