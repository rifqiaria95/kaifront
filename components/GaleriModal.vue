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
                  <p>{{ item.description ? item.description.replace(/<[^>]*>/g, '') : '' }}</p>
                </div>
              </div>
            </div>
            <!-- /row -->
            <div class="pro-modal-footer mt-30 mb-45">
              <div class="row align-items-center justify-content-md-between">
                <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                  <div class="modal-tags d-sm-flex align-items-center pt-25">
                    <h6 class="mb-0 pr-15 black-color primary-font-family">
                      Kategori :
                    </h6>
                    <ul class="tag-list">
                      <li
                        v-if="item.kategori_galeri"
                        class="d-inline-block pr-10"
                      >
                        <a class="d-block" href="#">{{ item.kategori_galeri.name }}</a>
                      </li>
                      <li
                        v-else-if="item.category"
                        class="d-inline-block pr-10"
                      >
                        <a class="d-block" href="#">{{ item.category }}</a>
                      </li>
                      <li
                        v-else
                        class="d-inline-block pr-10"
                      >
                        <a class="d-block" href="#">Uncategorized</a>
                      </li>
                    </ul>
                  </div>
                </div>
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
