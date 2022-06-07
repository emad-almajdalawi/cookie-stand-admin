// import Form from './components/Form'

function Main() {

  return (
      <>
        {/* <Form/> */}
        <form>
        <label htmlFor="location">Location</label> 
        <input type="text" id="location" />
        <label htmlFor="min-cust">Minimum customers per hour</label> 
        <input type="number" id="min-cust" />
        <label htmlFor="max-cust">Maximum customers per hour</label>
        <input type="number" id="max-cust" />
        <label htmlFor="avg-cookies">Average cookies per sale</label>
        <input type="number" id="avg-cookies" />
        <button> Create </button>
    </form>
        <p>Reposrt table comming soon</p>
      </>
  )
}

export default Main