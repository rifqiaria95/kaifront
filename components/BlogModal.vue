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
            <div class="modal-body pl-30 pr-30 pt-20 pb-50">
              <div class="blog-modal-img" v-if="item.image">
                <img 
                  class="modal-thumbnail" 
                  :src="getImageUrl(item.image)" 
                  :alt="item.title"
                  @error="handleImageError"
                />
              </div>
              <div class="row align-items-center justify-content-center">
                <div class="col-12">
                  <div class="content-wrapper">
                    <h2 class="modal-title text-center">
                      {{ item.title }}
                    </h2>
                    <p v-if="item.subtitle" class="text-center text-muted mb-4">
                      {{ item.subtitle }}
                    </p>
                    <ul
                      class="blog-meta mb-30 d-flex align-items-center justify-content-between ml-auto mr-auto w-50"
                    >
                      <li>
                        <span class="secondary-color2 openS-font-family">
                          <span class="theme-color mr-1"
                            ><i class="fas fa-folder-open"></i
                          ></span>
                          {{ item.year || 'News' }}
                        </span>
                      </li>
                      <li>
                        <span class="meta-text-color openS-font-family d-block">
                          <span class="theme-color mr-1"
                            ><i class="fas fa-calendar-alt"></i
                          ></span>
                          {{ formatDate(item.created_at) }}
                        </span>
                      </li>
                      <li>
                        <span class="meta-text-color openS-font-family d-block">
                          <span class="theme-color mr-1"
                            ><i class="fas fa-clock"></i
                          ></span>
                          {{ formatTime(item.created_at) }}
                        </span>
                      </li>
                    </ul>
                    <!-- /blog-meta -->
                    
                    <!-- News Description -->
                    <div v-if="item.description" class="news-description">
                      <div v-html="formatDescription(item.description)"></div>
                    </div>
                    
                    <!-- Fallback content if no description -->
                    <div v-else class="text-center text-muted">
                      <p>Deskripsi berita tidak tersedia.</p>
                    </div>
                    
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
                                  >News</a
                                >
                              </li>
                              <li class="d-inline-block pr-10">
                                <a class="meta-text-color d-block" href="#"
                                  >{{ item.year || 'Latest' }}</a
                                >
                              </li>
                              <li class="d-inline-block pr-10">
                                <a class="meta-text-color d-block" href="#"
                                  >Update</a
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
                                  @click.prevent="shareToSocial('facebook')"
                                  ><i class="fab fa-facebook-f"></i
                                ></a>
                              </li>
                              <li class="d-inline-block">
                                <a
                                  class="twitter-color text-center pl-15 d-inline-block transition-3"
                                  href="#"
                                  @click.prevent="shareToSocial('twitter')"
                                  ><i class="fab fa-twitter"></i
                                ></a>
                              </li>
                              <li class="d-inline-block">
                                <a
                                  class="google-plus-color text-center pl-15 d-inline-block transition-3"
                                  href="#"
                                  @click.prevent="shareToSocial('whatsapp')"
                                  ><i class="fab fa-whatsapp"></i
                                ></a>
                              </li>
                              <li class="d-inline-block">
                                <a
                                  class="linkedin-color text-center pl-15 d-inline-block transition-3"
                                  href="#"
                                  @click.prevent="shareToSocial('telegram')"
                                  ><i class="fab fa-telegram"></i
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
      default: () => ({}),
    },
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
      if (!dateString) return 'N/A';
      
      try {
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      } catch (error) {
        return dateString;
      }
    },
    
    formatTime(dateString) {
      if (!dateString) return 'N/A';
      
      try {
        const date = new Date(dateString);
        return date.toLocaleTimeString('id-ID', {
          hour: '2-digit',
          minute: '2-digit'
        });
      } catch (error) {
        return '';
      }
    },
    
    formatDescription(description) {
      if (!description) return '';
      
      // Convert line breaks to HTML paragraphs and preserve formatting
      let formatted = description
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');
      
      // Wrap in paragraph tags if not already wrapped
      if (!formatted.startsWith('<p>')) {
        formatted = '<p>' + formatted + '</p>';
      }
      
      return formatted;
    },
    
    handleImageError(event) {
      // Fallback image if the main image fails to load
      event.target.src = '/images/blog/blog-img1.jpg';
    },
    
    shareToSocial(platform) {
      const url = window.location.href;
      const title = this.item.title || 'Berita Terkini';
      const text = this.item.subtitle || this.item.description || '';
      
      let shareUrl = '';
      
      switch (platform) {
        case 'facebook':
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
          break;
        case 'twitter':
          shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
          break;
        case 'whatsapp':
          shareUrl = `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`;
          break;
        case 'telegram':
          shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
          break;
      }
      
      if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
      }
    }
  },
};
</script>

<style scoped>
.news-description {
  line-height: 1.8;
  font-size: 16px;
}

.news-description p {
  margin-bottom: 1rem;
}

.news-description p:last-child {
  margin-bottom: 0;
}

/* Ensure modal images are displayed properly */
.blog-modal-img {
  margin-bottom: 30px;
  text-align: center;
  max-height: 70vh; /* Limit height to 70% of viewport height */
  overflow: hidden;
}

.blog-modal-img img {
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Modal thumbnail specific styling */
.modal-thumbnail {
  max-height: 70vh; /* Use viewport height instead of fixed height */
  width: auto;
  max-width: 100%;
  display: block;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  object-fit: contain; /* Ensure no cropping */
  object-position: center;
}

/* Ensure no cropping for any image orientation */
.blog-modal-img img,
.modal-thumbnail {
  object-fit: contain !important;
  object-position: center !important;
  max-height: 70vh !important;
  width: auto !important;
  max-width: 100% !important;
}

/* Responsive modal styling */
@media (max-width: 768px) {
  .modal-dialog {
    max-width: 95vw;
    margin: 10px auto;
  }
  
  .modal-thumbnail,
  .blog-modal-img img {
    max-height: 60vh !important;
  }
  
  .modal-body {
    padding: 15px !important;
  }
}

@media (max-width: 480px) {
  .modal-thumbnail,
  .blog-modal-img img {
    max-height: 50vh !important;
  }
  
  .modal-dialog {
    max-width: 98vw;
    margin: 5px auto;
  }
}

/* Fallback for missing images */
.blog-modal-img img {
  display: block;
  margin: 0 auto;
}

/* modal */
.modal-dialog {
  max-width: 90vw;
  margin: 20px auto;
  width: 95%;
  max-height: 90vh;
}

.modal-content {
  max-height: 90vh;
  overflow-y: auto;
}

.modal-content h2 {
  font-size: 36px;
  padding: 50px 0px 20px 0px;
  line-height: 1.32;
}
</style>
