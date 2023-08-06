import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead } from '../../renderers.mjs';
import 'html-escaper';
/* empty css                           */import 'cookie';
import 'kleur/colors';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'vue';
import 'vue/server-renderer';
import 'mime/lite.js';
import 'node:fs';
import 'node:path';
import 'node:os';
import 'node:url';
import 'node:worker_threads';
import 'module';
import 'worker_threads';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const title = "xDuracel webpage";
  return renderTemplate`<html lang="en" class="astro-J7PV25F6">
  <head>
    <meta charset="UTF-8">
    <link rel="icon" href="/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
  ${renderHead()}</head>
  <body class="bg astro-J7PV25F6">
    <h1 class="astro-J7PV25F6">Hello there, this is my site!???</h1>
    <h2 class="astro-J7PV25F6">${title}</h2>
  </body>
</html>`;
}, "C:/Users/joaol/_git/_projetos/xduracel-git/src/pages/index.astro", void 0);

const $$file = "C:/Users/joaol/_git/_projetos/xduracel-git/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
