import { a as __nuxt_component_1 } from "../server.mjs";
import { _ as __nuxt_component_4 } from "./About2-BML_Tx3w.js";
import { withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useHead } from "./v3-BY5EM-DR.js";
import "C:/laragon/www/kaifront/node_modules/hookable/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/laragon/www/kaifront/node_modules/unctx/dist/index.mjs";
import "C:/laragon/www/kaifront/node_modules/h3/dist/index.mjs";
import "pinia";
import "C:/laragon/www/kaifront/node_modules/defu/dist/defu.mjs";
import "vue-router";
import "C:/laragon/www/kaifront/node_modules/radix3/dist/index.mjs";
import "C:/laragon/www/kaifront/node_modules/ufo/dist/index.mjs";
import "C:/laragon/www/kaifront/node_modules/klona/dist/index.mjs";
import "C:/laragon/www/kaifront/node_modules/@unhead/vue/dist/index.mjs";
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
      const _component_NuxtLayout = __nuxt_component_1;
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
export {
  _sfc_main as default
};
//# sourceMappingURL=about-BwfGv13G.js.map
