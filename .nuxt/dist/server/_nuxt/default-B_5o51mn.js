import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2, t as thamesUtils } from "./ScrollTop-CUlaZ_Ml.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "parallax-js";
import "./interval-XdmACZz8.js";
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
const _sfc_main = {
  mounted() {
    thamesUtils.bgImage();
    thamesUtils.stickyNav();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0;
  const _component_Footer = __nuxt_component_1;
  const _component_ScrollTop = __nuxt_component_2;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<main class="over-hiddenn">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_ScrollTop, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-B_5o51mn.js.map
