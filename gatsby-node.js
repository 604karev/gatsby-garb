const {createFilePath} = require('gatsby-source-filesystem');

exports.onCreateNode = ({node, getNode, actions}) => {
    const {createNodeField} = actions;
    if (node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath({node, getNode, basePath: 'posts'});
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
};

exports.createPages = async ({graphql}) => {
    const response = await graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
                totalCount
            }
        }
        `);
    const posts = response.data.allMarkdownRemark.edges;
};