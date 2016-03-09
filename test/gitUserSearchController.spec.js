describe('GithubUserSearchController', function() {
  
  var ctrl;

  beforeEach(function(){
    module('GithubUserSearch');
    inject(function($controller) {
      ctrl = $controller('GithubUserSearchController');
    });
  });

  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

});
