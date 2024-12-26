interface SanityImage {
    _id: string
    url: string
    metadata?: {
      dimensions: {
        width: number
        height: number
      }
      lqip?: string
    }
  }
  
  interface ImageAsset {
    asset: {
      _id: string
      url: string
      metadata?: {
        dimensions: {
          width: number
          height: number
        }
        lqip?: string
      }
    }
    alt?: string
    lqip?: string
  }
  
  export interface Author {
    _id: string
    name: string
    slug: string
    image?: ImageAsset
    bio?: string
  }
  
  export interface Category {
    _id: string
    title: string
    description?: string
    slug: string
    postCount?: number
  }
  
  export interface RelatedPost {
    _id: string
    title: string
    slug: {
      current: string
    }
    mainImage?: ImageAsset
    publishedAt: string
    readingTime: number
  }
  
  export interface Post {
    _id: string
    title: string
    slug: {
      current: string
    }
    body: any[] // Portable Text type
    excerpt?: string
    mainImage?: ImageAsset
    publishedAt: string
    author: Author
    categories: Category[]
    estimatedReadingTime: number
    wordCount: number
    readingTime: number
    relatedPosts?: RelatedPost[]
  }
  
  export interface PostListItem {
    _id: string
    title: string
    slug: {
      current: string
    }
    excerpt?: string
    mainImage?: ImageAsset
    publishedAt: string
    author: Author
    categories: Category[]
    estimatedReadingTime: number
    readingTime: number
  }
  
  