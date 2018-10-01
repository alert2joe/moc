

import Model from './Model'

export default class UserModel extends Model {
 
    async refresh(){
        await this.run('TRUNCATE `user`');
        await this.run(`INSERT INTO user (\`a\`, \`b\`, \`c\`, \`d\`) VALUES
        (1, 2, 3, 4),
        (3, 3, 3, 3),
        (4, 4, 4, 4),
        (4, 4, 4, 4),
        (88, 4, 4, 4);`);
    }

 

}
