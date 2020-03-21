const express = require('express');
const router = express.Router();
const extraHoursController = require('../controller/extra.controller');

router.get('/', extraHoursController.getExtraList);
router.get('/:id', extraHoursController.getExtraById);
router.post('/', extraHoursController.createExtra);
router.put('/update/:id', extraHoursController.editExtra);
router.delete('/delete/:id', extraHoursController.deleteExtra);

module.exports = router;