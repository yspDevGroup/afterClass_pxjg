import joinSchool from '@/assets/icons/join-school.png'
import openOrganization from '@/assets/icons/open-Organization.png'
import courseSum from '@/assets/icons/course-sum.png'
import joinStudent from '@/assets/icons/join-student.png'
import joinTeacher from '@/assets/icons/join-teacher.png'
import totalSum from '@/assets/icons/total-sum.png'
import refundSum from '@/assets/icons/refund-sum.png'
import organizationCourse from '@/assets/icons/organization-course.png'
import schoolCourse from '@/assets/icons/school-course.png'

export const topNum = [
  {
    title: '服务学校数',
    type: 'xx_count',
    bgImg: joinSchool,
  },
  {
    title: '开设课程数',
    type: 'kskc_count',
    bgImg: openOrganization,
  },
  {
    title: '准入课程书',
    type: 'zrkc_count',
    bgImg: courseSum,

  },
  {
    title: '合作课程数',
    type: 'hzkc_count',
    bgImg: schoolCourse,
  },
  {
    title: '服务班级数',
    type: 'bj_count',
    bgImg: organizationCourse,
  },
  {
    title: '参与教师数',
    type: 'js_count',
    bgImg: joinStudent,
  },
  {
    title: '参与学生数',
    type: 'xs_count',
    bgImg: joinTeacher,
  },
  {
    title: '收费总额(元)',
    type: 'bj_amount',
    bgImg: totalSum,
  },
  {
    title: '退费总额(元)',
    type: 'tk_amount',
    bgImg: refundSum,
  }
];
