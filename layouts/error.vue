<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      {{ error.statusCode }}
    </h1>
    <h2 class="info">
      {{ error.message }}
    </h2>
    <h2>看来你似乎迷路了。。。还是回去吧:) </h2>
    <a class="button" href="/homepage">
      Homepage
    </a>
  </section>
</template>
<script>
export default {
  props: ['error'],
  layout:"error_tem"
}
</script>

<style scoped>
.title
{
  margin-top: 15px;
  font-size: 5em;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
}
.button
{
  margin-top: 50px;
}
@media (max-width: 768px) {
    img{
        width: 12em;
        height: 100%;
    }
    section,h1,h2{
        padding-bottom: 0.5em;
    }
}
</style>
