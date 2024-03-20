<script setup>
const props = defineProps({
  searchQuery: {
    type: String,
    required: true,
  },
})

const itemsPerPage = ref(6)
const page = ref(1)
const sortBy = ref('date')
const orderBy = ref('desc')
const hideCompleted = ref(false)
const label = ref("All Courses")

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

const courses = computed(() => coursesData.value.courses) // 计算属性，用于获取课程数据
const totalCourse = computed(() => coursesData.value.total) // 计算属性，用于获取课程总数

watch([hideCompleted, label], () => {
  page.value = 1 // Reset page number when hideCompleted or label changes
})

const resolveChipColor = tags => {
  // 根据标签解析芯片颜色的函数
  if (tags === "Web") {
    return "primary"
  }
  if (tags === "Art") {
    return "success"
  }
  if (tags === "UI/UX") {
    return "error"
  }
  if (tags === "Psychology") {
    return "warning"
  }
  if (tags === "Design") {
    return "info"
  }
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
            Total 6 course you have purchased
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
            <!-- 使用 VRadioGroup 和 VRadio 替代 VSelect -->
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
                      @click="
                        () => $router.push({ name: 'apps-mirror-mirror-details' })
                      "
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
                          <!-- 课程评分 -->
                          <VIcon
                            icon="tabler-cloud-download"
                            color="warning"
                            class="me-2"
                            size="20"
                          />
                          <span class="text-body-1 font-weight-medium align-center">
                            {{ course.rating }}
                          </span>
                          <!--
                            <span class="text-body-1 text-disabled font-weight-medium">
                            ({{ course.ratingCount }})
                            </span> 
                          -->
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
                      <p
                        class="mirror-decs"
                        @click="
                          () => $router.push({ name: 'apps-mirror-mirror-details' })
                        "
                      >
                        {{ course.desc }}
                      </p>
                      <div
                        v-if="course.completedTasks !== course.totalTasks"
                        class="d-flex align-center mb-4"
                      >
                        <!--
                          <VIcon
                          icon="tabler-clock"
                          size="20"
                          class="me-1"
                          />
                          <span class="text-body-1 my-auto">{{ course.time }}</span> 
                        -->
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
            上一页
          </VBtn>
        </template>
        <template #next="slotProps">
          <VBtn
            variant="tonal"
            color="default"
            v-bind="slotProps"
            :icon="false"
          >
            下一页
          </VBtn>
        </template>
      </VPagination>
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
<style lang="scss" scoped>
.course-title {
  &:not(:hover) {
    color: rgba(var(--v-theme-on-surface), var(--v-text-high-emphasis));
  }
}

.mirror-card {
  transition: border-color 0.3s ease, box-shadow 0.5s ease; // 过渡效果

  &:hover {
    box-shadow: 0 2px 5px 0 rgba(34, 41, 47, 16%),
      0 2px 10px 0 rgba(34, 41, 47, 12%); // 悬停时的阴影效果
  }
}

.mirror-thumbnail {
  border-radius: 6px 0 0;
  background-position: center;
  background-repeat: no-repeat; // 防止背景图片重复
  background-size: cover;
  block-size: 10rem;
  cursor: pointer;
}

.mirror-decs {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  cursor: pointer;
  inline-size: 100%; /* 限制宽度 */
  -webkit-line-clamp: 2; /* 限制在3行内 */
}

.mirror-filtering{
  position: sticky;
  inset-block-start: 8.25rem;
}

.mirror-content{
  padding: .875rem;
}
</style>
