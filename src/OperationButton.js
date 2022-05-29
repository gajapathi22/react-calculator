import { ACTIONS } from "./App";


export default function OperatioinButton({dispatch,operation}){
    return (
        <button
         onClick={()=>dispatch({type:ACTIONS.CHOOSE_OPERAION,payload:{operation}})}>
             {operation}
         </button>
    )
}
