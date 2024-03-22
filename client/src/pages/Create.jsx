import Navbar from "../components/Navbar"

export default function Create() {
    return (
        <div>
            <Navbar />
            <div className="flex h-screen items-center justify-center bg-gray-100">
             <div className="w-3/5 mx-auto bg-white rounded-lg shadow-md p-8">
        <form action="" className="relative">
          <div className="flex items-center mb-4">
           <label htmlFor="addtitle"><i className="text-green-500 mr-2 text-2xl fa-regular mx-2 fa-square-plus "></i></label>
           <input type="file" className="hidden " name="" id="addtitle" />
             <input
              type="text"
              className="py-5 px-2 text-2xl w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              name="title"
              placeholder="Title..."
              id="addtitle"
            />
          </div>
          <textarea name="content" id="" cols="30" rows="10" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
          <div className="mt-4">
            <button type="submit" className="bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
        </div>
    )
}
