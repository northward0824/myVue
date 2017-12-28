new Vue({
    el:"#el",
    data:{
        datas:[
            {id:0,title:"111"},{id:1,title:"222"},{id:2,title:"333"},
        ],
        status:false,
        con:"",
    },
    methods:{
        changeStatus(){
            this.status = true;
        },
        change(value){
            this.con = value;
            this.status = false;
        }
    }

});