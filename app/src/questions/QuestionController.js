/**
 * Created by paul on 6/20/15.
 */
(function(){

    angular
        .module('questions')
        .controller('QuestionController', [
            'questionService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
            QuestionController
        ]);

    /**
     * Main Controller for the Angular Material Starter App
     * @param $scope
     * @param $mdSidenav
     * @param avatarsService
     * @constructor
     */
    function QuestionController( questionService, $mdSidenav, $mdBottomSheet, $log, $q) {
        var self = this;

        self.selected     = null;
        self.questions        = [ ];
        self.selectQuestion   = selectQuestion;
        self.toggleList   = toggleQuestionsList;
        self.submitAnswer = submitAnswer;
        self.validateAnswer = validateAnswer;
        //self.showContactOptions  = showContactOptions;

        // Load all registered users

        questionService
            .loadAllQuestions()
            .then( function( questions ) {
                self.questions    = [].concat(questions);
                self.selected = questions[0];
            });

        // *********************************
        // Internal methods
        // *********************************

        /**
         * First hide the bottomsheet IF visible, then
         * hide or Show the 'left' sideNav area
         */
        function toggleQuestionsList() {
            var pending = $mdBottomSheet.hide() || $q.when(true);

            pending.then(function(){
                $mdSidenav('left').toggle();
            });
        }

        /**
         * Select the current avatars
         * @param menuId
         */
        function selectQuestion ( question ) {
            self.selected = angular.isNumber(question) ? $scope.questions[question] : question;
            self.toggleList();
        }

        function submitAnswer (){
            alert('submitted');
        }

        function validateAnswer (answer) {
            console.log(answer);
           if(answer.isCorrect == 'true') { localStorage.setItem('Correct Answer', answer.$$hashKey); }

        }



        /**
         * Show the bottom sheet
         */
        //function showContactOptions($event) {
        //    var question = self.selected;
        //
        //    return $mdBottomSheet.show({
        //        parent: angular.element(document.getElementById('content')),
        //        templateUrl: './src/users/view/contactSheet.html',
        //        controller: [ '$mdBottomSheet', ContactPanelController],
        //        controllerAs: "cp",
        //        bindToController : true,
        //        targetEvent: $event
        //    }).then(function(clickedItem) {
        //        clickedItem && $log.debug( clickedItem.name + ' clicked!');
        //    });
        //
        //    /**
        //     * Bottom Sheet controller for the Avatar Actions
        //     */
        //    function ContactPanelController( $mdBottomSheet ) {
        //        this.user = user;
        //        this.actions = [
        //            { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
        //            { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
        //            { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
        //            { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
        //        ];
        //        this.submitContact = function(action) {
        //            $mdBottomSheet.hide(action);
        //        };
        //    }
        //}

    }

})();
