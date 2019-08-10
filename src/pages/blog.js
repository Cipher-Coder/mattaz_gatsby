import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/blog.css"
import Card from "react-bootstrap/Card"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Mattaz Blog" />
    <div className="container">
      <div className="row bloglist-title">
        <h1 className="text-center">Latest Posts:</h1>
      </div>
      <div className="row">
        {data.allMarkdownRemark.edges.map(post => (
          <div key={post.node.id}>
            <div className="start-cards">
              <Card style={{ width: `18rem` }}>
                <Card.Body>
                  <Card.Title>{post.node.frontmatter.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Posted On: {post.node.frontmatter.date}
                  </Card.Subtitle>
                  <Card.Text>{post.node.excerpt}</Card.Text>
                  <Card.Link>
                    <Link to={post.node.frontmatter.path}>Read More...</Link>
                  </Card.Link>
                </Card.Body>
                <Card.Footer>By: {post.node.frontmatter.author}</Card.Footer>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
          excerpt
        }
      }
    }
  }
`

export default BlogPage
