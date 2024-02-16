var { Liquid } = require('liquidjs');
const path = require('path');

const engine = new Liquid({
    root: path.resolve(__dirname, 'views/'),
    extname: '.liquid'
});

engine
    .renderFile("derived", { content: 'Some content' })
    .then(console.log)
