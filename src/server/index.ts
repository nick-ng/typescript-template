import * as Koa from 'koa';
import * as koaStatic from 'koa-static';

const app = new Koa();

app.use(koaStatic('.dist'));
app.use(koaStatic('src/html'));

app.listen(process.env.PORT || 3000, () => {
  console.log(`listening on port ${process.env.PORT || 3000}`);
});