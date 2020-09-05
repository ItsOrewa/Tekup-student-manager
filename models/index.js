const { DataTypes } = require("sequelize");

const { sequelize } = require("../config");

const _absence_professor = require("./absence_professors.js");
const absence_professor = _absence_professor(sequelize, DataTypes);
const _course_lesson = require("./course_lessons.js");
const course_lesson = _course_lesson(sequelize, DataTypes);
const _failed_job = require("./failed_jobs.js");
const failed_job = _failed_job(sequelize, DataTypes);
const _migration = require("./migrations.js");
const migration = _migration(sequelize, DataTypes);
const _session_setting = require("./session_settings.js");
const session_setting = _session_setting(sequelize, DataTypes);
const _absence_report = require("./absence_reports.js");
const absence_report = _absence_report(sequelize, DataTypes);
const _course_plan = require("./course_plans.js");
const course_plan = _course_plan(sequelize, DataTypes);
const _group_document = require("./group_documents.js");
const group_document = _group_document(sequelize, DataTypes);
const _module = require("./modules.js");
const Module = _module(sequelize, DataTypes);
const _session = require("./sessions.js");
const session = _session(sequelize, DataTypes);
const _administrator = require("./administrators.js");
const administrator = _administrator(sequelize, DataTypes);
const _course_session_attachment = require("./course_session_attachments.js");
const course_session_attachment = _course_session_attachment(
  sequelize,
  DataTypes
);
const _inaccessible_mark = require("./inaccessible_marks.js");
const inaccessible_mark = _inaccessible_mark(sequelize, DataTypes);
const _notification = require("./notifications.js");
const notification = _notification(sequelize, DataTypes);
const _setting = require("./settings.js");
const setting = _setting(sequelize, DataTypes);
const _assignment_student = require("./assignment_students.js");
const assignment_student = _assignment_student(sequelize, DataTypes);
const _course_session = require("./course_sessions.js");
const course_session = _course_session(sequelize, DataTypes);
const _period = require("./periods.js");
const period = _period(sequelize, DataTypes);
const _student_annual_mark = require("./student_annual_marks.js");
const student_annual_mark = _student_annual_mark(sequelize, DataTypes);
const _attendance_record = require("./attendance_records.js");
const attendance_record = _attendance_record(sequelize, DataTypes);
const _course = require("./courses.js");
const course = _course(sequelize, DataTypes);
const _internship = require("./internships.js");
const internship = _internship(sequelize, DataTypes);
const _permission_rol = require("./permission_role.js");
const permission_rol = _permission_rol(sequelize, DataTypes);
const _student_branch_level_plan_mark = require("./student_branch_level_plan_marks.js");
const student_branch_level_plan_mark = _student_branch_level_plan_mark(
  sequelize,
  DataTypes
);
const _branch_level_plan = require("./branch_level_plans.js");
const branch_level_plan = _branch_level_plan(sequelize, DataTypes);
const _cycle_branche = require("./cycle_branches.js");
const cycle_branche = _cycle_branche(sequelize, DataTypes);
const _job = require("./jobs.js");
const job = _job(sequelize, DataTypes);
const _permission_use = require("./permission_user.js");
const permission_use = _permission_use(sequelize, DataTypes);
const _student_course_plan_mark = require("./student_course_plan_marks.js");
const student_course_plan_mark = _student_course_plan_mark(
  sequelize,
  DataTypes
);
const _branch_level = require("./branch_levels.js");
const branch_level = _branch_level(sequelize, DataTypes);
const _cycle = require("./cycles.js");
const cycle = _cycle(sequelize, DataTypes);
const _jurie = require("./juries.js");
const jurie = _jurie(sequelize, DataTypes);
const _permission = require("./permissions.js");
const permission = _permission(sequelize, DataTypes);
const _student_period_mark = require("./student_period_marks.js");
const student_period_mark = _student_period_mark(sequelize, DataTypes);
const _branche = require("./branches.js");
const branche = _branche(sequelize, DataTypes);
const _defense = require("./defenses.js");
const defense = _defense(sequelize, DataTypes);
const _mark_coefficient = require("./mark_coefficients.js");
const mark_coefficient = _mark_coefficient(sequelize, DataTypes);
const _professional_supervisor = require("./professional_supervisors.js");
const professional_supervisor = _professional_supervisor(sequelize, DataTypes);
const _student = require("./students.js");
const student = _student(sequelize, DataTypes);
const _class_annual_mark = require("./class_annual_marks.js");
const class_annual_mark = _class_annual_mark(sequelize, DataTypes);
const _degree = require("./degrees.js");
const degree = _degree(sequelize, DataTypes);
const _mark_log = require("./mark_logs.js");
const mark_log = _mark_log(sequelize, DataTypes);
const _professor_course = require("./professor_courses.js");
const professor_course = _professor_course(sequelize, DataTypes);
const _testimonial = require("./testimonials.js");
const testimonial = _testimonial(sequelize, DataTypes);
const _class_branch_level_plan_mark = require("./class_branch_level_plan_marks.js");
const class_branch_level_plan_mark = _class_branch_level_plan_mark(
  sequelize,
  DataTypes
);
const _department = require("./departments.js");
const department = _department(sequelize, DataTypes);
const _mark_permission = require("./mark_permissions.js");
const mark_permission = _mark_permission(sequelize, DataTypes);
const _professor = require("./professors.js");
const professor = _professor(sequelize, DataTypes);
const _time_table_fragment = require("./time_table_fragments.js");
const time_table_fragment = _time_table_fragment(sequelize, DataTypes);
const _class_course_plan_mark = require("./class_course_plan_marks.js");
const class_course_plan_mark = _class_course_plan_mark(sequelize, DataTypes);
const _disponibilitie = require("./disponibilities.js");
const disponibilitie = _disponibilitie(sequelize, DataTypes);
const _mark_transaction = require("./mark_transactions.js");
const mark_transaction = _mark_transaction(sequelize, DataTypes);
const _public_holiday = require("./public_holidays.js");
const public_holiday = _public_holiday(sequelize, DataTypes);
const _time_table_structure = require("./time_table_structures.js");
const time_table_structure = _time_table_structure(sequelize, DataTypes);
const _class_period_mark = require("./class_period_marks.js");
const class_period_mark = _class_period_mark(sequelize, DataTypes);
const _disponibility_plan = require("./disponibility_plans.js");
const disponibility_plan = _disponibility_plan(sequelize, DataTypes);
const _mark = require("./marks.js");
const mark = _mark(sequelize, DataTypes);
const _pv_observation = require("./pv_observations.js");
const pv_observation = _pv_observation(sequelize, DataTypes);
const _time_table = require("./time_tables.js");
const time_table = _time_table(sequelize, DataTypes);
const _classe = require("./classes.js");
const classe = _classe(sequelize, DataTypes);
const _document = require("./documents.js");
const document = _document(sequelize, DataTypes);
const _material_rent = require("./material_rents.js");
const material_rent = _material_rent(sequelize, DataTypes);
const _pv_title = require("./pv_titles.js");
const pv_title = _pv_title(sequelize, DataTypes);
const _user = require("./users.js");
const user = _user(sequelize, DataTypes);
const _classroom = require("./classrooms.js");
const classroom = _classroom(sequelize, DataTypes);
const _documents_of_group = require("./documents_of_groups.js");
const documents_of_group = _documents_of_group(sequelize, DataTypes);
const _material = require("./materials.js");
const material = _material(sequelize, DataTypes);
const _rescue_mark = require("./rescue_marks.js");
const rescue_mark = _rescue_mark(sequelize, DataTypes);
const _week_course_plan = require("./week_course_plans.js");
const week_course_plan = _week_course_plan(sequelize, DataTypes);
const _content_course = require("./content_courses.js");
const content_course = _content_course(sequelize, DataTypes);
const _elimination_rule = require("./elimination_rules.js");
const elimination_rule = _elimination_rule(sequelize, DataTypes);
const _message_content = require("./message_contents.js");
const message_content = _message_content(sequelize, DataTypes);
const _role_use = require("./role_user.js");
const role_use = _role_use(sequelize, DataTypes);
const _course_chapter = require("./course_chapters.js");
const course_chapter = _course_chapter(sequelize, DataTypes);
const _entreprise = require("./entreprises.js");
const entreprise = _entreprise(sequelize, DataTypes);
const _message = require("./messages.js");
const message = _message(sequelize, DataTypes);
const _role = require("./roles.js");
const role = _role(sequelize, DataTypes);

