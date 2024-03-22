import Navbar from "../components/Navbar"

export default function Login() {
  
  return (   
    <div>      
       <Navbar/>
       <div className='' style={{backgroundImage:"url(http://source.unsplash.com/random/?user)"}} >
       <button className="text-white bg-green-600 mx-1 my-10 w-28">Register</button>
       <form action="" className="m-13 flex-col text-center">
             <div className=" text-3xl">Login</div>
             <div className="py-2">Email</div>
             <input type="email" className="text-center bg-white py-1 rounded" name="" id="" placeholder="Enter your email" />
             <div className="py-2">Password</div>
             <input type="password" className="text-center bg-white py-1 rounded" name=""placeholder="Enter your Passoword" id="" />
             <div></div>
             <button className="bg-blue-600 my-3 text-white w-20 rounded-sm" type="submit">Login</button>
       </form>
    </div>
    </div>
  )
}


