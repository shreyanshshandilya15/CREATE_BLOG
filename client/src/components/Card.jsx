import { Link } from "react-router-dom";


export default function Card() {

  return (
    <div className="flex-col my-4 mx-2 max-w-96">
       <img  className="h-96 w-96 "src="http://source.unsplash.com/random/30×30/?view" />
       <div className="text-center text-xs text-gray-500">Date</div>
       <Link to="/post"><div className="text-center text-bold text-xl">Lorem ipsum dolor sit .</div></Link>
       <div className="text-center text-xs text-gray-500 ">Time</div>
       <div className="text-center">adipisicing elit. Omnis officia dolorum repellendus voluptates porro, hic ex .</div>
    </div>
  )
}
