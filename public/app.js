var app = angular.module('myMessenger', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('chat',{
        url:'/chat',
        templateUrl:'views/chat.html',
        controller:'chatCtrl'
    });

    $urlRouterProvider.otherwise('/chat');

});

app.controller('chatCtrl',
    function($scope){
    
    //Array of all messages
    $scope.messages = [
      {sender: 'Alice', body:'Hello, how are you?', side:'left'},
      {sender: 'Bob', body:'I am fine, how are you?', side: 'right'},
      {sender: 'Alice', body:'Never been better', side: 'left'}
    ];
    
    //Function to add new messages
    $scope.add_new_message = function(){
        //Add new message to list of existing messages
        $scope.messages.push({
                sender: 'Bob',
                body: $scope.message_body,
                side:'right'
            });
        //Clear existing message
        $scope.new_message = null;
    }
});


