
function Form(props) {

  return (
    <div className=" grid grid-cols-1 grid-rows-1 justify-items-center">
      <form onSubmit={props.formHandle} className='p-5 bg-emerald-400  w-3/4 m-2 grid gap-4 grid-cols-1 grid-rows-3 rounded shadow-lg justify-center text-center'>
        <div className='text-center'>
          <label htmlFor='title'>Create Cookie Stand</label>
        </div>
        <div className="grid grid-cols-6 grid-rows-1  align-middle">
          <label htmlFor="location" className="grid grid-cols-1 ">Location</label>
          <input type="text" id="location" className="col-span-5 h-7" />
        </div>
        <div className="grid grid-cols-4 grid-rows-1 text-center gap-2 ">
          <div className="grid grid-cols-1 grid-rows-2" >
            <label htmlFor="minCust">Minimum customers per hour</label>
            <input type="number" id="minCust" />
          </div>
          <div className="grid grid-cols-1 grid-rows-2">
            <label htmlFor="maxCust">Maximum customers per hour</label>
            <input type="number" id="maxCust" />
          </div>
          <div className="grid grid-cols-1 grid-rows-2">
            <label htmlFor="avgCookies">Average cookies per sale</label>
            <input type="number" id="avgCookies" />
          </div>
          <button type="submit" className="bg-emerald-600 h-12 w-21 justify-self-center self-center shadow hover:bg-emerald-200 focus:shadow-outline focus:outline-none py-2 px-4 rounded"> Create </button>
        </div>
      </form>
    </div>

  )
}

export default Form