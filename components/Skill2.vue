<template lang="">
  <div class="skill-area over-hidden pt-155 pb-105">
    <div class="container">
      <div class="row align-items-start justify-content-center">
        <div class="col-xl-6 col-lg-5 col-md-12 col-sm-12 col-12">
          <div class="position-relative">
            <div class="title mb-50">
              <span class="theme-color f-700 text-uppercase d-block mb-6"
                >My Skill</span
              >
              <h2 class="text-uppercase mb-20">Growing Over Times</h2>
              <p>Sed ut perspiciatis unde omnis iste natus</p>
            </div>
            <!-- /title -->
          </div>
        </div>
        <!-- /col -->
        <div
          class="col-xl-6 col-lg-7 col-md-12 col-sm-12 col-12"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1400"
        >
          <div class="row justify-content-center mt-10">
            <!-- /col -->
            <div
              v-for="skill in skills"
              class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-9 mb-30"
            >
              <div class="single-skill text-center text-lg-right">
                <div class="progress-circular over-hidden">
                  <ProgressBar
                    :value="skill.value"
                    :fillColor="fillColor"
                    :textColor="textColor"
                  />
                  <h4 class="mt-15 text-center">{{ skill.title }}</h4>
                </div>
              </div>
            </div>
            <!-- /col -->
          </div>
          <!-- /row -->
        </div>
        <!-- /col -->
      </div>
      <!-- /row -->
    </div>
    <!-- /container -->
  </div>
</template>
<script>
import ProgressBar from "./ProgressBar.vue";

export default {
  data() {
    return {
      skills: [
        { id: 1, title: "Web Development", value: 80 },
        { id: 2, title: "Hardware Development", value: 95 },
        { id: 3, title: "Software Development", value: 90 },
      ],
    };
  },
  props: {
    fillColor: {
      type: String,
      default: "#C75142",
    },
    textColor: {
      type: String,
      default: "",
    },
  },
};
</script>
