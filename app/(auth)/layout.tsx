
import { ReactNode } from "react"

function layout({children}:{children:ReactNode}) {
  return (
 
  <div className="w-full h-screen justify-center items-center flex flex-col ">
{children}
  </div>
  
  )
}

export default layout