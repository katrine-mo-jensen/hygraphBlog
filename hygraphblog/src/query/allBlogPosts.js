export const getAllBlogPosts = `
query allTheBlogs {
  blogPosts {
    blogTitle
    blogDescription
    createdAt
    id
  }
}

`;
