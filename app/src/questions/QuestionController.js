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
                        scope.details = q.details;
                        scope.answer = q.answer;
                        scope.category = q.category;
                        scope.avatar = q.avatar;
                        scope.answerMode = true;
                        scope.correctAns = false;
                    } else {
                        scope.quizOver = true;
                    }
                };

                scope.checkAnswer = function() {

                    var answers = $('.answer');

                    var checkedAnswers = $('.answer.md-checked');

                    if(checkedAnswers.length > 0) {

                        var correct = false;

                        answers.each(function (i) {

                            var isChecked = $(this).hasClass('md-checked');
                            var isCorrect = scope.options[i].isCorrect;

                            if ((isCorrect === true && isChecked === false) || (isCorrect === false && isChecked === true)) {
                                correct = false;
                                score.correctAns = false;
                                return false;
                            }

                            correct = true;
                            return true;
                        });

                        if (correct === true) {
                            scope.score++;
                            scope.correctAns = true;
                        }

                    }
                    else {console.log('Please answer the question.'); return false;}

                    scope.answerMode = false;

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
