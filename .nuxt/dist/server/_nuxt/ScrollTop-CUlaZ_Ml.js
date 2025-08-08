import Parallax from "parallax-js";
import { s as setInterval } from "./interval-XdmACZz8.js";
import { ssrRenderAttr, ssrRenderClass, ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext, mergeProps } from "vue";
import { _ as _export_sfc } from "../server.mjs";
const thamesUtils = {
  bgImage() {
    (void 0).querySelectorAll("[data-background]").forEach(function(element) {
      var backgroundUrl = element.getAttribute("data-background");
      element.style.backgroundImage = "url(" + backgroundUrl + ")";
    });
  },
  stickyNav() {
    var sticky = (void 0).getElementById("header-sticky");
    (void 0).addEventListener("scroll", function() {
      var scroll = (void 0).scrollY;
      if (scroll < 2) {
        sticky.classList.remove("sticky-menu");
      } else {
        sticky.classList.add("sticky-menu");
      }
    });
  },
  parallax() {
    var scene = (void 0).getElementById("scene");
    if (scene) {
      new Parallax(scene, {
        limitX: true,
        scalarX: 10,
        originX: 0
      });
    }
  },
  counterUp() {
    const elements = (void 0).querySelectorAll(".counter-text-wrap");
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return rect.top >= 0 && rect.left >= 0 && rect.bottom <= ((void 0).innerHeight || (void 0).documentElement.clientHeight) && rect.right <= ((void 0).innerWidth || (void 0).documentElement.clientWidth);
    }
    function handleCounterText(element) {
      const countText = element.querySelector(".count-text");
      parseInt(countText.getAttribute("data-stop"), 10);
      parseInt(countText.getAttribute("data-speed"), 10);
      if (!element.classList.contains("counted") && isInViewport(element)) {
        element.classList.add("counted");
        setInterval();
      }
    }
    (void 0).addEventListener("scroll", () => {
      elements.forEach((element) => {
        if (!element.classList.contains("counted")) {
          handleCounterText(element);
        }
      });
    });
  }
};
const _sfc_main$2 = {
  data() {
    return {
      toggle: false,
      mobileSubmenuOpen: false
      // This needs to be here
    };
  },
  methods: {
    toggleMobileSubmenu() {
      this.mobileSubmenuOpen = !this.mobileSubmenuOpen;
    }
  },
  mounted() {
    thamesUtils.stickyNav();
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
    downloadBtn: {
      type: Boolean,
      default: true
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><header data-v-bc1a5301><div id="header-sticky" class="transparent-header header-area" data-v-bc1a5301><div class="header" data-v-bc1a5301><div class="container" data-v-bc1a5301><div class="row align-items-center" data-v-bc1a5301><div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-5" data-v-bc1a5301><div class="logo mt-50 mb-50 transition5" data-v-bc1a5301><a class="header-logo" href="#" data-v-bc1a5301><img${ssrRenderAttr("src", $props.logo)} alt="THAMES" data-v-bc1a5301></a>`);
  if ($props.logo2.length > 0) {
    _push(`<a class="header-sticky-logo" href="#" data-v-bc1a5301><img${ssrRenderAttr("src", $props.logo2)} alt="HIBRO" data-v-bc1a5301></a>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="col-xl-10 col-lg-10 col-md-9 col-sm-8 col-7 pl-0 d-flex justify-content-end align-items-center" data-v-bc1a5301><div class="main-menu d-none d-xl-block" data-v-bc1a5301><nav id="mobile-menu" data-v-bc1a5301><ul class="d-block" data-v-bc1a5301><li data-v-bc1a5301><a class="active" href="#home" data-v-bc1a5301>Beranda</a></li><li class="menu-item-has-children" data-v-bc1a5301><a href="#" data-v-bc1a5301>Profil <i class="fa fa-angle-down" data-v-bc1a5301></i></a><ul class="submenu" data-v-bc1a5301><li data-v-bc1a5301><a href="#about" data-v-bc1a5301>Tentang Saya</a></li><li data-v-bc1a5301><a href="#visimisi" data-v-bc1a5301>Visi &amp; Misi</a></li><li data-v-bc1a5301><a href="#portfolio" data-v-bc1a5301>Pendidikan</a></li></ul></li><li data-v-bc1a5301><a href="#program" data-v-bc1a5301>Program</a></li><li data-v-bc1a5301><a href="#work" data-v-bc1a5301>Pengalaman</a></li><li data-v-bc1a5301><a href="#service" data-v-bc1a5301>Pendidikan</a></li><li data-v-bc1a5301><a href="#contact" data-v-bc1a5301>Kontak</a></li><li data-v-bc1a5301><a href="#blog" data-v-bc1a5301>Galeri</a></li></ul></nav></div>`);
  if ($props.downloadBtn) {
    _push(`<div class="header-btn pl-45" data-v-bc1a5301><a href="/login" class="white-text text-uppercase d-inline-block f-700" data-v-bc1a5301>Masuk</a></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="mobile-m-bar d-block d-lg-none ml-30" data-v-bc1a5301><a class="mobile-menubar theme-color primary-hover" href="javascript:void(0);" data-v-bc1a5301><i class="far fa-bars" data-v-bc1a5301></i></a></div></div></div></div></div></div></header><div class="${ssrRenderClass([$data.toggle ? "open-menubar" : "", "side-mobile-menu pt-15 pb-30 pl-30 pr-20 pb-100 d-block d-xl-none z-index999"])}" data-v-bc1a5301><div class="d-fle justify-content-between w-100" data-v-bc1a5301><div class="close-icon d-inline-block float-right clear-both mt-20 mb-15" data-v-bc1a5301><a href="javascript:void(0);" data-v-bc1a5301><span class="icon-clear theme-color" data-v-bc1a5301><i class="fa fa-times" data-v-bc1a5301></i></span></a></div></div><div class="mobile-menu mt-10 mean-container" data-v-bc1a5301><div class="mean-bar" data-v-bc1a5301><nav class="mean-nav" data-v-bc1a5301><ul class="d-block" data-v-bc1a5301><li data-v-bc1a5301><a class="active" href="#home" data-v-bc1a5301>Beranda</a></li><li class="${ssrRenderClass([{ open: $data.mobileSubmenuOpen }, "menu-item-has-children"])}" data-v-bc1a5301><a href="#" data-v-bc1a5301>Profil</a><ul class="submenu" data-v-bc1a5301><li data-v-bc1a5301><a href="#about" data-v-bc1a5301>Tentang Saya</a></li><li data-v-bc1a5301><a href="#visimisi" data-v-bc1a5301>Visi &amp; Misi</a></li><li data-v-bc1a5301><a href="#portfolio" data-v-bc1a5301>Pendidikan</a></li></ul></li><li data-v-bc1a5301><a href="#program" data-v-bc1a5301>Program</a></li><li data-v-bc1a5301><a href="#work" data-v-bc1a5301>Pengalaman</a></li><li data-v-bc1a5301><a href="#service" data-v-bc1a5301>Pendidikan</a></li><li data-v-bc1a5301><a href="#contact" data-v-bc1a5301>Kontak</a></li><li data-v-bc1a5301><a href="#blog" data-v-bc1a5301>Galeri</a></li></ul></nav></div></div><h5 class="text-white text-center mt-80 pb-1 d-inline-block ml-3" data-v-bc1a5301> Follow me </h5><ul class="social social-bg text-center d-flex mt-10 ml-3" data-v-bc1a5301><li class="mr-2 rotate-hover" data-v-bc1a5301><a class="facebook-bg text-center pr-0 text-white d-block transition-3 rotate" href="#" data-v-bc1a5301><i class="fab fa-facebook-f" data-v-bc1a5301></i></a></li><li class="mr-2 rotate-hover" data-v-bc1a5301><a class="twitter-bg text-center pr-0 text-white d-block rotate transition-3" href="#" data-v-bc1a5301><i class="fa-brands fa-tiktok" data-v-bc1a5301></i></a></li><li class="mr-2 rotate-hover" data-v-bc1a5301><a class="linkedin-bg text-center pr-0 text-white d-block rotate transition-3" href="#" data-v-bc1a5301><i class="fab fa-linkedin-in" data-v-bc1a5301></i></a></li><li class="mr-2 rotate-hover" data-v-bc1a5301><a class="instagram-bg text-center pr-0 text-white d-block rotate transition-3" href="https://www.instagram.com/sellygantina76?igsh=MXhmd2djb3F6Y216cg==" target="_blank" data-v-bc1a5301><i class="fab fa-instagram" data-v-bc1a5301></i></a></li></ul></div><div class="${ssrRenderClass([$data.toggle ? "opened" : "", "body-overlay"])}" data-v-bc1a5301></div><!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-bc1a5301"]]);
const _sfc_main$1 = {
  props: {
    footerLogo: {
      type: String,
      default: "/images/logo/logo-dark.png"
    },
    copyRightTextColor: {
      type: String,
      default: "primary-color"
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(_attrs)}><div class="footer-area over-hidden pt-110 mb-80"><div class="footer-top"><div class="container"><div class="row"><div class="col-xl-4 col-lg-5 col-md-8 col-sm-7 col-12"><div class="footer-widget footer-logo pb-40"><div class="foot-logo mb-30"><img${ssrRenderAttr("src", $props.footerLogo)} alt="Themes"></div><div class="copyright-text"><p class="mb-0"> All rights reserved <a href="https://www.linkedin.com/in/selly-andriany-gantina-0000000000/" class="${ssrRenderClass([$props.copyRightTextColor, "c-theme f-600"])}">Selly Andriany Gantina</a> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())}</p></div></div></div><div class="col-xl-3 offset-xl-2 col-lg-3 col-md-4 col-sm-4 col-12 d-none d-sm-block d-lg-none"><div class="footer-widget pb-40"><h4 class="mb-28 mt-2">Ikuti Saya</h4><ul class="social social-bg text-center d-flex"><li class="mr-2 rotate-hover"><a class="facebook-bg text-center pr-0 text-white d-block transition-3 rotate" href="#"><i class="fab fa-facebook-f"></i></a></li><li class="mr-2 rotate-hover"><a class="twitter-bg text-center pr-0 text-white d-block rotate transition-3" href="#"><i class="fab fa-twitter"></i></a></li><li class="mr-2 rotate-hover"><a class="linkedin-bg text-center pr-0 text-white d-block rotate transition-3" href="#"><i class="fab fa-linkedin-in"></i></a></li><li class="mr-2 rotate-hover"><a class="instagram-bg text-center pr-0 text-white d-block rotate transition-3" href="#"><i class="fab fa-instagram"></i></a></li></ul></div></div><div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12"><div class="footer-widget pb-40"><h4 class="mb-28 mt-2">Newsletter</h4><div class="newsletter-form"><form action="#"><div class="subscribe-info position-relative"><input class="sub-name theme-border pl-25 pt-15 pb-15 pr-10 w-100 secondary-color2 border-radius5 bg-transparent" type="email" name="email" id="Email" placeholder="Submit your email"><span class="d-block position-absolute theme-color cursor-pointer"><i class="fal fa-envelope"></i></span></div></form></div></div></div><div class="col-xl-3 offset-xl-2 col-lg-3 col-md-4 col-sm-4 col-12 d-sm-none d-lg-block"><div class="footer-widget pb-40"><h4 class="mb-28 mt-2">Ikuti Saya</h4><ul class="social social-bg text-center d-flex"><li class="mr-2 rotate-hover"><a class="facebook-bg text-center pr-0 text-white d-block transition-3 rotate" href="#"><i class="fab fa-facebook-f"></i></a></li><li class="mr-2 rotate-hover"><a class="twitter-bg text-center pr-0 text-white d-block rotate transition-3" href="#"><i class="fab fa-twitter"></i></a></li><li class="mr-2 rotate-hover"><a class="linkedin-bg text-center pr-0 text-white d-block rotate transition-3" href="#"><i class="fab fa-linkedin-in"></i></a></li><li class="mr-2 rotate-hover"><a class="instagram-bg text-center pr-0 text-white d-block rotate transition-3" href="#"><i class="fab fa-instagram"></i></a></li></ul></div></div></div></div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "scroll",
    class: "scrollTop text-right"
  }, _attrs))}><a href="#" class="theme-bg white-text text-center d-inline-block mr-10 transition5"><span><i class="fal fa-angle-double-up"></i></span></a></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ScrollTop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as _,
  __nuxt_component_1 as a,
  __nuxt_component_2 as b,
  thamesUtils as t
};
//# sourceMappingURL=ScrollTop-CUlaZ_Ml.js.map
