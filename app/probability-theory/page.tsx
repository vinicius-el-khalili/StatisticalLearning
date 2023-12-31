"use client"
import EquationSlider from "@/components/EquationSlider";
import L from "@/components/L";

const _ = () => {
    return (
    <main>
        <section>
            <h1>Probability Theory</h1>
            <h4>Definition</h4>
            Let <L>X,Y</L> be two random variables.
            <br />
            <L>{`p(X=x_i,Y=y_j)`}</L>: Joint probability
            <br />
            <L>{`p(X=x_i|Y=y_i)`}</L>: Conditional probability

            <h4>Sum rule</h4>
            <L c>{`p(X)=\\sum_{Y} p(X,Y)`}</L>

            <h4>Product rule</h4>
            <L c>{`p(X,Y)=p(X)p(Y|X)`}</L>

            <h4>Bayes' Theorem</h4>
            <L c>{`p(Y|X)=\\frac{p(Y)}{p(X)}p(X|Y)`}</L>
            <EquationSlider equations={[
                `p(X,Y)=p(Y,X)`,
                `p(X)p(Y|X)=p(Y)p(X|Y)`,
                `p(Y|X)=\\frac{p(Y)}{p(X)}p(X|Y)\\,\\,\\blacksquare`
            ]}/>
            <p><i>Corolary</i></p>
            <L c>{`p(X)=\\sum_{Y}p(Y)p(X|Y)`}</L>
            <EquationSlider equations={[
                `p(X)=\\sum_Y p(X,Y)`,
                `p(X)=\\sum_Y p(Y,X)`,
                `p(X)=\\sum_Y p(Y,X)`,
                `p(X)=\\sum_Y p(Y)p(X|Y)\\,\\,\\blacksquare`,
            ]}/>
            
        </section>
    </main>
    );
}
 
export default _;