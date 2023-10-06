export const getTodaysBlogPosts = `
  query allTheBlogs {
    blogPosts(
        orderBy: { createdAt: DESC }
      ) {
        blogTitle
        blogDescription
        createdAt
        blogContent {
          html
        }
        publishedAt
        releaseDate
      }
  }
`;
