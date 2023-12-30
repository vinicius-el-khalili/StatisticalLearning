"use client"
import 'katex/dist/katex.min.css'
import L from "@/components/L";
import { useState } from 'react';

const _ = () => {
    return (
    <>
    <main>
        <section>
            <h2>Linear regression</h2>
            <h3>Hypothesis function:</h3>
                <L>{`\\hat{Y}(x)=a+bx`}</L>
            <h3>Finding <L>a</L>:</h3>
            <L>{`a = \\bar{Y}-b\\bar{X}`}</L>
            <Hmm equations={[
                `\\mathbb{E} = \\sum_{i} (Y_i - \\hat{Y_i})^2`,
                `\\mathbb{E} = \\sum_{i} (Y_i - a - bx_i)^2`,
                `\\frac{\\partial\\mathbb{E}}{\\partial a} = \\sum_{i} \\frac{\\partial}{\\partial a} (Y_i - a - bx_i)^2`,
                `\\frac{\\partial\\mathbb{E}}{\\partial a} = \\sum_{i} \\frac{\\partial u^2}{\\partial u}\\frac{\\partial u}{\\partial a}, u=Y_i - a - bx_i`,
                `\\frac{\\partial\\mathbb{E}}{\\partial a} = \\sum_{i} 2u\\frac{\\partial u}{\\partial a}, u=Y_i - a - bx_i`,
                `\\frac{\\partial\\mathbb{E}}{\\partial a} = \\sum_{i} 2(Y_i - a - bx_i)\\frac{\\partial (Y_i - a - bx_i)}{\\partial a}`,
                `\\frac{\\partial\\mathbb{E}}{\\partial a} = \\sum_{i} 2(Y_i - a - bx_i)(-1)`,
                `\\frac{\\partial\\mathbb{E}}{\\partial a} = -2 \\sum_{i} (Y_i - a - bx_i)`,
                `\\frac{\\partial\\mathbb{E}}{\\partial a} = 0 \\Rightarrow -2 \\sum_{i} (Y_i - a - bx_i) = 0`,
                `\\sum_{i}^{n} (Y_i - a - bx_i) = 0`,
                `\\sum_{i=1}^{n} Y_i - \\sum_{i=1}^{n} a - b \\sum_{i=1}^{n} x_i = 0`,
                `\\sum_{i=1}^{n} Y_i - \\sum_{i=1}^{n} a - b \\sum_{i=1}^{n} x_i = 0`,
                `n\\bar{Y} - na - bn\\bar{X} = 0`,
                `\\bar{Y} - a - b\\bar{X} = 0`,
                `\\bar{Y}-b\\bar{X} = a`,
                `\\therefore a = \\bar{Y}-b\\bar{X} \\,\\,\\,\\,\\blacksquare `,
            ]}/>
            <h3>Finding <L>b</L>:</h3>
            <L>{`b = \\frac{\\sum_{i} ( Y_ix_i - \\bar{Y}x_i)}{\\sum_{i} ( x_i^2 - \\bar{X}x_i )}`}</L>
            <Hmm equations={[
                `\\mathbb{E} = \\sum_{i} (Y_i - \\hat{Y_i})^2`,
                `\\mathbb{E} = \\sum_{i} (Y_i - a - bx_i)^2`,
                `\\frac{\\partial\\mathbb{E}}{\\partial b} = \\sum_{i} \\frac{\\partial}{\\partial b} (Y_i - a - bx_i)^2`,
                `\\frac{\\partial\\mathbb{E}}{\\partial b} = \\sum_{i} \\frac{\\partial u^2}{\\partial u}\\frac{\\partial u}{\\partial b}, u=Y_i - a - bx_i`,
                `\\frac{\\partial\\mathbb{E}}{\\partial b} = \\sum_{i} 2u\\frac{\\partial u}{\\partial b}, u=Y_i - a - bx_i`,
                `\\frac{\\partial\\mathbb{E}}{\\partial b} = \\sum_{i} 2(Y_i - a - bx_i)\\frac{\\partial (Y_i - a - bx_i)}{\\partial b}`,
                `\\frac{\\partial\\mathbb{E}}{\\partial b} = \\sum_{i} 2(Y_i - a - bx_i)(- x_i)`,
                `\\frac{\\partial\\mathbb{E}}{\\partial b} = -2 \\sum_{i} (Y_i - a - bx_i)x_i`,
                `\\frac{\\partial\\mathbb{E}}{\\partial b} = 0 \\Rightarrow -2 \\sum_{i} (Y_i - a - bx_i)x_i = 0`,
                `\\sum_{i} (Y_i - a - bx_i)x_i = 0`,
                `\\sum_{i} Y_ix_i - ax_i - bx_i^2 = 0`,
                `\\sum_{i} Y_ix_i - (\\bar{Y}-b\\bar{X})x_i - bx_i^2 = 0`,
                `\\sum_{i} Y_ix_i - \\bar{Y}x_i + b\\bar{X}x_i - bx_i^2 = 0`,
                `\\sum_{i} ( Y_ix_i - \\bar{Y}x_i) + \\sum_{i} (b\\bar{X}x_i - bx_i^2) = 0`,
                `\\sum_{i} ( Y_ix_i - \\bar{Y}x_i) + b\\sum_{i} (\\bar{X}x_i - x_i^2) = 0`,
                `\\sum_{i} ( Y_ix_i - \\bar{Y}x_i) + b\\sum_{i} (\\bar{X}x_i - x_i^2) = 0`,
                `\\sum_{i} ( Y_ix_i - \\bar{Y}x_i) - b\\sum_{i} ( x_i^2 - \\bar{X}x_i ) = 0`,
                `\\sum_{i} ( Y_ix_i - \\bar{Y}x_i) = b\\sum_{i} ( x_i^2 - \\bar{X}x_i )`,
                `\\frac{\\sum_{i} ( Y_ix_i - \\bar{Y}x_i)}{\\sum_{i} ( x_i^2 - \\bar{X}x_i )}=b`,
                `\\therefore b = \\frac{\\sum_{i} ( Y_ix_i - \\bar{Y}x_i)}{\\sum_{i} ( x_i^2 - \\bar{X}x_i )} \\,\\,\\,\\,\\blacksquare`,
            ]}/>
        </section>
    </main>
    </>
    );
}
 
export default _;

const Hmm  = ({equations}:{
    equations: string[]
}) => {

    const [index,setIndex] = useState(0)
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
            border:"1px solid gray",
            height:"3rem",
            padding: "1rem",
            margin:"1rem 0 1rem 0",
            alignItems:"center"
        }}>
            <div style={{display: 'flex',gap:"1rem"}}>
            <div style={{fontSize:".8rem"}}>{`(${index+1})`}</div> <L>{equations[index]}</L>
            </div>
            <button onClick={previousEquation} style={index==0?{backgroundColor:"white"}:{}}>{`<`}</button>
            <button onClick={nextEquation} style={index+1==equations.length?{backgroundColor:"white"}:{}}>{`>`}</button>
        </div>
        
        </>
    )

}