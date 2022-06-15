
function Login() {
    return (
        <div className="flex justify-center" >
            <div className='bg-emerald-200 border-4 rounded-xl border-emerald-300 flex justify-center content-center w-1/2 m-5 p-5'>
                <form className=" grid grid-cols-1 grid-rows-5 justify-items-center w-full p-10">
                    <label htmlFor="user_name">User Name</label>
                    <input required type="text" id="user_name" className='w-full' />
                    <label htmlFor="user_name">Password</label>
                    <input required type="text" id="user_name" className='w-full' />
                    <br />
                    <button type="submit" className="bg-emerald-600 w-full h-full justify-self-center self-center shadow hover:bg-emerald-200 focus:shadow-outline focus:outline-none py-2 px-4 rounded"> Login </button>
                </form>
            </div>
        </div>
    )
}

export default Login