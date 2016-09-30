/**
 * Created by zara on 29/09/16.
 */
angular.module('app').factory('auth', function ($firebaseAuth) {
   return $firebaseAuth();
});