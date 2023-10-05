export const OneBlog = `

query MyQuery ($id:ID) {
    blogPost(where: {id: $id}) {
      blogDescription
      blogTitle
      blogImage {
        url
      }
      blogContent {
        html
      }
    }
  }
  `;
