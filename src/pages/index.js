import React, { Fragment } from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const Index = () => {
    return (
        <Fragment>
            <Layout>
                <p style={{padding: `20px 20px`}}>This is the home page</p>
                <Link to="/selectionsort" style={{color: `rebeccapurple`}}>Selection Sort</Link>
            </Layout>
        </Fragment>
    )
}

export default Index