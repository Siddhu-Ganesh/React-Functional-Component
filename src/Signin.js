
function Signin(){
    return(
        <div className="container text-center">
            <form>
                <label htmlfor="email">Email</label>
                <input type="email" id="email" placeholder="email"/>
                <br/><br/>

                <label htmlfor="FirstName">FirstName</label>
                <input type="text" id="FirstName" placeholder="FirstName"/>
                <br/><br/>

                <label htmlfor="LastName">LastName</label>
                <input type="text" id="LastName" placeholder="LastName"/>
                <br/><br/>

                <label htmlfor="password">Password</label>
                <input type="text" id="password" placeholder="Password"/>
                <br/><br/>

                <button>Sign in</button>

            </form>

        </div>
    )
}
export default Signin;