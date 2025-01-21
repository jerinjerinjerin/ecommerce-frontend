import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Loader = () => {
  return (
    <div className="h-screen w-screen bg-black text-white justify-center items-center">
      <div className="w-full flex items-center justify-center h-screen">

        <span className="size-10"><AiOutlineLoading3Quarters className="animate-spin"/></span>
      </div>
    </div>
  )
}

export default Loader