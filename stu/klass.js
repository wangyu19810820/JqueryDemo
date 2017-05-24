var stu = require('./student');
var tea = require('./teacher');

function add(teacher, students) {
    tea.add(teacher)
    students.forEach(function (item) {
        stu.add(item)
    })
}

exports.add = add