// 镜像数据库
import avatar1 from '@images/avatars/avatar-1.png'
import avatar14 from '@images/avatars/avatar-14.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar8 from '@images/avatars/avatar-8.png'
import tutorImg1 from '@images/pages/app-academy-tutor-1.png'
import tutorImg2 from '@images/pages/app-academy-tutor-2.png'
import tutorImg3 from '@images/pages/app-academy-tutor-3.png'
import tutorImg4 from '@images/pages/app-academy-tutor-4.png'
import tutorImg5 from '@images/pages/app-academy-tutor-5.png'
import tutorImg6 from '@images/pages/app-academy-tutor-6.png'
import tutorImg7 from '@images/pages/chatgpt-next.png'

export const db = {
  courses: [
    {
      id: 1, // 唯一标识符，通常用于数据库中区分不同的记录
      user: 'Lauretta Coie', // 用户的名字
      image: avatar1, // 用户的头像图片的链接或者引用
      tutorImg: tutorImg7, // 导师的头像图片的链接或者引用
      completedTasks: 19, // 用户已经完成的任务数量
      totalTasks: 25, // 总任务的数量
      userCount: 18, // 某种用户的数量，具体含义取决于上下文
      note: 20, // 笔记的数量
      view: 83, // 查看的次数
      time: '17h 34m', // 用户花费的时间或者课程的持续时间
      logo: 'tabler-brand-angular', // 课程或者平台的logo
      color: 'error', // 用于前端显示的颜色代码
      courseTitle: 'ChatGPT-Next-Web', // 课程的标题
      desc: '一键免费部署你的私人 ChatGPT 网页应用，支持 GPT3, GPT4 & Gemini Pro 模型。', // 课程的描述
      tags: 'Web', // 课程的标签，例如"Web"
      rating: 4.6, // 课程的评分
      ratingCount: 8, // 评分的数量
    },
    {
      id: 2,
      user: 'Maybelle Zmitrovich',
      tutorImg: tutorImg2,
      image: avatar2,
      completedTasks: 50,
      totalTasks: 52,
      userCount: 14,
      note: 48,
      view: 43,
      time: '19h 17m',
      logo: 'tabler-color-swatch',
      color: 'warning',
      desc: 'Learn how to design a beautiful & engaging mobile app with Figma',
      courseTitle: 'UI/UX Design',
      tags: 'Design',
      rating: 4.9,
      ratingCount: 10,
    },
    {
      id: 3,
      user: 'Gertie Langwade',
      image: avatar2,
      tutorImg: tutorImg3,
      completedTasks: 87,
      totalTasks: 100,
      userCount: 19,
      note: 81,
      view: 88,
      time: '16h 16m',
      logo: 'tabler-brand-react',
      color: 'info',
      desc: 'Master React.js: Build dynamic web apps with front-end technology',
      courseTitle: 'React Native',
      tags: 'Web',
      rating: 4.8,
      ratingCount: 9,
    },
    {
      id: 4,
      user: 'Estella Chace',
      image: avatar3,
      completedTasks: 33,
      tutorImg: tutorImg4,
      totalTasks: 50,
      userCount: 28,
      note: 21,
      view: 87,
      time: '15h 49m',
      logo: 'tabler-edit',
      color: 'success',
      courseTitle: 'Art & Drawing',
      desc: 'Easy-to-follow video & guides show you how to draw animals & people.',
      tags: 'Design',
      rating: 4.7,
      ratingCount: 18,
    },
    {
      id: 5,
      user: 'Euell Bownass',
      tutorImg: tutorImg5,
      image: avatar14,
      completedTasks: 100,
      totalTasks: 100,
      userCount: 13,
      note: 19,
      view: 13,
      time: '12h 42m',
      logo: 'tabler-star',
      color: 'primary',
      courseTitle: 'Basic Fundamentals',
      desc: 'Learn the basics of the most popular programming language.',
      tags: 'Web',
      rating: 4.6,
      ratingCount: 11,
    },
    {
      id: 6,
      user: 'Terrye Etches',
      tutorImg: tutorImg6,
      image: avatar3,
      completedTasks: 23,
      totalTasks: 25,
      userCount: 78,
      note: 36,
      view: 36,
      time: '1h 42m',
      logo: 'tabler-brand-react',
      color: 'info',
      courseTitle: 'React for Beginners',
      desc: 'Learn React in just a couple of afternoons with this immersive course',
      tags: 'Web',
      rating: 4.5,
      ratingCount: 68,
    },
    {
      id: 7,
      user: 'Papageno Sloy',
      tutorImg: tutorImg1,
      image: avatar14,
      completedTasks: 11,
      totalTasks: 20,
      userCount: 74,
      note: 21,
      view: 60,
      time: '4h 59m',
      logo: 'tabler-star',
      color: 'primary',
      courseTitle: 'The Science of Critical Thinking',
      desc: 'Learn how to improve your arguments & make better decisions',
      tags: 'Psychology',
      rating: 4.4,
      ratingCount: 64,
    },
    {
      id: 8,
      user: 'Aviva Penvarden',
      tutorImg: tutorImg2,
      image: avatar1,
      completedTasks: 6,
      totalTasks: 25,
      userCount: 44,
      note: 28,
      view: 13,
      time: '2h 09m',
      logo: 'tabler-color-swatch',
      color: 'warning',
      courseTitle: 'The Complete Figma UI/UX Course',
      desc: 'Learn how to design a beautiful & engaging mobile app with Figma',
      tags: 'UI/UX',
      rating: 4.3,
      ratingCount: 34,
    },
    {
      id: 9,
      user: 'Reggi Tuddenham',
      tutorImg: tutorImg3,
      image: avatar8,
      completedTasks: 67,
      totalTasks: 100,
      userCount: 95,
      note: 34,
      view: 26,
      time: '22h 21m',
      logo: 'tabler-star',
      color: 'primary',
      courseTitle: 'Advanced Problem Solving Techniques',
      desc: 'Learn how to solve problems like a professional.Solve your problems easily.',
      tags: 'Psychology',
      rating: 4.2,
      ratingCount: 85,
    },
    {
      id: 25,
      user: 'Nevsa Lawey',
      image: avatar6,
      completedTasks: 13,
      totalTasks: 100,
      tutorImg: tutorImg1,
      userCount: 93,
      note: 73,
      view: 67,
      time: '19h 21m',
      logo: 'tabler-color-swatch',
      color: 'warning',
      courseTitle: 'The Complete Figma Course',
      desc: 'Learn how to design a beautiful & engaging mobile app with Figma',
      tags: 'UI/UX',
      rating: 3.6,
      ratingCount: 83,
    },
  ],
  courseDetails: {
    title: 'UI/UX Basic Fundamentals',
    about: 'Learn web design in 1 hour with 25+ simple-to-use rules and guidelines — tons of amazing web design resources included!',
    instructor: 'Devonne Wallbridge',
    instructorAvatar: avatar3,
    instructorPosition: 'Web Developer, Designer, and Teacher',
    skillLevel: 'All Level',
    totalStudents: 38815,
    language: 'English',
    isCaptions: true,
    length: '1.5 total hours',
    totalLectures: 19,
    description: `
        <p class="text-body-1">
          The material of this course is also covered in my other course about web design and development with HTML5 & CSS3. Scroll to the bottom of this page to check out that course, too! If you're already taking my other course, you already have all it takes to start designing beautiful websites today!
        </p>
      
        <p class="text-body-1">
          "Best web design course: If you're interested in web design, but want more than just a "how to use WordPress" course, I highly recommend this one." — Florian Giusti
        </p>
      
        <p class="text-body-1">
          "Very helpful to us left-brained people: I am familiar with HTML, CSS, jQuery, and Twitter Bootstrap, but I needed instruction in web design. This course gave me practical, impactful techniques for making websites more beautiful and engaging." — Susan Darlene Cain
        </p>`,
    content: [
      {
        title: 'Course Content',
        status: '2/5',
        time: '4.4 min',
        id: 'section1',
        topics: [
          { title: 'Welcome to this course', time: '2.4 min', isCompleted: true },
          { title: 'Watch before you start', time: '4.8 min', isCompleted: true },
          { title: 'Basic Design theory', time: '5.9 min', isCompleted: false },
          { title: 'Basic Fundamentals', time: '3.6 min', isCompleted: false },
          { title: 'What is ui/ux', time: '10.6 min', isCompleted: false },
        ],
      },
      {
        title: 'Web design for Developers',
        status: '0/4',
        time: '4.8 min',
        id: 'section2',
        topics: [
          { title: 'How to use Pages in Figma', time: '8:31 min', isCompleted: false },
          { title: 'What is Lo Fi Wireframe', time: '2 min', isCompleted: false },
          { title: 'How to use color in Figma', time: '5.9 min', isCompleted: false },
          { title: 'Frames vs Groups in Figma', time: '3.6 min', isCompleted: false },
        ],
      },
      {
        title: 'Build Beautiful Websites!',
        status: '0/4',
        time: '4.4 min',
        id: 'section3',
        topics: [
          { title: 'Section & Div Block', time: '3:53 min', isCompleted: false },
          { title: 'Read-Only Version of Chat App', time: '2:03 min', isCompleted: false },
          { title: 'Webflow Autosave', time: '8 min', isCompleted: false },
          { title: 'Canvas Settings', time: '3 min', isCompleted: false },
          { title: 'HTML Tags', time: '10 min', isCompleted: false },
          { title: 'Footer (Chat App)', time: '9:10 min', isCompleted: false },
        ],
      },
      {
        title: 'Final Project',
        status: '0/3',
        time: '4.4 min',
        id: 'section4',
        topics: [
          { title: 'Responsive Blog Site', time: '10:00 min', isCompleted: false },
          { title: 'Responsive Portfolio', time: '13:00 min', isCompleted: false },
          { title: 'Basic Design theory', time: '15 min', isCompleted: false },
        ],
      },
    ],
  },
}
