<template>
    <h1>Home</h1>
    <p>{{ userStore.userData?.email }}</p>

    <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="Ingrese url" v-model="url">
        <button type="submit">Agregar</button>
    </form>


    <h3 v-if="databaseStore.loadingDoc">Loading docs...</h3>
    <ul v-else>
        <li v-for="item of databaseStore.documents" :key="item.id">
        {{ item.name }}
        <br> 
        - {{ item.id }} 
        <br>- 
        {{ item.short }}
        <br>
        <button @click="databaseStore.deleteUrl(item.id)">Eliminar</button>
        <button @click="router.push(`/editar/${item.id}`)">Editar</button>
        </li>
    </ul>
</template>

<script setup>
import {useUserStore} from '../stores/user'
import { useDatabaseStore } from '../stores/database';
import {ref} from 'vue';
import {useRouter} from 'vue-router'

const userStore = useUserStore();
const databaseStore = useDatabaseStore();
const router = useRouter()
const url = ref()

const handleSubmit = () => {
    databaseStore.addUrl(url.value)
}

databaseStore.getUrls()
</script>