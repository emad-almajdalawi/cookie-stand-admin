
function Login(props) {

    return (
        <div className="flex justify-center" >
            <div className='bg-emerald-200 border-4 rounded-xl border-emerald-300 flex justify-center content-center w-1/2 m-5 p-5'>
                <form className=" grid grid-cols-1 grid-rows-5 justify-items-center w-full p-10" onSubmit={props.logInHandler}>
                    <label name="username">User Name</label>
                    <input required type="text" id="username" className='w-full' />
                    <label name="password">Password</label>
                    <input required type="password" id="password" className='w-full' />
                    <br />
                    <button type="botton" className="bg-emerald-600 w-full h-full justify-self-center self-center shadow hover:bg-emerald-400 focus:shadow-outline focus:outline-none py-2 px-4 rounded"> Login </button>
                </form>
                <br />
                {props.invalidLogIn && <p className="text-red-500 text-center">Invalid username or password</p>}
            </div>
        </div>
    )
}

export default Login