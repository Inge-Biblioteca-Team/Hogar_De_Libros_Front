import { useMutation, useQuery } from "react-query"
import { PostNewComputer } from "../Services/SvComputer"

const useNewComputer =() =>{
    return useMutation({
     mutationFn: PostNewComputer,
     onSuccess: ()=>{
         console.log(`Computer aaded :)!`)
     }
    })
     
 }
 export default useNewComputer