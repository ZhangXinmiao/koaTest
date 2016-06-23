import React from 'react';
import ReactDOMServer from 'react-dom/server';
import routerConfig from './router-config';

export default function(Router) {
  const router = new Router();

  /**
   * 路由
   * @param  {Function} Router
   * @return {Function}
   */
   routerConfig.map(function(item, i){
      router.get(item.routerUrl, function* () {
        yield this.render(item.renderUrl, {
          reactOutput: item.reactOutput,
        });
      });
   });

  return router.routes();
}
