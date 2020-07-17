<template>
  <div id="mycontainer">
    <div id="signup-box">
       <div class="sm-a">
           <img alt="profile" src="../assets/member.png">
       </div>
       <div class="sm-b">
           <!-- <p>Ereyomi Oluwaseyi</p>
           <p>ereyomioluwaseyi@gmail.com</p> -->
           <p>{{ name }}</p>
           <p>{{ email }}</p>
           <div class="signOut">
                <button @click.prevent="signoutHandler">sign out</button>
            </div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
      return {
          name: '',
          email: ''
      }
  },
  async mounted() {
      try {
           const userData = await this.$store.getters.getUser
           console.log(userData)
           //this.name = userData.me
           if(userData === null){
               this.toLoginPage()
           }
           const { email,  name} = userData.user;

           this.name = name
           this.email = email

      } catch (error) {
          console.log(error)
      }
      
  },
  methods: {
      signoutHandler() {
          const userAction = confirm("Are you sure you want to signout")
          
          if(userAction){
            this.$store.dispatch('signout')
            this.toLoginPage()
          }
      },
      toLoginPage() {
          this.$router.replace({ name: 'login' }).catch(err => {
                console.log(err)
            })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.sm-a {
    width: 50%;
}
.sm-a img {
    width: 100%;
}
.sm-b {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
}
.sm-b p:first-child {
    font-size: 1.5rem;
    color: white;
}
.sm-b p:nth-child(2) {
   font-size: 0.8rem;
    color:  rgb(182, 137, 190); 
}
.signOut {
    padding: 10px;
}
.signOut button {
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    color:  rgb(78,7,92);
    background: white;
    border: 2px solid white;
    cursor: pointer;
}
.signOut button:hover {
    color: white;
    background:  rgb(182, 137, 190);
     border: 2px solid rgb(182, 137, 190);
}
</style>
