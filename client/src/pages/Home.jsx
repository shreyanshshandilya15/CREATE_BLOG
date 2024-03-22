import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import Card from "../components/Card"
import Abouts from "../components/Abouts"

export default function Home() {
  return (
    <div>
       <Navbar/>
       <Slider />
       <div className="flex gap-4">
        <div className="flex w-4/5 flex-wrap">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div className="w-1/5">
        <Abouts/>
        </div>
       </div>
    </div>
  )
}
