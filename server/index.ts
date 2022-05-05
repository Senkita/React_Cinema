import { readdir } from "node:fs/promises";
import { extname, join } from "node:path";

const Koa = require("koa");

const app = new Koa();

app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  await next();
});

app.use(async (ctx) => {
  const videoList: Array<string> = [];
  const videoTypeList: Array<string> = ["mp4", "mkv"];

  try {
    const files = await readdir("/opt/Downloads");

    files.forEach((file) => {
      const fileExtName: string = extname(file).slice(1);

      if (videoTypeList.indexOf(fileExtName) !== -1) {
        videoList.push(file);
      }
    });

    ctx.body = JSON.stringify({ videos: videoList });
  } catch (err) {
    ctx.body = err;
  }
});

app.listen(2333);
