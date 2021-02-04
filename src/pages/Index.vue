<template>
  <Layout>
    <g-image alt="Example image" src="~/favicon.png" width="135" />
    <h1>Hello, world!</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores</p>


    <div>
      <div v-for="(edge, index) in $page.allContentfulBlogPost.edges">
        <h1>{{edge.node.title}}</h1>
        <p>{{edge.node.locale}}</p>
      </div>
    </div>

  </Layout>
</template>

<page-query>

   query allContentfulBlogPost {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          locale
        }
      }
    }
  }
  
</page-query>

<script>
export default {}
</script>


