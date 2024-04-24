let app = new Vue({
    el:"#pear-app",
    data:{
        products: [
            {
                id: 1,
                title: "Bartlett Pear",
                short_text: "Sweet and juicy good pear with a smooth perfect texture.",
                image: "../images/bartlett_pears.png",
                desc: {
                    plant: {
                        p1: "Bartlett Pear trees are known for their vigorous growth and abundant foliage.",
                        p2: "They exhibit high productivity with consistent fruiting.",
                        p3: "This variety ripens in late summer to early autumn."
                    },
                    fruit: {
                        f1: "Bartlett pears have a relatively short shelf life compared to other varieties.",
                        f2: "The flesh is smooth and juicy, with a sweet flavor.",
                        f3: "Average fruit size ranges from medium to large."
                    },
                    cycle: {
                        season: "Late summer to early autumn"
                    },
                    color: "Green turning to yellow"
                }
            },
            {
                id: 2,
                title: "Anjou Pear",
                short_text: "Mild and slightly sweet pear with a green or red skin.",
                image: "../images/anjou_pear.png",
                desc: {
                    plant: {
                        p1: "Anjou Pear trees are characterized by their strong growth habit and dense foliage.",
                        p2: "They have good productivity, yielding fruit reliably.",
                        p3: "This variety is typically harvested in late autumn to early winter."
                    },
                    fruit: {
                        f1: "Anjou pears have a moderate shelf life compared to other varieties.",
                        f2: "The flesh is tender with a mild, sweet flavor.",
                        f3: "Fruit size varies from medium to large."
                    },
                    cycle: {
                        season: "Late autumn to early winter"
                    },
                    color: "Green or red"
                }
            },
            {
                id: 3,
                title: "Bosc Pear",
                short_text: "Crisp and flavorful pear with a russeted skin.",
                image: "../images/bosc_pear.png",
                desc: {
                    plant: {
                        p1: "Bosc Pear trees are vigorous and tend to have a more open growth habit.",
                        p2: "They demonstrate moderate productivity with consistent fruiting.",
                        p3: "This variety ripens in late autumn to early winter."
                    },
                    fruit: {
                        f1: "Bosc pears have a relatively long shelf life compared to other varieties.",
                        f2: "The flesh is crisp and flavorful, with a slightly spicy undertone.",
                        f3: "Fruit size is typically medium to large."
                    },
                    cycle: {
                        season: "Late autumn to early winter"
                    },
                    color: "Brown with russeting"
                }
            },
            {
                id: 4,
                title: "Comice Pear",
                short_text: "Buttery and exceptionally sweet pear with a green or red blush.",
                image: "../images/comice_pear.png",
                desc: {
                    plant: {
                        p1: "Comice Pear trees have a moderate growth rate and dense foliage.",
                        p2: "They exhibit moderate to high productivity, yielding fruit reliably.",
                        p3: "This variety ripens in late autumn to early winter."
                    },
                    fruit: {
                        f1: "Comice pears have a relatively short shelf life compared to other varieties.",
                        f2: "The flesh is exceptionally sweet and buttery, with a smooth texture.",
                        f3: "Fruit size ranges from medium to large."
                    },
                    cycle: {
                        season: "Late autumn to early winter"
                    },
                    color: "Green with red blush"
                }
            },
            {
                id: 5,
                title: "Forelle Pear",
                short_text: "Small, sweet pear with a distinctive red speckled skin.",
                image: "../images/forelle_pear.png",
                desc: {
                    plant: {
                        p1: "Forelle Pear trees are relatively small in stature with dense foliage.",
                        p2: "They demonstrate moderate productivity, yielding small but flavorful fruit.",
                        p3: "This variety ripens in late summer to early autumn."
                    },
                    fruit: {
                        f1: "Forelle pears have a relatively short shelf life compared to other varieties.",
                        f2: "The flesh is sweet and juicy, with a delicate texture.",
                        f3: "Fruit size is small to medium."
                    },
                    cycle: {
                        season: "Late summer to early autumn"
                    },
                    color: "Yellow with red speckles"
                }
            }
        ],
        product:[],
        cart:[],
        contactFields:{
            name: "",
            companyName: "",
            position: "",
            city: "",
            country: "",
            telephone: "",
            email: "",
            youAre:'',
            otherSpecify: "",
            interested: "",
            capcha: ""
        },
        btnVisible: 0,
        cartVisible:0,
        formVisible:1,
    },
    mounted:function(){
        this.getProduct();
        this.checkInCart();
        this.getCart();
    },
    methods:{
        getProduct:function(){
            if(window.location.hash){
                var id = window.location.hash.replace('#','');
                if(this.products && this.products.length>0){
                    for(i in this.products){
                        if(this.products[i] && this.products[i].id && id==this.products[i].id) this.product=this.products[i];
                    }
                }
            }
        },
        addToCart:function(id){
            if(window.localStorage.getItem('cart')){
                this.cart=window.localStorage.getItem('cart').split(',');
            }

            if(this.cart.indexOf(String(id))==-1){
                this.cart.push(id);
                window.localStorage.setItem('cart',this.cart.join());
                this.btnVisible=1;
            }
        },
        checkInCart:function(){
            if(this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id))!=-1) this.btnVisible=1;
            if (window.localStorage.getItem('cart') !== null) this.cartVisible = 1;
        },
        getCart:function(){
            if(window.localStorage.getItem('cart')){
                this.cart=window.localStorage.getItem('cart').split(',');
                for(var value of this.cart){
                    for(var index in this.products){
                        if(value == this.products[index].id ){
                            this.product.push(this.products[index])
                        }
                    }
                }
            }
        },
        removeFromCart:function(id){
            for(var index in this.product){
                if(id ==  this.product[index].id){
                    this.product.splice(index,1);
                    this.cart.splice(index,1)
                }
            }
            window.localStorage.setItem('cart', this.cart.join(','));
            this.getCart();
            location.reload();
        },
        makeOrder:function(){
            this.formVisible=0;
            this.cartVisible=0;
            
            this.cart = [];
            window.localStorage.removeItem('cart');
            alert("Вашу заявку відправлено. Натисніть ОК, щоб оновити сторінку.");
        
        },
    },
});