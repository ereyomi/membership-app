<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view></router-view> 
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    //HelloWorld
  },
  async mounted() {
      try {
          await this.$store.dispatch('fetchAllUsers')
           //await this.$store.getters.getUsers
      } catch (error) {
          console.log(error)
      }
      
  },
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
*, 
*::before, 
*::after {
  margin: 0;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
body {
    width: 100%;
    height: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
a {
    text-decoration: none;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} */
#mycontainer {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: rgb(78,7,92);
    background: linear-gradient(90deg, rgba(78,7,92,1) 0%, rgba(96,12,112,1) 100%);
}
#signup-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 20px;
    background: rgb(78,7,92);
    background: linear-gradient(90deg, rgba(78,7,92,1) 0%, rgba(96,12,112,1) 100%);
}
#signup-box h2 {
    color: white;
}
/* a (P tag) that is direct decendant of  #signup-box is styled
*  read about line height
*/
#signup-box > p {
    line-height: 4rem;
}
/* a (P tag) that is direct decendant of  #signup-box  which is first child
*  read about line height
*/
#signup-box > p:first-of-type {
    color:  rgb(182, 137, 190);
}
#signup-box > p:first-of-type{
    text-transform: uppercase;
    font-weight: bold;
}

#myform {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
}
.my-form-group {
    width: 100%;
    display: grid;
    grid-template-columns: 10% 90%;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    margin: 6px;
}
.outline-div {
    border: 1px solid rgb(182, 137, 190);
}
.icons,
.my-form-group input{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.icons {
    padding: 10px 20px 10px 20px;
}
.my-form-group input {
    background: none;
    border: none;
    outline: none;
    padding: 10px;
}
.icons,
.my-form-group input,
.my-form-group input::placeholder {
     color: rgb(182, 137, 190);
}
.my-form-control {
    width: 100%;
    margin: 30px;
}
.my-form-control button {
    width: 100%;
    padding: 15px;
    border-radius: 50px;
    border: none;
    font-size: 1rem;
    background: rgb(255,0,0);
    background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 100%);
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    transition: border-radius 0.8s ease-in-out;
    outline: none;
}
.my-form-control button:hover {
     border-radius: 10px;
}
#login-user {
    font-style: italic;
    color: white;
}
#login-user a {
    color: rgb(252, 108, 56);
}
@media screen and (min-width: 600px) {
    #mycontainer {
        background: rgb(232,183,242);
        background: linear-gradient(90deg, rgba(232,183,242,1) 0%, rgba(217,104,240,1) 100%);
    }
    #signup-box {
        width: 60vw;
        padding-top: 50px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
}
@media screen and (min-width: 800px) {
    
    #signup-box {
        width: 40vw;
        padding-top: 50px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
}
</style>
