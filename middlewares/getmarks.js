const {
  student,
  mark,
  course_plan,
  course,
  mark_coefficient,
} = require("../models");

module.exports = async (req, res, next) => {
  try {
    var id = req.user.id;
    var s = await student.findOne({
      attributes: ["id"],
      where: { user_id: id },
    });

    var marks = await mark.findAll({
      where: { student_id: s.id },
      include: [
        {
          model: course_plan,
          nested: true,
          as: "course_plan",
          include: {
            model: course,
            as: "course",
          },
        },
        {
          model: mark_coefficient,
          nested: true,
          as: "mark_coefficient",
        },
      ],
    });

    var coursesMarks = new Map();
    marks.map(async (_mark_e, i) => {
      if (_mark_e && _mark_e.course_plan && _mark_e.course_plan.course) {
        let _course = _mark_e.course_plan.course;

        if (!coursesMarks.has(_course.name)) {
          coursesMarks.set(_course.name, {
            DS: "?",
            Tp: "?",
            CC: "?",
            Examen: "?",
          });
        }

        let coef = _mark_e.mark_coefficient;

        let curr = coursesMarks.get(_course.name);
        curr[coef.label] = _mark_e.mark;
        coursesMarks.set(_course.name, curr);
      }
    });
    req.coursesMarks = coursesMarks;
    next();
  } catch (err) {
    console.log(err);
    return res.render("landing_section/index.ejs");
  }
};
