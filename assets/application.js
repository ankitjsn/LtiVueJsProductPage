// Put your application javascript here

const store = Vue.reactive({
    state: {
        cartState: []
    },

    getCart() {
        axios.get('/cart.js')
        .than(response =>{
            this.state.cartState.unshift(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }
})

const miniCartState = Vue.reactive({
    hidden: true
})

const toggleMiniCart = {
    openCart() {
        miniCartState.hidden = !miniCartState.hidden
        menuState.hidden = true
    }
}

const toggleMenu = {
    openMenu() {
        menuState.hidden = !menuState.hidden
        miniCartState.hidden = true
    }
}

const toggleColse = {
    closeAll(){
        miniCartState.hidden = true
        menuState.hidden = true
    }
}