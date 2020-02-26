const express = require('express');
const router = express.Router();
const Employees = require("../models/emp_db");

router.get('/', async (req, res) => {
    const employees = await Employees.find();

    try {
        res.status(200).json({
            error: false,
            data: employees
        });
    } catch (e) {
        res.status(400).json({
            error: true,
            message: e.message
        })
    }
});


/* GET home page. */


router.get('/:id', (req, res) => {
    let id = req.params.id;
    // let id = req.param('id');
    console.log(id);
    res.status(200).json({
        error: false,
        message: 'Creating new employees' + id
    })
});

// router.post('/', (req, res) => {
//     res.status(201).json({
//         error: false,
//         message: 'Creating new employees'
//     })
// });

router.post("/",  async (req, res) =>{
  let emp = req.body;
  console.log(emp);

  let doc = await Employees.create(emp);
  try{
      res.status(201).json({
        error:false,
        data: doc
      })
  }
  catch (e) {
    res.status(400).json({
      error: true,
      message: e.message
    })
  }

});


// router.put('/', (req, res) => {
//     res.status(200).json({
//         error: false,
//         message: 'update employees'
//     })
// });

router.put("/:id", async (req, res) => {
  const employees = await Employees.findByIdAndUpdate(req.params.id, req.body,{
    new: true,
    runValidators: true
  });
  console.log(employees);

  if(!employees) {
      res.status(404).json({
          error: true,
          message: "emp id do not exist"

      })
  }

    try{
        res.status(200).json({
          error: false,
          data: employees
      })
    }
    catch (e) {
      return res.status(400).json({
          error: true,
          data: e.message
      })
    }

});


// router.delete('/', (req, res) => {
//     res.status(200).json({
//         error: false,
//         message: 'deleted employees'
//     })
// });

router.put("/:id", async (req, res) => {
  const employees = await Employees.findByIdAndUpdate(req.params.id, req.body,{
    new: true,
    runValidators: true
  });
  console.log(employees);
  if(!employees) {
      return res.status(400).json({
          error: true,
          message: "emp id do not exist"
      });
  }

    try{
      res.status(200).json({
        error: false,
        data: employees
      })
    }
    catch (e) {
      return res.status(400).json({
        error: true,
        data: e.message
      })
    }

});

router.delete("/:id", async (req, res) => {
    const employees = await Employees.findByIdAndDelete(req.params.id);
    if(!employees) {
        return res.status(400).json({
            error: true,
            message: "emp id do not exist"
        });
    }
    try{
        res.status(200).json({
            error: false,
            data: "deleted"
        });
    }
    catch (e) {
        return res.status(400).json({
            error: true,
            data: e.message
        });
    }

});


module.exports = router;
