<template>
    <div id="mycontainer">
        <!--  <Header/> -->
        <div id="signup-box">
            <h2>Sign Up</h2>
            <p>Who you are?</p>
            <form id="myform" @submit.prevent="submitHandle">
                <div class="my-form-group outline-div">
                    <span class="icons"><i class="fa fa-user" aria-hidden="true"></i></span>
                    <input 
                    type="text" 
                    placeholder="Username"
                    v-model="name">
                </div> 
                <div class="my-form-group outline-div">
                    <span class="icons"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                    <input type="text" 
                    placeholder="Email" 
                    required 
                    autocomplete="false"
                    v-model="email">
                </div>
                <div class="my-form-group outline-div">
                    <span class="icons"><i class="fa fa-lock" aria-hidden="true"></i></span>
                    <input type="password" 
                    placeholder="Password" 
                    autocomplete="false" 
                    v-model="password"
                    required>
                </div>
                <div class="my-form-group outline-div">
                    <span class="icons"><i class="fa fa-lock" aria-hidden="true"></i></span>
                    <input type="password" 
                    placeholder="Confirm Password" 
                    autocomplete="false" 
                    v-model="cpassword"
                    required>
                </div>
                <div class="my-form-control">
                    <button type="submit">Signup</button>
                </div>
            </form>
            <p id="login-user">
                Already have an account. <router-link to="/login">Login here</router-link>
            </p>
        </div>
    </div>
</template>

<script>
/* import Header from './Header' */
import { register } from '../utils/api'
export default {
    name: 'Signup',
    /* components: {
      Header
    }, */
    data () {
        return {
            name: '',
            email: '',
            password: '',
            cpassword: ''
        }
        
    },
    methods: {
        async submitHandle () {
            if(this.password === this.cpassword) {
                //continue
                const dataToSend = {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }

                try {
                    await register( dataToSend )
                    .then( data => {
                        if ( data )
                        {
                            alert('you have sucessfully registered')
                            console.log("Registered: ", data)
                            this.$router.push({path: '/login'})
                               

                        } else
                        {
                            alert('contact the developer there is an issue getting you to your profile')
                        }
                        
                    } ).catch( error => {
                        if ( error.response.status === 500 )
                        {
                            alert( "There was a problem registering the user." )
                        }else {
                            alert( 'Error on the server.')
                        } 
                    } )
                } catch (error) {
                    alert("contact the developer - Reg Error")
                }

                

            }else{
                alert("invalid password")
                this.password = '',
                this.cpassword = ''
            }
            
        }
    }
}
</script>
