// Import Employee class
const Employee = require('./Employee');

// Engineer Class
class Engineer extends Employee {
    // Constructor
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    // Method overriding
    getRole() {
        return 'Engineer';
    }

    // Additional method
    getGithub() {
        return this.github;
    }
}

// Export Engineer class
module.exports = Engineer;
