// Import Employee class
const Employee = require('./Employee');

// Manager Class
class Manager extends Employee {
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

// Export Manager class
module.exports = Manager;

