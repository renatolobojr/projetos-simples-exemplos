
Vue.component('my-nav',{
    template: '<nav> My nav </nav>'
})


Vue.component('my-section',{
    template: '<section> My  </section>'    
})

Vue.component('my-main',{
    template: '<main> My main <my-section/> <my-section/> <my-section/> </main>'
})

Vue.component('my-aside',{
    template: '<aside> My aside </aside>'
})

new Vue({
    el: "#app", //id da div que será controlada pela instancia vue
    data: {
        message: "phpzm.rocks"
    },
    methods: {},
    mounted:function(){} //função que irá executar quando a página for carregada
})


