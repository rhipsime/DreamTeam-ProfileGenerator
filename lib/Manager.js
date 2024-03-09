// Manager Class
const Employee = require('./Employee');
module.exports = class Manager extends Employee {
    // Constructor
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // Method overriding
    getRole() {
        return 'Manager';
    }

    // Additional method
    getOfficeNumber() {
        return this.officeNumber;
    }
}