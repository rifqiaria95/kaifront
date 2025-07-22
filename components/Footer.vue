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
                <h4 class="mb-28 mt-2">Follow Me</h4>
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
                      class="twitter-bg text-center pr-0 text-white d-block rotate transition-3"
                      href="#"
                      ><i class="fab fa-twitter"></i
                    ></a>
                  </li>
                  <li class="mr-2 rotate-hover">
                    <a
                      class="linkedin-bg text-center pr-0 text-white d-block rotate transition-3"
                      href="#"
                      ><i class="fab fa-linkedin-in"></i
                    ></a>
                  </li>
                  <li class="mr-2 rotate-hover">
                    <a
                      class="instagram-bg text-center pr-0 text-white d-block rotate transition-3"
                      href="#"
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
                <h4 class="mb-28 mt-2">Follow Me</h4>
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
                      class="twitter-bg text-center pr-0 text-white d-block rotate transition-3"
                      href="#"
                      ><i class="fab fa-twitter"></i
                    ></a>
                  </li>
                  <li class="mr-2 rotate-hover">
                    <a
                      class="linkedin-bg text-center pr-0 text-white d-block rotate transition-3"
                      href="#"
                      ><i class="fab fa-linkedin-in"></i
                    ></a>
                  </li>
                  <li class="mr-2 rotate-hover">
                    <a
                      class="instagram-bg text-center pr-0 text-white d-block rotate transition-3"
                      href="#"
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
