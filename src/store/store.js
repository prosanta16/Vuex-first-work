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
        ]
    },
    getters:{
        bookSale:(pp)=>{
            let saleBook=pp.books.map((book)=>{
                return{
                    name:`**${book.name}**`,
                    price:book.price/2
                }
 
            });
            return saleBook;
 
        }
    },
    mutations:{
        reducePrice:(state)=>{
            state.books.forEach((book)=>{
                book.price -=1
            })

        }
    },
    actions:{
        reducePrice:(context) =>{
            setTimeout(() => {
                context.commit('reducePrice');
            }, 1000);
        }
      }
})