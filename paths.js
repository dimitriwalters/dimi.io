var paths = {
  '/': {
    title: 'Dimitri Walters',
    page: 'home.html'
  },
  '/about': {
    title: 'About',
    page: 'about.html'
  },
  '/blog': {
    title: 'Blog'
  },
  '/resume': {
    title: 'Resume',
    page: 'resume.html'
  },
  
  posts: {
    git_problems: {
      title: 'Git problems',
      md: 'git_problems.md',
      published: '2016-03-26',
      preview: 'First off, GitHub user SethRobertson created a guide titled, "On undoing, fixing, or removing...'
    }
  }
};

module.exports = {
  allPaths: function() {
    return paths;
  },
  allPosts: function() {
    return paths.posts;
  },
  pageForPath: function(path) {
    return this.pageReq()('./' + paths[path].page);
  },
  postForPath: function(path) {
    return this.postReq()('./' + paths.posts[path].md);
  },
  pageReq: function() {
    return require.context('./pages', false, /^\.\/.*\.html$/);
  },
  postReq: function() {
    return require.context('./posts', false, /^\.\/.*\.md$/);
  }
};

