/**
 * Created by paul on 6/20/15.
 */
(function(){
    'use strict';

    angular.module('questions')
        .service('questionService', ['$q', QuestionService]);

    /**
     * Questions DataService
     * Uses embedded, hard-coded data model; acts asynchronously to simulate
     * remote data service call(s).
     *
     * @returns {{loadAll: Function}}
     * @constructor
     */
    function QuestionService($q){
        var questions = [
            {
                name: 'Question 1',
                avatar: 'svg-1',
                question: 'In a structured document, each field has its own database column in SQL Server. ',
                details: 'This is additional info about the question',
                category: 'Basic Functionality',
                options: [
                    {text: 'True', isCorrect: true},
                    {text: 'False', isCorrect: false}
                ]
            },
            {
                name: 'Question 2',
                avatar: 'svg-1',
                question: 'To perform on-site editing, you must first login to Administration. (True/False) ',
                details: 'This is additional info about the question',
                category: 'Basic Functionality',
                options: [
                    {text: 'True', isCorrect: false},
                    {text: 'False', isCorrect: true}
                ]
            },
            {
                name: 'Question 3',
                avatar: 'svg-2',
                question: 'Which of the following statements best describes the CMS.TreeEngine.TreePathUtils API class? (Select the most-correct answer)',
                details: 'This is additional info about the question',
                category: 'Application Programming Interface',
                options: [
                    {text: 'Encapsulates data from the CMS_Tree and CMS_Document tables and their respective coupled tables. ', isCorrect: false},
                    {text: 'Only used to delete tree nodes. ', isCorrect: false},
                    {text: 'Represents a relationship between two documents.  ', isCorrect: false},
                    {text: 'Provides functionality for validating and converting paths, URLs, aliases, and names.  ', isCorrect: true}
                ]
            },
            {
                name: 'Question 4',
                avatar: 'svg-2',
                question: 'The CMS.Synchronization namespace is used for which of these purposes: (Select all correct answers) ',
                details: 'This is additional info about the question',
                category: 'Application Programming Interface',
                options: [
                    {text: 'Synchronization of Integration bus tasks ', isCorrect: true},
                    {text: 'Content and object staging ', isCorrect: true},
                    {text: 'Document versioning. ', isCorrect: false},
                    {text: 'Object versioning. ', isCorrect: true}
                ]
            },
            {
                name: 'Question 5',
                avatar: 'svg-2',
                question: 'You can register event handlers by creating a custom class in which folder? (Select the most correct answer) ',
                details: 'This is additional info about the question',
                category: 'Application Programming Interface',
                options: [
                    {text: 'App_Bin', isCorrect: false},
                    {text: 'App_Code ', isCorrect: true},
                    {text: 'App_Code ', isCorrect: false},
                    {text: 'App_WebReferences ', isCorrect: false}
                ]
            }
        ];

        // Promise-based API
        return {
            loadAllQuestions : function() {
                // Simulate async nature of real remote calls
                return $q.when(questions);
            },
            selectQuestion : function( question ) {
                return questions[question];

            }
        };
    }

})();
