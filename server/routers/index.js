import React from 'react';
import ReactDOMServer from 'react-dom/server';

export default function(Router) {
  const router = new Router();

  /**
   * 首页路由
   * @param  {Function} Router
   * @return {Function}
   */
  var someComponent = React.createFactory(require('../../app/moduleA/components/SomeComponents.jsx'));
  var reactHtml = ReactDOMServer.renderToString(someComponent({}));

  router.get('/', function* () {
    yield this.render('moduleA/views/index', {
      reactOutput: reactHtml,
    });
  });


  return router.routes();
}
