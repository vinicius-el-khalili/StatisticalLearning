import { useState } from "react"
import L from "./L"

const EquationSlider  = ({equations}:{
    equations: string[]
}) => {

    const [index,setIndex] = useState(equations.length-1)
    const nextEquation = () => {
        if (index+1<equations.length){
            setIndex(prevIndex => prevIndex + 1)
        }
    }
    const previousEquation = () => {
        if (index>0) {
            setIndex(prevIndex => prevIndex - 1)
        }
    }
    
    return (
        <>
        
        <div style={{
            display: 'grid',
            gridTemplateColumns:"1fr auto auto",
            boxShadow:"0 0 3px gray",
            borderRadius:"6px",
            minHeight:"3rem",
            alignItems:"center",
            padding:".5rem 1rem .5rem 1rem",
        }}>
            <L>{equations[index]}</L>
            <button onClick={previousEquation} style={index==0?{}:{backgroundColor:"white"}}>{`<`}</button>
            <button onClick={nextEquation} style={index+1==equations.length?{}:{backgroundColor:"white"}}>{`>`}</button>
        </div>
        
        </>
    )
}

export default EquationSlider;