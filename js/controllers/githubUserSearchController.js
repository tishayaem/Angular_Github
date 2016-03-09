githubUserSearch.controller('GithubUserSearchController', [function() {
  var self = this;

  self.doSearch = function(){
    self.searchResult = {
    items: [
      {
        "login":"sarah crawley",
        "avator_url": "https://avatars0.githubusercontent.com/u/14345034?v=3&s=100",
        "html_url": "https://github.com/sara6"
      },
      {
        "login":"constantin kalinin",
        "avator_url":"https://avatars1.githubusercontent.com/u/16108959?v=3&s=100",
        "html_url":"https://github.com/tishayaem"
      }
    ]
  };
};
}]);
