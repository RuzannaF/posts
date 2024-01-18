
export const postsApi = {

    fetchPosts() {
        try {
            return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
            .then((response) => response.json())
            .then((posts) => posts) 
        } catch (ex) {
            console.error(ex)
          }
    },

    fetchFreshPosts(limit = 3) {
        try {
          return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_sort=id&_order=desc`)
            .then((response) => response.json())
            .then((posts) => posts) 
        } catch (ex) {
            console.error(ex)
          }
    },

    fetchById(id) {
      try {
        if (!id) {
          throw new Error('ID is broken')
        }
  
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((response) => response.json())
          .then((post) => post)
      } catch (ex) {
        console.error(ex)
      }
    }
  }