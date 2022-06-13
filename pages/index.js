
import Head from 'next/head'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { useState } from 'react'
import responses from '../data'


function Home() {

  const [counter, setCounter] = useState(0);
  const [customersCountList, setcustomersCountList] = useState([]);

  function formHandler(event) {
    event.preventDefault();
    setCounter(counter + 1);

    let minCust = event.target.minCust.value;
    let maxCust = event.target.maxCust.value;
    let CreateCustomer = {
      location: event.target.location.value,
      '6 AM': randomBetween(minCust, maxCust),
      '7 AM': randomBetween(minCust, maxCust),
      '8 AM': randomBetween(minCust, maxCust),
      '9 AM': randomBetween(minCust, maxCust),
      '10 AM': randomBetween(minCust, maxCust),
      '11 AM': randomBetween(minCust, maxCust),
      '12 PM': randomBetween(minCust, maxCust),
      '1 PM': randomBetween(minCust, maxCust),
      '2 PM': randomBetween(minCust, maxCust),
      '3 PM': randomBetween(minCust, maxCust),
      '4 PM': randomBetween(minCust, maxCust),
      '5 PM': randomBetween(minCust, maxCust),
      '6 PM': randomBetween(minCust, maxCust),
      '7 PM': randomBetween(minCust, maxCust),
      Total: 5,
    }


    setcustomersCountList([...customersCountList, CreateCustomer]);
    console.log(customersCountList)


    function randomBetween(start, end) {

      // used to import random value from array (could use with non-integer values, it uses the index)
      // let  randomNumber = responses[Math.floor(Math.random() * responses.length)];

      let random = Math.floor(Math.random() * (end - start + 1)) + start;
      let closestAnswer = responses[0]
      let difference = Math.abs(responses[0] - random)
      for (var i = 0; i < responses.length; i++) {
        if (Math.abs(responses[i] - random) < difference) {
          closestAnswer = responses[i]
          difference = Math.abs(responses[i] - random)
        }
        return closestAnswer
      }
    }


  }

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <Main formHandler={formHandler} customersCountList={customersCountList} />
      <Footer counter={counter} />
    </>
  )
}

export default Home
