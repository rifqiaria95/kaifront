import { a as __nuxt_component_1$1 } from './server.mjs';
import { _ as __nuxt_component_4 } from './About2-BML_Tx3w.mjs';
import { withCtx, createVNode, useSSRContext } from 'file://C:/laragon/www/kaifront/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://C:/laragon/www/kaifront/node_modules/vue/server-renderer/index.mjs';
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

const __default__ = {
  mounted() {
    (void 0).querySelector("body").classList.add("body-dark-mode");
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "About Us",
      meta: [
        { name: "description", content: "About page description" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_1$1;
      const _component_About2 = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: "thames",
        logo: "/images/index-4/logo.png",
        logo2: "/images/index-4/black-logo.png",
        footerLogo: "/images/index-4/black-logo.png"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_About2, { signature: "/images/index-4/signature.png" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_About2, { signature: "/images/index-4/signature.png" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-BwfGv13G.mjs.map
