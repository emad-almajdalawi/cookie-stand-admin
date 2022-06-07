
function Form() {
  return (
    <form>
        <label htmlFor="location">Location</label> 
        <input type="text" id="location" />
        <label htmlFor="min-cust">Minimum customers per hour</label> 
        <input type="list" id="min-cust" />
        <label htmlFor="max-cust">Maximum customers per hour</label>
        <input type="list" id="max-cust" />
        <label htmlFor="avg-cookies">Average cookies per sale</label>
        <input type="list" id="avg-cookies" />
        <button> Create </button>
    </form>
  )
}

export default Form