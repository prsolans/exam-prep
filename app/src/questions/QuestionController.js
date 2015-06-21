/**
 * Created by paul on 6/20/15.
 */
(function(){

    var app = angular
        .module('questions')
        .controller('QuestionController', [
            'questionService', '$mdSidenav', '$log', '$q',
            QuestionController
        ]);

    /**
     * Main Controller for the Angular Material Starter App
     * @param $scope
     * @param $mdSidenav
     * @param avatarsService
     * @constructor
     */
    function QuestionController( questionService, $mdSidenav, $log, $q) {
        var self = this;

        self.selected     = null;
        self.questions        = [ ];
        self.selectQuestion   = selectQuestion;
        self.toggleList   = toggleQuestionsList;

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
         * Hide or Show the 'left' sideNav area
         */
        function toggleQuestionsList() {

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

    }

    app.directive('quiz', function(questionService) {
        return {
            restrict: 'AE',
            scope: {},
            templateUrl: './src/questions/view/questionTemplate.html',
            link: function(scope, elem, attrs) {
                scope.start = function() {
                    scope.id = 0;
                    scope.quizOver = false;
                    scope.inProgress = true;
                    scope.getQuestion();
                };

                scope.reset = function() {
                    scope.inProgress = false;
                    scope.score = 0;
                };

                scope.getQuestion = function() {
                    var q = questionService.selectQuestion(scope.id);
                    if(q) {
                        scope.question = q.question;
                        scope.options = q.options;
                        scope.answer = q.answer;
                        scope.answerMode = true;
                    } else {
                        scope.quizOver = true;
                    }
                };

                scope.checkAnswer = function() {

                    var invalid = true;
                    var answers = $('.answer');
                    var questionId = scope.$id;

                    console.log(questionId);

                    var checkedAnswers = $('.answer.md-checked');
                    if(checkedAnswers.length > 0){

                        console.log('checking...');
                        console.log(answers.length);

                        answers.each(function(i){

                            console.log(answers[i]);
                            var isChecked;
                            var isCorrect;

                            if (checkedAnswers[i] ? isChecked = 'true' :  isChecked = 'false');

                            console.log('isChecked: ' + isChecked);
                            console.log('isCorrect: ' + isCorrect);

                            var thisAnswer = $(answers[i]);

                            console.log(thisAnswer);

                            if ( (isCorrect === true && isChecked == 'true') || (isCorrect === false && isChecked == 'false') ){

                            }
                            else { thisAnswer.addClass('incorrect'); }

                            i++;
                        })

                        var wrongAnswers = $('.incorrect');

                        console.log('WRONG ANSWERS:');
                        console.log(wrongAnswers.length);


                        if(wrongAnswers.length > 0) {
                            console.log('wrong');
                        }
                        else {
                            console.log('THIS QUESTION IS ANSWERED CORRECTLY');
                            scope.nextQuestion();
                            scope.answerMode = true;
                            scope.score++;
                        }
                    }
                    else {console.log('Please answer the question.');}
                };

                scope.nextQuestion = function() {
                    scope.id++;
                    scope.getQuestion();
                }

                scope.reset();
            }
        }
    });

})();
