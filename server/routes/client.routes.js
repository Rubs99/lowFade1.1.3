const express= require('express');
const router= express.Router();

const clientController= require('../controllers/client.controller');


router.get('/',clientController.getClients);
router.put('/:id',clientController.editClient);
router.delete('/:id',clientController.deleteClient);

module.exports= router;