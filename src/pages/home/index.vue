<script setup>
import AcademyMyCourses from '@/views/home/MirrorList.vue'
import academyCourseIllustration1 from '@images/pages/academy-course-illustration1.png'
import academyCourseIllustration2 from '@images/pages/academy-course-illustration2.png'
import { VideoPlayer } from '@videojs-player/vue'

const searchQuery = ref('')
</script>

<template>
  <div>
    <VCard class="mb-6">
      <VCardText class="py-12 position-relative">
        <div
          class="d-flex flex-column gap-y-4 mx-auto"
          :class="$vuetify.display.mdAndUp ? 'w-50' : $vuetify.display.xs ? 'w-100' : 'w-75'"
        >
          <h3
            class="text-h3 text-center text-wrap mx-auto"
            :class="$vuetify.display.mdAndUp ? 'w-75' : 'w-100'"
          >
            <span class="text-primary font-weight-bold">应用镜像商店</span>
          </h3>
          <p class="text-center text-wrap text-body-1 mx-auto mb-0">
            云纳应用镜像市场，热门项目快速部署。
          </p>
          <div class="d-flex justify-center align-center gap-4 flex-wrap">
            <AppTextField
              v-model="searchQuery"
              placeholder="搜索应用镜像"
              density="compact"
              style="min-inline-size: 200px;"
            />
            <VBtn
              color="primary"
              density="comfortable"
              icon="tabler-search"
              class="rounded"
            />
          </div>
        </div>
        <img
          :src="academyCourseIllustration1"
          class="illustration1 d-none d-md-block"
          height="180"
        >
        <img
          :src="academyCourseIllustration2"
          class="illustration2 d-none d-md-block"
          height="100"
        >
      </VCardText>
    </VCard>

    <AcademyMyCourses :search-query="searchQuery" />

    <VCard>
      <VCardText>
        <VRow>
          <VCol
            cols="12"
            md="4"
          >
            <div class="d-flex flex-column align-center gap-y-4 h-100 justify-center">
              <VAvatar
                variant="tonal"
                size="48"
                rounded
                color="primary"
              >
                <VIcon
                  icon="tabler-gift"
                  size="36"
                />
              </VAvatar>
              <h3 class="text-h3 font-weight-medium">
                Today's Free Courses
              </h3>
              <p class="text-body-1 text-center mb-2">
                We offers 284 Free Online courses from top tutors and companies to help you start or advance your career skills. Learn online for free and fast today!
              </p>
              <VBtn>Get Premium Courses</VBtn>
            </div>
          </VCol>
          <VCol
            cols="12"
            md="4"
            sm="6"
          >
            <VCard
              flat
              border
            >
              <div class="pa-2">
                <VideoPlayer
                  src="https://www.runoob.com/try/demo_source/movie.mp4"
                  poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
                  controls
                  plays-inline
                  :height="$vuetify.display.mdAndUp ? 200 : 150"
                  class="w-100 rounded"
                />
              </div>
              <VCardText>
                <h5 class="text-h5 mb-1">
                  Your First Singing Lesson
                </h5>
                <p class="text-body-1 mb-0">
                  In the same way as any other artistic domain, singing lends itself perfectly to self-teaching.
                </p>
              </VCardText>
            </VCard>
          </VCol>
          <VCol
            cols="12"
            md="4"
            sm="6"
          >
            <VCard
              flat
              border
            >
              <div class="pa-2">
                <VideoPlayer
                  src="https://www.runoob.com/try/demo_source/movie.mp4"
                  poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
                  controls
                  plays-inline
                  :height="$vuetify.display.mdAndUp ? 200 : 150"
                  class="w-100 rounded"
                />
              </div>
              <VCardText>
                <h5 class="text-h5 mb-1">
                  Guitar for Beginners
                </h5>
                <p class="text-body-1 mb-0">
                  The Fender Acoustic Guitar is best choice for beginners and professionals.
                </p>
              </VCardText>
            </VCard>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </div>
</template>

<style lang="scss">
@import 'video.js/dist/video-js.css';

.illustration1 {
  position: absolute;
  inset-block-end: 0;
  inset-inline-end: 0;
}

.illustration2 {
  position: absolute;
  inset-block-start: 2rem;
  inset-inline-start: 2.5rem;
}
</style>
