import Latex from "react-latex-next";
import { ReactNode } from "react";
import 'katex/dist/katex.min.css'


const L = ({children,c=false}:{
    children:ReactNode,
    c?:boolean
  }) => {
    return (
      <>
      {!c?
      <Latex>{`$\\displaystyle `+children+`$`}</Latex>
      :
      <div style={{padding:".5rem", margin:".5rem", border:"1px solid lightgray", width:"fit-content"}}>
      <Latex>{`$\\displaystyle `+children+`$`}</Latex>
      </div>
      }
      </>
    );
}
   
export default L;