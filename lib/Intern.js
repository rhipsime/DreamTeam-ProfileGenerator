// Intern Class
import { Employee } from './Employee.js';

export default class Intern extends Employee {
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

