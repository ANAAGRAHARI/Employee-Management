const Employee = require('../models/Employee')

// Show the list of Employees
const index = (req,res,next)=>{
    Employee.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message:'An error Occured!'
        })
    })
}
//show single employee
const show = (req,res,next)=>{
    let employeeID =req.body.employeeID
    Employee.findById(employeeID)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res,json({
                message:'An error Occured'
            })
    })
}

const store = (req,res,next)=>{
    let employee =new Employee({
        name:req.body.name,
        designation: req.body.designation,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age
    })
    employee.save()
    .then(response =>{
        res.json({
            message:'Employee Added Successfully!'
        })
    })
    .catch(error =>{
        res.json({
            message:'An error Occured!'
        })
        console.log(error)
    })
}

//update an employee

const update = (req,res,next)=>{
    let employeeID = req.body.employeeID

    let updateData ={
        name:req.body.name,
        designation:req.body.designation,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age
    }

    Employee.findByIdAndUpdate(employeeID,{$set:updateData})
    .then(()=>{
        res.json({
            message:'Employee update successully'
        })
    })
    .catch(error=>{
        res.json({
            message:'An error occured!'
        })
    })
}

//delete an employee
const destroy = (req,res,next)=>{
    let employeeID=req.body.employeeID
    Employee.findByIdAndRemove(employeeID)
    .then(()=>{
        res.json({
            message: 'Employee deleted sucessfully'
        })
    })
    .catch(error =>{
        res.json({
            message:'An error Occured!'
        })
    })
}

module.exports ={
    index,show,store,update,destroy
}