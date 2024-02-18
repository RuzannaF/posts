
export const sortPosts = (postsForSort, sortValue) => {
  const sorted = [...postsForSort]
  if (sortValue === "AZ") {
    sorted.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortValue === "ZA") {
    sorted.sort((a, b) => b.title.localeCompare(a.title));
  }
  return sorted
}