import { _ as __nuxt_component_0 } from "./Preloader-_VOwcwVv.js";
import { a as __nuxt_component_1 } from "../server.mjs";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { u as useHead } from "./v3-BY5EM-DR.js";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/laragon/www/kaifront/node_modules/hookable/dist/index.mjs";
import "C:/laragon/www/kaifront/node_modules/unctx/dist/index.mjs";
import "C:/laragon/www/kaifront/node_modules/h3/dist/index.mjs";
import "pinia";
import "C:/laragon/www/kaifront/node_modules/defu/dist/defu.mjs";
import "vue-router";
import "C:/laragon/www/kaifront/node_modules/radix3/dist/index.mjs";
import "C:/laragon/www/kaifront/node_modules/ufo/dist/index.mjs";
import "C:/laragon/www/kaifront/node_modules/klona/dist/index.mjs";
import "C:/laragon/www/kaifront/node_modules/@unhead/vue/dist/index.mjs";
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
      const _component_NuxtLayout = __nuxt_component_1;
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DbJ4nCUj.js.map
