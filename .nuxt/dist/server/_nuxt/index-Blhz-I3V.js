import { _ as __nuxt_component_0$2 } from "./Preloader-_VOwcwVv.js";
import { _ as _export_sfc, u as useNuxtApp, b as __nuxt_component_0$1, a as __nuxt_component_1$2 } from "../server.mjs";
import { s as setInterval } from "./interval-XdmACZz8.js";
import { mergeProps, useSSRContext, ref, watch, unref, nextTick, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, computed } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderComponent } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { defineStore } from "pinia";
import { c as cleanText, _ as __nuxt_component_4 } from "./About2-BML_Tx3w.js";
import CircleProgress from "vue3-circle-progress";
import { SwiperSlide, Swiper } from "swiper/vue";
import { u as useHead } from "./v3-BY5EM-DR.js";
import "C:/laragon/www/kaifront/node_modules/hookable/dist/index.mjs";
import "ofetch";
import "C:/laragon/www/kaifront/node_modules/unctx/dist/index.mjs";
import "C:/laragon/www/kaifront/node_modules/h3/dist/index.mjs";
import "C:/laragon/www/kaifront/node_modules/defu/dist/defu.mjs";
import "vue-router";
import "C:/laragon/www/kaifront/node_modules/radix3/dist/index.mjs";
import "C:/laragon/www/kaifront/node_modules/ufo/dist/index.mjs";
import "C:/laragon/www/kaifront/node_modules/klona/dist/index.mjs";
import "C:/laragon/www/kaifront/node_modules/@unhead/vue/dist/index.mjs";
var Typer = function(element) {
  this.element = element;
  var delim = element.dataset.delim || ",";
  var words = element.dataset.words || "override these,sample typing";
  this.words = words.split(delim).filter((v) => v);
  this.delay = element.dataset.delay || 200;
  this.loop = element.dataset.loop || "true";
  if (this.loop === "false") {
    this.loop = 1;
  }
  this.deleteDelay = element.dataset.deletedelay || element.dataset.deleteDelay || 800;
  this.progress = { word: 0, char: 0, building: true, looped: 0 };
  this.typing = true;
  var colors = element.dataset.colors || "black";
  this.colors = colors.split(",");
  this.element.style.color = this.colors[0];
  this.colorIndex = 0;
  this.doTyping();
};
Typer.prototype.start = function() {
  if (!this.typing) {
    this.typing = true;
    this.doTyping();
  }
};
Typer.prototype.stop = function() {
  this.typing = false;
};
Typer.prototype.doTyping = function() {
  var e = this.element;
  var p = this.progress;
  var w = p.word;
  var c = p.char;
  var currentDisplay = [...this.words[w]].slice(0, c).join("");
  var atWordEnd;
  if (this.cursor) {
    this.cursor.element.style.opacity = "1";
    this.cursor.on = true;
    clearInterval(this.cursor.interval);
    this.cursor.interval = setInterval();
  }
  e.innerHTML = currentDisplay;
  if (p.building) {
    atWordEnd = p.char === this.words[w].length;
    if (atWordEnd) {
      p.building = false;
    } else {
      p.char += 1;
    }
  } else {
    if (p.char === 0) {
      p.building = true;
      p.word = (p.word + 1) % this.words.length;
      this.colorIndex = (this.colorIndex + 1) % this.colors.length;
      this.element.style.color = this.colors[this.colorIndex];
    } else {
      p.char -= 1;
    }
  }
  if (p.word === this.words.length - 1) {
    p.looped += 1;
  }
  if (!p.building && this.loop <= p.looped) {
    this.typing = false;
  }
  setTimeout(
    () => {
      if (this.typing) {
        this.doTyping();
      }
    },
    atWordEnd ? this.deleteDelay : this.delay
  );
};
var Cursor = function(element) {
  this.element = element;
  this.cursorDisplay = element.dataset.cursordisplay || element.dataset.cursorDisplay || "_";
  element.innerHTML = this.cursorDisplay;
  this.on = true;
  element.style.transition = "all 0.1s";
  this.interval = setInterval();
};
Cursor.prototype.updateBlinkState = function() {
  if (this.on) {
    this.element.style.opacity = "0";
    this.on = false;
  } else {
    this.element.style.opacity = "1";
    this.on = true;
  }
};
function TyperSetup() {
  var typers = {};
  for (let e of (void 0).getElementsByClassName("typer")) {
    typers[e.id] = new Typer(e);
  }
  for (let e of (void 0).getElementsByClassName("typer-stop")) {
    let owner = typers[e.dataset.owner];
    e.onclick = () => owner.stop();
  }
  for (let e of (void 0).getElementsByClassName("typer-start")) {
    let owner = typers[e.dataset.owner];
    e.onclick = () => owner.start();
  }
  for (let e of (void 0).getElementsByClassName("cursor")) {
    let t = new Cursor(e);
    t.owner = typers[e.dataset.owner];
    t.owner.cursor = t;
  }
}
const _imports_0$1 = publicAssetsURL("/images/shape/shape1.png");
const _imports_1$1 = publicAssetsURL("/images/shape/shape2.png");
const _imports_2 = publicAssetsURL("/images/shape/Shape3.png");
const _imports_3 = publicAssetsURL("/images/shape/shape4.png");
const _imports_4 = publicAssetsURL("/images/slider/person.png");
const _sfc_main$h = {
  props: {
    bgImage: {
      type: String,
      default: "/images/slider/slider-bg.jpg"
    }
  },
  mounted() {
    setTimeout(() => {
      TyperSetup();
    }, 500);
  }
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "home",
    class: "slider-area slider-bg-color over-hidden"
  }, _attrs))}><div class="single-slider slider-height over-hidden position-relative xxl-device-width bg-cover no-repeat"${ssrRenderAttr("data-background", $props.bgImage)}><div id="scene" class="parallax position-absolute w-100 h-100 z-index1"><img data-depth="0.20" class="hero-shape hero-shape1 position-absolute d-none d-lg-inline-block"${ssrRenderAttr("src", _imports_0$1)} alt="#"><img data-depth="0.15" class="hero-shape hero-shape2 position-absolute d-none d-lg-inline-block"${ssrRenderAttr("src", _imports_1$1)} alt="#"><img data-depth="0.30" class="hero-shape hero-shape3 position-absolute d-none d-lg-inline-block"${ssrRenderAttr("src", _imports_2)} alt="#"><img data-depth="0.10" class="hero-shape hero-shape4 position-absolute d-none d-lg-inline-block"${ssrRenderAttr("src", _imports_3)} alt="#"></div><div class="container slider-container"><div class="row justify-content-center align-items-center"><div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-center justify-content-center"><div class="slider-wrapper h-100"><div class="slider-content text-center mt-65 text-lg-left position-relative z-index99" data-aos="fade-right" data-aos-duration="2200" data-aos-delay="1000" style="${ssrRenderStyle({ "z-index": "9", "position": "relative" })}"><h1 class="mb-25 text-uppercase white-text" style="${ssrRenderStyle({ "color": "#fff !important", "font-size": "72px", "font-weight": "bold", "line-height": "1.085" })}"><span class="sub-heading d-block text-uppercase theme-color mb-10" style="${ssrRenderStyle({ "color": "#c75142 !important", "font-size": "30px", "letter-spacing": "4px" })}">Halo, Saya</span> Selly Andriany Gantina </h1><h2 class="text-uppercase white-text mb-40" style="${ssrRenderStyle({ "color": "#fff !important", "font-size": "24px" })}"> Saya adalah seorang <span class="d-text d-block d-sm-inline-block"><span class="typer theme-color d-inline-block pl-2" id="main" data-words="Anggota Dewan Perwakilan Rakyat RI periode 2019–2024,Mantan Anggota Dewan Perwakilan Rakyat RI periode 2024–2029, Mantan Anggota DPRD Jawa Barat 2004-2009" data-delay="100" data-deleteDelay="1000" data-colors="#c75142" style="${ssrRenderStyle({ "color": "#c75142 !important", "font-size": "24px" })}"></span><span class="cursor theme-color d-inline-block" data-owner="main" style="${ssrRenderStyle({ "color": "#c75142 !important" })}"></span></span></h2><a href="#hero-btn" class="btn position-relative over-hidden theme-bg text-white text-uppercase mt-40" style="${ssrRenderStyle({ "background-color": "#c75142", "color": "#fff", "padding": "15px 30px", "display": "inline-block", "text-decoration": "none", "border": "none" })}">Say Hello</a></div></div></div><div class="col-xl-6 col-lg-6 col-md-10 col-sm-10 col-12 pl-xl-0 d-flex align-items-end h-100"><div class="slider-img ml--40 pt-100 position-relative z-index1 h-100"><img class="img-grayscale"${ssrRenderAttr("src", _imports_4)} alt="hero image"></div></div></div></div><div class="slider-social-link position-absolute right-0 d-block z-index11"><ul class="social pr-25"><li class="mt-10 mb-10 rotate-hover"><a class="text-white text-center d-inline-block rotate" href="#"><i class="fab fa-facebook-f"></i></a></li><li class="mt-10 mb-10 rotate-hover"><a class="text-white text-center d-inline-block rotate" href="https://www.tiktok.com/@sellygantina?_t=ZS-8yF29UGlEJs&amp;_r=1" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50"><path fill="#fff" d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path></svg></a></li><li class="mt-10 mb-10 rotate-hover"><a class="text-white text-center d-inline-block rotate" href="https://www.instagram.com/sellygantina76?igsh=MXhmd2djb3F6Y216cg==" target="_blank"><i class="fab fa-instagram"></i></a></li><li class="mt-10 mb-10 rotate-hover"><a class="text-white text-center d-inline-block rotate" href="#"><i class="fab fa-youtube"></i></a></li></ul></div></div></div>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$d]]);
