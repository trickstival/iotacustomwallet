import Vue from 'vue'
import VueX from 'vuex'
import state from './state'

Vue.use(VueX)

const store = new VueX.Store({
    state,
    getters: {
        getIOTA(state){
            return state.IOTA
        }
    }
})

export default store