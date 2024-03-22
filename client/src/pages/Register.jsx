import Navbar from '../components/Navbar'

export default function Register() {
  return (
   
    <div>
       
       <Navbar/>
       <div className='' style={{backgroundImage:"url(http://source.unsplash.com/random/?user)"}} >
       <button className="text-white bg-green-600 mx-1 my-10 w-28">Login</button>
       <form className="m-13 flex-col text-center bg-yellow-50 ">
             <div className=" text-3xl">Register</div>
             <div className='py-2'>Name</div>
             <input type="text" className="text-center  py-1 rounded" name="" id="" placeholder="Enter your name" />
             <div className="py-2">Email</div>
             <input type="email" className="text-center py-1 rounded" name="" id="" placeholder="Enter your email" />
             <div className="py-2">Password</div>
             <input type="password" className="text-center py-1 rounded" name=""placeholder="Enter your Passoword" id="" />
             <div></div>
             <button className="bg-blue-600 my-3 text-white w-20 rounded-sm"type="submit">SignUp</button>
       </form>
     </div>
    </div>
  )
}