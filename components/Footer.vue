 <template>
  <footer>
    <div class="footer-area over-hidden pt-110 mb-80">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-5 col-md-8 col-sm-7 col-12">
              <div class="footer-widget footer-logo pb-40">
                <div class="foot-logo mb-30">
                  <img :src="footerLogo" alt="Themes" />
                </div>
                <div class="copyright-text">
                  <p class="mb-0">
                    All rights reserved
                    <a
                      href="https://www.linkedin.com/in/selly-andriany-gantina-0000000000/"
                      class="c-theme f-600"
                      :class="copyRightTextColor"
                      >Selly Andriany Gantina</a
                    >
                    © {{ new Date().getFullYear() }}
                  </p>
                </div>
              </div>
            </div>
            <!-- /col -->
            <div
              class="col-xl-3 offset-xl-2 col-lg-3 col-md-4 col-sm-4 col-12 d-none d-sm-block d-lg-none"
            >
              <div class="footer-widget pb-40">
                <h4 class="mb-28 mt-2">Ikuti Saya</h4>
                <ul class="social social-bg text-center d-flex">
                  <li class="mr-2 rotate-hover">
                    <a
                      class="facebook-bg text-center pr-0 text-white d-block transition-3 rotate"
                      href="#"
                      ><i class="fab fa-facebook-f"></i
                    ></a>
                  </li>
                  <li class="mr-2 rotate-hover">
                    <a
                      class="twitter-bg text-center pr-0 text-white d-flex align-items-center justify-content-center rotate transition-3"
                      href="https://www.tiktok.com/@sellygantina?_t=ZS-8yF29UGlEJs&_r=1"
                      >
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                        <path fill="#fff" d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
                    </svg>
                    </a>
                  </li>
                  <li class="mr-2 rotate-hover">
                    <a
                      class="linkedin-bg text-center pr-0 text-white d-block rotate transition-3"
                      href="https://www.youtube.com/@sagchannel1320"
                      ><i class="fab fa-youtube"></i
                    ></a>
                  </li>
                  <li class="mr-2 rotate-hover">
                    <a
                      class="instagram-bg text-center pr-0 text-white d-block rotate transition-3"
                      href="https://www.instagram.com/sellygantina76?igsh=MXhmd2djb3F6Y216cg=="
                      ><i class="fab fa-instagram"></i
                    ></a>
                  </li>
                </ul>
                <!-- social -->
              </div>
            </div>
            <!-- /col -->
            <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
              <div class="footer-widget pb-40">
                <h4 class="mb-28 mt-2">Newsletter</h4>
                <div class="newsletter-form">
                  <form action="#">
                    <div class="subscribe-info position-relative">
                      <input
                        class="sub-name theme-border pl-25 pt-15 pb-15 pr-10 w-100 secondary-color2 border-radius5 bg-transparent"
                        type="email"
                        name="email"
                        id="Email"
                        placeholder="Submit your email"
                      />
                      <span
                        class="d-block position-absolute theme-color cursor-pointer"
                        ><i class="fal fa-envelope"></i
                      ></span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <!-- /col -->
            <div
              class="col-xl-3 offset-xl-2 col-lg-3 col-md-4 col-sm-4 col-12 d-sm-none d-lg-block"
            >
              <div class="footer-widget pb-40">
                <h4 class="mb-28 mt-2">Ikuti Saya</h4>
                <ul class="social social-bg text-center d-flex">
                  <li class="mr-2 rotate-hover">
                    <a
                      class="facebook-bg text-center pr-0 text-white d-block transition-3 rotate"
                      href="#"
                      ><i class="fab fa-facebook-f"></i
                    ></a>
                  </li>
                  <li class="mr-2 rotate-hover">
                    <a
                      class="twitter-bg text-center pr-0 text-white d-flex align-items-center justify-content-center rotate transition-3"
                      href="https://www.tiktok.com/@sellygantina?_t=ZS-8yF29UGlEJs&_r=1"
                      >
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                        <path fill="#fff" d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
                      </svg>
                    </a>
                  </li>
                  <li class="mr-2 rotate-hover">
                    <a
                      class="linkedin-bg text-center pr-0 text-white d-block rotate transition-3"
                      href="https://www.youtube.com/@sagchannel1320"
                      ><i class="fab fa-youtube"></i
                    ></a>
                  </li>
                  <li class="mr-2 rotate-hover">
                    <a
                      class="instagram-bg text-center pr-0 text-white d-block rotate transition-3"
                      href="https://www.instagram.com/sellygantina76?igsh=MXhmd2djb3F6Y216cg=="
                      ><i class="fab fa-instagram"></i
                    ></a>
                  </li>
                </ul>
                <!-- social -->
              </div>
            </div>
            <!-- /col -->
          </div>
          <!-- /row -->
        </div>
        <!-- /container -->
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    footerLogo: {
      type: String,
      default: "/images/logo/logo-dark.png",
    },
    copyRightTextColor: {
      type: String,
      default: "primary-color",
    },
  },
};
</script>
