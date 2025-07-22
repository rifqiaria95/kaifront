<template>
  <div id="about" class="about-area mt-170 mb-105">
    <div class="about-content-wrapper position-relative">
      <div class="container">
        <div class="row">
          <div
            class="col-xl-6 col-lg-6 col-md-12 offset-md-0 col-sm-11 offset-sm-1 col-12"
          >
            <div class="about-img-wrapper position-relative mb-100">
              <div
                class="about-img position-relative z-index11"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="100"
              >
                <div
                  class="about-img-over over-hidden z-index11 pl-50 transition5 d-inline-block position-relative"
                >
                  <img
                    class="img-grayscale border-radius12 position-relative z-index11 tilt"
                    src="/images/about/about-img.jpg"
                    alt=""
                  />
                </div>
              </div>
              <!-- /about-img -->
              <div
                class="about-color-shape-bg position-absolute z-index1"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="800"
              ></div>
              <div
                class="about-shape-dotted secondary-bg position-absolute z-index-1"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="1000"
              >
                <img src="/images/about/about-dott.png" alt="" />
              </div>
            </div>
            <!-- /about-img-wrapper -->
          </div>
          <!-- /col -->
          <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="about-content position-relative mb-50">
              <div class="position-relative">
                <div class="title">
                  <span
                    class="theme-color f-700 text-uppercase d-block mb-6 mt--5"
                    >About Me</span
                  >
                  <h2 class="f-700 text-uppercase mb-30">
                    I Develop System that Works
                  </h2>
                </div>
                <!-- /title -->
              </div>
              <p class="mb-25">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia dese runt mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperia m, eaque
                ipsa quae ab illo inven tore veritatis et quasi architecto
                beatae vitae.
              </p>
              <div class="about-info-wrapper pt-10">
                <div class="row">
                  <div class="col-xl-6 col-lg-12 col-md-6 col-sm-12 col-12">
                    <ul class="about-info">
                      <li class="d-inline-block pr-45">
                        <p class="primary-color f-700 mb-6">Name</p>
                        <p class="primary-color f-700 mb-6">Age</p>
                        <p class="primary-color f-700 mb-6">Occupation</p>
                        <p class="primary-color f-700 mb-6">Education</p>
                      </li>
                      <!-- /li -->
                      <li class="d-inline-block">
                        <p class="mb-6">James Smith</p>
                        <p class="mb-6">29 Years</p>
                        <p class="mb-6">System Engineer</p>
                        <p class="mb-6">PhD in Physics</p>
                      </li>
                      <!-- /li -->
                    </ul>
                  </div>
                  <!-- /col -->
                  <div class="col-xl-6 col-lg-12 col-md-6 col-sm-12 col-12">
                    <ul class="about-info">
                      <li class="d-inline-block pr-45">
                        <p class="primary-color f-700 mb-6">Phone</p>
                        <p class="primary-color f-700 mb-6">Email</p>
                        <p class="primary-color f-700 mb-6">Nationality</p>
                        <p class="primary-color f-700 mb-6">Freelance</p>
                      </li>
                      <!-- /li -->
                      <li class="d-inline-block">
                        <p class="mb-6">+123 456 7890</p>
                        <p class="mb-6">hello@hibro.com</p>
                        <p class="mb-6">Bangladeshi</p>
                        <p class="mb-6">Available</p>
                      </li>
                      <!-- /li -->
                    </ul>
                  </div>
                  <!-- /col -->
                </div>
                <!-- /row -->
              </div>
              <!-- /about-info-wrapper -->
              <div class="about-footer-content d-sm-flex align-items-center">
                <div class="signature mt-20 pr-45">
                  <img :src="signature" alt="" />
                </div>
                <div class="about-footer-content-right mt-20 text-left">
                  <h6 class="d-xl-inline-block text-uppercase pr5 mb-0">
                    Bruce Wayne
                  </h6>
                  <span class="secondary-color2"
                    >Software Architect, Google Inc.</span
                  >
                </div>
              </div>
              <!-- /about-footer-content -->
            </div>
            <!-- /about-content -->
          </div>
          <!-- /col -->
        </div>
        <!-- /row -->
      </div>
      <!-- /container -->
    </div>
    <!-- /about-wrapper -->
  </div>
</template>

<script>
export default {
  props: {
    signature: {
      type: String,
      default: "/images/about/signature.png",
    },
  },
};
</script>
