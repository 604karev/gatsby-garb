import React from 'react'
import {StaticQuery, graphql, Link} from "gatsby";
import Layout from '../components/layout';

export default () => {
    const getMarkDownPosts = graphql`
        {
            allMarkdownRemark {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            data
                        }
                        excerpt
                    }
                }
                totalCount
            }
        }
    `;
    return (
        <Layout>
            <div>
                <h1
                    style={{
                        display: 'inline-block',
                        borderBottom: '1px solid'
                    }}>Gatsby Gard Blog</h1>
                <StaticQuery
                    query={getMarkDownPosts}
                    render={data => (
                        <div>
                            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
                            {data.allMarkdownRemark.edges.map(({node}) => {
                                    return (
                                        <div style={{
                                            backgroundColor: '#eee',
                                            padding: '10px',
                                            margin: '10px auto 20px'
                                        }} key={node.id}>
                                            <h3>{node.frontmatter.title} <span
                                                style={{
                                                    color: '#bbb',
                                                    fontSize: '20px'
                                                }}> - {node.frontmatter.data}</span>
                                            </h3>
                                            <p>{node.excerpt}</p>

                                        </div>)
                                }
                            )}
                            <h3>
                                <Link to="/">Go to Homepage</Link>
                            </h3>

                        </div>
                    )}
                />

            </div>
        </Layout>
    )
}