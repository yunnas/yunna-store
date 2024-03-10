import { canNavigate } from '@layouts/plugins/casl'

export const setupGuards = router => {
  // 👉 router.beforeEach
  // 文档: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
  router.beforeEach(to => {
    /*
         * 如果这是一个公共路由，继续导航。这种页面允许登录和非登录用户访问。基本上，没有任何限制。
         * 公共路由的例子有，404，维护中等。
         */
    if (to.meta.public)
      return

    /**
         * 通过检查本地存储中是否存在令牌和用户数据来检查用户是否已登录
         * 随意更新此逻辑以适应您的需求
         */
    const isLoggedIn = !!(useCookie('userData').value && useCookie('accessToken').value)

    /*
          如果用户已登录并试图访问登录页面，重定向到主页
          否则允许访问页面
          (警告: 不要通过return语句允许执行下一段代码，因为下一段代码将检查权限)
         */
    if (to.meta.unauthenticatedOnly) {
      if (isLoggedIn)
        return '/'
      else
        return undefined
    }
    if (!canNavigate(to)) {
      /* eslint-disable indent */
            return isLoggedIn
                ? { name: 'not-authorized' } // 不允许
                : {
                    name: 'login', // 登录
                    query: {
                        ...to.query,
                        to: to.fullPath !== '/' ? to.path : undefined, // 路径
                    },
                }
            /* eslint-enable indent */
    }
  })
}
