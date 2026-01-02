const express = require('express');
const router = express.Router();
const {createExpense,
    getExpense,
    getExpenseById,
    updateExpense,
    deleteExpense
} = require('../Controllers/expenseController');
const protect = require('../middleware/authMiddleware');

router.use(protect);

router.post('/', createExpense);
router.get('/', getExpense);
router.get('/:id', getExpenseById);
router.put('/:id', updateExpense);
router.delete('/:id', deleteExpense);

module.exports = router;