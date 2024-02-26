// Engineer Class
export default class Engineer extends Employee {
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


