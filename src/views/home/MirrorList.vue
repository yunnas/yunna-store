<script setup>
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router' // 引入 useRouter

// 定义组件的 props
const props = defineProps({
  searchQuery: {
    type: String,
    required: true,
  },
})

// 定义响应式数据
const itemsPerPage = ref(6)
const page = ref(1)
const sortBy = ref('date')
const orderBy = ref('desc')
const hideCompleted = ref(false)
const label = ref("All Courses")

// 使用 useRouter 获取 router 实例
const router = useRouter()

const { data: coursesData } = await useApi(createUrl("/apps/academy/courses", {
  query: {
    q: () => props.searchQuery,
    hideCompleted,
    label,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

// 计算属性，用于从 API 数据中获取课程列表和总课程数
const courses = computed(() => coursesData.value.courses)
const totalCourse = computed(() => coursesData.value.total)

// 监听 hideCompleted 和 label 的变化，重置页码
watch([hideCompleted, label], () => {
  page.value = 1
})

// 定义路由跳转函数，接受课程 ID 作为参数
const navigateToCourseDetails = courseId => {
  router.push({ name: 'MirrorDetails', params: { id: courseId } })
}

// 定义一个函数，根据课程标签解析对应的颜色
const resolveChipColor = tags => {
  if (tags === "Web") return "primary"
  if (tags === "Art") return "success"
  if (tags === "UI/UX") return "error"
  if (tags === "Psychology") return "warning"
  if (tags === "Design") return "info"
}
</script>


<template>
  <VCard class="overflow-visible mb-6">
    <VCardText>
      <div class="d-flex justify-space-between align-center flex-wrap gap-4 mb-6">
        <div>
          <h5 class="text-h5">
            公共镜像
          </h5>
          <div class="text-body-1">
            Total 6 courses you have purchased
          </div>
        </div>
        <div class="d-flex flex-wrap align-center gap-4">
          <VSwitch
            v-model="hideCompleted"
            label="Hide Completed"
          />
        </div>
      </div>
      <VRow class="mb-6">
        <VCol
          cols="12"
          md="3"
        >
          <div class="mirror-filtering">
            <VRadioGroup v-model="label">
              <VRadio
                label="Web"
                value="Web"
              />
              <VRadio
                label="Art"
                value="Art"
              />
              <VRadio
                label="UI/UX"
                value="UI/UX"
              />
              <VRadio
                label="Psychology"
                value="Psychology"
              />
              <VRadio
                label="Design"
                value="Design"
              />
              <VRadio
                label="All Courses"
                value="All Courses"
              />
            </VRadioGroup>
          </div>
        </VCol>
        <VCol
          cols="12"
          md="9"
        >
          <div>
            <VRow>
              <template
                v-for="course in courses"
                :key="course.id"
              >
                <VCol
                  cols="12"
                  sm="6"
                  md="6"
                  lg="4"
                >
                  <VCard
                    class="mirror-card"
                    flat
                    border
                  >
                    <div
                      class="mirror-thumbnail"
                      :style="{ backgroundImage: `url(${course.tutorImg})` }"
                      @click="navigateToCourseDetails(course.id)"
                    />
                    <VCardText class="mirror-content">
                      <div class="d-flex justify-space-between align-center mb-4">
                        <VChip
                          variant="tonal"
                          :color="resolveChipColor(course.tags)"
                          label
                        >
                          {{ course.tags }}
                        </VChip>
                        <div class="d-flex">
                          <VIcon
                            icon="tabler-cloud-download"
                            color="warning"
                            class="me-2"
                            size="20"
                          />
                          <span class="text-body-1 font-weight-medium align-center">{{ course.rating }}</span>
                        </div>
                      </div>
                      <h5 class="text-h5 mb-1">
                        <RouterLink
                          :to="{ name: 'MirrorDetails', params: { id: course.id } }"
                          class="course-title"
                        >
                          {{ course.courseTitle }}
                        </RouterLink>
                      </h5>
                      <p
                        class="mirror-decs"
                        @click="navigateToCourseDetails(course.id)"
                      >
                        {{ course.desc }}
                      </p>
                      <div
                        v-if="course.completedTasks !== course.totalTasks"
                        class="d-flex align-center mb-4"
                      />
                      <div
                        v-else
                        class="mb-2"
                      >
                        <VIcon
                          icon="tabler-checks"
                          color="success"
                          class="me-1"
                        />
                        <span class="text-success text-body-1">Completed</span>
                      </div>
                      <div class="d-flex flex-wrap gap-4">
                        <!-- 重新开始按钮 -->
                        <VBtn
                          v-if="course.completedTasks !== course.totalTasks"
                          variant="tonal"
                          class="flex-grow-1"
                          :to="{ name: 'apps-mirror-mirror-details' }"
                        >
                          <template #append>
                            <VIcon
                              icon="tabler-arrow-right"
                              class="flip-in-rtl"
                            />
                          </template>
                          部署
                        </VBtn>
                      </div>
                    </VCardText>
                  </VCard>
                </VCol>
              </template>
            </VRow>
          </div>
        </VCol>
      </VRow>
      <VPagination
        v-model="page"
        :length="Math.ceil(totalCourse / itemsPerPage)"
      />
    </VCardText>
  </VCard>
</template>


<style scoped>
/* Style adjustments specific to your project */
.mirror-radio-group {
  /* Styles for radio group, if needed */
}
</style>

<!-- 样式部分 -->
<style scoped>
.mirror-radio-group {
  /* Styles for radio group, if needed */
}

.course-title {
  &:not(:hover) {
    color: rgba(var(--v-theme-on-surface), var(--v-text-high-emphasis));
  }
}

.mirror-card {
  transition: border-color 0.3s ease, box-shadow 0.5s ease;

  &:hover {
    box-shadow: 0 2px 5px 0 rgba(34, 41, 47, 16%), 0 2px 10px 0 rgba(34, 41, 47, 12%);
  }
}

.mirror-thumbnail {
  border-radius: 6px 0 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  block-size: 10rem;
  cursor: pointer;
}

.mirror-decs {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  cursor: pointer;
  inline-size: 100%;
  -webkit-line-clamp: 2;
}

.mirror-filtering {
  position: sticky;
  inset-block-start: 8.25rem;
}

.mirror-content {
  padding: .875rem;
}
</style>
