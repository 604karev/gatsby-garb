import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
    <Layout>
        <SEO title="Page two"/>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <ul>
            <li>
                <h3>
                    <Link to="/">Go back to the homepage</Link>
                </h3>
            </li>
            <li>
                <h3>
                    <Link to="/posts/page-3">Go to Images data page</Link>
                </h3>
            </li>
            <li>
                <h3>
                    <Link to="/blog">Go to Blog</Link>
                </h3>
            </li>
        </ul>


    </Layout>
)

export default SecondPage
