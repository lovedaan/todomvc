!(function (angular) {
    
    //创建一个新的模块
    var app = angular.module("app.controllers.main",["app.service.main"]);
    app.controller("todoController",["$scope","$filter","$routeParams","$route","mainServices",function ($scope,$filter,$routeParams,$route,mainServices) {
        //为文本框绑定值
        $scope.text = '';

        $scope.data = mainServices.get();
        //添加数据
        $scope.add = function () {
            //如果输入为空则返回出去不执行下面的
            if(!$scope.text){ return;}
            mainServices.add($scope.text);
            $scope.text = '';
        }

        //删除数据
        $scope.remove = function (id) {
            mainServices.remove(id);
        }

        //全选
        $scope.toggleAll = function () {
            //用一个布尔开关，初始值为true，循环赋给每一个completed
            mainServices.toggleAll();
        }

        //单个勾选的时候也把数据存到本地
        $scope.toggle = function () {
            mainServices.save();
        }

        //清除已完成的列表项
        $scope.clearCompleted = function () {
            //原理：循环数组，把当前没完成的添加到一个新数组里，
            //循环结束后再把新数组赋值给原先的数组
            var newData = mainServices.clearCompleted();
            $scope.data = newData;
        }

        //双击编辑文本
        $scope.editingCurrent = -1;
        $scope.dblText = function (id) {
            for(var i = 0; i< $scope.data.length;i++){
                if($scope.data[i].id === id && !$scope.data[i].completed){
                    $scope.editingCurrent = id;
                    break;
                }
            }
        }

        //编辑完敲回车提交
        $scope.editing = function () {
            $scope.editingCurrent = -1;
        }

        //过滤筛选数据 默认给个空的，就是全部显示的
        //不合适用点击事件
        $scope.selector = {};
        /*$scope.filterData = function (type) {
            $scope.selector = type;
        }*/
        //获取路由上的名字，
        var status = $routeParams.status;  
        switch(status){
            case 'active':
                return $scope.selector = {completed : false};
            case 'completed':
                return $scope.selector = {completed : true};
            default:
                // 有可能匹配到 / 或者是 /dhsdasdhk
                if(status){$route.updateParams({status: '/'})}
                return $scope.selector = {};
        };
        

        //自定义比较函数,因为过滤是基于模糊匹配的，这里我们要求是精确匹配
        $scope.equalCompare = function (soure,target) {
            console.log(soure);
            console.log(target);
            return soure === target;
        }
    }]);


})(angular);