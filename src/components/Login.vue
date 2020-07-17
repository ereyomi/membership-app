<template>
    <div id="mycontainer">
        <div id="signup-box">
            <h2>Login</h2>
            <p>Who you are?</p>
            <form id="myform" @submit.prevent="logintHandler">
                <div class="my-form-group outline-div">
                    <span class="icons"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                    <input 
                    type="text" 
                    placeholder="Email" 
                    v-model="email"
                    required>
                </div>
                <div class="my-form-group outline-div">
                    <span class="icons"><i class="fa fa-lock" aria-hidden="true"></i></span>
                    <input type="password" 
                    placeholder="Password" 
                    v-model="password"
                    autocomplete="false" 
                    required>
                </div>
                <div class="my-form-control">
                    <Loader v-if="isLoad"/>
                    <button v-else type="submit">{{ loginText }}</button>
                </div>
            </form>
            <p id="login-user">
                you do not have an account. <router-link to="/signup">Signup here</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import Loader from './Loader' 
import { userLogin } from '../utils/api'

export default {
    name: 'Login',
    components: {
      Loader
    },
    data () {
        return {
            email: '',
            password: '',
            loginText: 'login',
            isLoad: false,
        }
        
    },
    methods: {
        logintHandler () {

            //start loader
            this.startLoad()


            const loginData = {
                email: this.email,
                password: this.password
            }

            userLogin( loginData )
                .then( data => {
                        if ( data )
                        {
                            this.$store.dispatch( 'login', data)

                            this.stopLoad()

                            alert('you have sucessfully logged in')
                            this.$router.replace({ name: 'profile' }).catch(err => {
                                console.log(err)
                                alert('contact the developer there is an issue getting you to your profile')
                                })
                        } else
                        {
                            alert('I think there is an issue: i didnt get any data')
                        }
                    } ).catch( error => {
                        console.log( error )
                        if ( error.response )
                        {
                            //console.log( error.response.data );
                            //console.log( error.response.status );
                            //console.log( error.response.headers );
                             if ( error.response.status === 401 )
                            {
                                alert( "Invalid Password" )
                            } else if ( error.response.status === 404) {
                                alert( 'No user found.' )
                            }else {
                                alert( 'Error on the server.')
                            } 
                            
                        }
                    })
                    this.stopLoad()
            
            
        },
        startLoad() {
             this.isLoad = true
        },
        stopLoad(){
            this.isLoad = false
        }
    }
}
</script>
