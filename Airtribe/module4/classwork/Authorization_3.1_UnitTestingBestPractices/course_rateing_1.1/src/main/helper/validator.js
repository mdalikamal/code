class validator {
  static validator_course_Info(courseInfo) {
    if (
      courseInfo.hasOwnProperty(`course`) &&
      courseInfo.hasOwnProperty("courseId") &&
      courseInfo.hasOwnProperty(`cohort`) &&
      courseInfo.hasOwnProperty("college") &&
      courseInfo.hasOwnProperty("semester") &&
      courseInfo.hasOwnProperty("instructor") &&
      courseInfo.hasOwnProperty("averageRating") &&
      courseInfo.hasOwnProperty("studentsVoted")
    )
      return {
        status: true,
        message: `course has been validated`,
      };
    else {
      return {
        status: false,
        message: `please insert properly`,
      };
    }
  }
}
module.exports = validator;
