const {
    student,
    course_plan,
    course,
    attendance_record,
    course_session
  } = require("../models");
  
  module.exports = async (req, res, next) => {
    try {
      var id = req.user.id;
      var s = await student.findOne({
        attributes: ["id"],
        where: { user_id: id },
      });
  
      var att_records = await attendance_record.findAll({
        where: { student_id: s.id },
        include: 
          {
            model: course_session,
            nested: true,
            as: "course_session",
            include: {
              model: course_plan,
              nested: true,
              as: "course_plan",
              include:{
                  model : course,
                  nested:true,
                  as : 'course'
              }
            },
          }  
      });
      
      var coursesAbsence = req.courses;
     att_records.map(async (_record, i) => {
        if (_record && _record.course_session && _record.course_session.course_plan && _record.course_session.course_plan.course ) {
          let _course = _record.course_session.course_plan.course;
          let abs = _record.absent * 1.5
          if (coursesAbsence.has(_course.name)) {
            
            let curr = coursesAbsence.get(_course.name);
            curr['absence'] += abs;
            coursesAbsence.set(_course.name, curr);
          }
  
          
        }
      });
      req.coursesAbsence = coursesAbsence;
      next();
    } catch (err) {
      console.log(err);
      return res.render("landing_section/index.ejs");
    }
  };
  