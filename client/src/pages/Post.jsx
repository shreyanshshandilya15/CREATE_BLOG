import Navbar from "../components/Navbar"
import Abouts from "../components/Abouts"

export default function Post() {
  return (
    <div>
        <Navbar />
        <div className="flex gap-2 justify-center mx-2">
        <div className="flex-3/4">
           <img src="http://source.unsplash.com/random/?snowy" alt="oops"className="h-1/3 rounded-xl w-full object-cover my-3" />
           <h2 className="text-black-700 text-3xl text-center ">lorem ipsum dolor</h2>
           <i className="fa-regular fa-pen-to-square mx-2 text-blue-500 "></i>
           <i className="fa-solid fa-trash text-red-500"></i>
           <div className="flex justify-between my-2">
            <span className="my-3">Author Safak</span>
            <span className="my-2">1 day ago</span>
           </div>
           <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, tempora doloremque vitae iusto distinctio id, necessitatibus atque maiores velit quia harum quasi, quibusdam sed voluptatem?</div>
        </div>
        <div className="flex-1/4">
        <Abouts/>
        </div>
        </div>
    </div>
  )
}
