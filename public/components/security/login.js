/**
 * Created by zara on 29/09/16.
 */
angular.module('app').component('login', {
    templateUrl: '/components/security/login.html',
    controller: function (auth, $location) {
        
        this.anonLogin = function (){
            auth.$signInAnonymously().then(function (user) {
                console.log("User Id: "+user.uid);
                $location.path('/home');
            }).catch((function (err) {
                this.errorMessage = err.code;
            }).bind(this))
        }
    }

});