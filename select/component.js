Vue.component("myinput",{
    ////获取父组件传来的con////
    props:['con'],
    //////input的聚焦事件调动父组件上的@event事件，对实例对象中的status进行改变
    template:` <div>
                    <input type="text" @focus="focus" v-model="con">
                </div>`,
    methods:{
        focus(){
            this.$emit("event");
        }
    }
});

Vue.component("myselect",{
    props:['list-data','status'],
    ///////子组件上的点击事件调动父组件上的@event事件，并且将现在这个Li的值传过去，
    // 赋值给实例对象中的this.con，被input获取
    template:`<ul v-show="status==true">
                    <li v-for="item in listData" @click="change(item.title)">{{item.title}}</li>
   
                </ul>`,
    methods:{
        change(value){
            this.$emit("event",value);
        }
    }
});