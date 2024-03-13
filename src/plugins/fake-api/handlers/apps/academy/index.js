import { paginateArray } from '@api-utils/paginateArray'
import { db } from '@db/apps/academy/db'
import is from '@sindresorhus/is'
import destr from 'destr'
import { rest } from 'msw'

// 导入所需的模块和数据库

// 获取查询参数的函数
const getQueryParam = (req, param, type, defaultValue) => {
  const value = req.url.searchParams.get(param) // 获取参数值
  const parsedValue = destr(value) // 解析参数值
  
  // 如果参数值的类型正确，则返回参数值，否则返回默认值
  return is[type](parsedValue) ? parsedValue : defaultValue
}

// 过滤课程的函数
const filterCourses = (courses, query, label, hideCompleted) => {
  const queryLowered = query.toLowerCase() // 将查询转换为小写
  
  // 返回过滤后的课程
  return courses.filter(course => {
    return ((course.courseTitle.toLowerCase().includes(queryLowered)
              || course.user.toLowerCase().includes(queryLowered))
              && !((course.completedTasks === course.totalTasks) && hideCompleted)
              && (label !== 'All Courses' ? course.tags.toLocaleLowerCase() === label?.toLowerCase() : true))
  })
}

// 对课程进行排序的函数
const sortCourses = (courses, sortBy, orderBy) => {
  if (sortBy) {
    courses.sort((a, b) => {
      if (sortBy === 'courseName') {
        return orderBy === 'asc' ? a.courseTitle.localeCompare(b.courseTitle) : b.courseTitle.localeCompare(a.courseTitle)
      }
      if (sortBy === 'progress') {
        return orderBy === 'asc' ? (a.completedTasks / a.totalTasks) - (b.completedTasks / b.totalTasks) : (b.completedTasks / b.totalTasks) - (a.completedTasks / a.totalTasks)
      }
    })
  }
  
  return courses
}

// 导出处理程序
export const handlerAppsAcademy = [
  // 处理获取课程的请求
  rest.get(('/api/apps/academy/courses'), (req, res, ctx) => {
    // 获取查询参数
    const q = getQueryParam(req, 'q', 'string', '')
    const label = getQueryParam(req, 'label', 'string', 'All Courses')
    const hideCompleted = getQueryParam(req, 'hideCompleted', 'boolean', false)
    const page = getQueryParam(req, 'page', 'number', 1)
    const itemsPerPage = getQueryParam(req, 'itemsPerPage', 'number', 10)
    const sortBy = getQueryParam(req, 'sortBy', 'string', '')
    const orderBy = getQueryParam(req, 'orderBy', 'string', '')

    // 过滤和排序课程
    let filteredCourses = filterCourses(db.courses, q, label, hideCompleted)
    filteredCourses = sortCourses(filteredCourses, sortBy, orderBy)

    // 返回响应
    return res(ctx.status(200), ctx.json({
      courses: paginateArray(filteredCourses, itemsPerPage, page),
      total: filteredCourses.length,
    }))
  }),

  // 处理获取课程详情的请求
  rest.get(('/api/apps/academy/course-details'), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(db.courseDetails))
  }),
]
