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
                    {text: 'App_Code', isCorrect: true},
                    {text: 'App_Data', isCorrect: false},
                    {text: 'App_WebReferences', isCorrect: false}
                ]
            },
            {
                name: 'Question 6',
                avatar: 'svg-2',
                question: 'Which of the following Twitter web parts is not included with Kentico out-of-the-box? (Select the most-correct answer)  ',
                details: 'This is additional info about the question',
                category: 'Web Parts and Widgets',
                options: [
                    {text: 'Twitter email', isCorrect: true},
                    {text: 'Twitter feed', isCorrect: false},
                    {text: 'Twitter follow button', isCorrect: false},
                    {text: 'Twitter tweet button', isCorrect: false}
                ]
            },
            {
                name: 'Question 7',
                avatar: 'svg-2',
                question: 'Which of the following actions does NOT optimize the performance of a Repeater web part in a Portal Engine page template (without modification of any caching or transformation code)? (Select the most-correct answer)  ',
                details: 'This is additional info about the question',
                category: 'Web Parts and Widgets',
                options: [
                    {text: 'Check permissions', isCorrect: true},
                    {text: 'Edit the web part control ID', isCorrect: false},
                    {text: 'Disable the ViewState property', isCorrect: false},
                    {text: 'Reduce the number of columns displayed', isCorrect: false}
                ]
            },
            {
                name: 'Question 8',
                avatar: 'svg-2',
                question: 'When developing a custom web part, what class do you need to inherit from? (Select the most correct answer)  ',
                details: 'This is additional info about the question',
                category: 'Web Parts and Widgets',
                options: [
                    {text: 'WebPartInfo', isCorrect: false},
                    {text: 'WebPartInfoProvider ', isCorrect: false},
                    {text: 'CMSAbstractWebPart ', isCorrect: true},
                    {text: 'WebPartInstance ', isCorrect: false}
                ]
            },
            {
                name: 'Question 9',
                avatar: 'svg-2',
                question: 'When a Live site user registers or creates an account, which of the following database tables contains the user account information? (Select the most-correct answer)',
                details: 'This is additional info about the question',
                category: 'Kentico Database Repository',
                options: [
                    {text: 'CMS_User', isCorrect: true},
                    {text: 'CMS_MembershipUser', isCorrect: false},
                    {text: 'CMS_UserSite', isCorrect: false},
                    {text: 'COM_Customer', isCorrect: false}
                ]
            },
            {
                name: 'Question 10',
                avatar: 'svg-2',
                question: 'For each language version of a document, the CMS_document table contains which one of the following? (Select the most-correct answer)',
                details: 'This is additional info about the question',
                category: 'Kentico Database Repository',
                options: [
                    {text: 'One column of data', isCorrect: false},
                    {text: 'One row of data', isCorrect: true},
                    {text: 'One foreign key', isCorrect: false},
                    {text: 'One database schema', isCorrect: false}
                ]
            },
            {
                name: 'Question 11',
                avatar: 'svg-2',
                question: 'Which one of the following database tables contains the document type-specific fields for the BlogPost document type? (Select the most-correct answer) ',
                details: 'This is additional info about the question',
                category: 'Kentico Database Repository',
                options: [
                    {text: 'Blogs_BlogPost', isCorrect: false},
                    {text: 'CMS_BlogPost', isCorrect: false},
                    {text: 'CONTENT_Blog', isCorrect: false},
                    {text: 'CONTENT_BlogPost', isCorrect: true}
                ]
            },
            {
                name: 'Question 12',
                avatar: 'svg-2',
                question: 'Kentico supports all of the following page template types except: (Select the most-correct answer)',
                details: 'This is additional info about the question',
                category: 'Page Templates',
                options: [
                    {text: 'ASPX pages', isCorrect: false},
                    {text: 'Dashboard pages', isCorrect: false},
                    {text: 'JSP pages', isCorrect: true},
                    {text: 'Portal pages', isCorrect: false}
                ]
            },
            {
                name: 'Question 13',
                avatar: 'svg-2',
                question: 'If a specific ASPX page template is used for a page, which of the following document tabs in the Pages application will be lacking? (Select the most-correct answer)',
                details: 'This is additional info about the question',
                category: 'Page Templates',
                options: [
                    {text: 'Page', isCorrect: false},
                    {text: 'Design', isCorrect: true},
                    {text: 'Form', isCorrect: false},
                    {text: 'Properties', isCorrect: false}
                ]
            },
            {
                name: 'Question 14',
                avatar: 'svg-2',
                question: 'The \<asp:ContentPlaceHolder../\> control can be placed in a standard page template. (True/False)',
                details: 'This is additional info about the question',
                category: 'Page Templates',
                options: [
                    {text: 'True', isCorrect: false},
                    {text: 'False', isCorrect: true}
                ]
            },
            {
                name: 'Question 15',
                avatar: 'svg-2',
                question: 'All of the following macro expressions will return the string “kenticocertified”, except for? (Select the most-correct answer)',
                details: 'This is additional info about the question',
                category: 'Macro Expressions',
                options: [
                    {text: '{% "KENTICO" + "certified" |(tolower) %} ', isCorrect: false},
                    {text: '{% str = ""; foreach (x in "KENTICOCERTIFIED") { str += x.ToLower() }; str %}', isCorrect: false},
                    {text: '{% kenticocertified %} ', isCorrect: true},
                    {text: '{% "kenticocertified" %}', isCorrect: false}
                ]
            },
            {
                name: 'Question 16',
                avatar: 'svg-2',
                question: 'The macro expression {% "6" + "7" %} returns which one of the following numbers? (Select the most-correct answer)',
                details: 'This is additional info about the question',
                category: 'Macro Expressions',
                options: [
                    {text: '13', isCorrect: false},
                    {text: '42', isCorrect: false},
                    {text: '76', isCorrect: true},
                    {text: '67', isCorrect: false}
                ]
            },
            {
                name: 'Question 17',
                avatar: 'svg-2',
                question: 'The macro expression {% z = 0; for (i = 0; i < 8; i++) { z += 1 }; z %} returns which one of the following numbers?',
                details: 'This is additional info about the question',
                category: 'Macro Expressions',
                options: [
                    {text: '0', isCorrect: false},
                    {text: '8', isCorrect: true},
                    {text: '12345678', isCorrect: false},
                    {text: '87654321', isCorrect: false}
                ]
            },
            {
                name: 'Question 18',
                avatar: 'svg-2',
                question: 'You can use a transformation to perform all of the following tasks except which one? (Select the most-correct answer)',
                details: 'This is additional info about the question',
                category: 'Transformations',
                options: [
                    {text: 'Retrieve document data', isCorrect: true},
                    {text: 'Transform document data', isCorrect: false},
                    {text: 'Display document data', isCorrect: false},
                    {text: 'Display custom data', isCorrect: false}
                ]
            },
            {
                name: 'Question 19',
                avatar: 'svg-2',
                question: 'The proper naming format for localizing a transformation named “TransformationA” into French is “TransformationA_Localize_Fr-Fr” or “Fr-Fr_TransformationA”. (True/False)',
                details: 'This is additional info about the question',
                category: 'Transformations',
                options: [
                    {text: 'True', isCorrect: false},
                    {text: 'False', isCorrect: true}
                ]
            },
            {
                name: 'Question 20',
                avatar: 'svg-2',
                question: 'Which of the following methods cannot be used in transformations? (Select all correct answers) ',
                details: 'This is additional info about the question',
                category: 'Transformations',
                options: [
                    {text: '<%# Eval("NewsTitle") %>', isCorrect: false},
                    {text: '<%# Eval<string>("NodeAliasPath") %>', isCorrect: false},
                    {text: '<%# EvalImage("NewsTeaser") %>', isCorrect: true},
                    {text: '<%# EvalCDATA("NewsText") %>', isCorrect: false}
                ]
            },
            {
                name: 'Question 21',
                avatar: 'svg-2',
                question: 'You can find the content locking options for check-in/check-out in all of the following administration interfaces, except for: (Select the most-correct answer)',
                details: 'This is additional info about the question',
                category: 'Workflow and Versioning',
                options: [
                    {text: 'Pages application -> Form tab', isCorrect: true},
                    {text: 'Pages application -> Page tab', isCorrect: false},
                    {text: 'Pages application -> Properties -> Security tab', isCorrect: false},
                    {text: 'Pages application -> Properties -> Versions tab', isCorrect: false}
                ]
            },
            {
                name: 'Question 22',
                avatar: 'svg-2',
                question: 'In Kentico, you can apply versioning to your custom queries. (True/False) ',
                details: 'This is additional info about the question',
                category: 'Workflow and Versioning',
                options: [
                    {text: 'True', isCorrect: true},
                    {text: 'False', isCorrect: false}
                ]
            },
            {
                name: 'Question 23',
                avatar: 'svg-2',
                question: 'To archive documents, a user needs which one of the following permissions? (Select the most correct answer)',
                details: 'This is additional info about the question',
                category: 'Workflow and Versioning',
                options: [
                    {text: 'Manage workflow', isCorrect: true},
                    {text: 'Modify', isCorrect: false},
                    {text: 'Archive', isCorrect: false},
                    {text: 'Destroy', isCorrect: false}
                ]
            },
            {
                name: 'Question 24',
                avatar: 'svg-2',
                question: 'When the event log reaches its maximum size, which one of the following occurs by default? (Select the most-correct answer)',
                details: 'This is additional info about the question',
                category: 'System Management',
                options: [
                    {text: 'It is cleared by a scheduled task at regular intervals (which you can specify in the web.config file).', isCorrect: false},
                    {text: 'It is reduced to half its maximum size.', isCorrect: false},
                    {text: 'It is reduced by the product of the maximum size multiplied by the coefficient specified in the web.config file.', isCorrect: true},
                    {text: 'The oldest item is deleted before a new item is logged.', isCorrect: false}
                ]
            },
            {
                name: 'Question 25',
                avatar: 'svg-2',
                question: 'With the Integration bus module, the TaskDataTypeEnum.SimpleSnapshot object contains translation data and child objects. (True/False)',
                details: 'This is additional info about the question',
                category: 'System Management',
                options: [
                    {text: 'True', isCorrect: false},
                    {text: 'False', isCorrect: true}
                ]
            },
            {
                name: 'Question 26',
                avatar: 'svg-2',
                question: 'You cannot configure the smart search module to search within custom tables. (True/False)',
                details: 'This is additional info about the question',
                category: 'System Management',
                options: [
                    {text: 'True', isCorrect: false},
                    {text: 'False', isCorrect: true}
                ]
            },
            {
                name: 'Question 27',
                avatar: 'svg-2',
                question: 'Which one of the following product types does Kentico E-commerce support? (Select the most correct answer)',
                details: 'This is additional info about the question',
                category: 'E-commerce & Online Marketing',
                options: [
                    {text: 'Bundle', isCorrect: false},
                    {text: 'Donation', isCorrect: false},
                    {text: 'Membership', isCorrect: false},
                    {text: 'All of the above', isCorrect: true}
                ]
            },
            {
                name: 'Question 28',
                avatar: 'svg-2',
                question: 'To add a custom payment gateway to the Kentico E-commerce Solution, you create a new class in the App_Code folder. (True/False)',
                details: 'This is additional info about the question',
                category: 'E-commerce & Online Marketing',
                options: [
                    {text: 'True', isCorrect: true},
                    {text: 'False', isCorrect: false}
                ]
            },
            {
                name: 'Question 29',
                avatar: 'svg-2',
                question: 'When configuring Contacts in On-line marketing, all of the following statements are true except for: (Select the most-correct answer)',
                details: 'This is additional info about the question',
                category: 'System Management',
                options: [
                    {text: 'You can enable automatic merging of Contacts from different sites if they share the same users.', isCorrect: false},
                    {text: 'You can enable automatic merging of Contacts on the same site if they share the same activities.', isCorrect: true},
                    {text: 'You can personalize the Notes stamp format used in Contact notes.', isCorrect: false},
                    {text: 'You can set rules for automatic deletion of Contacts.', isCorrect: false}
                ]
            },
            {
                name: 'Question 30',
                avatar: 'svg-2',
                question: 'Which one of the following security permissions has the highest priority (takes precedence over the others)? (Select the most-correct answer)',
                details: 'This is additional info about the question',
                category: 'Security',
                options: [
                    {text: 'Deny', isCorrect: true},
                    {text: 'Inherited', isCorrect: false},
                    {text: 'Role', isCorrect: false},
                    {text: 'User', isCorrect: false}
                ]
            },
            {
                name: 'Question 31',
                avatar: 'svg-2',
                question: 'In Kentico, you can grant/apply security permissions to which one of the following items? (Select the most-correct answer)',
                details: 'This is additional info about the question',
                category: 'Security',
                options: [
                    {text: 'IP addresses', isCorrect: false},
                    {text: 'Roles', isCorrect: true},
                    {text: 'Templates', isCorrect: false},
                    {text: 'Web parts', isCorrect: false}
                ]
            },
            {
                name: 'Question 32',
                avatar: 'svg-2',
                question: 'In Kentico, the default security on most pages is set to which one of the following configurations? (Select the most-correct answer)',
                details: 'This is additional info about the question',
                category: 'Security',
                options: [
                    {text: 'Requires authentication No, Requires SSL No', isCorrect: false},
                    {text: 'Requires authentication Yes, Requires SSL Yes', isCorrect: false},
                    {text: 'Requires authentication Yes, Requires SSL No', isCorrect: false},
                    {text: 'Requires authentication Inherits, Requires SSL Inherits', isCorrect: true}
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
