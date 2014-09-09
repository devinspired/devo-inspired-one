/*
    Inspired One Single Page app 0.0.1
    By DBrown
    Sep 18 2013
*/


/**
	Angular suggested structure
	
	A service module, for service declaration
	A directive module, for directive declaration
	A filter module, for filter declaration
	And an application level module which depends on the above modules, and which has initialization code.
**/

// START SERVICES modules, for service declaration

var nsprdServices = angular.module('nsprdApp.service', []);
	
	// nsprdLoad Service - handles Initial media Load, and the Load More
	nsprdServices.factory('nsprdLoad', ['$http', '$window', '$rootScope', function( $http, $window, $rootScope ) {
	 	
	 return {
		
		loadData : function(callback){
			//$http.get('js/json/channel.json').success(callback);
		    
		    var siteData = $http.get('js/json/site.json').success(function(data){
				return data;
		    });
			// Return the array to the controller
		    return siteData;		
		}
		
		
	}; // End the return object
	
	}]);
	
	nsprdServices.factory('nsprdLoadingState', function($rootScope){
		var timer;
		return {
			loading : function(){
				clearTimeout(timer);
				$rootScope.status = 'loading';
				$rootScope.nsprdShow = false;
				$rootScope.appLoad = 'appLoading';
				$rootScope.startTime = Date.now();
				if(!$rootScope.$$phase){$rootScope.$apply();}
			},
			ready : function(delay){
				function ready() {
					$rootScope.nsprdShow = true;
					$rootScope.status = 'ready';
					$rootScope.appLoad = 'appLoaded';
					if(!$rootScope.$$phase){$rootScope.$apply();}
				}
				
				clearTimeout(timer);
				delay = delay == null ? 500 : false;
				if(delay) {
					timer = setTimeout(ready, delay)
				} else {
					ready();
				}
			}
		};
	});
	
	
	
//END SERVICES


//A directive module, for directive declaration =
//use data binding for automatic DOM manipulation
//START Directives are for manual DOM manipulation, encapsulate presentation logic in Directives

var nsprdDirectives = angular.module('nsprdApp.directive', []);

	
	nsprdDirectives.directive('nsprdImgLoad', function() {
		return function(scope, element, attrs) {
			element.bind("load", function(e){
				element.removeClass("imgLoading");
				element.addClass("imgLoaded");
			});
		}
	});
	
	
	
//END DIRECTIVES	


//START FILTERS module, for filter declaration = data manipulation; 
var nsprdFilters = angular.module('nsprdApp.filter', []);
	nsprdFilters.filter('nsprdDate', function(){
		return function(date){
			
			var itemDate = date;
			//convert it to a string
			itemDate.toString();
			//ditch the time stamp at the end
			var newItemDate = itemDate.slice(0,10);
			//Now it is an ISO formatted string that the Date() function will recognize
			// turn it into a new date object.
			var d1 = new Date(newItemDate);
			//convert the date object into a human readible string
			var d2 = d1.toDateString();
			//cut off the GMT at the end
			var d3 = d2.slice(4);
			//voila we have a date to throw into the app item. 
			//it's not exactly formatted the way the design says.
			//the next step would be to convert the string into an array and re-arrange it the way we want.
			return d3;
			
		}
	});
	
//END FILTERS

//And an application level module which depends on the above modules, and which has initialization code.
var app = angular.module('nsprdApp', ['ngSanitize', 'nsprdApp.service', 'nsprdApp.directive', 'nsprdApp.filter'], function($httpProvider){
	
	// Use x-www-form-urlencoded Content-Type
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
 
  // Override $http service's default transformRequest
  $httpProvider.defaults.transformRequest = [function(data)
  {
    /**
     * The workhorse; converts an object to x-www-form-urlencoded serialization.
     * @param {Object} obj
     * @return {String}
     */ 
    var param = function(obj)
    {
      var query = '';
      var name, value, fullSubName, subName, subValue, innerObj, i;
      
      for(name in obj)
      {
        value = obj[name];
        
        if(value instanceof Array)
        {
          for(i=0; i<value.length; ++i)
          {
            subValue = value[i];
            fullSubName = name + '[' + i + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        }
        else if(value instanceof Object)
        {
          for(subName in value)
          {
            subValue = value[subName];
            fullSubName = name + '[' + subName + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        }
        else if(value !== undefined && value !== null)
        {
          query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }
      }
      
      return query.length ? query.substr(0, query.length - 1) : query;
    };
    
    return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
  }];
	
});


//START VIEW controllers **FUTURE DEVELOPMENT** in order to implement the different views and states of the widgets

//END VIEW controllers


//START CONTROLLERS should contain only business logic
//App or widget controller to set $rootScope

app.controller('appController', ['$rootScope', 'nsprdLoadingState', function($rootScope, nsprdLoadingState){
	$rootScope.topScope = $rootScope;
		
	nsprdLoadingState.loading();
	/* This will be implemented when we have the new views developed, and this will help with view change transitions
	$rootScope.$on('$routeChangeStart', function() {
		nsprdLoadingState.loading();
	});
	*/
}]);


//this is the main controller for the entire app.
var mainWorkCtrl = app.controller('mainWorkCtrl', ['$scope', 'nsprdLoad', 'nsprdLoadingState', function($scope, nsprdLoad, nsprdLoadingState ) {
		$scope.channel = [];
		
		var dataPromise = nsprdLoad.loadData();
		dataPromise.success(function(data){
			$scope.siteData = data;
		});
		
		
		
		
		
	}]);
	
	
//this will be necessary to minify our code, as the vars will be shortened in the above function
//this will inject the services into the controller
mainWorkCtrl.$inject = ['$scope','nsprdLoad', 'nsprdLoadingState'];


//END CONTROLLERS