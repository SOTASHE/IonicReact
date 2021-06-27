import axios from 'axios';
import  {useEffect,useRef, useState} from 'react'

import Image from "./image"

//function based component
export default function Images(){

// set the state of the of the images
    const [images, setimages] = useState([]
        
        );
        const inputRef = useRef(null);
        const varRef = useRef(images.length);
        //get data from the api
   useEffect(()=>{
       inputRef.current.focus()

       axios.get(
        "https://jsonplaceholder.typicode.com/photos", {params:{_limit:5}}


       ).then(res =>{
           setimages(res.data)
          
       })
    
   },[])



   useEffect(()=>{ 

    varRef.current=varRef.current+1
  
})
        const [newImageUrl, setNewImageUrl] = useState("")
       function handleRemove(index){
           setimages([
               ...images.slice(0,index),
               ...images.slice(index+1, images.length),
           ])

       }
       

       //display data and handle state

function ShowImage(){

return images.map((img,index)=> (<Image image={img.url} handleRemove={handleRemove} index={index}

    key={index}
/>
)

)


}
//add your own images using urls
      function handleAdd(){

        if(newImageUrl!==""){
        
        setimages([ newImageUrl, ...images

            
        ]
       )
       setNewImageUrl("")

       
      }
    }
      

      function handleChange(event){
          setNewImageUrl(event.target.value)
      }
        return (
            
                <section> 

                    <div className="flex flex-wrap justify-center">
                      <ShowImage/>

                      </div>

                      <div className="flex justify-between my-20">
                          <div className="w-full">
                          <input type="text" 
                          id="inputBox"
                          ref={inputRef}
                          className="p-2 border border-gray-800 shadow rounded w-full"

                            value={newImageUrl}
                          
                          onChange={handleChange}
                          />
                          </div>

                          <div className="w-full">
                          <button 
                          
                          disabled={newImageUrl==""}
                          
                          className={`p-2 text-white ml-2 ${newImageUrl !=="" ? "bg-green-600" : "bg-green-300"}`} onClick={handleAdd}>Add</button>
                      </div>
                      </div>
                   
                     </section>
        )
    }

