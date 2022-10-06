const express = require('express');
const { check , validationResult} = require('express-validator')
const CustomerDomain = require('../Domain/customer.domain');
const router = express.Router();
const jwtVerify = require('../Authentication/jwtverify')
require('dotenv').config();
let customerDomain = new CustomerDomain();

router.get('/', (req,res)=>{
  customerDomain.getAllCutomers(req, res);
})

// router.use(jwtVerify);

router.get('/:id', (req, res)=>{
  customerDomain.getCustomerById(req.params.id, res);
})
function isValidDate(value) {
  if (!value.match(/^\d{4}-\d{2}-\d{2}$/)) return false;

  const date = new Date(value);
  if (!date.getTime()) return false;
  return date.toISOString().slice(0, 10) === value;
}
router.post('/add',[
  check('customername').trim().notEmpty().withMessage("Customer name is required."),
  check('emailaddress').notEmpty().withMessage('Email Address is required.')
                       .isEmail().normalizeEmail().withMessage("Invalid email!"),
  check('phonenumber').notEmpty().withMessage('Phone number is required.')
                      .isLength({min:10, max:10}).withMessage("Phonenumber must be 10 digits long."),
  check('pincode').notEmpty().withMessage('Pincode is required.'),
  check('streetaddress').notEmpty().withMessage('Address is required.'),
  check('city').notEmpty().withMessage('City is required.'),
  check('state').notEmpty().withMessage('State is required.'),
  check('country').notEmpty().withMessage('Country is required.'),
  check('addresstype').notEmpty().withMessage('Specify addressType').isIn(['Home', 'Office']).withMessage("AddressType must be Home or Office."),
  check('birthdate', 'invalid birthdate').optional().custom(isValidDate),
  check('gender', 'invalid gender').optional().isIn(['Male', 'Female', 'Other'])

] ,(req, res)=>{
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(404).json({error:errors.array().map((val)=>val.msg)})
  }
  customerDomain.addCustomer(req.body, res);
})

router.put('/update/:id', [
  check('customername').trim().notEmpty().withMessage("Customer name is required."),
  check('emailaddress').notEmpty().withMessage("Email is required."),
  check('phonenumber').notEmpty().withMessage("Phonenumber is required."),
  check('pincode').notEmpty().withMessage('Pincode is required.'),
  check('streetaddress').notEmpty().withMessage('Address is required.'),
  check('city').notEmpty().withMessage('City is required.'),
  check('state').notEmpty().withMessage('State is required.'),
  check('country').notEmpty().withMessage('Country is required.'),
  check('gender').notEmpty().withMessage("Address is required."),
  check('addresstype').notEmpty().withMessage("AddressType is required."),
  check('birthdate').notEmpty().withMessage("DOB is required")
], (req, res)=>{
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(404).json({error:errors.array().map((val)=>val.msg)})
  }
  customerDomain.updateCustomer(req.body, req.params.id, res);
})

router.delete('/del/:id', (req, res)=>{
  customerDomain.deleteCustomer(req.params.id, res);
})


module.exports = router;
