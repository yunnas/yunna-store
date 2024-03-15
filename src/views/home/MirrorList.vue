<script setup>
const props = defineProps({
  searchQuery: {
    type: String,
    required: true,
  },
})

const itemsPerPage = ref(6)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const hideCompleted = ref(false)
const label = ref('All Courses')

const { data: coursesData } = await useApi(createUrl('/apps/academy/courses', {
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

const courses = computed(() => coursesData.value.courses) // 计算属性，用于获取课程数据
const totalCourse = computed(() => coursesData.value.total) // 计算属性，用于获取课程总数

watch([
  hideCompleted,
  label,
], () => {
  page.value = 1 // Reset page number when hideCompleted or label changes
})

const resolveChipColor = tags => {
  // 根据标签解析芯片颜色的函数
  if (tags === 'Web')
    return 'primary'
  if (tags === 'Art')
    return 'success'
  if (tags === 'UI/UX')
    return 'error'
  if (tags === 'Psychology')
    return 'warning'
  if (tags === 'Design')
    return 'info'
}
</script>

<template>
  <VCard class="mb-6">
    <VCardText>
      <!-- 👉 Header -->
      <div class="d-flex justify-space-between align-center flex-wrap gap-4 mb-6">
        <div>
          <h5 class="text-h5">
            公共镜像
          </h5>
          <div class="text-body-1">
            Total 6 course you have purchased
          </div>
        </div>

        <div class="d-flex flex-wrap align-center gap-4">
          <VSelect
            v-model="label"
            :items="[
              { title: 'Web', value: 'web' },
              { title: 'Art', value: 'art' },
              { title: 'UI/UX', value: 'ui/ux' },
              { title: 'Psychology', value: 'psychology' },
              { title: 'Design', value: 'design' },
              { title: 'All Courses', value: 'All Courses' },
            ]"
            density="compact"
            style="min-inline-size: 250px;"
          />
          <VSwitch
            v-model="hideCompleted"
            label="Hide Completed"
          />
        </div>
      </div>

      <!-- 👉 Course List -->
      <div class="mb-6">
        <VRow>
          <template
            v-for="course in courses"
            :key="course.id"
          >
            <VCol
              cols="12"
              md="4"
              sm="6"
            >
              <VCard
                flat
                border
              >
                <div
                  class="course-thumbnail"
                  :style="{ backgroundImage: `url(${course.tutorImg})` }"
                  @click="() => $router.push({ name: 'apps-mirror-mirror-details' })"
                />
                <!-- TODO: This fix Style Padding -->
                <VCardText>
                  <div class="d-flex justify-space-between align-center mb-4">
                    <VChip
                      variant="tonal"
                      :color="resolveChipColor(course.tags)"
                      label
                    >
                      {{ course.tags }}
                    </VChip>
                    <div class="d-flex">
                      <!-- 课程评分 -->
                      <span class="text-body-1 font-weight-medium align-center">
                        {{ course.rating }}
                      </span>
                      <VIcon
                        icon="tabler-star-filled"
                        color="warning"
                        class="me-2"
                        size="20"
                      />
                      <span class="text-body-1 text-disabled font-weight-medium">({{ course.ratingCount }})</span>
                    </div>
                  </div>
                  <!-- 课程标题 -->
                  <h5 class="text-h5 mb-1">
                    <RouterLink
                      :to="{ name: 'apps-mirror-mirror-details' }"
                      class="course-title"
                    >
                      {{ course.courseTitle }}
                    </RouterLink>
                  </h5>
                  <!-- 课程描述 -->
                  <p>
                    {{ course.desc }}
                  </p>
                  <div
                    v-if="course.completedTasks !== course.totalTasks"
                    class="d-flex align-center mb-4"
                  >
                    <VIcon
                      icon="tabler-clock"
                      size="20"
                      class="me-1"
                    />
                    <span class="text-body-1 my-auto"> {{ course.time }}</span>
                  </div>
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
                  <!-- 课程进度条 -->
                  <!--
                    <VProgressLinear
                    :model-value="(course.completedTasks / course.totalTasks) * 100"
                    rounded
                    color="primary"
                    height="8"
                    class="mb-6"
                    /> 
                  -->
                  <div class="d-flex flex-wrap gap-4">
                    <!-- 重新开始按钮 -->
                    <!--
                      <VBtn
                      variant="tonal"
                      color="secondary"
                      class="flex-grow-1"
                      :to="{ name: 'apps-mirror-mirror-details' }"
                      >
                      <template #prepend>
                      <VIcon
                      icon="tabler-rotate-clockwise-2"
                      class="flip-in-rtl"
                      />
                      </template>
                      Start Over
                      </VBtn> 
                    -->
                    <!-- 继续按钮 -->
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
                      Continue
                    </VBtn>
                  </div>
                </VCardText>
              </VCard>
            </VCol>
          </template>
        </VRow>
      </div>
      <!-- 分页组件 -->
      <VPagination
        v-model="page"
        :length="Math.ceil(totalCourse / itemsPerPage)"
      >
        <template #prev="slotProps">
          <VBtn
            variant="tonal"
            color="default"
            v-bind="slotProps"
            :icon="false"
          >
            Previous
          </VBtn>
        </template>
        <template #next="slotProps">
          <VBtn
            variant="tonal"
            color="default"
            v-bind="slotProps"
            :icon="false"
          >
            Next
          </VBtn>
        </template>
      </VPagination>
    </VCardText>
  </VCard>
</template>

                      <!-- 样式部分 -->
                      <style lang="scss" scoped>
                      .course-title{
                        &:not(:hover){
                          color: rgba(var(--v-theme-on-surface), var(--v-text-high-emphasis))
                        }
                      }

                      .course-thumbnail{
                        border-radius: 6px;
                        margin: 8px !important;
                        background-position: center;
                        background-size: cover;
                        block-size: 160px;
                        cursor: pointer;
                      }
                      </style>
