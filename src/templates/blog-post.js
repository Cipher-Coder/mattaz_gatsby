import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import "../styles/blog.css"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <div className="article-container">
      <Link to="/blog">&larr; Go Back</Link>
      <hr />
      <h2 className="article-title">{post.frontmatter.title}</h2>
      <h4 className="article-author text-muted">
        Posted By: {post.frontmatter.author} on: {post.frontmatter.date}
      </h4>
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
      }
    }
  }
`
