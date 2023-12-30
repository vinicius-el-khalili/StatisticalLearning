import Latex from "react-latex-next";
import { ReactNode } from "react";

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
      <Latex>{`$`+children+`$`}</Latex>
      </div>
      }
      </>
    );
}
   
export default L;