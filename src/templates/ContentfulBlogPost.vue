<template>
  <Layout>
    <!-- locale: {{ locale }} -->
    <h1>{{ $page.blog.title }}</h1>
    <p>{{ $page.blog.body }}</p>
    {{ $page.blog.locale }}
  </Layout>
</template>
<page-query>

    query Blog($path: String!) {
      blog: contentfulBlogPost(path: $path) {
        title,
        locale,
        body
      }
    }
</page-query>