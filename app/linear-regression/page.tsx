"use client"
import L from "@/components/L";
import 'katex/dist/katex.min.css'

const _ = () => {
    return (
    <main>
        <section>
            <h1>Linear Regression</h1>
            <h3>Definition</h3>
            <p>
            Given a training data set comprising <L>N</L> observations <L>{`{x_n}`}</L>, where <L>{`n=1,...,N`}</L> ,
            together with corresponding target values <L>{`{t_n}`}</L>, the goal is to predict the value of t
            for a new value of x.
            </p>
            <h3>Hypothesis function</h3>
            <L c>{`y(\\bm{x},\\bm{w})=w_0+w_1x1+w_2x_2+...+w_Dx_D,\\,\\,\\,\\,\\bm{x}=(x_1,...,x_D)^T, \\,\\,\\,\\, \\bm{w}=(w_1,...,w_D)`}</L>
            <h3>Basis functions</h3>
            <p>In order to process the input model, we'll use general fixed preprocessing methods with <b>basis functions</b>, which consist of linear combinations of fixed nonlinear functions. It's the same equation, in a different vector space. </p>
            <L c>{
            `y(\\bm{x},\\bm{w})=w_0+\\sum_{j=1}^{M-1}w_j\\phi_j(\\bm{x}),
            \\,\\,\\,\\,\\bm{w}=(w_0,...,w_{M-1})^T,
            \\,\\,\\,\\,\\bm{\\phi}=(\\phi_0,...,\\phi_{M-1})^T`}</L>
            <p><i>Polynomial basis:</i>&nbsp;&nbsp;<L>{`\\phi_j(x)=x^j`}</L></p>
            <p><i>Gaussian basis:</i>&nbsp;&nbsp;<L>{`\\phi_j(x)=exp(-\\frac{(x-\\mu_j)^2}{2s^2})`}</L></p>
            <p><i>Sigmoidal basis:</i>&nbsp;&nbsp;<L>{`\\phi_j(x)=\\sigma(\\frac{x-\\mu_j}{s}),\\,\\,\\sigma(\\epsilon)=\\frac{1}{1+e^{-\\epsilon}}`}</L></p>
            <p><i>Identity:</i>&nbsp;&nbsp;<L>{`\\phi_j(x)=x`}</L></p>
            <h3>Maximum likelyhood and least squares</h3>
            <L c>{`t=y(\\bm{x},\\bm(w))+\\epsilon,\\,\\mu_{\\epsilon}=0,\\mathbb{V}(\\epsilon)=\\beta^{-1}`}</L>
            <L c>{`p(t|\\mathbb{x},\\mathbb{w},\\mathbb{\\beta})= \\mathcal{N} (t|y(\\mathbb{x},\\mathbb{w}),\\mathbb{\\beta^{-1}})`}</L>
        </section>
    </main>
    );
}
 
export default _;