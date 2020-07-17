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
                    <Loader v-if="isLoading"/>
                    <button v-else type="submit">Sign up</button>
                </div>
            </form>
            <p id="login-user">
                Already have an account. <router-link to="/login">Login here</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import Loader from './Loader' 
import { register } from '../utils/api'
export default {
    name: 'Signup',
    components: {
      Loader
    }, 
    data () {
        return {
            name: '',
            email: '',
            password: '',
            cpassword: '',
            isLoading: false
        }
        
    },
    methods: {
        async submitHandle () {
            //show loader
            this.startLoader()


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
                            this.stopLoader()
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
                this.stopLoader()
                

            }else{
                alert("invalid password")
                this.stopLoader()
                this.password = '',
                this.cpassword = ''
            }
            
        },
        startLoader() {
             this.isLoading = true
        },
        stopLoader(){
            this.isLoading = false
        }
    }
}
</script>
