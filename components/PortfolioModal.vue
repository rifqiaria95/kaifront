<template>
  <div class="modal-backdrop fade show" @click="closeModal()"></div>
  <div
    class="modal fade show"
    id="exampleModal-p2"
    tabindex="-2"
    role="dialog"
    aria-labelledby="exampleModal-p1"
    style="padding-right: 15px; display: block; overflow-y: scroll"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="close-icon float-right pt-10 pr-10">
          <button
            type="button"
            class="close d-inline-block"
            data-dismiss="modal"
            aria-label="Close"
            @click="closeModal()"
          >
            <span aria-hidden="true"><i class="fa fa-times"></i></span>
          </button>
        </div>
        <div class="modal-content border-0">
          <div class="modal-body pl-50 pr-50 pt-10 pb-20">
            <div class="blog-modal-img">
              <img
                class="w-100"
                :class="`${imgGrayScale ? 'img-grayscale' : ''}`"
                :src="item.largeImage"
                alt="product image 02"
              />
            </div>
            <div class="row">
              <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                <div class="content-wrapper">
                  <h2 class="modal-title">{{ item.title }}</h2>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos laudantium fuga molestiae, aut eius minus
                    reprehenderit.
                  </p>
                  <p class="mb-0">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
              <!-- /col -->
              <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                <div
                  class="meta-wrapper form-bg mt-60 pt-40 pb-45 pr-20 pl-45 mt-40 mb-10"
                >
                  <ul class="item-meta">
                    <li>
                      Project Type :
                      <span class="pl-2 openS-font-family">Graphic Design</span>
                    </li>
                    <li>
                      Clien :
                      <span class="pl-2 openS-font-family">Juwel Khan</span>
                    </li>
                    <li>
                      Duration :<span class="pl-2 openS-font-family"
                        >2 Weeks</span
                      >
                    </li>
                    <li>
                      Task :
                      <span class="pl-2 openS-font-family"
                        >UI/UX, Frontend</span
                      >
                    </li>
                    <li>
                      Budget : <span class="pl-2 openS-font-family">$2000</span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    class="btn position-relative over-hidden text-white theme-bg theme-border2 text-uppercase mt-20 pt-2 pb-2"
                    >View Live</a
                  >
                </div>
              </div>
              <!-- /col -->
            </div>
            <!-- /row -->
            <div class="pro-modal-footer mt-30 mb-45">
              <div class="row align-items-center justify-content-md-between">
                <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                  <div class="modal-tags d-sm-flex align-items-center pt-25">
                    <h6 class="mb-0 pr-15 black-color primary-font-family">
                      Tags :
                    </h6>
                    <ul class="tag-list">
                      <li class="d-inline-block pr-10">
                        <a class="d-block" href="#">Web Design</a>
                      </li>
                      <li class="d-inline-block pr-10">
                        <a class="d-block" href="#">Social Media</a>
                      </li>
                      <li class="d-inline-block pr-10">
                        <a class="d-block" href="#">Product</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- /col -->
                <div class="col-xl-5 col-lg-5 col-md-12 col-sm-10 col-12">
                  <div
                    class="pro-modal-social-link d-flex align-items-center justify-content-lg-end pt-25"
                  >
                    <h6 class="pr-12 mb-0 primary-font-family">
                      Share this product :
                    </h6>
                    <ul class="social-link text-md-right">
                      <li class="d-inline-block">
                        <a
                          class="facebook-color text-center pl-15 d-inline-block transition-3"
                          href="#"
                          ><i class="fab fa-facebook-f"></i
                        ></a>
                      </li>
                      <li class="d-inline-block">
                        <a
                          class="twitter-color text-center pl-15 d-inline-block transition-3"
                          href="#"
                          ><i class="fab fa-twitter"></i
                        ></a>
                      </li>
                      <li class="d-inline-block">
                        <a
                          class="google-plus-color text-center pl-15 d-inline-block transition-3"
                          href="#"
                          ><i class="fab fa-google-plus-g"></i
                        ></a>
                      </li>
                      <li class="d-inline-block">
                        <a
                          class="linkedin-color text-center pl-15 d-inline-block transition-3"
                          href="#"
                          ><i class="fab fa-linkedin-in"></i
                        ></a>
                      </li>
                    </ul>
                    <!-- social-link -->
                  </div>
                </div>
                <!-- /col -->
              </div>
              <!-- .row -->
            </div>
          </div>
          <!-- /modal-body -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    toggle: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
      default: {},
    },
    imgGrayScale: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
