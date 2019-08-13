import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import "../styles/blog.css"
import Img from "gatsby-image"

export default function Template({ data }) {
  const post = data.markdownRemark
  let featuredImage = post.frontmatter.cover_image.childImageSharp.fluid

  return (
    <div className="article-container">
      <Link to="/blog">&larr; Go Back</Link>
      <hr />
      <h2 className="article-title">{post.frontmatter.title}</h2>
      <h4 className="article-author text-muted">
        Posted By: {post.frontmatter.author} on: {post.frontmatter.date}
      </h4>
      <Img fluid={featuredImage} />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link to="/blog">&larr; Go Back to Blog</Link>
      <br />
      <br />
      &copy; 2019 <a href="https://mattaz.com">Mattaz Web Design</a>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
        cover_image {
          childImageSharp {
            fluid(maxWidth: 600, quality: 90) {
              src
              srcSet
              aspectRatio
              sizes
              base64
            }
          }
        }
      }
    }
  }
`
