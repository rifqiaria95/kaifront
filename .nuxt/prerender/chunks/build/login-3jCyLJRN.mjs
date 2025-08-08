import { _ as __nuxt_component_0 } from './nuxt-link-B3KgqC0T.mjs';
import { reactive, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'file://C:/laragon/www/kaifront/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'file://C:/laragon/www/kaifront/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://C:/laragon/www/kaifront/node_modules/ufo/dist/index.mjs';
import 'file://C:/laragon/www/kaifront/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/laragon/www/kaifront/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/laragon/www/kaifront/node_modules/h3/dist/index.mjs';
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
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const form = reactive({
      email: "",
      password: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login-page" }, _attrs))} data-v-4b16b4eb><div class="container" data-v-4b16b4eb><div class="row justify-content-center" data-v-4b16b4eb><div class="col-md-6 col-lg-4" data-v-4b16b4eb><div class="login-form-wrapper" data-v-4b16b4eb><h2 class="text-center mb-4" data-v-4b16b4eb>Masuk</h2><form data-v-4b16b4eb><div class="form-group mb-3" data-v-4b16b4eb><label for="email" class="form-label" data-v-4b16b4eb>Email</label><input type="email" id="email"${ssrRenderAttr("value", unref(form).email)} class="form-control" required data-v-4b16b4eb></div><div class="form-group mb-3" data-v-4b16b4eb><label for="password" class="form-label" data-v-4b16b4eb>Password</label><input type="password" id="password"${ssrRenderAttr("value", unref(form).password)} class="form-control" required data-v-4b16b4eb></div><button type="submit" class="btn btn-primary w-100 mb-3" data-v-4b16b4eb> Masuk </button></form><div class="text-center" data-v-4b16b4eb>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-decoration-none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Kembali ke Beranda `);
          } else {
            return [
              createTextVNode(" Kembali ke Beranda ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4b16b4eb"]]);

export { login as default };
//# sourceMappingURL=login-3jCyLJRN.mjs.map
