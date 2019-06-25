import React from 'react';
import Layout from '../../components/layout'
import {Link} from "gatsby";
import {graphql, StaticQuery} from "gatsby";

const getImageData = graphql`
    {
        allFile {
            edges {
                node {
                    id
                    relativePath
                    name
                    root
                    size
                }
            }
        }
    }`;


export default () => {
    return (
        <Layout>
            <h1>Hello from gatsby</h1>
            <h2>Images from file data</h2>
            <StaticQuery
                query={getImageData}
                render={data => (
                    <table>
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>path</th>
                            <th>name</th>
                            <th>root</th>
                            <th>size</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.allFile.edges.map(({node}, index) => (
                            <tr key={index}>
                                <td>{node.id}</td>
                                <td>{node.relativePath}</td>
                                <td>{node.name}</td>
                                <td>{node.root}</td>
                                <td>{node.size}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            />
            <h3><Link to='/page-2'>Go to page-2</Link></h3>
        </Layout>
    )

}

