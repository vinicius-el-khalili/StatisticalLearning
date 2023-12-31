"use client"
import L from "@/components/L";
import EquationSlider from "@/components/EquationSlider";

const _ = () => {
    return (
    <main>
        <section>
            <h1>Probability densities</h1>

            <h3>Probability density function</h3>
            Let <L>x</L> be an absolutely continuous real-valued variable.
            <br /><br />
            <L>{`\\mathbb{P}(x \\in (x,x+\\delta x))=p(x)`}</L>: <i>Probability density function</i>
            <br /><br />
            <L c>{`\\mathbb{P}(x \\in (a,b)) = \\int_a^b p(x)dx,`}</L>
            <L c>{`p(x) \\ge 0, \\,\\,\\,\\, \\int_{-\\infty}^{\\infty} p(x)dx = 1`}</L>

            <h3>Cumulative distribution function</h3>
            <L>{`\\mathbb{P}(x\\in (-\\infty,z))`}</L>: <i>Cumulative distribution function</i>.
            <br /><br />
            <L c>{`\\mathbb{P}(x\\in (-\\infty,z))=P(z) = \\int_{-\\infty}^z p(x)dx`}</L>
            <L c>{`P'(x)=p(x)`}</L>

            <h3>Joint probability density</h3>
            Let <L>{`\\bm{x}=(x_1,...,x_D)`}</L> be a vector of absolutely continuous real-valued variables, and let <L>{`\\delta \\bm{x}`}</L> be an infinitesimal volume in the <L>{`\\bm{x}`}</L> space.<br />
            <br />
            <L>{`\\mathbb{P}(\\bm{x}\\in\\delta \\bm{x})=p(\\bm{x})`}</L>: <i>Joint probability density</i>
            <br /><br />
            <L c>{`\\mathbb{P}(\\bm{x}\\in\\delta \\bm{x})=p(\\bm{x})\\delta \\bm{x}`}</L>
            <L c>{`p(\\bm{x})\\ge 0, \\,\\,\\,\\, \\int p(\\bm{x})d\\bm{x} = 1`}</L>
            
            <h3>Sum and Product rules</h3>
            <L c>{`p(x)=\\int_y p(x,y)dy`}</L>
            <L c>{`p(x,y)=p(x)p(y|x)`}</L>
            <p>
                <i>The sum and product rules are demonstrated in a brach of mathematics called measure theory.</i>
            </p>

        </section>
    </main>
    );
}
 
export default _;