// simple user database, stored in memory
// mockup purpose, proper user credential will be encrypted and stored in database

export const Users = [
    {
        access: 0,
        credential: {
            username: 'admin',
            password: 'admin12'
        },

        details: {
            fullname: 'Muhammad Aidil Syazwan',
            gender: 'Male',
            dob: '3 January 1999',
            uni: 'Universiti Malaysia Pahang',
            program: 'Diploma in Computer Science'
        },

        contact: {
            phone: '011223334455',
            email: 'aidil@gmail.com'
        },

        member: {
            id: '18023',
            username: 'Aidil',
            level: 'Student',
            active: true,
            since: '9 January 2019'
        }
    },
    {
        access: 1,
        credential: {
            username: 'nabil',
            password: 'nabil123'
        },

        details: {
            fullname: 'Muhammad Nabil Aniq',
            gender: 'Male',
            dob: '27 January 1997',
            uni: 'Universiti Malaysia Pahang',
            program: 'Diploma in Civil Engineering'
        },

        contact: {
            phone: '011223334455',
            email: 'nabil@gmail.com'
        },

        member: {
            id: '18024',
            username: 'Nabil',
            level: 'Student',
            active: true,
            since: '9 January 2019'
        }
    }
];

export class User {
    private username;
    private access;

    private details;
    private contact;
    private member;

    constructor(username, access, details, contact, member) {
        this.username = username;
        this.access = access;
        this.details = details;
        this.contact = contact;
        this.member = member;
    }

    public static login(username: string, password: string): User {
        let cUser: User;
        Users.forEach(user => {
          if ((username === user.credential.username) && (password === user.credential.password)) {
            cUser = new User(username, user.access, user.details, user.contact, user.member);
            return;
          }
        });
        return cUser;
      }

    public getUsername() {
        return this.username;
    }

    public getAccess() {
        return this.access;
    }

    public getDetails() {
        return this.details;
    }

    public getContact() {
        return this.contact;
    }

    public getMember() {
        return this.member;
    }

    public setUsername(username: string) {
        this.username = username;
    }

    public setDetails(details: object) {
        this.details = details;
    }

    public setContact(contact: object) {
        this.contact = contact;
    }

    public setMember(member: object) {
        this.member = member;
    }
}

export const TEST_ACC = new User('admin', 0, {
    fullname: 'Muhammad Aidil Syazwan',
    gender: 'Male',
    dob: '3 January 1999',
    uni: 'Universiti Malaysia Pahang',
    program: 'Diploma in Computer Science'
}, {
    phone: '011223334455',
    email: 'aidil@gmail.com'
}, {
    id: '18023',
    username: 'Aidil',
    level: 'Student',
    active: true,
    since: '9 January 2019'
});

