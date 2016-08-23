!(function (angular) {
    //再创建一个模块
    //在这个模块下新建一个服务，来放置我们的业务逻辑部分
    angular.module("app.service.main",[])
    .service("mainServices",["$window",function ($window) {

        //随机获取id
        function getId () {
            var id = Math.random();
            for(var i =0;i< data.length;i++){
                if(data[i].id === id){
                    id = getId();
                    break;
                }
            }
            return id;
        }

        //用本地存储localStorage
        var storage = $window.localStorage;

        //获取
        var data = storage['dataLongTime']?JSON.parse(storage['dataLongTime']) : [];

        //封装一个存储,每次数据更新都要放进去
        this.save = function() {
            storage['dataLongTime'] = JSON.stringify(data);
        }

        //把data数据也暴露出去
        this.get = function () {
            return data;
        }
        //添加数据
        this.add = function (text) {
            
            data[data.length] = {id : getId(), text : text, completed : false};
            this.save();
        }

        //删除数据
        this.remove = function (id) {
            for(var i =0;i< data.length;i++){
                if(data[i].id === id){
                    data.splice(i,1);
                    break;
                }
            }
            this.save();
        }

        //全选
        var now = true;
        this.toggleAll = function () {
            //用一个布尔开关，初始值为true，循环赋给每一个completed
            for(var i =0;i< data.length;i++){
                data[i].completed = now;
            }
            now = !now;
            this.save();
        }

        //清除已完成的列表项
        this.clearCompleted = function () {
            //原理：循环数组，把当前没完成的添加到一个新数组里，
            //循环结束后再把新数组赋值给原先的数组
            var arr = [];
            for(var i = 0; i< data.length;i++){
                if(!data[i].completed){
                    arr.push(data[i]);
                }
            }
            data = arr;
            this.save();
            return data;
        }  

    }]);
})(angular);