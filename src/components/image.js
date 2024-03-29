
import  { useState} from 'react'

//handling the state of the images

export default function Image({index,image,handleRemove}) {

    const [isHovering, setIsHovering] = useState(false)
    return (
        <div className="w-1/3 my-2 flex justify-center ">
      <div className="relative" 
      onMouseEnter={()=>setIsHovering(true)}
    
      onMouseLeave={()=>setIsHovering(false)}
      >
      <i  className={`fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 
      ${isHovering ? "":"hidden"}`
    }
      onClick={()=>handleRemove(index)}
      ></i>

    <img src={image} width = "150"
    
    />
    </div>
   </div>
    )
}
