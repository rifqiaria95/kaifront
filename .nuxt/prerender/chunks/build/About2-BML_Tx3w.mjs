import { ref, computed, mergeProps, unref, useSSRContext } from 'file://C:/laragon/www/kaifront/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'file://C:/laragon/www/kaifront/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { defineStore } from 'file://C:/laragon/www/kaifront/node_modules/pinia/dist/pinia.prod.cjs';
import { _ as _export_sfc, u as useNuxtApp } from './server.mjs';

const _imports_0 = publicAssetsURL("/images/about/about-dott.png");
const useAboutStore = defineStore("about", {
  state: () => ({
    aboutData: null,
    loading: false,
    error: null
  }),
  getters: {
    getAboutData: (state) => state.aboutData,
    isLoading: (state) => state.loading,
    hasError: (state) => state.error
  },
  actions: {
    async fetchAboutData() {
      this.loading = true;
      this.error = null;
      try {
        const { $api } = useNuxtApp();
        let apiUrl;
        if ($api) {
          apiUrl = $api.about();
        } else {
          apiUrl = "http://localhost:8000/api/about";
        }
        const response = await $fetch(apiUrl, {
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          }
        });
        if (!response) {
          throw new Error("Response kosong dari server");
        }
        if (Array.isArray(response) && response.length > 0) {
          this.aboutData = response[0];
        } else if (typeof response === "object") {
          this.aboutData = response;
        } else {
          throw new Error("Format response tidak valid");
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        this.error = `Gagal memuat data about: ${errorMessage}`;
      } finally {
        this.loading = false;
      }
    },
    clearError() {
      this.error = null;
    }
  }
});
function stripHtmlRegex(html) {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").trim();
}
function cleanText(html, maxLength) {
  const cleanedText = stripHtmlRegex(html);
  if (maxLength && cleanedText.length > maxLength) {
    return cleanedText.substring(0, maxLength).trim() + "...";
  }
  return cleanedText;
}
const _sfc_main = {
  __name: "About2",
  __ssrInlineRender: true,
  props: {
    signature: {
      type: String,
      default: "/images/about/signature.png"
    }
  },
  setup(__props) {
    const aboutStore = useAboutStore();
    const imageError = ref(false);
    const aboutData = computed(() => aboutStore.getAboutData);
    const loading = computed(() => aboutStore.isLoading);
    const error = computed(() => aboutStore.hasError);
    const imageUrl = computed(() => {
      var _a;
      return getImageUrl((_a = aboutData.value) == null ? void 0 : _a.image);
    });
    const { $api } = useNuxtApp();
    const getImageUrl = (imagePath) => {
      if (!imagePath) {
        return "/images/about/about-img.jpg";
      }
      if (!$api) {
        if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
          return imagePath;
        }
        if (imagePath.startsWith("/")) {
          return imagePath;
        }
        return `http://localhost:8000/images/${imagePath}`;
      }
      return $api.getImageUrl(imagePath);
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "about",
        class: "about-area mt-170 mb-105"
      }, _attrs))} data-v-41d2f5d6><div class="about-content-wrapper position-relative" data-v-41d2f5d6><div class="container" data-v-41d2f5d6><div class="row" data-v-41d2f5d6><div class="col-xl-6 col-lg-6 col-md-12 offset-md-0 col-sm-11 offset-sm-1 col-12" data-v-41d2f5d6><div class="about-img-wrapper position-relative mb-100" data-v-41d2f5d6><div class="about-img position-relative z-index11" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="100" data-v-41d2f5d6><div class="about-img-over over-hidden z-index11 pl-50 transition5 d-inline-block position-relative" data-v-41d2f5d6><img class="img-grayscale border-radius12 position-relative z-index11 tilt"${ssrRenderAttr("src", unref(imageUrl))}${ssrRenderAttr("alt", ((_a = unref(aboutData)) == null ? void 0 : _a.title) ? unref(cleanText)(unref(aboutData).title) : "About Image")} data-v-41d2f5d6>`);
      if (unref(imageError)) {
        _push(`<div class="mt-2 p-2 bg-warning text-dark small" data-v-41d2f5d6><strong data-v-41d2f5d6>Image Debug:</strong><br data-v-41d2f5d6> Image Path: ${ssrInterpolate(((_b = unref(aboutData)) == null ? void 0 : _b.image) || "null")}<br data-v-41d2f5d6> Expected Location: http://localhost:8000/images/${ssrInterpolate(((_c = unref(aboutData)) == null ? void 0 : _c.image) || "null")}<br data-v-41d2f5d6><button class="btn btn-sm btn-outline-warning mt-1" data-v-41d2f5d6> Hide Debug </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="about-color-shape-bg position-absolute z-index1" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="800" data-v-41d2f5d6></div><div class="about-shape-dotted secondary-bg position-absolute z-index-1" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="1000" data-v-41d2f5d6><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-41d2f5d6></div></div></div><div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" data-v-41d2f5d6>`);
      if (unref(loading)) {
        _push(`<div class="about-content position-relative mb-50 text-center" data-v-41d2f5d6><div class="spinner-border text-primary" role="status" data-v-41d2f5d6><span class="sr-only" data-v-41d2f5d6>Loading...</span></div><p class="mt-3" data-v-41d2f5d6>Memuat data about...</p></div>`);
      } else if (unref(error)) {
        _push(`<div class="about-content position-relative mb-50" data-v-41d2f5d6><div class="alert alert-danger" role="alert" data-v-41d2f5d6><h4 class="alert-heading" data-v-41d2f5d6>Error!</h4><p data-v-41d2f5d6>${ssrInterpolate(unref(error))}</p><div class="mt-3" data-v-41d2f5d6><button class="btn btn-sm btn-outline-danger me-2" data-v-41d2f5d6> Coba Lagi </button><button class="btn btn-sm btn-outline-secondary" data-v-41d2f5d6> Tutup Error </button></div><div class="mt-3" data-v-41d2f5d6><small class="text-muted" data-v-41d2f5d6> About Data: ${ssrInterpolate(unref(aboutData) ? "Loaded" : "Not loaded")}</small><br data-v-41d2f5d6><small class="text-muted" data-v-41d2f5d6> Loading: ${ssrInterpolate(unref(loading) ? "Yes" : "No")}</small></div></div></div>`);
      } else {
        _push(`<div class="about-content position-relative mb-50" data-v-41d2f5d6><div class="position-relative" data-v-41d2f5d6><div class="title" data-v-41d2f5d6><span class="theme-color text-uppercase d-block mb-1 mt--5" data-v-41d2f5d6>${ssrInterpolate(((_d = unref(aboutData)) == null ? void 0 : _d.title) ? unref(cleanText)(unref(aboutData).title) : "About Me")}</span><h2 class="mb-30" data-v-41d2f5d6>${ssrInterpolate(((_e = unref(aboutData)) == null ? void 0 : _e.subtitle) ? unref(cleanText)(unref(aboutData).subtitle) : "About Me")}</h2></div></div>`);
        if ((_f = unref(aboutData)) == null ? void 0 : _f.description) {
          _push(`<p class="mb-25" data-v-41d2f5d6>${ssrInterpolate(unref(cleanText)(unref(aboutData).description))}</p>`);
        } else {
          _push(`<p data-v-41d2f5d6>Oremque laudantium, totaeaque ipsa quae</p>`);
        }
        _push(`<div class="about-info-wrapper pt-25 pb-20 mt-25" data-v-41d2f5d6><div class="row" data-v-41d2f5d6><div class="col-xl-6 col-lg-12 col-md-6 col-sm-12 col-12" data-v-41d2f5d6><div class="about-info-item mb-3" data-v-41d2f5d6><span class="label" data-v-41d2f5d6>Name:</span><span class="value" data-v-41d2f5d6>Selly Andriany Gantina</span></div><div class="about-info-item mb-3" data-v-41d2f5d6><span class="label" data-v-41d2f5d6>Age:</span><span class="value" data-v-41d2f5d6>29 Years</span></div><div class="about-info-item mb-3" data-v-41d2f5d6><span class="label" data-v-41d2f5d6>Occupation:</span><span class="value" data-v-41d2f5d6>System Engineer</span></div></div><div class="col-xl-6 col-lg-12 col-md-6 col-sm-12 col-12" data-v-41d2f5d6><div class="about-info-item mb-3" data-v-41d2f5d6><span class="label" data-v-41d2f5d6>Phone:</span><span class="value" data-v-41d2f5d6>${ssrInterpolate(((_g = unref(aboutData)) == null ? void 0 : _g.phone) || "081210396214")}</span></div><div class="about-info-item mb-3" data-v-41d2f5d6><span class="label" data-v-41d2f5d6>Email:</span><span class="value" data-v-41d2f5d6>${ssrInterpolate(((_h = unref(aboutData)) == null ? void 0 : _h.email) || "rbenity@gmail.com")}</span></div><div class="about-info-item mb-3" data-v-41d2f5d6><span class="label" data-v-41d2f5d6>Nationality:</span><span class="value" data-v-41d2f5d6>Indonesian</span></div></div></div></div><div class="about-footer-content d-sm-flex align-items-center mt-lg-2 mt-sm-4 mt-3" data-v-41d2f5d6><div class="signature pt-12 pr-45" data-v-41d2f5d6><img${ssrRenderAttr("src", __props.signature)} alt="" data-v-41d2f5d6></div><div class="about-footer-content-right mt-20 text-left" data-v-41d2f5d6><h6 class="d-xl-inline-block text-uppercase pr5 mb-0" data-v-41d2f5d6> SELLY ANDRIANY GANTINA </h6><span class="openS-font-family meta-text-color" data-v-41d2f5d6>Anggota Dewan Perwakilan Rakyat RI 2024-2029.</span></div></div></div>`);
      }
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-41d2f5d6"]]);

export { __nuxt_component_4 as _, cleanText as c };
//# sourceMappingURL=About2-BML_Tx3w.mjs.map
