import { faker } from '@faker-js/faker';

export default class BasePage {
    constructor(page, context) {
        this.context = context;
        this.page = page;
    }

    async gotoBasePage() {
        await this.page.goto('/');
    }


    static generateUserData() {
        return {
            firstName: faker.person.firstName().replace(/[^a-zA-Z\s]/g, ''),
            lastName: faker.person.lastName().replace(/[^a-zA-Z\s]/g, ''),
            email: `aqa-${Math.floor(Math.random()*10000).toString()}-${faker.internet.email({
                firstName: faker.person.firstName().replace(/[^a-zA-Z\s]/g, ''),
                provider: 'testemail.com',
                allowSpecialCharacters: true
            })}`,
            password: faker.internet.password({
                length: 8,
                pattern: /[A-Za-z0-9]/,
                prefix: 'A1a!'
            }),
        }
    }

}