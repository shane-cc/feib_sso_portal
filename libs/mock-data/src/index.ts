import * as jsonServer from 'json-server';
import { db } from './lib/db';
import axios from 'axios';

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

const getSearchQuery = (queryString: string, key: string): string => {
  if (!queryString) return '';
  const searchQuery = `&${queryString}}`;
  const queryParts = searchQuery.split(`&${key}=`);
  const queryValue = queryParts.pop()?.split('&').shift() || '';
  return queryValue;
};

server.use(middlewares);
server.use(jsonServer.bodyParser);
(router as any).render = async (req: any, res: any) => {
  const queryString = req._parsedUrl.query;
  const pathname = req._parsedUrl.pathname.split('/')[1];
  const page = getSearchQuery(queryString, '_page');
  const limit = getSearchQuery(queryString, '_limit');
  const totalCount = res.get('X-Total-Count')?.__wrapped__ || 0;
  if (page) {
    return res.jsonp({
      [pathname]: res.locals.data,
      currentPage: page,
      pageSize: limit,
      totalPage: Math.round(parseInt(totalCount[pathname].length) / 10) + 1,
    });
  }
  return res.jsonp({
    [pathname]: res.locals.data,
  });
};
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
