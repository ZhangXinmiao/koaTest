import React from 'react';
import ReactDOMServer from 'react-dom/server';

export default function(Router) {
  const router = new Router();

  /**
   * 路由
   * @param  {Function} Router
   * @return {Function}
   */

  router.get('/first', function* () {
    yield this.render('moduleA/views/index', {
      reactOutput: "🐒",
    });
  });
  router.get('/second', function* () {
    yield this.render('moduleA/views/index', {
      reactOutput: "🌝",
    });
  });
  router.get('/third', function* () {
    yield this.render('moduleA/views/index', {
      reactOutput: "🔥",
    });
  });
  router.get('/forth', function* () {
    yield this.render('moduleA/views/index', {
      reactOutput: "🌚",
    });
  });
  router.get('/fifth', function* () {
    yield this.render('moduleA/views/index', {
      reactOutput: "🍓",
    });
  });


  return router.routes();
}
