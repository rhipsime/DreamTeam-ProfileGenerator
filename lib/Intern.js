// Import Employee class
const Employee = require('./Employee');

// Intern Class
class Intern extends Employee {
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

// Export Intern class
module.exports = Intern;
