import { groq } from 'next-sanity'
import { client } from './sanity'

// Query for all posts with complete information
export async function getAllPosts() {
  return await client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      mainImage {
        asset-> {
          _id,
          url,
          metadata {
            dimensions {
              width,
              height
            }
          }
        },
        alt,
        "lqip": asset->metadata.lqip
      },
      author-> {
        _id,
        name,
        "slug": slug.current,
        image {
          asset-> {
            _id,
            url,
            metadata {
              dimensions {
                width,
                height
              }
            }
          }
        },
        bio
      },
      categories[]-> {
        _id,
        title,
        description,
        "slug": slug.current
      },
      "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
      "wordCount": length(pt::text(body)),
      "readingTime": round(length(pt::text(body)) / 5 / 180 )
    }`
  )
}

// Query for a single post with complete information
export async function getPost(slug: string) {
  return await client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      body,
      excerpt,
      publishedAt,
      mainImage {
        asset-> {
          _id,
          url,
          metadata {
            dimensions {
              width,
              height
            }
          }
        },
        alt,
        "lqip": asset->metadata.lqip
      },
      author-> {
        _id,
        name,
        "slug": slug.current,
        image {
          asset-> {
            _id,
            url,
            metadata {
              dimensions {
                width,
                height
              }
            }
          }
        },
        bio
      },
      categories[]-> {
        _id,
        title,
        description,
        "slug": slug.current
      },
      "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
      "wordCount": length(pt::text(body)),
      "readingTime": round(length(pt::text(body)) / 5 / 180 ),
      // Fetch related posts
      "relatedPosts": *[_type == "post" && slug.current != $slug && count(categories[@._ref in ^.^.categories[]._ref]) > 0] | order(publishedAt desc) [0...3] {
        _id,
        title,
        slug,
        mainImage {
          asset-> {
            _id,
            url
          },
          alt
        },
        publishedAt,
        "readingTime": round(length(pt::text(body)) / 5 / 180 )
      }
    }`,
    { slug }
  )
}

// Query for getting posts by category
export async function getPostsByCategory(categorySlug: string) {
  return await client.fetch(
    groq`*[_type == "post" && $categorySlug in categories[]->slug.current] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      mainImage {
        asset-> {
          _id,
          url
        },
        alt
      },
      categories[]-> {
        _id,
        title,
        "slug": slug.current
      },
      author-> {
        name,
        image {
          asset-> {
            url
          }
        }
      },
      "readingTime": round(length(pt::text(body)) / 5 / 180 )
    }`,
    { categorySlug }
  )
}

// Query for getting all categories
export async function getAllCategories() {
  return await client.fetch(
    groq`*[_type == "category"] {
      _id,
      title,
      description,
      "slug": slug.current,
      "postCount": count(*[_type == "post" && references(^._id)])
    }`
  )
}

