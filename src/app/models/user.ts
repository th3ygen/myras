export class User {
    token: string;

    username: string;
    email: string;

    hash: string;
    salt: string;

    admin: boolean;

    membership: {
        plan: string,
        status: string,
        paid: boolean
    };

    details: {
        fullname: string,
        dob: string,
        phoneNum: string,
        address: string,

        student: {
            university: string,
            course: string
        },

        regular: {
            cluster: string,
            org: string,
            occu: string,
            web: string,
        },

        corp: {
            cluster: string,

            company: string,
            business: string,
            phoneNum: string,

            represent: {
                name: string,
                job: string,
                phone: string
            }
        },
    };

}
