import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2, t as thamesUtils } from './ScrollTop-CUlaZ_Ml.mjs';
import VanillaTilt from 'file://C:/laragon/www/kaifront/node_modules/vanilla-tilt/lib/vanilla-tilt.js';
import { ref, useSSRContext } from 'file://C:/laragon/www/kaifront/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderSlot } from 'file://C:/laragon/www/kaifront/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://C:/laragon/www/kaifront/node_modules/parallax-js/dist/parallax.js';
import './interval-XdmACZz8.mjs';
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

ref(null);
const _sfc_main = {
  mounted() {
    thamesUtils.bgImage();
    thamesUtils.stickyNav();
    thamesUtils.parallax();
    VanillaTilt.init((void 0).querySelectorAll("[data-tilt]"), {
      max: 25,
      speed: 400
    });
    VanillaTilt.init((void 0).querySelectorAll(".tilt"), {
      max: 15,
      speed: 1500
    });
  },
  props: {
    logo: {
      type: String,
      default: "/images/logo/logo.png"
    },
    logo2: {
      type: String,
      default: ""
    },
    footerLogo: {
      type: String,
      default: "/images/logo/logo-dark.png"
    },
    copyRightTextColor: {
      type: String,
      default: "primary-color"
    },
    downloadBtn: {
      type: Boolean,
      default: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0;
  const _component_Footer = __nuxt_component_1;
  const _component_ScrollTop = __nuxt_component_2;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Header, {
    logo: $props.logo,
    logo2: $props.logo2,
    downloadBtn: $props.downloadBtn
  }, null, _parent));
  _push(`<main class="over-hiddenn">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_Footer, {
    footerLogo: $props.footerLogo,
    copyRightTextColor: $props.copyRightTextColor
  }, null, _parent));
  _push(ssrRenderComponent(_component_ScrollTop, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/thames.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const thames = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { thames as default };
//# sourceMappingURL=thames-D75R7k04.mjs.map
