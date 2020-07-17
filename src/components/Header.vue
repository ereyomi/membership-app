<template>
    <div id="header">
        <nav class="nav-menu">
                <ul>
                    <li><router-link to="/" exact>Home</router-link></li>
                    <li><router-link to="/signup">Sign up</router-link></li>
                    <li><router-link to="/login">Log in</router-link></li>
                </ul>
            </nav>     
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    //msg: String
  }
}
</script>
<style scoped>
#header {
    width: 100%;
    position: absolute;
    z-index: 99;
    top: 5px;
}
.nav-menu{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.nav-menu ul {
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
}
.nav-menu ul li {
    padding: 15px 20px;
}
.nav-menu ul li a {
    text-decoration: none;
    padding: 8px 15px;
    border-radius: 5px;
    color: rgb(182, 137, 190);
    border: 1px solid rgb(182, 137, 190);
    border-radius: 20px;
    cursor: pointer;
    font-style: normal;
    font-weight: normal;
    font-size: 0.8rem;
    text-transform: uppercase;
}
.nav-menu ul li a:hover,
.router-link-active,
.router-link-exact-active {
    background: rgb(182, 137, 190);
    color: rgb(78,7,92) !important;
}
</style>