/**
 * Created by kruny1001 on 1/9/15.
 */

module.exports = function(){
    var faker = require("faker");
    var _ = require("lodash");
    return {
        people: _.times(100, function (n) {
            return {
                id: n,
                name: faker.name.findName(),
                avatar: faker.internet.avatar()
            }
        })
    }
};