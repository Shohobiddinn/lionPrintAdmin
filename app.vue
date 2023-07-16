<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <!-- <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, eaque.</h1>
    <pre>{{ about }}</pre>
    <pre>{{ apiInfo }}</pre> -->
    <pre>{{ info }}</pre>
    <button @click="productApi">hbjkproductApi</button>
    <NuxtLayout />
  </div>
</template>
<script >
// const baseUrl = useRuntimeConfig().public.baseUrl;
// const about = ref(null);
// async function aboutApi() {
//   const data = await $fetch(baseUrl + "/about");
//   about.value = data.data;
// }

// aboutApi();
// const apiInfo = ref(null);
// async function getApi() {
//   const data = await $fetch("http://192.168.0.133:8008/employees", {
//     method: "POST",
//     headers: {
//       Authorization:
//         "Bearer " +
//         "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2YWxpIiwiaWF0IjoxNjg5NDExODQ4LCJleHAiOjE2ODk0OTgyNDh9.ivy2fDd7HsBHGr8nET74qg6IhFjMzHn62iz5Yyx1ASw",
//     },
//   });
//   console.log(data);
//   apiInfo.value = data;
// }
// getApi();
// const info = ref(null);
// async function productApi() {
//   const data = await $fetch("http://show-contact-backend-production.up.railway.app/auth/getdata",{
//     method:"GET",
//     headers:{
//       Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkX2F0IjoiMjAyMy0wNy0xNlQyMToyMDo0Ny42NjQ0ODUrMDU6MDAiLCJlbWFpbCI6InRvcmV4LmFtYWtpMkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQiLCJyb2xlcyI6InVzZXJzIn0.2GjlcrDnI4_-AMuOnv6lxT1V4I_dUg06ha_NaaxA6UU"
//     }
//   });
//   info.value = data;
//   console.log(data);
// }
// import axios from 'axios';

// Assuming you have the bearer token stored in a variable named 'token'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkX2F0IjoiMjAyMy0wNy0xNlQyMToyMDo0Ny42NjQ0ODUrMDU6MDAiLCJlbWFpbCI6InRvcmV4LmFtYWtpMkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQiLCJyb2xlcyI6InVzZXJzIn0.2GjlcrDnI4_-AMuOnv6lxT1V4I_dUg06ha_NaaxA6UU';

// // Make the GET request with the bearer token
// const productApi =  axios.get('http://192.168.43.40:8080/auth/getdata', {
//   headers: {
//     Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkX2F0IjoiMjAyMy0wNy0xNlQyMToyMDo0Ny42NjQ0ODUrMDU6MDAiLCJlbWFpbCI6InRvcmV4LmFtYWtpMkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQiLCJyb2xlcyI6InVzZXJzIn0.2GjlcrDnI4_-AMuOnv6lxT1V4I_dUg06ha_NaaxA6UU"
//   }
// })
//   .then(response => {
//     // Handle the response data
//     console.log(response);
//   })
//   .catch(error => {
//     // Handle any errors
//     console.error(error);
//   });
import { ofetch } from 'ofetch'

const http = {
  get() {
    const config = useRuntimeConfig()
    return new Promise((resolve, reject) => {
      ofetch(url, {
        baseURL: 'http://show-contact-backend-production.up.railway.app/auth/getdata',
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          Uuid: uuid,
        },
        onResponse({ response }) {
          if (response.ok) {
            resolve(response._data)
            console.log(response);
          }
        },
      }).catch(err => {
        reject(err)
      })
    })
  },
}
export default http
</script>