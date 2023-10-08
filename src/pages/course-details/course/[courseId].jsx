import React from "react";
import SEO from "@/src/common/seo";
import CourseDetails from "@/src/components/course-details";
import WrapperFour from "@/src/layout/wrapper-4";

export const getServerSideProps = async (context) => {
    const id = context.query.courseId
    const response = await fetch(`http://localhost:3000/api/course/${id}`)
    const data = await response.json()
    console.log(data)
    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {courseData: data}
    }
}
const index = ({courseData}) => {
    console.log(courseData)
    return (
        <WrapperFour>
            <SEO pageTitle={"Course Details"}/>
            <CourseDetails courseData={courseData}/>
        </WrapperFour>
    );
};

export default index;
