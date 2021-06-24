import faker from 'faker'
import { v4 as uuidv4 } from 'uuid';

let listblock = [];

for (let i = 0; i < 6; i++) {
    let data = {
        id: uuidv4(),
        imglink: faker.random.image(),
        postname: faker.lorem.lines(1),
        postsub: faker.lorem.lines(2),
        imglinkuser: faker.random.image(),
        username: faker.name.lastName() + faker.name.firstName(),
        postdate: faker.date.past(),
    }
    listblock.push(data)
}
export default listblock
    
