export default () => {
  const config = useRuntimeConfig();
  const wpUri = config.public.wpUri

  //get
  const get = async (endpoint: string) => 
    useFetch(`${wpUri}/wp-json/wp/v2/${endpoint}`)

  //get all posts
  const getPosts = async (
    categories: number,
    // page: number = 1,
    // perPage: number = 9
    ) => {
      let query = `posts?_embed=1`
      if(categories) {
        query += `&categories=${categories}`
      }
      return get(query)
    }

  //get a single post
  const getPost = async (slug: string) => get(`posts?slug=${slug}&_embed`)

  //get all categories
  const getCategories = async () => get(`categories`)

  //get a single category
  const getCategory = async (slug: string) => get(`categories?slug=${slug}`)

  return {
    get,
    getPost,
    getPosts,
    getCategories,
    getCategory
  }
}