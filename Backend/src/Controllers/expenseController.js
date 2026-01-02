const Expense = require('../models/expenseModels');

/** JS Doc style comments
 * 
 * @desc Create new expense
 * @route /api/expenses/post
 * @access private
 */
exports.createExpense = async(req,res) => {
    try{
        const {userId, date, title, amount, category, type} = req.body;
        const expense = await Expense.create({
            userId : req.user._id,
            date,
            title,
            amount,
            type,
            category
        });
        res.status(201).json({
            status : 'success',
            data : expense});
    }catch(error){
        res.status(400).json({message : error.message});
    }
};

/**
 * @description Get expenses
 * @route /api/route/
 * @access Private
 */

exports.getExpense = async(req,res) => {
    try{
        const expenses = await Expense.find({_id : req.user._id});
        res.status(200).json(expenses);
    }catch(error){
        res.status(500).json({message : error.message});
    }
};

/**
 * @desc    Get single expense
 * @route   GET /api/expenses/:id
 * @access  Private
 */

exports.getExpenseById = async (req,res) => {
    try{
        const expense = await Expense.findOne({
            _id : req.body.id,
            userId : req.user._id
        });
        if (!expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }
        res.status(200).json({message : error.message});
    }catch(error){
        res.status(500).json({message : error.message});
    }
};

/**
 * @desc    Update expense
 * @route   PUT /api/expenses/:id
 * @access  Private
 */
exports.updateExpense = async (req, res) => {
    const expense = await Expense.findOne({
      _id: req.params.id,
      userId: req.user._id
    });
  
    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
  
    Object.assign(expense, req.body);
    const updatedExpense = await expense.save();
  
    res.json(updatedExpense);
  };
  
  /**
   * @desc    Delete expense
   * @route   DELETE /api/expenses/:id
   * @access  Private
   */
  exports.deleteExpense = async (req, res) => {
    const expense = await Expense.findOne({
      _id: req.params.id,
      userId: req.user._id
    });
  
    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
  
    await expense.deleteOne();
    res.json({ message: 'Expense removed successfully' });
  };



