import { _ as __nuxt_component_0 } from './Preloader-_VOwcwVv.mjs';
import { a as __nuxt_component_1$1 } from './server.mjs';
import { useSSRContext } from 'file://C:/laragon/www/kaifront/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file://C:/laragon/www/kaifront/node_modules/vue/server-renderer/index.mjs';
import { u as useHead } from './v3-BY5EM-DR.mjs';
import 'file://C:/laragon/www/kaifront/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/laragon/www/kaifront/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/laragon/www/kaifront/node_modules/h3/dist/index.mjs';
import 'file://C:/laragon/www/kaifront/node_modules/ufo/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/laragon/www/kaifront/node_modules/destr/dist/index.mjs';
import 'file://C:/laragon/www/kaifront/node_modules/hookable/dist/index.mjs';
import 'file://C:/laragon/www/kaifront/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/laragon/www/kaifront/node_modules/unstorage/dist/index.mjs';
import 'file://C:/laragon/www/kaifront/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/laragon/www/kaifront/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://C:/laragon/www/kaifront/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/laragon/www/kaifront/node_modules/ohash/dist/index.mjs';
import 'file://C:/laragon/www/kaifront/node_modules/klona/dist/index.mjs';
import 'file://C:/laragon/www/kaifront/node_modules/defu/dist/defu.mjs';
import 'file://C:/laragon/www/kaifront/node_modules/scule/dist/index.mjs';
import 'file://C:/laragon/www/kaifront/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/laragon/www/kaifront/node_modules/pathe/dist/index.mjs';
import 'file://C:/laragon/www/kaifront/node_modules/unhead/dist/server.mjs';
import 'file://C:/laragon/www/kaifront/node_modules/devalue/index.js';
import 'file://C:/laragon/www/kaifront/node_modules/unhead/dist/utils.mjs';
import 'file://C:/laragon/www/kaifront/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/laragon/www/kaifront/node_modules/unctx/dist/index.mjs';
import 'file://C:/laragon/www/kaifront/node_modules/pinia/dist/pinia.prod.cjs';
import 'file://C:/laragon/www/kaifront/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [
        { rel: "stylesheet", href: "css/index-4/default.css" },
        { rel: "stylesheet", href: "css/index-4/style.css" },
        { rel: "stylesheet", href: "css/index-4/responsive.css" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Preloader = __nuxt_component_0;
      const _component_NuxtLayout = __nuxt_component_1$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Preloader, null, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: "thames",
        logo: "/images/index-4/logo.png",
        logo2: "/images/index-4/black-logo.png",
        footerLogo: "/images/index-4/black-logo.png"
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DbJ4nCUj.mjs.map
