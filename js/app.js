(function (angular) {
	'use strict';
    //写入路由模块依赖
    //引入我们自己写的模块 依赖
    var app = angular.module("mainApp",["ngRoute","app.controllers.main"]);

    //路由配置
    app.config(["$routeProvider",function ($routeProvider) {
        $routeProvider
        .when("/:status?",{
            controller : 'todoController',
            templateUrl : 'main_templ'
        })
        .otherwise({redirectTo : "/"});
    }]);
    
    


    /*app.controller("todoController",["$scope","$filter","$location",function ($scope,$filter,$location) {
        
        //随机获取id
        function getId () {
            var id = Math.random();
            for(var i =0;i< $scope.data.length;i++){
                if($scope.data[i].id === id){
                    id = getId();
                    break;
                }
            }
            return id;
        }

        //为文本框绑定值
        $scope.text = '';

        //为数据列表绑定值
        $scope.data = [
            {id : 1, text : '吃饭', completed : false},
            {id : 2, text : '睡觉', completed : true},
            {id : 3, text : '打豆豆', completed : false}
        ];

        //添加数据
        $scope.add = function () {
            //如果输入为空则返回出去不执行下面的
            if(!$scope.text){ return;}
            $scope.data[$scope.data.length] = {id : getId(), text : $scope.text, completed : false};
            $scope.text = '';
        }

        //删除数据
        $scope.remove = function (id) {
            for(var i =0;i< $scope.data.length;i++){
                if($scope.data[i].id === id){
                    $scope.data.splice(i,1);
                    break;
                }
            }
        }

        //全选
        var now = true;
        $scope.toggleAll = function () {
            //用一个布尔开关，初始值为true，循环赋给每一个completed
            for(var i =0;i< $scope.data.length;i++){
                $scope.data[i].completed = now;
            }
            now = !now;
        }

        //清除已完成的列表项
        $scope.clearCompleted = function () {
            //原理：循环数组，把当前没完成的添加到一个新数组里，
            //循环结束后再把新数组赋值给原先的数组
            var arr = [];
            for(var i = 0; i< $scope.data.length;i++){
                if(!$scope.data[i].completed){
                    arr.push($scope.data[i]);
                }
            }
            $scope.data = arr;
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
        //$scope.filterData = function (type) {
            //$scope.selector = type;
        //}
        //$watch 只能监测$scope下绑定的值
        $scope.$location = $location;
        //通过监测地址栏中的哈希值
        $scope.$watch("$location.path()",function (now,old) {
            console.log(now);
            switch(now){
                case '/active':
                    return $scope.selector = {completed : false};
                    break;
                case '/completed':
                    return $scope.selector = {completed : true};
                    break;
                default:
                    return $scope.selector = {};
                    break;
            };
        });

        //自定义比较函数,因为过滤是基于模糊匹配的，这里我们要求是精确匹配
        $scope.equalCompare = function (soure,target) {
            console.log(soure);
            console.log(target);
            return soure === target;
        }
    }]);*/
	

})(angular);