const initialFormState = {
  id: void 0,
  message: ""
};
const useChatbotStore = defineStore("chatbot", {
  state: () => ({
    chatbots: [],
    loading: false,
    totalRecords: 0,
    showModal: false,
    isEditMode: false,
    form: { ...initialFormState },
    validationErrors: null,
    error: null,
    params: {
      page: 1,
      rows: 10
    },
    // Chat conversation state
    chatMessages: [],
    sessionId: null,
    isTyping: false,
    chatLoading: false
  }),
  actions: {
    async fetchChatbots() {
      var _a, _b;
      this.loading = true;
      this.error = null;
      const { $api } = useNuxtApp();
      try {
        const token = localStorage.getItem("token");
        const url = new URL($api.chatbot());
        url.searchParams.append("page", this.params.page.toString());
        url.searchParams.append("rows", this.params.rows.toString());
        if (this.params.sortField) {
          url.searchParams.append("sortField", this.params.sortField);
          url.searchParams.append("sortOrder", this.params.sortOrder === 1 ? "asc" : "desc");
        }
        if ((_b = (_a = this.params.filters) == null ? void 0 : _a.global) == null ? void 0 : _b.value) {
          url.searchParams.append("search", this.params.filters.global.value);
        }
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          credentials: "include"
        });
        if (!response.ok) throw new Error("Gagal mengambil data chatbot");
        const result = await response.json();
        this.chatbots = result.data;
        this.totalRecords = result.meta.total;
      } catch (e) {
        console.error("Gagal mengambil data chatbot:", e);
        this.error = e.message;
      } finally {
        this.loading = false;
      }
    },
    async fetchChatbotByPerusahaan(perusahaanId) {
      if (!perusahaanId) {
        this.chatbots = [];
        return;
      }
      this.loading = true;
      const { $api } = useNuxtApp();
      const token = localStorage.getItem("token");
      try {
        const response = await fetch($api.chatbot() + `?perusahaan_id=${perusahaanId}`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json"
          }
        });
        const result = await response.json();
        this.chatbots = result.data || [];
      } catch (error) {
        console.error("Gagal mengambil data chatbot by perusahaan:", error);
      } finally {
        this.loading = false;
      }
    },
    async createChatbot() {
      this.loading = true;
      this.validationErrors = null;
      const { $api } = useNuxtApp();
      try {
        const token = localStorage.getItem("token");
        await fetch($api.chatbot(), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json"
          },
          body: JSON.stringify(this.form),
          credentials: "include"
        });
        this.closeModal();
        await this.fetchChatbots();
      } catch (error) {
        if (error.response && error.response.status === 422) {
          this.validationErrors = error.response._data.errors;
        } else {
          console.error("Gagal membuat chatbot:", error);
        }
      } finally {
        this.loading = false;
      }
    },
    setPage(page, rows) {
      this.params.page = page;
      this.params.rows = rows;
      this.fetchChatbots();
    },
    setSort(sortField, sortOrder) {
      this.params.sortField = sortField;
      this.params.sortOrder = sortOrder;
      this.fetchChatbots();
    },
    setFilters(filters) {
      this.params.filters = filters;
      this.fetchChatbots();
    },
    // Chat conversation actions
    async sendChatMessage(message) {
      this.chatLoading = true;
      this.isTyping = false;
      const { $api } = useNuxtApp();
      try {
        this.chatMessages.push({
          role: "user",
          message,
          timestamp: /* @__PURE__ */ new Date()
        });
        this.isTyping = true;
        const response = await fetch($api.chat(), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            message,
            session_id: this.sessionId
          })
        });
        if (!response.ok) {
          throw new Error("Gagal mengirim pesan");
        }
        const result = await response.json();
        if (!this.sessionId) {
          this.sessionId = result.session_id;
        }
        this.isTyping = false;
        this.chatMessages.push({
          role: "bot",
          message: result.reply,
          timestamp: /* @__PURE__ */ new Date()
        });
      } catch (error) {
        console.error("Gagal mengirim pesan chat:", error);
        this.isTyping = false;
        this.chatMessages.push({
          role: "bot",
          message: "Maaf, terjadi kesalahan. Silakan coba lagi.",
          timestamp: /* @__PURE__ */ new Date()
        });
      } finally {
        this.chatLoading = false;
      }
    },
    clearChatHistory() {
      this.chatMessages = [];
      this.sessionId = null;
    },
    setTyping(status) {
      this.isTyping = status;
    },
    // Modal actions
    openModal() {
      this.showModal = true;
      this.isEditMode = false;
      this.form = { ...initialFormState };
      this.validationErrors = null;
    },
    openEditModal(chatbot) {
      this.showModal = true;
      this.isEditMode = true;
      this.form = { ...chatbot };
      this.validationErrors = null;
    },
    closeModal() {
      this.showModal = false;
      this.isEditMode = false;
      this.form = { ...initialFormState };
      this.validationErrors = null;
    },
    async updateChatbot() {
      this.loading = true;
      this.validationErrors = null;
      const { $api } = useNuxtApp();
      try {
        const token = localStorage.getItem("token");
        await fetch(`${$api.chatbot()}/${this.form.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json"
          },
          body: JSON.stringify(this.form),
          credentials: "include"
        });
        this.closeModal();
        await this.fetchChatbots();
      } catch (error) {
        if (error.response && error.response.status === 422) {
          this.validationErrors = error.response._data.errors;
        } else {
          console.error("Gagal mengupdate chatbot:", error);
        }
      } finally {
        this.loading = false;
      }
    },
    async deleteChatbot(id) {
      this.loading = true;
      const { $api } = useNuxtApp();
      try {
        const token = localStorage.getItem("token");
        await fetch(`${$api.chatbot()}/${id}`, {
          method: "DELETE",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json"
          },
          credentials: "include"
        });
        await this.fetchChatbots();
      } catch (error) {
        console.error("Gagal menghapus chatbot:", error);
      } finally {
        this.loading = false;
      }
    }
  }
});
const _sfc_main$g = {
  __name: "Chatbot",
  __ssrInlineRender: true,
  setup(__props) {
    const chatStore = useChatbotStore();
    const isShowChat = ref(false);
    const chatMessage = ref("");
    ref(null);
    const chatBody = ref(null);
    const formatTime = (timestamp) => {
      const date = new Date(timestamp);
      return date.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit"
      });
    };
    const scrollToBottom = async () => {
      await nextTick();
      if (chatBody.value) {
        chatBody.value.scrollTop = chatBody.value.scrollHeight;
      }
    };
    watch(() => chatStore.chatMessages.length, () => {
      scrollToBottom();
    });
    watch(() => chatStore.isTyping, () => {
      scrollToBottom();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><button class="chatbot-button" data-v-0b1a076e><i class="fas fa-question" data-v-0b1a076e></i> Tanya Sheila </button><div class="${ssrRenderClass([{ show: isShowChat.value }, "chat-popup"])}" data-v-0b1a076e><div class="chat-header" data-v-0b1a076e><h5 data-v-0b1a076e>Hai! Saya Sheila, asisten pribadi Anda. Ada yang bisa saya bantu hari ini?</h5><button class="close-btn" data-v-0b1a076e><i class="fas fa-times" data-v-0b1a076e></i></button></div><div class="chat-body" data-v-0b1a076e>`);
      if (unref(chatStore).chatMessages.length > 0) {
        _push(`<div class="chat-messages" data-v-0b1a076e><!--[-->`);
        ssrRenderList(unref(chatStore).chatMessages, (message, index) => {
          _push(`<div class="${ssrRenderClass([{ "user-message": message.role === "user", "bot-message": message.role === "bot" }, "message-container"])}" data-v-0b1a076e><div class="message-bubble" data-v-0b1a076e><div class="message-content" data-v-0b1a076e>${ssrInterpolate(message.message)}</div><div class="message-time" data-v-0b1a076e>${ssrInterpolate(formatTime(message.timestamp))}</div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(chatStore).isTyping) {
        _push(`<div class="typing-indicator" data-v-0b1a076e><div class="typing-bubble" data-v-0b1a076e><div class="typing-dots" data-v-0b1a076e><span data-v-0b1a076e></span><span data-v-0b1a076e></span><span data-v-0b1a076e></span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(chatStore).chatMessages.length === 0) {
        _push(`<div class="quick-replies" data-v-0b1a076e><button class="quick-reply-btn" data-v-0b1a076e><i class="fas fa-globe me-2" data-v-0b1a076e></i> Bagaimana cara mendaftar program pada website ini? </button><button class="quick-reply-btn" data-v-0b1a076e><i class="fas fa-list me-2" data-v-0b1a076e></i> Program apa saja yang tersedia? </button><button class="quick-reply-btn" data-v-0b1a076e><i class="fas fa-server me-2" data-v-0b1a076e></i> Apakah program yang tersedia dipungut biaya? </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="chat-input-container" data-v-0b1a076e><div class="chat-input-wrapper" data-v-0b1a076e><input type="text" class="chat-input"${ssrRenderAttr("value", chatMessage.value)} placeholder="Ketik pesan Anda..."${ssrIncludeBooleanAttr(unref(chatStore).chatLoading) ? " disabled" : ""} data-v-0b1a076e><button class="send-btn"${ssrIncludeBooleanAttr(!chatMessage.value.trim() || unref(chatStore).chatLoading) ? " disabled" : ""} data-v-0b1a076e>`);
      if (!unref(chatStore).chatLoading) {
        _push(`<i class="fas fa-paper-plane" data-v-0b1a076e></i>`);
      } else {
        _push(`<i class="fas fa-spinner fa-spin" data-v-0b1a076e></i>`);
      }
      _push(`</button></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chatbot.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-0b1a076e"]]);
const _sfc_main$f = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "fun-fact-area fun-fact-bg over-hidden pt-105 pb-80",
    "data-aos": "fade-up",
    "data-aos-duration": "1800"
  }, _attrs))}><div class="container"><div class="row justify-content-center align-items-center"><div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-10"><div class="single-fact d-block d-lg-flex align-items-center text-center text-lg-left mb-30"><div class="mr-25 d-flex align-content-start justify-content-center"><span class="theme-color f-700 d-inline-block counter">12</span></div><h3 class="text-white f-700 text-uppercase mb-0"> Years of <br> Experience </h3></div></div><div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-10 d-lg-flex justify-content-center"><div class="single-fact d-block d-lg-flex align-items-center text-center text-lg-left mb-30"><div class="mr-25 d-flex align-content-start justify-content-center"><span class="theme-color f-700 d-inline-block counter">200</span><span class="per d-inline-block f-700 theme-color mt-1">+</span></div><h3 class="text-white f-700 text-uppercase mb-0"> Worldwide <br> Clients </h3></div></div><div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 d-lg-flex justify-content-end"><div class="single-fact d-block d-lg-flex align-items-center text-center text-lg-left mb-30"><div class="mr-25 d-flex align-content-start justify-content-center"><span class="theme-color f-700 d-inline-block counter">9</span><span class="theme-color f-700 d-inline-block pr-1">k</span><span class="per d-inline-block f-700 theme-color mt-1">+</span></div><h3 class="text-white f-700 text-uppercase mb-0"> Total <br> Projects </h3></div></div></div></div></div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Counter.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$e = {
  props: {
    toggle: {
      type: Boolean,
      default: false
    },
    item: {
      type: Object,
      default: {}
    },
    imgGrayScale: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeModal() {
      this.$emit("close");
    }
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div class="modal-backdrop fade show"></div><div class="modal fade show" id="exampleModal-p2" tabindex="-2" role="dialog" aria-labelledby="exampleModal-p1" style="${ssrRenderStyle({ "padding-right": "15px", "display": "block", "overflow-y": "scroll" })}"><div class="modal-dialog" role="document"><div class="modal-content"><div class="close-icon float-right pt-10 pr-10"><button type="button" class="close d-inline-block" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="fa fa-times"></i></span></button></div><div class="modal-content border-0"><div class="modal-body pl-50 pr-50 pt-10 pb-20"><div class="blog-modal-img"><img class="${ssrRenderClass([`${$props.imgGrayScale ? "img-grayscale" : ""}`, "w-100"])}"${ssrRenderAttr("src", $props.item.largeImage)} alt="product image 02"></div><div class="row"><div class="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12"><div class="content-wrapper"><h2 class="modal-title">${ssrInterpolate($props.item.title)}</h2><p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium fuga molestiae, aut eius minus reprehenderit. </p><p class="mb-0"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p></div></div><div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12"><div class="meta-wrapper form-bg mt-60 pt-40 pb-45 pr-20 pl-45 mt-40 mb-10"><ul class="item-meta"><li> Project Type : <span class="pl-2 openS-font-family">Graphic Design</span></li><li> Clien : <span class="pl-2 openS-font-family">Juwel Khan</span></li><li> Duration :<span class="pl-2 openS-font-family">2 Weeks</span></li><li> Task : <span class="pl-2 openS-font-family">UI/UX, Frontend</span></li><li> Budget : <span class="pl-2 openS-font-family">$2000</span></li></ul><a href="#" class="btn position-relative over-hidden text-white theme-bg theme-border2 text-uppercase mt-20 pt-2 pb-2">View Live</a></div></div></div><div class="pro-modal-footer mt-30 mb-45"><div class="row align-items-center justify-content-md-between"><div class="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12"><div class="modal-tags d-sm-flex align-items-center pt-25"><h6 class="mb-0 pr-15 black-color primary-font-family"> Tags : </h6><ul class="tag-list"><li class="d-inline-block pr-10"><a class="d-block" href="#">Web Design</a></li><li class="d-inline-block pr-10"><a class="d-block" href="#">Social Media</a></li><li class="d-inline-block pr-10"><a class="d-block" href="#">Product</a></li></ul></div></div><div class="col-xl-5 col-lg-5 col-md-12 col-sm-10 col-12"><div class="pro-modal-social-link d-flex align-items-center justify-content-lg-end pt-25"><h6 class="pr-12 mb-0 primary-font-family"> Share this product : </h6><ul class="social-link text-md-right"><li class="d-inline-block"><a class="facebook-color text-center pl-15 d-inline-block transition-3" href="#"><i class="fab fa-facebook-f"></i></a></li><li class="d-inline-block"><a class="twitter-color text-center pl-15 d-inline-block transition-3" href="#"><i class="fab fa-twitter"></i></a></li><li class="d-inline-block"><a class="google-plus-color text-center pl-15 d-inline-block transition-3" href="#"><i class="fab fa-google-plus-g"></i></a></li><li class="d-inline-block"><a class="linkedin-color text-center pl-15 d-inline-block transition-3" href="#"><i class="fab fa-linkedin-in"></i></a></li></ul></div></div></div></div></div></div></div></div></div><!--]-->`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PortfolioModal.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$d = {
  mounted() {
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Software Design for codeefly",
          category: "web design",
          img: "/images/index-4/portfolio/portfolio-img1.jpg",
          largeImage: "/images/index-4/portfolio/portfolio-modal-img1.jpg",
          categoryCls: "dev photography"
        },
        {
          id: 2,
          title: "Website Development for ABC Corporation",
          category: "Development",
          img: "/images/index-4/portfolio/portfolio-img2.jpg",
          largeImage: "/images/index-4/portfolio/portfolio-modal-img2.jpg",
          categoryCls: "dev design"
        },
        {
          id: 3,
          title: "Branding for Easy Computers",
          category: "Branding",
          img: "/images/index-4/portfolio/portfolio-img3.jpg",
          largeImage: "/images/index-4/portfolio/portfolio-modal-img3.jpg",
          categoryCls: "photography"
        },
        {
          id: 4,
          title: "Security Analysis for codeefly",
          category: "Photography",
          img: "/images/index-4/portfolio/portfolio-img4.jpg",
          largeImage: "/images/index-4/portfolio/portfolio-modal-img4.jpg",
          categoryCls: "design photography"
        },
        {
          id: 5,
          title: "Security Analysis for codeefly",
          category: "Photography",
          img: "/images/index-4/portfolio/portfolio-img5.jpg",
          largeImage: "/images/index-4/portfolio/portfolio-modal-img5.jpg",
          categoryCls: "dev graphic"
        },
        {
          id: 6,
          title: "Security Analysis for codeefly",
          category: "Photography",
          img: "/images/index-4/portfolio/portfolio-img6.jpg",
          largeImage: "/images/index-4/portfolio/portfolio-modal-img6.jpg",
          categoryCls: "dev design photography"
        }
      ],
      toggle: false,
      item: null
    };
  },
  methods: {
    activeItem(item) {
      this.toggle = true;
      this.item = item;
      (void 0).querySelector("body").classList.add("modal-open");
    },
    close() {
      this.toggle = false;
      (void 0).querySelector("body").classList.remove("modal-open");
    }
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = __nuxt_component_0$1;
  const _component_PortfolioModal = __nuxt_component_1$1;
  _push(`<!--[--><div id="work" class="portfolio-area over-hidden pt-155 pb-140"><div class="portfolio-wrapper position-relative"><div class="container"><div class="row"><div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><div class="title text-center mb-65"><span class="theme-color f-700 text-uppercase d-block mb-6">Portfolio</span><h2 class="text-uppercase">My Works</h2></div></div></div><div class="row"><div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center"><div class="port-button mb-50 portfolio-menu"><button data-filter="*" class="active">All</button><button data-filter=".design">Web Design</button><button data-filter=".dev">Development</button><button data-filter=".photography">Photography</button></div></div></div>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {
    fallback: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="row"${_scopeId}><!--[-->`);
        ssrRenderList($data.items, (item, index) => {
          _push2(`<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"${_scopeId}><div class="single-portfolio position-relative over-hidden mb-24"${_scopeId}><img class="img-grayscale w-100"${ssrRenderAttr("src", item.img)} alt=""${_scopeId}><div class="port-content text-center position-absolute transition5 z-index11"${_scopeId}><span class="theme-color d-inline-block"${_scopeId}><i class="far fa-external-link-alt"${_scopeId}></i></span></div><div class="port-over-content position-absolute left-0 pl-40 pr-40 pb-30 pt-40 z-index11"${_scopeId}><span class="text-white f-600 mb-2 d-block text-uppercase"${_scopeId}>${ssrInterpolate(item.category)}</span><h3 class="text-white"${_scopeId}>${ssrInterpolate(item.title)}</h3></div></div></div>`);
        });
        _push2(`<!--]--></div>`);
      } else {
        return [
          createVNode("div", { class: "row" }, [
            (openBlock(true), createBlock(Fragment, null, renderList($data.items, (item, index) => {
              return openBlock(), createBlock("div", {
                key: index,
                class: "col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"
              }, [
                createVNode("div", { class: "single-portfolio position-relative over-hidden mb-24" }, [
                  createVNode("img", {
                    class: "img-grayscale w-100",
                    src: item.img,
                    alt: ""
                  }, null, 8, ["src"]),
                  createVNode("div", {
                    class: "port-content text-center position-absolute transition5 z-index11",
                    onClick: ($event) => $options.activeItem(item)
                  }, [
                    createVNode("span", { class: "theme-color d-inline-block" }, [
                      createVNode("i", { class: "far fa-external-link-alt" })
                    ])
                  ], 8, ["onClick"]),
                  createVNode("div", { class: "port-over-content position-absolute left-0 pl-40 pr-40 pb-30 pt-40 z-index11" }, [
                    createVNode("span", { class: "text-white f-600 mb-2 d-block text-uppercase" }, toDisplayString(item.category), 1),
                    createVNode("h3", { class: "text-white" }, toDisplayString(item.title), 1)
                  ])
                ])
              ]);
            }), 128))
          ])
        ];
      }
    })
  }, _parent));
  _push(`</div></div></div>`);
  if ($data.toggle) {
    _push(ssrRenderComponent(_component_PortfolioModal, {
      item: $data.item,
      toggle: $data.toggle,
      onClose: ($event) => $options.close(),
      imgGrayScale: true
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Portfolio2.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$c = {
  props: {
    items: {
      type: Array,
      required: false,
      default: [
        {
          id: 1,
          img: "/images/award/award-logo1.png",
          awardTitle: "Developer of the Year",
          year: "2021",
          awardProvider: "Dev Internatioal",
          providerLocation: "London, England",
          desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore."
        },
        {
          id: 2,
          img: "/images/award/award-logo2.png",
          awardTitle: "Best Developer",
          year: "2022",
          awardProvider: "Developer Association",
          providerLocation: "New York, Usa",
          desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore."
        },
        {
          id: 3,
          img: "/images/award/award-logo3.png",
          awardTitle: "Fastest Coder",
          year: "2019",
          awardProvider: "Amazing Programmer",
          providerLocation: "Dhaka, Bangladesh",
          desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore."
        }
      ]
    },
    bg: {
      type: String,
      default: ""
    }
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["award-area over-hidden position-relative z-index11 pt-160 pb-170", $props.bg]
  }, _attrs))}><div class="container"><div class="row"><div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><div class="title text-center"><span class="theme-color text-uppercase d-block mb-6">Success Stories</span><h2>Awards &amp; Achivements</h2></div></div></div><div class="award-wrapper mt-70"><!--[-->`);
  ssrRenderList($props.items, (item) => {
    _push(`<div class="row align-items-start theme-border-top theme-border-bottom award-margin pt-40 pb-35"><div class="col-xl-2 col-lg-2 col-md-2 col-sm-11 col-12"><div class="award-logo mt-10 mb-20"><a href="#" class="d-block"><img${ssrRenderAttr("src", item.img)} alt="award logo 3"></a></div></div><div class="col-xl-3 col-lg-3 col-md-3 col-sm-11 col-12"><div class="award-content"><h3 class="mb-10">${ssrInterpolate(item.awardTitle)}</h3><p class="meta-text-color">${ssrInterpolate(item.year)}</p></div></div><div class="col-xl-3 col-lg-3 col-md-3 col-sm-11 col-12"><div class="award-content"><h3 class="mb-10">${ssrInterpolate(item.awardProvider)}</h3><p class="meta-text-color">${ssrInterpolate(item.providerLocation)}</p></div></div><div class="col-xl-4 col-lg-4 col-md-4 col-sm-11 col-12"><div class="award-content"><p>${ssrInterpolate(item.desc)}</p></div></div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Award.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$b = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "experience-area over-hidden pb-165" }, _attrs))}><div class="experience-wrapper extra-width position-relative"><div class="experience-bg-img left-0 top-0 bottom-0 bg-cover no-repeat w-50 position-absolute" data-background="/images/work/work-img.jpg"></div><div class="container"><div class="row"><div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-none"><div class="experience-img" data-aos="fade-right" data-aos-duration="2000"></div></div><div class="col-xl-6 col-lg-6 offset-lg-6 col-md-12 col-sm-12 col-12"><div class="experience-margin mt-160 pb-80 pl-100 mb-50"><div class="position-relative"><div class="title"><span class="theme-color text-uppercase d-block mb-6 mt--5">Work Experience</span><h2 class="mb-25">My Experience</h2><p> Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini hoye khbor nio na sit voluptatem. </p></div></div><div class="experience-wrapper pt-25"><ul class="experience-content"><li class="mb-32 d-flex align-items-start rotate-hover"><div class="experience-ser-icon d-inline-block text-center mt-10 mr-30 transition3"><span class="theme-color d-inline-block"><span class="d-block rotate flat-family flaticon-briefcase"></span></span></div><div class="experience-service-text d-inline-block"><h3 class="mb-2">Senior System Engineer</h3><h4> codeefly <span class="meta-text-color openS-font-family"> ( 2018 - Running )</span></h4><p class="mb-0 mt-15"> Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae et vitae ullam molesti quae quasi. </p></div></li><li class="mb-32 d-flex align-items-start rotate-hover"><div class="experience-ser-icon d-inline-block text-center mt-10 mr-30 transition3"><span class="theme-color d-inline-block"><span class="d-block rotate flat-family flaticon-briefcase"></span></span></div><div class="experience-service-text d-inline-block"><h3 class="mb-2">Data Architect</h3><h4> Easy Computers <span class="meta-text-color openS-font-family">( 2015 - 2018 )</span></h4><p class="mb-0 mt-15"> Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae et vitae ullam molesti quae quasi. </p></div></li><li class="mb-32 d-flex align-items-start rotate-hover"><div class="experience-ser-icon d-inline-block text-center mt-10 mr-30 transition3"><span class="theme-color d-inline-block"><span class="d-block rotate flat-family flaticon-briefcase"></span></span></div><div class="experience-service-text d-inline-block"><h3 class="mb-2">Web Developer</h3><h4> Bangla College <span class="meta-text-color openS-font-family">( 2012 - 2015 )</span></h4><p class="mb-0 mt-15"> Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae et vitae ullam molesti quae quasi. </p></div></li></ul></div></div></div></div></div></div></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Experience.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$8]]);
