
export const filterByUserId = (posts, userId) => {
  if (typeof userId !== 'number') {
    return posts
  }
  return posts.filter(post => post.userId === userId)
  }