import course_data from "@/src/data/course-data";

export default function getCourseData(req, res) {
    const courseData = course_data.find(item => item.id === Number(req.query.id))
    if(courseData){
        res.status(200).json(courseData)
    }else {
        res.status(404).json({response: 'Нет данных'})
    }
}