module.exports = {
  absence_professor,
  course_lesson,
  failed_job,
  migration,
  session_setting,
  absence_report,
  course_plan,
  group_document,
  Module,
  session,
  administrator,
  course_session_attachment,
  inaccessible_mark,
  notification,
  setting,
  assignment_student,
  course_session,
  period,
  student_annual_mark,
  attendance_record,
  course,
  internship,
  permission_rol,
  student_branch_level_plan_mark,
  branch_level_plan,
  cycle_branche,
  job,
  permission_use,
  student_course_plan_mark,
  branch_level,
  cycle,
  jurie,
  permission,
  student_period_mark,
  branche,
  defense,
  mark_coefficient,
  professional_supervisor,
  student,
  class_annual_mark,
  degree,
  mark_log,
  professor_course,
  testimonial,
  class_branch_level_plan_mark,
  department,
  mark_permission,
  professor,
  time_table_fragment,
  class_course_plan_mark,
  disponibilitie,
  mark_transaction,
  public_holiday,
  time_table_structure,
  class_period_mark,
  disponibility_plan,
  mark,
  pv_observation,
  time_table,
  classe,
  document,
  material_rent,
  pv_title,
  user,
  classroom,
  documents_of_group,
  material,
  rescue_mark,
  week_course_plan,
  content_course,
  elimination_rule,
  message_content,
  role_use,
  course_chapter,
  entreprise,
  message,
  role,
};
