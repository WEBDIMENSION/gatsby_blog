/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import {useStaticQuery, graphql} from "gatsby"
import {StaticImage} from "gatsby-plugin-image";
import BioDescription from "./bioDescription";

// import {StaticImage} from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery<GatsbyTypes.BioQueryQuery>(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site?.siteMetadata?.author
  const social = data.site?.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "png", "avif"]}
        src="../images/prof.png"
        width={60}
        height={60}
        quality={95}
        alt="Profile picture"
      />
      <BioDescription/>
    </div>
  )
}

export default Bio
