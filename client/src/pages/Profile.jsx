import Navbar from "../components/Navbar"
import Abouts from "../components/Abouts"


export default function Profile() {
    return (
        <div>
            <Navbar />
            <div className="flex gap-2 justify-between mx-8 w-full">
               <div className=" w-3/4">
                <span className="text-xl relative text-yellow-600">Update Your Account</span>
                <span className="absolute right-1/4 text-red-600">Delete Account</span>
                <form action="">
                    <div className="my-2 text-blue-500">Profile Picture</div>
                    <img src="https://source.unsplash.com/random/?user"className="h-28 my-4 w-28 object-cover " alt="" />
                    <div className="my-2 text-2xl">Username</div>
                    <input type="text" name="" id="" placeholder="safak"/>
                    <div className="my-2 text-2xl">Email</div>
                    <input type="email" name=""placeholder="safak@gmail.com" id="" />
                    <div className="my-2 text-2xl">Password</div>
                    <input type="password" className="my-2" placeholder="Password" name="" id="" />
                    
                    <div></div>
                    <button  className="text-white bg-green-900 w-20 rounded "type="submit">Update</button>
                </form>
               </div> 
               <div className="w-1/4">
                <Abouts />
               </div>
            </div>
        </div>
    )
}
