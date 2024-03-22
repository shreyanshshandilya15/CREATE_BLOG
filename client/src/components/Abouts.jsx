
export default function Abouts() {
  return (
    <div className="my-3 flex-col">
        <hr />
        <div className="text-center text-xl">ABOUT ME</div>
        <hr />
        <img className="mx-auto my-3 h-60 w-52"src="http://source.unsplash.com/random/30×30/?vegetable" alt="" />
        <div className="text-center text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quos velit magnam?</div>
        <hr className="my-2"/>
        <div className="text-center">CATEGORIES</div>
        <hr className="my-2" />
        <div className="flex gap-4 justify-center">
            <ul className="flex-col">
                <li>Life</li>
                <li>Sport</li>
                <li>Tech</li>
            </ul>
            <ul className="flex-col">
                <li>Music</li>
                <li>Style</li>
                <li>Cinema</li>
            </ul>
        </div>
        <hr className="my-2"/>
        <div className="text-center">FOLLOW US</div>
        <hr  className="my-2"/>
        <ul className="flex gap-2 text-xl justify-center">
        <i className="fa-brands fa-facebook"></i>
       <i className="fa-brands fa-instagram"></i>
       <i className="fa-brands fa-twitter"></i>
       <i className="fa-brands fa-pix"></i>
        </ul>
    </div>
  )
}
