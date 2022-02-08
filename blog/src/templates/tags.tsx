import React from "react"
import {Link, graphql} from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostList from "../components/postList"
import PageTitle from "../components/pageTitle"
import PageNation from "../components/pageNation"

interface IData {
  allMarkdownRemark: {
    totalCount: number
    nodes: Array<{
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
        date: string
        post_modified: string
        description: string
        tags: string[]
        draft: boolean
      }
    }>
  }
}

interface IPageContext {
  tag: string
}

const Tags = ({pageContext, data}: { pageContext: IPageContext, data: IData }) => {
  console.log(pageContext)
  const {tag} = pageContext
  const totalCount = data.allMarkdownRemark.totalCount
  const nodes = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <Seo
        title={tag}
        // description={post.frontmatter.description || post.excerpt}
        description={tag}
      />
      <div>
        <PageTitle title={tag} prefixTitle="Tagging"/>
        <PostList nodes={nodes}/>
        <Link to="/tags">All tags</Link>
      </div>
      <section>
        <PageNation pageContext={pageContext}/>
      </section>

    </Layout>
  )
}
export default Tags


export const pageQuery = graphql`
query Tags($tag: String, $skip: Int!, $limit: Int!)
  {
    allMarkdownRemark(
      skip: $skip
      limit: $limit
      sort: { fields: [frontmatter___date], order : DESC }
      filter: { 
        frontmatter: {
            tags: { in: [$tag] }
            draft: { in: [false] }
        }
      }
  )
    {
      totalCount
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString : "MMMM DD, YYYY" )
          post_modified(formatString : "MMMM DD, YYYY" )
          title
          description
          tags
        }
      }
    }
  }
`
