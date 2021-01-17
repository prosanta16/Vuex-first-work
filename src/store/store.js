import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store=new Vuex.Store({
    state:{ 
        books: [
            {name: "Harry Potter", price: 100},
            {name: "Lord of The Rings", price: 150},
            {name: "Night Circus", price: 90},
            {name: "Lost World", price: 200}
      ]}
   

})