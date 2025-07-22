<template>
  <div class="modal-backdrop fade show" @click="closeModal()"></div>
  <div class="blog-modal-wrapper">
    <div
      class="modal fade show"
      id="exampleModal-b1"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModal-b1"
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
              @click.prevent="closeModal()"
            >
              <span aria-hidden="true"><i class="fa fa-times"></i></span>
            </button>
          </div>
          <div class="modal-content border-0">
            <div class="modal-body pl-50 pr-50 pt-10 pb-50">
              <div class="blog-modal-img">
                <img class="w-100" :src="item.img" alt="blog post image 02" />
              </div>
              <div class="row align-items-center justify-content-center">
                <div class="col-12">
                  <div class="content-wrapper">
                    <h2 class="modal-title text-center">
                      {{ item.title }}
                    </h2>
                    <ul
                      class="blog-meta mb-30 d-flex align-items-center justify-content-between ml-auto mr-auto w-50"
                    >
                      <li>
                        <a href="#" class="secondary-color2 openS-font-family">
                          <span class="theme-color mr-1"
                            ><i class="fas fa-folder-open"></i
                          ></span>
                          Web Design
                        </a>
                      </li>
                      <li>
                        <span class="meta-text-color openS-font-family d-block">
                          <span class="theme-color mr-1"
                            ><i class="fas fa-calendar-alt"></i
                          ></span>
                          June, 21, 2022
                        </span>
                      </li>
                      <li>
                        <span class="meta-text-color openS-font-family d-block">
                          <span class="theme-color mr-1"
                            ><i class="fas fa-clock"></i
                          ></span>
                          10 min
                        </span>
                      </li>
                    </ul>
                    <!-- /blog-meta -->
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Debitis ut recusandae assumenda. Nisi quaerat porro
                      inventore ullam magnam beatae enim cumque. Facilis in
                      maxime quos praesentium cupiditate cum commodi recusandae!
                    </p>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Minus eos ipsam enim perspiciatis doloremque laborum dolor
                      nihil aperiam vel necessitatibus unde cupiditate error eum
                      maiores, sapiente ea. Quisquam sed, molestias veniam
                      adipisci magnam ratione aspernatur delectus a assumenda,
                      corrupti libero commodi eaque quis vel consequatur
                      reiciendis dolor beatae distinctio voluptatum ducimus non
                      optio. Deleniti nobis eius, nihil incidunt voluptate
                      labore, debitis ducimus perspiciatis rerum iure doloremque
                      minus omnis nostrum! Voluptatibus mollitia voluptate ipsa
                      nesciunt animi blanditiis aliquam repellat quibusdam enim
                      eos veniam similique tempora nihil optio, iure
                      necessitatibus hic ipsum nisi maiores perspiciatis magni?
                      Sed vero amet quidem natus consectetur!
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quod ex dolorum aut accusantium, fugit sunt vero animi
                      quos porro excepturi. Quia delectus nulla voluptatem unde
                      incidunt. Magnam natus officiis saepe.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      A aspernatur reiciendis corporis deleniti beatae? At,
                      inventore necessitatibus repellat alias tenetur quisquam
                      nam maiores eligendi sequi itaque voluptatum architecto
                      minus numquam!
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Harum dolore consequatur eius non incidunt fugit hic error
                      accusantium, deserunt et magnam beatae, ipsa distinctio
                      eaque laborum molestias maiores consectetur quo, expedita
                      laboriosam quia quibusdam. Dolores dolorem, tenetur rerum
                      veniam facilis eaque corporis ducimus laudantium excepturi
                      officiis quaerat maiores voluptatem vero optio. Id culpa
                      expedita ipsa enim omnis debitis. Beatae mollitia natus
                      ullam repudiandae ipsa neque. Sequi explicabo odio cum,
                      odit voluptatem cupiditate vero, error incidunt fuga
                      dolore id ut! Eligendi, necessitatibus beatae voluptatem
                      ipsum, ducimus amet sed officia ad aliquid aperiam id,
                      eius accusamus quibusdam doloremque! Enim laudantium sint
                      quae.
                    </p>
                    <div class="pro-modal-footer mt-30 mb-45">
                      <div
                        class="row align-items-center justify-content-md-between"
                      >
                        <div
                          class="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12"
                        >
                          <div
                            class="modal-tags d-sm-flex align-items-center pt-25"
                          >
                            <h6 class="mb-0 pr-15">Tags :</h6>
                            <ul class="tag-list">
                              <li class="d-inline-block pr-10">
                                <a class="meta-text-color d-block" href="#"
                                  >Web Design</a
                                >
                              </li>
                              <li class="d-inline-block pr-10">
                                <a class="meta-text-color d-block" href="#"
                                  >Social Media</a
                                >
                              </li>
                              <li class="d-inline-block pr-10">
                                <a class="meta-text-color d-block" href="#"
                                  >Recent Blog</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <!-- /col -->
                        <div
                          class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12"
                        >
                          <div
                            class="pro-modal-social-link d-flex align-items-center justify-content-lg-end pt-25"
                          >
                            <h6 class="pr-12 mb-0 pb-0">Share :</h6>
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
                </div>
                <!-- /col -->
              </div>
              <!-- /row -->
            </div>
            <!-- /modal-body -->
          </div>
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
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
