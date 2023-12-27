<template>
    <header class="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="#">Company name</a>
        <nav class="my-2 my-md-0 mr-md-3">
            <router-link to="/profile" href="#" class="p-2 text-white text-decoration-none">{{user?.first_name}} {{user?.last_name}}</router-link>
            <a href="#" class="p-2 text-white text-decoration-none" @click="logout">Sign out</a>
        </nav>
    </header>

</template>

<script>
    import axios from "axios";

    export default {
        name: "Nav",
        props: ['user'],
        methods: {
            async logout(){
                await axios.post('logout');

                await this.$router.push('/login')
            }
        }
    }
</script>
