"use client"

import L from "@/components/L";
import EquationSlider from "@/components/EquationSlider";

const _ = () => {
    return (
    <main>
        <section>
            <h1>Expectation, Variance, Covariance</h1>

            <h3>Expectation value</h3>
            <h5>Single variable</h5>
            <L>{`X \\in \\mathcal{R}`}</L>
            <L c>{`\\mathbb{E}[X]=\\int xp(x)dx`}</L>
            <br />
            <L>{`f:x \\in X`}</L>
            <L c>{`\\mathbb{E}[f] = \\int p(x)f(x)dx`}</L>
            <h5>Multiple variables</h5>
            <L>{`X_1,...,X_D \\in \\mathcal{R}`}</L>
            <L c>{`\\mathbb{E}[X]=(\\mathbb{E}[X_1],...,\\mathbb{E}[X_D])`}</L>
            <br />
            <L>{`f: \\bm{x} = (x_1,...,x_D), \\,\\, x_i \\in X_i`}</L>
            <L c>{`\\mathbb{E}_{x_i}[f]=\\int_{x_i} p_{x_i}(x_i)f(\\bm{x})dx_i`}</L>
            <h5>Conditional expectation</h5>
            <L c>{`\\mathbb{E}_{x_i}[f|x_i]=\\int_{x_i} p(\\bm{x}|x_i)f(\\bm{x})dx_i`}</L>

            <h3>Variance</h3>
            <L>{`X \\in \\mathcal{R}`}</L>
            <L c>{`\\mathbb{V}[X] = \\mathbb{E}[(X-\\mathbb{E}[X])^2]`}</L>
            <br />
            <L>{`f: x \\in X`}</L>
            <L c>{`\\mathbb{V}[f] = \\mathbb{E}[(f-\\mathbb{E}[f])^2]`}</L>
            <L c>{`\\mathbb{V}[f] = \\mathbb{E}[f^2]-\\mathbb{E}^2[f]`}</L>
            <EquationSlider equations={[
                `\\mathbb{V}[f] = \\mathbb{E}[(f-\\mathbb{E}[f])^2]`,
                `\\mathbb{V}[f] = \\mathbb{E}[f^2-2f\\mathbb{E}[f]+\\mathbb{E}^2[f]]`,
                `\\mathbb{V}[f] = \\int p(x)(f^2-2f\\mathbb{E}[f]+\\mathbb{E}^2[f])dx`,
                `\\mathbb{V}[f] = \\int p(x)f^2(x)dx - \\int p(x)2f\\mathbb{E}[f]dx+ \\int p(x)\\mathbb{E}^2[f]dx`,
                `\\mathbb{V}[f] = \\int p(x)f^2(x)dx - 2\\mathbb{E}[f]\\int p(x)f(x)dx+ \\mathbb{E}^2[f]\\int p(x)dx`,
                `\\mathbb{V}[f] = \\mathbb{E[f^2]} - 2\\mathbb{E}[f]\\times \\mathbb{E}[f]+ \\mathbb{E}^2[f]\\times 1`,
                `\\mathbb{V}[f] = \\mathbb{E[f^2]} - 2\\mathbb{E}^2[f]+ \\mathbb{E}^2[f]`,
                `\\mathbb{V}[f] = \\mathbb{E[f^2]} -  \\mathbb{E}^2[f] \\,\\,\\,\\,\\blacksquare`,
            ]}/>

            <h3>Covariance</h3>
            <h5>Random variables</h5>
            <L>{`X,Y \\in \\mathcal{R}`}</L>
            <L c>{`\\mathbb{C}[X,Y]=\\mathbb{E}[(X-\\mathbb{E}[X])(Y-\\mathbb{E}[Y])]`}</L>
            <L c>{`\\mathbb{C}[X,Y]=\\mathbb{E}[XY]-\\mathbb{E}[X]\\mathbb{E}[Y]`}</L>
            <EquationSlider equations={[
                `\\mathbb{C}[X,Y]=\\mathbb{E}[(X-\\mathbb{E}[X])(Y-\\mathbb{E}[Y])]`,
                `\\mathbb{C}[X,Y]=\\mathbb{E}[XY-X\\mathbb{E}[Y]-Y\\mathbb{E}[X]+\\mathbb{E}[X]\\mathbb{E}[Y]]`,
                `\\mathbb{C}[X,Y]=\\mathbb{E}[XY]-\\mathbb{E}[X]\\mathbb{E}[Y]-\\mathbb{E}[Y]\\mathbb{E}[X]+\\mathbb{E}[X]\\mathbb{E}[Y]`,
                `\\mathbb{C}[X,Y]=\\mathbb{E}[XY]-\\mathbb{E}[X]\\mathbb{E}[Y]\\,\\,\\blacksquare`,
            ]}/>
            <h5>Random variable vector</h5>
            <L>{`\\bm{x}=(x_1,...,x_D),\\,\\,x_i \\in X`}</L>
            <br />
            <L>{`\\bm{x}=(y_1,...,y_D),\\,\\,y_i \\in Y`}</L>
            <L c>{`\\mathbb{C}[\\bm{x},\\bm{y}]=\\mathbb{E}[(\\bm{x}-\\mathbb{E}[\\bm{x}])(\\bm{y}^T-\\mathbb{E}[\\bm{y^T}])]`}</L>
            <L c>{`\\mathbb{C}=\\mathbb{E}[\\bm{x}\\bm{y^T}]-\\mathbb{E}[\\bm{x}]\\mathbb{E}[\\bm{y^T}]`}</L>



        </section>
    </main>
    );
}
 
export default _;