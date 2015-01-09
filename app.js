/**
 * Created by kruny1001 on 1/9/15.
 */

angular.module("app", ["ui.router"])
    .config(function config($stateProvider){
        $stateProvider.state("home", {
            url:"",
            controller: "HomeCtrl as home",
            templateUrl: "templates/home.html"
        })
    })
    .controller("HomeCtrl", function HomeCtrl($http){
        var home = this;
        home.content = "Content from the controller";
        $http.get('http://localhost:3000/people').success(function(data){
            home.people = data;
            console.log('Success read Data');
        })
    })

    .directive("appHeader", function appHeader(){
        return {
            controller: "AppHeaderCtrl as appHeader",
            templateUrl: "templates/appHeader.html"
        }
    })
    .controller("AppHeaderCtrl", function AppHeaderCtrl(){
        var appHeader = this;
        appHeader.content = "This is a content from AppHeader Directive";
    });
