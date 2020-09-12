const {
    student,
    assignment_student,
    course_plan,
    branch_level_plan,
    branch_level,
    classe,
    course,
    period
  } = require("../models");
module.exports = async(req, res, next) => {
  try {
    var id = req.user.id;
    var s = await student.findOne({
        attributes: ["id"],
        where: { user_id: id },
    });
    var courses = new Map();
    var assignment = await assignment_student.findOne({
        where : {student_id : s.id}
    })
    
    const classid = assignment.class_id

    var course_plans = await course_plan.findAll({
        include: 
          {
            model: branch_level_plan,
            nested: true,
            as: "branch_level_plan",
            include : {
              model : period,
              nested : true,
              as : 'period'
            }
          },
      });
     
     
     const classs = await classe.findOne({
         where :  {id:classid}
     })

     const branch_level_id_of_student_class = classs.branch_level_id;
     course_plans.map(async (course_plann, i) => {
        if(course_plann.branch_level_plan.branchLevelId === branch_level_id_of_student_class && course_plann.branch_level_plan.period.name==='Semestre 2'){
            course_plan_course_id = course_plann.courseId;
            coursee = await course.findOne({
                where : {id : course_plan_course_id}
            })
            courses.set(coursee.name,{DS: "",
                                Tp: "",
                                CC: "",
                                Examen: "",
                                Projet:"",
                              absence:0});
        }

        // kill me :)

     })

    req.courses = courses;
    next();
  } catch (err) {
      console.log(err);
    return res.render('landing_section/index.ejs');
  }
};