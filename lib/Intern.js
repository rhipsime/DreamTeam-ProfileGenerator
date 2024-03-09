// Intern Class
const Employee = require ('./Employee.js');


module.exports = class Intern extends Employee {
    // Constructor
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    // Method overriding
    getRole() {
        return 'Intern';
    }

    // Additional method
    getSchool() {
        return this.school;
    }
}
