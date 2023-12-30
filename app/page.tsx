"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Latex from 'react-latex-next'
import 'katex/dist/katex.min.css'
import { ReactNode } from 'react'
import L from '@/components/L'

export default function Home() {

  let fraction = `$$//frac{1}{2}$$`

return (
<main>

  <h1>Basic definitions</h1>
  <section>
    

    <h2>Predictors and Responses</h2>
    <h5>Predictors</h5>

    <L>{`i,j \\in \\mathbb{N}`}</L>
    <br />
    <L>{`n \\in \\mathbb{N}:`}</L> <i>Number of samples in the dataset</i>
    <br />
    <L>{`p \\in \\mathbb{N}:`}</L> <i>Number of attributes in each sample</i>
    <br />
    <br />
    <L>X_i:</L> <i>Sample/Variable/Predictor</i>
    <L c>{`X_i = [x_{i1},x_{i2},...,x_{ip}]^T, i \\in [1,n], j \\in [1,p]`}</L>  
    
    <L>X:</L> <i>Samples/Predictors set</i>
    <br />
    <L c>{`X=\\{X_i, i \\in \\mathbb{N}, i \\in [1,n]\\},`}</L>

    <h5>Responses</h5>
    <L>Y:</L> Response set
    <br />
    <L>Y_i:</L> Individual response associated with <L>X_i</L>
    <L c>{`Y = \\{ y_i | (X_i \\in X) \\}`}</L>

    <h5>Dataset</h5>
    <L>D:</L> Dataset
    <L c>{`D = \\{(X_i,Y_i),i \\in [1,n] \\}`}</L>

    <h5>Underlying function</h5>
    <L>{`\\varepsilon:`}</L> Error term
    <L c>{`\\varepsilon = [\\varepsilon_1, \\varepsilon_2, ..., \\varepsilon_n]^T`}</L>

    <L>f:</L> Hypothetical underlying function
    <L c>{`Y=f(X)+\\varepsilon`}</L>

  </section>

  <section>

    <h2>Parametric and non-parametric methods</h2>

    <h4>Definition: Parametric methods</h4>
    <p>Suppose <L>f</L> as a parametric function and fit the data.</p>
    <L c>{`f(X)=F(X,\\beta), \\beta = [\\beta_1,...,\\beta_p]`}</L>
    <p>Examples: Linear Regression, Logistic Regression, GLMs </p>

    <h4>Definition: Non-parametric methods</h4>
    <p>We don't assume <L>f</L> as a parametric function. Instead, we use an algorithm.</p>
    <p>Examples: KNN, Decision Trees, SVMs</p>

  </section>

  <section>
    <h2>Prediction Accuracy vs. Model Interpretability</h2>
    <L c>{`Interpretability\\propto\\frac{1}{Accuracy}`}</L>
    <p>
      <h5>Examples:</h5>
      Linear regression {`-->`} high interpretability, low accuracy
      <br />
      Neural networks {`-->`} high accuracy, low interpretability
    </p>
  </section>

  <section>
    <h2>Supervised vs. Unsupervised learning</h2>
    <p>Predictors and Responses {`-->`} Supervised learning (ex.: regression methods)</p>
    <p>Predictors only {`-->`} Unsupervised learning (ex.: clustering methods)</p>
  </section>

  <section>
    <h2>Regression vs. Classification</h2>
    <p>Quantitative responses {`-->`} Regression methods</p>
    <p>Categorical (qualitative) responses {`-->`} Classification methods</p>
  </section>

</main>
)
}
