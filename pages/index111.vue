<template>
    <div>
        <section class="container">
            <a href="/show">show    </a>
            <a href='/learnmore'>learnmore     </a>
            <a href="/homepage">homepage</a>
            <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
            <h1 class="title">
                USERS
            </h1>
            <ul class="users">
                <li v-for="(user, index) in users" :key="index" class="user">
                    <nuxt-link :to="{ name: 'id', params: { id: index }}">
                        {{ user.name }}
                    </nuxt-link>
                </li>
            </ul>
        </section>
    </div>
</template>

<script scoped>
    import axios from '~/plugins/axios'
    export default {
        async asyncData() {
            let {data} = await axios.get('/api/users')
            return {
                users: data
            }
            console.log(data);
        },
        head() {
            return {
                title: 'Users'
            }
        }
    }
</script>

<style scoped>
    /* .title
{
  margin: 30px 0;
} */
    .users {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .user {
        margin: 10px 0;
    }
</style>