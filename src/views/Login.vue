<template>
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
        <input type="email" placeholder="Email" v-model.trim="email">
        <input type="password" placeholder="Contraseña" v-model.trim="password">
        <button type="submit" :disabled="userStore.loadingUser">Acceso</button>
    </form>
</template>

<script setup>
    import { ref } from 'vue';
    import {useUserStore} from '../stores/user';
    // import { useRouter } from 'vue-router';


    const userStore = useUserStore();

    // const router = useRouter()

    const email = ref('');
    const password = ref('');

    const handleSubmit = async () => {
        if(!email.value|| password.value.length < 5)
        return alert('faltan los datos')

       await userStore.loginUser(email.value, password.value)
        // router.push('/')
    }

</script>