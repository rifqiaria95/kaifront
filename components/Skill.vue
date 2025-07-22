<template>
  <div
    id="skills"
    class="skill-area over-hidden position-relative pt-130 pb-110"
  >
    <div class="marquee-w mb-125">
      <div class="marquee">
        <span class="pl-4">Senior Website Developer from New York *</span>
        <span class="pl-4">Senior Website Developer from New York *</span>
      </div>
      <div class="marquee marquee2 pb-1">
        <span class="pl-4"
          >I’m Open for new projects * Let’s Work Together *</span
        >
        <span class="pl-4"
          >I’m Open for new projects * Let’s Work Together *</span
        >
      </div>
    </div>

    <div class="container">
      <div class="row align-items-start justify-content-center">
        <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
          <div class="position-relative">
            <div class="title mb-50">
              <span class="theme-color text-uppercase d-block mb-6"
                >My Skill</span
              >
              <h2 class="mb-25">Growing Over Times</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus Sed ut perspiciatis
                unde omnis iste natus kobita tumi sopno charini hoye khbor nio
                na sit voluptatem accusantium dolore.
              </p>
            </div>
          </div>
        </div>

        <div
          class="col-xl-6 col-lg-7 offset-xl-1 col-md-12 col-sm-12 col-12"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1400"
        >
          <div class="row justify-content-center mt-10">
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
          </div>
        </div>
      </div>
    </div>

    <div
      class="skill-text-style position-absolute z-index-1 d-none d-md-inline-block"
    >
      <span class="d-inline-block section-text-color">Skills</span>
    </div>
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
        { id: 4, title: "System Application", value: 75 },
        { id: 5, title: "Project management", value: 60 },
        { id: 6, title: "Data Administration", value: 85 },
      ],
    };
  },
  props: {
    fillColor: {
      type: String,
      default: "#80db66",
    },
    textColor: {
      type: String,
      default: "",
    },
  },
};
</script>
