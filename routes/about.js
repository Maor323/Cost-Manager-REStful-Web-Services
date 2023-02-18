
console.log('start about file');
const express = require('express');
const router = express.Router();

/* GET products listing. */
/* GET specific product listing */
router.get('/', function(request,response) {

    const developers = [
        {
            firstname: 'Nir' ,
            lastname:'****' ,
            id:'**********' ,
            email:'****@gmail.com'
        },
        {
            firstname:'Maor' ,
            lastname:'****' ,
            id:'**********' ,
            email: '*******@gmail.com'
        }
    ];

    response.status(200);
    response.send(developers);
    return response;
});

module.exports = router;