const useEducationStore = defineStore("education", {
  state: () => ({
    educationData: null,
    loading: false,
    error: null
  }),
  getters: {
    getEducationData: (state) => state.educationData,
    isLoading: (state) => state.loading,
    hasError: (state) => state.error
  },
  actions: {
    async fetchEducationData() {
      this.loading = true;
      this.error = null;
      try {
        const { $api } = useNuxtApp();
        let apiUrl;
        if ($api) {
          apiUrl = $api.education();
        } else {
          apiUrl = "http://localhost:8000/api/education";
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
          this.educationData = response[0];
        } else if (typeof response === "object") {
          this.educationData = response;
        } else {
          throw new Error("Format response tidak valid");
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        this.error = `Gagal memuat data education: ${errorMessage}`;
      } finally {
        this.loading = false;
      }
    },
    clearError() {
      this.error = null;
    }
  }
});
const _sfc_main$a = {
  __name: "Education",
  __ssrInlineRender: true,
  props: {
    imgGrayScale: {
      type: Boolean,
      default: false
    },
    image: {
      type: String,
      default: "/images/education/education-img.jpg"
    }
  },
  setup(__props) {
    const educationStore = useEducationStore();
    ref(false);
    const educationData = computed(() => educationStore.getEducationData);
    computed(() => educationStore.isLoading);
    computed(() => educationStore.hasError);
    const imageUrl = computed(() => {
      var _a;
      return getImageUrl((_a = educationData.value) == null ? void 0 : _a.image);
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
      var _a, _b, _c;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "education-area over-hidden" }, _attrs))}><div class="container"><div class="row position-relative"><div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"><div class="position-relative"><div class="title"><span class="theme-color text-uppercase d-block mb-1">Education</span><h2 class="mb-25">${ssrInterpolate(((_a = unref(educationData)) == null ? void 0 : _a.title) ? unref(cleanText)(unref(educationData).title) : "My Education")}</h2><p>${ssrInterpolate(((_b = unref(educationData)) == null ? void 0 : _b.subtitle) ? unref(cleanText)(unref(educationData).subtitle) : "Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini hoye khbor nio na sit voluptatem accusantium dolore.")}</p></div></div><div class="education-wrapper mr-20 pt-25 mb-50"><ul class="education-content"><!--[-->`);
      ssrRenderList(unref(educationData) && Array.isArray(unref(educationData)) ? unref(educationData) : unref(educationData) ? [unref(educationData)] : [], (item, idx) => {
        _push(`<li class="mb-32 d-flex align-items-start rotate-hover"><div class="experience-ser-icon d-inline-block text-center mt-10 mr-30 transition3"><span class="theme-color d-inline-block"><span class="d-block rotate flat-family flaticon-graduation-cap"></span></span></div><div class="experience-service-text d-inline-block"><h3 class="mb-2">${ssrInterpolate((item == null ? void 0 : item.institution) ? unref(cleanText)(item.institution) : "Masters in Computer Science")}</h3><h4>${ssrInterpolate((item == null ? void 0 : item.year) ? unref(cleanText)(item.year) : "New York University")}</h4><p class="mb-0 mt-15">${ssrInterpolate((item == null ? void 0 : item.description) ? unref(cleanText)(item.description) : "Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.")}</p></div></li>`);
      });
      _push(`<!--]--></ul></div></div><div class="col-xl-5 offset-xl-1 col-lg-6 col-md-12 col-sm-12 col-12 d-lg-blok d-flex align-items-center justify-content-center"><div class="education-img position-relative text-center" data-aos="fade-left" data-aos-duration="2000"><img class="${ssrRenderClass([`${__props.imgGrayScale ? "img-grayscale" : ""}`, "border-radius10"])}"${ssrRenderAttr("src", unref(imageUrl))}${ssrRenderAttr("alt", ((_c = unref(educationData)) == null ? void 0 : _c.title) ? unref(cleanText)(unref(educationData).title) : "Education Image")}></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Education.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  name: "ProgressBar",
  props: {
    value: {
      type: Number,
      default: 50
    },
    fillColor: {
      type: String,
      default: "#80db66"
    },
    emptyColor: {
      type: String,
      default: "#eceef4"
    },
    textColor: {
      type: String,
      default: ""
    }
  },
  components: { CircleProgress }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "circle-progress" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {
    fallback: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div style="${ssrRenderStyle({ "width": "190px", "height": "190px", "border-radius": "50%", "border": "6px solid #eceef4", "display": "flex", "align-items": "center", "justify-content": "center" })}"${_scopeId}><span class="${ssrRenderClass($props.textColor)}" style="${ssrRenderStyle({ "font-size": "38px" })}"${_scopeId}>${ssrInterpolate($props.value)}%</span></div>`);
      } else {
        return [
          createVNode("div", { style: { "width": "190px", "height": "190px", "border-radius": "50%", "border": "6px solid #eceef4", "display": "flex", "align-items": "center", "justify-content": "center" } }, [
            createVNode("span", {
              class: $props.textColor,
              style: { "font-size": "38px" }
            }, toDisplayString($props.value) + "%", 3)
          ])
        ];
      }
    })
  }, _parent));
  _push(`<span class="${ssrRenderClass($props.textColor)}">${ssrInterpolate($props.value)}%</span></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProgressBar.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$8 = {
  data() {
    return {
      skills: [
        { id: 1, title: "Web Development", value: 80 },
        { id: 2, title: "Hardware Development", value: 95 },
        { id: 3, title: "Software Development", value: 90 }
      ]
    };
  },
  props: {
    fillColor: {
      type: String,
      default: "#C75142"
    },
    textColor: {
      type: String,
      default: ""
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ProgressBar = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "skill-area over-hidden pt-155 pb-105" }, _attrs))}><div class="container"><div class="row align-items-start justify-content-center"><div class="col-xl-6 col-lg-5 col-md-12 col-sm-12 col-12"><div class="position-relative"><div class="title mb-50"><span class="theme-color f-700 text-uppercase d-block mb-6">My Skill</span><h2 class="text-uppercase mb-20">Growing Over Times</h2><p>Sed ut perspiciatis unde omnis iste natus</p></div></div></div><div class="col-xl-6 col-lg-7 col-md-12 col-sm-12 col-12" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1400"><div class="row justify-content-center mt-10"><!--[-->`);
  ssrRenderList($data.skills, (skill) => {
    _push(`<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-9 mb-30"><div class="single-skill text-center text-lg-right"><div class="progress-circular over-hidden">`);
    _push(ssrRenderComponent(_component_ProgressBar, {
      value: skill.value,
      fillColor: $props.fillColor,
      textColor: $props.textColor
    }, null, _parent));
    _push(`<h4 class="mt-15 text-center">${ssrInterpolate(skill.title)}</h4></div></div></div>`);
  });
  _push(`<!--]--></div></div></div></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Skill2.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$7 = {
  props: {
    itemBg: {
      type: String,
      default: "white-bg"
    },
    bg: {
      type: String,
      default: ""
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["pricing-area over-hidden pt-160 pb-140", $props.bg]
  }, _attrs))}><div class="container"><div class="row align-items-start"><div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><div class="title text-center"><span class="theme-color text-uppercase d-block mb-6">Program Yang Sedang Dibuka</span><h2>Program</h2></div></div></div><div class="row price-wrapper justify-content-center mt-80"><div class="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1200"><div class="${ssrRenderClass([$props.itemBg, "single-price shadow-hover transition3 border-radius10 pl-45 pr-45 pt-45 pb-50 mb-30"])}"><h3 class="theme-border-bottom pb-25">Hourly</h3><p class="${ssrRenderClass([`${$props.itemBg == "white-bg" ? "primary-color" : ""}`, "mt-20 mb-10 f-500"])}"><span class="theme-color rate pr-12">$99</span>/ Per Hour </p><ul class="price-list"><li class="d-flex align-items-center"><span class="theme-color d-inline-block text-center"><i class="far fa-check"></i></span><p class="mb-0 ml-20">One time contract</p></li><li class="d-flex align-items-center"><span class="theme-color d-inline-block text-center"><i class="far fa-check"></i></span><p class="mb-0 ml-20">Flexible Contract</p></li><li class="d-flex align-items-center"><span class="theme-color d-inline-block text-center"><i class="far fa-check"></i></span><p class="mb-0 ml-20">Source Files</p></li><li class="d-flex align-items-center"><span class="disable d-block text-center"><i class="far fa-times"></i></span><p class="mb-0 ml-20">Support</p></li><li class="d-flex align-items-center"><span class="disable d-inline-block text-center"><i class="far fa-times"></i></span><p class="mb-0 ml-20">Updates</p></li></ul><a href="#" class="btn position-relative over-hidden theme-bg text-uppercase mt-25">Start now</a></div></div><div class="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1400"><div class="${ssrRenderClass([$props.itemBg, "single-price shadow-hover transition3 border-radius10 pl-45 pr-45 pt-45 pb-50 mb-30"])}"><h3 class="theme-border-bottom pb-25">Project Basis</h3><p class="${ssrRenderClass([`${$props.itemBg == "white-bg" ? "primary-color" : ""}`, "mt-20 mb-10 f-500"])}"><span class="theme-color rate pr-12">$69</span>/ Per Hour </p><ul class="price-list"><li class="d-flex align-items-center"><span class="theme-color d-inline-block text-center"><i class="far fa-check"></i></span><p class="mb-0 ml-20">One time contract</p></li><li class="d-flex align-items-center"><span class="theme-color d-inline-block text-center"><i class="far fa-check"></i></span><p class="mb-0 ml-20">Flexible Contract</p></li><li class="d-flex align-items-center"><span class="theme-color d-inline-block text-center"><i class="far fa-check"></i></span><p class="mb-0 ml-20">Source Files</p></li><li class="d-flex align-items-center"><span class="theme-color d-inline-block text-center"><i class="far fa-check"></i></span><p class="mb-0 ml-20">Support</p></li><li class="d-flex align-items-center"><span class="disable d-inline-block text-center"><i class="far fa-times"></i></span><p class="mb-0 ml-20">Updates</p></li></ul><a href="#" class="btn position-relative over-hidden theme-bg text-uppercase mt-25">Start now</a></div></div><div class="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1600"><div class="${ssrRenderClass([$props.itemBg, "single-price shadow-hover transition3 border-radius10 pl-45 pr-45 pt-45 pb-50 mb-30"])}"><h3 class="theme-border-bottom pb-25">Monthly</h3><p class="${ssrRenderClass([`${$props.itemBg == "white-bg" ? "primary-color" : ""}`, "mt-20 mb-10 f-500"])}"><span class="theme-color rate pr-12">$39</span>/ Per Hour </p><ul class="price-list"><li class="d-flex align-items-center"><span class="theme-color d-inline-block text-center"><i class="far fa-check"></i></span><p class="mb-0 ml-20">One time contract</p></li><li class="d-flex align-items-center"><span class="theme-color d-inline-block text-center"><i class="far fa-check"></i></span><p class="mb-0 ml-20">Flexible Contract</p></li><li class="d-flex align-items-center"><span class="theme-color d-inline-block text-center"><i class="far fa-check"></i></span><p class="mb-0 ml-20">Source Files</p></li><li class="d-flex align-items-center"><span class="theme-color d-inline-block text-center"><i class="far fa-check"></i></span><p class="mb-0 ml-20">Support</p></li><li class="d-flex align-items-center"><span class="theme-color d-inline-block text-center"><i class="far fa-check"></i></span><p class="mb-0 ml-20">Updates</p></li></ul><a href="#" class="btn position-relative over-hidden theme-bg text-uppercase mt-25">Start now</a></div></div></div></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Program.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_11 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$5]]);
const _imports_0 = publicAssetsURL("/images/shape/content-shape2.png");
const _sfc_main$6 = {
  props: {
    bg: {
      type: String,
      default: "primary-bg"
    },
    items: {
      type: Array,
      required: false,
      default: [
        {
          id: 1,
          title: "Web Development",
          icon: "images/icon/ser-icon1.png",
          desc: "Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua."
        },
        {
          id: 2,
          title: "Software Development",
          icon: "images/icon/ser-icon2.png",
          desc: "Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua."
        },
        {
          id: 3,
          title: "System Development",
          icon: "images/icon/ser-icon3.png",
          desc: "Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua."
        },
        {
          id: 4,
          title: "Security Analysis",
          icon: "images/icon/ser-icon4.png",
          desc: "Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua."
        }
      ]
    },
    itemBg: {
      type: String,
      default: "white-bg"
    },
    titleColor: {
      type: String,
      default: "text-white"
    },
    classic: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "service",
    class: ["service-area over-hidden pt-160 pb-145", $props.bg]
  }, _attrs))}><div class="service-wrapper position-relative"><div class="container"><div class="row align-items-start"><div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><div class="title text-center"><span class="theme-color text-uppercase d-block mb-6">Service</span><h2 class="${ssrRenderClass($props.titleColor)}">What I offer</h2></div></div></div><div class="row service-wrappers mt-80"><!--[-->`);
  ssrRenderList($props.items, (item) => {
    _push(`<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-delay="500"><div class="${ssrRenderClass([$props.itemBg, "single-service shadow-hover transition3 border-radius10 pl-50 pr-50 pt-65 pb-55 mb-25"])}"><div class="row"><div class="col-xl-3 col-lg-3 col-md-6 col-sm-4 col-4 text-lg-center"><div class="service-ser-icon d-inline-block text-center position-relative mb-15"><img class="position-relative z-index1"${ssrRenderAttr("src", item.icon)} alt="icon"><div class="service-small-circle service-circle rounded-circle transition5 secondary-bg d-inline-block position-absolute"></div><div class="service-large-circle service-circle rounded-circle transition5 secondary-bg d-inline-block position-absolute"></div></div></div><div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12"><div class="service-text d-inline-block ml-xl-2"><h3 class="mb-15">${ssrInterpolate(item.title)}</h3><p class="mb-0">${ssrInterpolate(item.desc)}</p></div></div></div></div></div>`);
  });
  _push(`<!--]--></div></div>`);
  if (!$props.classic) {
    _push(`<div class="about-icon position-absolute d-none d-md-inline-block z-index1 zoom-animation"><img${ssrRenderAttr("src", _imports_0)} alt="shape 2"></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Service.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_12 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4]]);
publicAssetsURL("/images/testimonial/author-img.jpg");
const _imports_1 = publicAssetsURL("/images/testimonial/testimonials-img.jpg");
const _sfc_main$5 = {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange
    };
  },
  props: {
    testimonialIcon: {
      type: String,
      default: "/images/testimonial/testimonial-icon.png"
    },
    classic: {
      type: Boolean,
      default: false
    },
    imgGrayScale: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_client_only = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "testimonial-area position-relative over-hidden" }, _attrs))}><div class="container"><div class="testimonial-bg section-bg pt-170 pb-170 position-relative"><div class="row align-items-start justify-content-center"><div class="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12"><div class="position-relative"><div class="title"><span class="theme-color text-uppercase d-block mb-6">Testimonials</span><h2 class="mb-20">What People Say</h2></div></div><div class="testimonial-wrapper position-relative mt-40 pb-50"><div class="quit d-inline-block position-absolute left-0"><img class="theme-color"${ssrRenderAttr("src", $props.testimonialIcon)} alt="quote"></div><div class="testimonial-active pl-80 pr-90">`);
  _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
  _push(`<div class="slick-dots t-dot d-flex gap-5 pl-80 pr-90 mt-5"></div></div></div></div><div class="col-xl-5 col-lg-5 col-md-12 col-sm-11 col-12"><div class="testimonial-img position-relative z-index1" data-aos="fade-left" data-aos-duration="1500"><img class="${ssrRenderClass([`${$props.imgGrayScale ? "img-grayscale" : ""}`, "border-radius10"])}"${ssrRenderAttr("src", _imports_1)} alt="author image "></div></div></div>`);
  if (!$props.classic) {
    _push(`<div class="intro-feature-text-style testimonial-text-style position-absolute d-none d-md-inline-block"><span class="d-inline-block">Testim</span></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Testimonials.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_13 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
publicAssetsURL("/images/brand/brand-img1.png");
publicAssetsURL("/images/brand/brand-hover-img1.png");
publicAssetsURL("/images/brand/brand-img2.png");
publicAssetsURL("/images/brand/brand-hover-img2.png");
publicAssetsURL("/images/brand/brand-img3.png");
publicAssetsURL("/images/brand/brand-hover-img3.png");
publicAssetsURL("/images/brand/brand-img4.png");
publicAssetsURL("/images/brand/brand-hover-img4.png");
publicAssetsURL("/images/brand/brand-img5.png");
publicAssetsURL("/images/brand/brand-hover-img5.png");
const _sfc_main$4 = {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_client_only = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "brand-area brand-height over-hidden" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">`);
  _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
  _push(`</div></div><div class="theme-border-bottom"></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Brand.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_14 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "contact",
        class: "contact-area over-hidden mb-160 mt-155"
      }, _attrs))}><div id="hero-btn" class="contact-wrapper position-relative"><div class="container"><div class="row align-items-start"><div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><div class="title text-center"><span class="theme-color text-uppercase d-block mb-6">Contact Me</span><h2>Let&#39;s Start A New Project</h2></div></div></div><div class="row"><div class="col-xl-6 col-lg-5 col-md-12 col-sm-12 col-12"><div class="contact-wrapper mt-70"><ul class="contact-info-content"><li class="contact-location s-contact mb-20 transition-3 d-lg-flex align-items-center"><div class="contact-icon d-inline-block text-center theme-bg mr-30"><span class="text-white d-inline-block"><i class="fas fa-map-marker-alt"></i></span></div><div class="contact-text d-inline-block"><h4 class="mb-2">Location</h4><p class="text-color mb-0">20 Bordeshi, London, Usa</p></div></li><li class="contact-email s-contact mb-20 transition-3 d-lg-flex align-items-center"><div class="contact-icon d-inline-block text-center theme-bg mr-30"><span class="text-white d-inline-block"><i class="fas fa-phone-alt"></i></span></div><div class="contact-text"><h4 class="mb-2">Phone</h4><p class="mb-0"><a class="text-color primary-hover d-block" href="#">+123 456 7890</a></p></div></li><li class="contact-phone s-contact mb-20 transition-3 d-lg-flex align-items-center"><div class="contact-icon d-inline-block text-center theme-bg mr-30"><span class="text-white d-inline-block"><i class="fas fa-envelope"></i></span></div><div class="contact-text d-inline-block"><h4 class="mb-2">Email</h4><p class="mb-0"><a class="text-color primary-hover d-block" href="#">hello@thames.com</a></p></div></li></ul></div></div><div class="col-xl-6 col-lg-7 col-md-12 col-sm-12 col-12"><div class="contact-wrapper"><div class="contact-form mt-45"><form action="php/mail.php" method="POST" id="contact-form"><div class="contact-info pt-20"><div class="row"><div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 pr6 mb-12" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000"><input class="name w-100 theme-border pl-20 pt-15 pb-15 pr-10 form-color border-radius5 openS-font-family" type="text" name="inputName" id="inputName" placeholder="Your Name"></div><div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 pl6 pr-12 mb-12" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2500"><input class="email w-100 theme-border pl-20 pt-15 pb-15 pr-10 form-color border-radius5 openS-font-family" type="email" name="inputEmail" id="inputEmail" placeholder="Your Email"></div><div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 pr6 mb-12" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000"><input class="phone w-100 theme-border pl-20 pt-15 pb-15 pr-10 form-color border-radius5 openS-font-family" type="text" name="inputPhone" id="inputPhone" placeholder="Your Phone"></div><div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 pl6 pr-12 mb-12" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2500"><input class="subject w-100 theme-border pl-20 pt-15 pb-15 pr-10 form-color border-radius5 openS-font-family" type="text" name="inputSubject" id="inputSubject" placeholder="Your Subject"></div></div><div class="row"><div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 pl-12 pr-12 mb-12" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000"><textarea class="massage w-100 theme-border pl-20 pt-15 pr-10 primary-color border-radius5 openS-font-family" name="inputMessage" id="inputMessage" placeholder="Start writing message here"></textarea></div></div><button class="btn position-relative over-hidden text-white d-inline-block theme-bg white-text text-uppercase" type="submit" name="submit" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2500"> Submit Now </button></div></form><p class="form-message mt-20"></p></div></div></div></div><div class="row"><div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" data-aos-delay="500"><div class="map-wrapper mt-70" id="mapwrapper"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.88253546324!2d90.26379826216589!3d23.780919352725377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1720157387794!5m2!1sen!2sbd" width="100%" height="340" style="${ssrRenderStyle({ "border": "0" })}"></iframe></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  props: {
    toggle: {
      type: Boolean,
      default: false
    },
    item: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    getImageUrl(imagePath) {
      const { $api } = useNuxtApp();
      return $api.getImageUrl(imagePath);
    },
    formatDate(dateString) {
      if (!dateString) return "N/A";
      try {
        const date = new Date(dateString);
        return date.toLocaleDateString("id-ID", {
          year: "numeric",
          month: "long",
          day: "numeric"
        });
      } catch (error) {
        return dateString;
      }
    },
    formatTime(dateString) {
      if (!dateString) return "N/A";
      try {
        const date = new Date(dateString);
        return date.toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit"
        });
      } catch (error) {
        return "";
      }
    },
    formatDescription(description) {
      if (!description) return "";
      let formatted = description.replace(/\n\n/g, "</p><p>").replace(/\n/g, "<br>");
      if (!formatted.startsWith("<p>")) {
        formatted = "<p>" + formatted + "</p>";
      }
      return formatted;
    },
    handleImageError(event) {
      event.target.src = "/images/blog/blog-img1.jpg";
    },
    shareToSocial(platform) {
      const url = (void 0).location.href;
      const title = this.item.title || "Berita Terkini";
      this.item.subtitle || this.item.description || "";
      let shareUrl = "";
      switch (platform) {
        case "facebook":
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
          break;
        case "twitter":
          shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
          break;
        case "whatsapp":
          shareUrl = `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`;
          break;
        case "telegram":
          shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
          break;
      }
      if (shareUrl) {
        (void 0).open(shareUrl, "_blank", "width=600,height=400");
      }
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div class="modal-backdrop fade show" data-v-716c4d07></div><div class="blog-modal-wrapper" data-v-716c4d07><div class="modal fade show" id="exampleModal-b1" tabindex="-1" role="dialog" aria-labelledby="exampleModal-b1" style="${ssrRenderStyle({ "padding-right": "15px", "display": "block", "overflow-y": "scroll" })}" data-v-716c4d07><div class="modal-dialog" role="document" data-v-716c4d07><div class="modal-content" data-v-716c4d07><div class="close-icon float-right pt-10 pr-10" data-v-716c4d07><button type="button" class="close d-inline-block" data-dismiss="modal" aria-label="Close" data-v-716c4d07><span aria-hidden="true" data-v-716c4d07><i class="fa fa-times" data-v-716c4d07></i></span></button></div><div class="modal-content border-0" data-v-716c4d07><div class="modal-body pl-30 pr-30 pt-20 pb-50" data-v-716c4d07>`);
  if ($props.item.image) {
    _push(`<div class="blog-modal-img" data-v-716c4d07><img class="modal-thumbnail"${ssrRenderAttr("src", $options.getImageUrl($props.item.image))}${ssrRenderAttr("alt", $props.item.title)} data-v-716c4d07></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="row align-items-center justify-content-center" data-v-716c4d07><div class="col-12" data-v-716c4d07><div class="content-wrapper" data-v-716c4d07><h2 class="modal-title text-center" data-v-716c4d07>${ssrInterpolate($props.item.title)}</h2>`);
  if ($props.item.subtitle) {
    _push(`<p class="text-center text-muted mb-4" data-v-716c4d07>${ssrInterpolate($props.item.subtitle)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<ul class="blog-meta mb-30 d-flex align-items-center justify-content-between ml-auto mr-auto w-50" data-v-716c4d07><li data-v-716c4d07><span class="secondary-color2 openS-font-family" data-v-716c4d07><span class="theme-color mr-1" data-v-716c4d07><i class="fas fa-folder-open" data-v-716c4d07></i></span> ${ssrInterpolate($props.item.year || "News")}</span></li><li data-v-716c4d07><span class="meta-text-color openS-font-family d-block" data-v-716c4d07><span class="theme-color mr-1" data-v-716c4d07><i class="fas fa-calendar-alt" data-v-716c4d07></i></span> ${ssrInterpolate($options.formatDate($props.item.created_at))}</span></li><li data-v-716c4d07><span class="meta-text-color openS-font-family d-block" data-v-716c4d07><span class="theme-color mr-1" data-v-716c4d07><i class="fas fa-clock" data-v-716c4d07></i></span> ${ssrInterpolate($options.formatTime($props.item.created_at))}</span></li></ul>`);
  if ($props.item.description) {
    _push(`<div class="news-description" data-v-716c4d07><div data-v-716c4d07>${$options.formatDescription($props.item.description) ?? ""}</div></div>`);
  } else {
    _push(`<div class="text-center text-muted" data-v-716c4d07><p data-v-716c4d07>Deskripsi berita tidak tersedia.</p></div>`);
  }
  _push(`<div class="pro-modal-footer mt-30 mb-45" data-v-716c4d07><div class="row align-items-center justify-content-md-between" data-v-716c4d07><div class="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12" data-v-716c4d07><div class="modal-tags d-sm-flex align-items-center pt-25" data-v-716c4d07><h6 class="mb-0 pr-15" data-v-716c4d07>Tags :</h6><ul class="tag-list" data-v-716c4d07><li class="d-inline-block pr-10" data-v-716c4d07><a class="meta-text-color d-block" href="#" data-v-716c4d07>News</a></li><li class="d-inline-block pr-10" data-v-716c4d07><a class="meta-text-color d-block" href="#" data-v-716c4d07>${ssrInterpolate($props.item.year || "Latest")}</a></li><li class="d-inline-block pr-10" data-v-716c4d07><a class="meta-text-color d-block" href="#" data-v-716c4d07>Update</a></li></ul></div></div><div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12" data-v-716c4d07><div class="pro-modal-social-link d-flex align-items-center justify-content-lg-end pt-25" data-v-716c4d07><h6 class="pr-12 mb-0 pb-0" data-v-716c4d07>Share :</h6><ul class="social-link text-md-right" data-v-716c4d07><li class="d-inline-block" data-v-716c4d07><a class="facebook-color text-center pl-15 d-inline-block transition-3" href="#" data-v-716c4d07><i class="fab fa-facebook-f" data-v-716c4d07></i></a></li><li class="d-inline-block" data-v-716c4d07><a class="twitter-color text-center pl-15 d-inline-block transition-3" href="#" data-v-716c4d07><i class="fab fa-twitter" data-v-716c4d07></i></a></li><li class="d-inline-block" data-v-716c4d07><a class="google-plus-color text-center pl-15 d-inline-block transition-3" href="#" data-v-716c4d07><i class="fab fa-whatsapp" data-v-716c4d07></i></a></li><li class="d-inline-block" data-v-716c4d07><a class="linkedin-color text-center pl-15 d-inline-block transition-3" href="#" data-v-716c4d07><i class="fab fa-telegram" data-v-716c4d07></i></a></li></ul></div></div></div></div></div></div></div></div></div></div></div></div></div><!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogModal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-716c4d07"]]);
const useNewsStore = defineStore("news", {
  state: () => ({
    newsData: [],
    loading: false,
    error: null
  }),
  getters: {
    getNewsData: (state) => state.newsData,
    getNewsCount: (state) => state.newsData.length,
    isLoading: (state) => state.loading,
    hasError: (state) => state.error
  },
  actions: {
    async fetchNewsData() {
      this.loading = true;
      this.error = null;
      try {
        const { $api } = useNuxtApp();
        if (!$api || typeof $api.news !== "function") {
          throw new Error("API endpoint news tidak tersedia dari plugin");
        }
        const apiUrl = $api.news();
        const response = await $fetch(apiUrl, {
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          }
        });
        if (!response) {
          throw new Error("Response kosong dari server");
        }
        if (Array.isArray(response)) {
          this.newsData = response;
        } else if (typeof response === "object") {
          this.newsData = [response];
        } else {
          throw new Error("Format response tidak valid");
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        this.error = `Gagal memuat data news: ${errorMessage}`;
        this.newsData = [];
      } finally {
        this.loading = false;
      }
    },
    clearError() {
      this.error = null;
    },
    // Get single news by ID
    getNewsById(id) {
      return this.newsData.find((news) => news.id === id) || null;
    },
    // Get latest news (first item)
    getLatestNews() {
      return this.newsData.length > 0 ? this.newsData[0] : null;
    }
  }
});
const _sfc_main$1 = {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange
    };
  },
  props: {
    bg: {
      type: String,
      default: ""
    },
    itemBg: {
      type: String,
      default: "bg-white"
    },
    classic: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      toggle: false,
      item: null,
      newsData: []
    };
  },
  computed: {
    newsStore() {
      return useNewsStore();
    }
  },
  async mounted() {
    await this.fetchNews();
  },
  methods: {
    async fetchNews() {
      try {
        await this.newsStore.fetchNewsData();
        this.newsData = this.newsStore.getNewsData;
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    },
    getImageUrl(imagePath) {
      const { $api } = useNuxtApp();
      return $api.getImageUrl(imagePath);
    },
    handleImageError(event) {
      event.target.src = "/images/blog/blog-img1.jpg";
    },
    formatDate(dateString) {
      if (!dateString) return "";
      try {
        const date = new Date(dateString);
        return date.toLocaleDateString("id-ID", {
          year: "numeric",
          month: "long",
          day: "numeric"
        });
      } catch (error) {
        return dateString;
      }
    },
    truncateText(text, maxLength) {
      if (!text) return "";
      if (text.length <= maxLength) {
        return text;
      }
      return text.substring(0, maxLength) + "...";
    },
    activeItem(item) {
      this.toggle = true;
      this.item = item;
      (void 0).querySelector("body").classList.add("modal-open");
    },
    close() {
      this.toggle = false;
      (void 0).querySelector("body").classList.remove("modal-open");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_client_only = __nuxt_component_0$1;
  const _component_BlogModal = __nuxt_component_1;
  _push(`<!--[--><div id="blog" class="${ssrRenderClass([$props.bg, "blog-area over-hidden"])}" data-v-58c87108>`);
  if (!$props.classic) {
    _push(`<div class="marquee-w mb-45" data-v-58c87108><div class="marquee" data-v-58c87108><span class="pl-4" data-v-58c87108>Senior Website Developer from New York *</span><span class="pl-4" data-v-58c87108>Senior Website Developer from New York *</span></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="blog-wrappers section-bg pt-160 pb-120" data-v-58c87108><div class="container" data-v-58c87108><div class="row" data-v-58c87108><div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" data-v-58c87108><div class="title" data-v-58c87108><span class="theme-color text-uppercase d-block mb-6" data-v-58c87108>Dapatkan Pembaruan</span><h2 data-v-58c87108>Berita Terkini</h2></div></div></div>`);
  if ($options.newsStore.isLoading) {
    _push(`<div class="row justify-content-center mt-75" data-v-58c87108><div class="col-12 text-center" data-v-58c87108><div class="spinner-border text-primary" role="status" data-v-58c87108><span class="visually-hidden" data-v-58c87108>Loading...</span></div><p class="mt-3" data-v-58c87108>Memuat berita...</p></div></div>`);
  } else if ($options.newsStore.hasError) {
    _push(`<div class="row justify-content-center mt-75" data-v-58c87108><div class="col-12 text-center" data-v-58c87108><div class="alert alert-danger" role="alert" data-v-58c87108>${ssrInterpolate($options.newsStore.hasError)}</div><button class="btn btn-primary mt-3" data-v-58c87108> Coba Lagi </button></div></div>`);
  } else if ($data.newsData) {
    _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
  } else {
    _push(`<div class="row justify-content-center mt-75" data-v-58c87108><div class="col-12 text-center" data-v-58c87108><p class="text-muted" data-v-58c87108>Tidak ada berita tersedia saat ini.</p></div></div>`);
  }
  _push(`</div></div></div>`);
  if ($data.toggle) {
    _push(ssrRenderComponent(_component_BlogModal, {
      item: $data.item,
      toggle: $data.toggle,
      onClose: ($event) => $options.close()
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_16 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-58c87108"]]);
const __default__ = {
  mounted() {
    (void 0).querySelector("body").classList.add("body-dark-mode");
  },
  data() {
    return {
      serviceItems: [
        {
          id: 1,
          title: "Web Development",
          icon: "/images/index-4/work/service-icon1.png",
          desc: "Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua."
        },
        {
          id: 2,
          title: "Software Development",
          icon: "/images/index-4/work/service-icon2.png",
          desc: "Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua."
        },
        {
          id: 3,
          title: "System Development",
          icon: "/images/index-4/work/service-icon3.png",
          desc: "Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua."
        },
        {
          id: 4,
          title: "Security Analysis",
          icon: "/images/index-4/work/service-icon4.png",
          desc: "Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua."
        }
      ]
    };
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
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
      const _component_Preloader = __nuxt_component_0$2;
      const _component_NuxtLayout = __nuxt_component_1$2;
      const _component_Home = __nuxt_component_2;
      const _component_Chatbot = __nuxt_component_3;
      const _component_About2 = __nuxt_component_4;
      const _component_Counter = __nuxt_component_5;
      const _component_Portfolio2 = __nuxt_component_6;
      const _component_Award = __nuxt_component_7;
      const _component_Experience = __nuxt_component_8;
      const _component_Education = _sfc_main$a;
      const _component_Skill2 = __nuxt_component_10;
      const _component_Program = __nuxt_component_11;
      const _component_Service = __nuxt_component_12;
      const _component_Testimonials = __nuxt_component_13;
      const _component_Brand = __nuxt_component_14;
      const _component_Contact = _sfc_main$3;
      const _component_Blog = __nuxt_component_16;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Preloader, null, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: "thames",
        logo: "/images/index-4/logo.png",
        logo2: "/images/index-4/black-logo.png",
        footerLogo: "/images/index-4/black-logo.png"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Home, { bgImage: "/images/slider/slider-bg.jpg" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Chatbot, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_About2, { signature: "/images/index-4/signature.png" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Counter, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Portfolio2, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Award, { bg: "secondary-bg" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Experience, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Education, { imgGrayScale: true }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Skill2, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Program, { bg: "secondary-bg" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Service, {
              bg: "",
              titleColor: "",
              items: _ctx.serviceItems,
              classic: true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Testimonials, {
              classic: true,
              testimonialIcon: "/images/index-4/testimonial-icon.png",
              imgGrayScale: true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Brand, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Contact, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Blog, {
              classic: true,
              bg: "secondary-bg"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Home, { bgImage: "/images/slider/slider-bg.jpg" }),
              createVNode(_component_Chatbot),
              createVNode(_component_About2, { signature: "/images/index-4/signature.png" }),
              createVNode(_component_Counter),
              createVNode(_component_Portfolio2),
              createVNode(_component_Award, { bg: "secondary-bg" }),
              createVNode(_component_Experience),
              createVNode(_component_Education, { imgGrayScale: true }),
              createVNode(_component_Skill2),
              createVNode(_component_Program, { bg: "secondary-bg" }),
              createVNode(_component_Service, {
                bg: "",
                titleColor: "",
                items: _ctx.serviceItems,
                classic: true
              }, null, 8, ["items"]),
              createVNode(_component_Testimonials, {
                classic: true,
                testimonialIcon: "/images/index-4/testimonial-icon.png",
                imgGrayScale: true
              }),
              createVNode(_component_Brand),
              createVNode(_component_Contact),
              createVNode(_component_Blog, {
                classic: true,
                bg: "secondary-bg"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-Blhz-I3V.js.map
