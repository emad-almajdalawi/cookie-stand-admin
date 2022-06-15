
function Form(props) {

  return (
    <div className=" grid grid-cols-1 grid-rows-1 justify-items-center">
      <form onSubmit={props.formHandler} className='p-5 bg-emerald-400  w-3/4 m-2 grid gap-4 grid-cols-1 grid-rows-3 rounded shadow-lg justify-center text-center'>
        <div className='text-center self-center'>
          <label htmlFor='title' className="text-xl font-bold">Create Cookie Stand</label>
        </div>
        <div className="grid grid-cols-6 grid-rows-2  align-middle gap-2">
          <label htmlFor="location" className="grid grid-cols-1 col-span-4">Location</label>
          <button type="submit" className="bg-emerald-600 w-3/4 h-3/4 justify-self-center self-end shadow hover:bg-emerald-200 focus:shadow-outline focus:outline-none py-2 px-4 rounded row-span-2 col-span-2"> Create </button>
          <input required type="text" id="location" className="col-span-4 h-7" />
        </div>
        <div className="grid grid-cols-3 grid-rows-1 text-center gap-2 ">
          <div className="grid grid-cols-1 grid-rows-2 p-2" >
            <label htmlFor="minCust">Minimum customers per hour</label>
            <input required type="number" id="minCust" />
          </div>
          <div className="grid grid-cols-1 grid-rows-2 p-2">
            <label htmlFor="maxCust">Maximum customers per hour</label>
            <input required type="number" id="maxCust" />
          </div>
          <div className="grid grid-cols-1 grid-rows-2 p-2">
            <label htmlFor="avgCookies">Average cookies per sale</label>
            <input required type="number" id="avgCookies" />
          </div>
        </div>
      </form>
    </div>

  )
}

export default Form