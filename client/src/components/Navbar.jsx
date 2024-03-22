import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div className='flex justify-between m-4'>
       <article className='flex gap-2 text-xl'>
       <i className="fa-brands fa-facebook"></i>
       <i className="fa-brands fa-instagram"></i>
       <i className="fa-brands fa-twitter"></i>
       <i className="fa-brands fa-pix"></i>
       </article>
       <ul className='flex gap-3'>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/create">WRITE</Link>
        <Link to="/logout">LOGOUT</Link>
       </ul>
       <article className='flex items-center gap-2 text-xl'>
         <Link to="/profile"><img className="h-8 w-8 rounded "src="https://source.unsplash.com/random/5×5/?user" alt="Loading..."/></Link>
       <i className="fa-solid fa-magnifying-glass"></i>
       </article>
    </div>
  )
}
