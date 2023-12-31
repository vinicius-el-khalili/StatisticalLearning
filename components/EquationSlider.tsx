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
            height:"3rem",
            padding: "1rem",
            margin:"1rem 0 1rem 0",
            alignItems:"center"
        }}>
            <div style={{display: 'flex',gap:"1rem"}}>
            <div style={{fontSize:".8rem"}}></div> <L>{equations[index]}</L>
            </div>
            <button onClick={previousEquation} style={index==0?{backgroundColor:"white"}:{}}>{`<`}</button>
            <button onClick={nextEquation} style={index+1==equations.length?{backgroundColor:"white"}:{}}>{`>`}</button>
        </div>
        
        </>
    )
}

export default EquationSlider;