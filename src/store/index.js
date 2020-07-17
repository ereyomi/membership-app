/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto' //vuex requires promises for browsers that doesnt support promises
import { getusers, register, userLogin } from '../utils/api'

Vue.use(Vuex)

export default new Vuex.Store( {
  state: {
        count: 0,
        loggedInUser: true,
        loggedInUserData: null
    },
    getters: {
        getUser (state, getters) {
            return state.loggedInUserData
        }
    },
    actions: {
        /*ff ( context, product ) {
            //context.commit()
        },*/
        fetchAllUsers ( { commit } ) {
            return new Promise( ( resolve, reject ) => {
                getusers()
                    .then( data => {
                        if ( data )
                        {
                            commit( 'updateUsersData', data )
                            resolve()
                        } else
                        {
                            reject()
                        }
                        
                    })
                
            } )            
        },
        login ( { commit }, payload ) {
            commit( 'isLoggin', payload )
        },
        signout ({commit}) {
            commit('clearLoggedUser', null)
        }
    },
  mutations: {
      isLoggin ( state, loginUser ) {
          
          state.loggedInUserData = loginUser
          //update login user state
          state.loggedInUser = true
          
      },
      updateUsersData ( state, usersData ) {
          state.users = usersData
      },
      clearLoggedUser ( state, data) {
          state.loggedInUserData = data
      }
  }
} )