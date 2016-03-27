var React = require('react'),
  LayoutNav = require('./LayoutNav.jsx'),
  Router = require('react-router'),
  RouteHandler = Router.RouteHandler,
  Paths = require('./PathsMixin');

var Layout = React.createClass({
  mixins: [Router.State, Paths],

  getDefaultProps: function() {
    return {title: 'React Static Site'};
  },

  render: function() {
    var script = (process.env.NODE_ENV!=='production') ? <script src="http://localhost:3000/scripts/bundle.js"></script> : '';
    var style = (process.env.NODE_ENV==='production') ? <link rel="stylesheet" href="/assets/pure.css" /> : '';
    var style2 = (process.env.NODE_ENV==='production') ? <link rel="stylesheet" href="/assets/style.css" /> : '';

    var title = this.getPathMeta('title');
    return (
      <html>
        <head>
          <title>{title}</title>
          <meta name="description" content="The portfolio of Waterloo computer science undergraduate Dimitri Walters" />
          <meta name="author" content="Dimitri Walters" />
          {style}
          {style2}
        </head>
        <body>
          <div id="layout">
            <LayoutNav/>
            <main role="main">
              {this.props.children}
              <RouteHandler/>
            </main>
          </div>
          {script}
        </body>
      </html>
    );
  }
});

module.exports = Layout;
