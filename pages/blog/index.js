import React from 'react'
import { Link } from '../../routes'
import Components from '../../components/index'
import Head from '../../components/head'
import Layout from '../../components/layout'
import StoryblokService from '../../utils/storyblok-service'

export default class extends React.Component {
  static async getInitialProps({ query }) {
    StoryblokService.setQuery(query)

    let [blogPosts, settings] = await Promise.all([
      StoryblokService.get('cdn/stories', {
        starts_with: `${query.language}/blog`
      }),
      StoryblokService.get(`cdn/stories/${query.language}/settings`)
    ])

    return {
      blogPosts,
      settings
    }
  }

  render() {
    const { settings, blogPosts } = this.props
    return (
      <Layout settings={settings.data.story}>
        {blogPosts.data.stories.map((blogPost, index) => {
          const { published_at, content: { name, intro }} = blogPost
          return (
             <div key={index} className="blog__overview">
                <h2>
                  <Link route={'/' + blogPost.full_slug}>
                    <a className="blog__detail-link">
                      {name}
                    </a>
                  </Link>
                </h2>
                <small>
                  {published_at}
                </small>
                <p>
                  {intro}
                </p>
              </div>
            )}
          )
        }
        <style jsx>{`
          .blog__overview {
            padding: 0 20px;
            max-width: 600px;
            margin: 40px auto 60px;
          }

          .blog__overview p {
            line-height: 1.6;
          }

          .blog__detail-link {
            color: #000;
          }
        `}</style>
      </Layout>
    )
  }
}