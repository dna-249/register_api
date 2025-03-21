const express = require('express');
const studentRouter = express.Router()
const staffRouter = express.Router()
const managementRouter = express.Router()
const { getOneStudent,putOneStudent, getAllStudent, postStudent,putPullStudent, putPushStudent, deleteOneStudent } = require('../controllers/student');
const { getOneStaff, putOneStaff, getAllStaff, postStaff,putPullStaff, putPushStaff, deleteOneStaff } = require('../controllers/staff');
const { getOneManagement,putOneManagement, getAllManagement, postManagement,putPullManagement, putPushManagement, deleteOneManagement } = require('../controllers/management');
const { studentLogin}=require("../middlewares/middleware")
const {verify }= require("../middlewares/verify")   




studentRouter.post('/', postStudent)
studentRouter.get('/', getAllStudent)
studentRouter.get('/:_id', getOneStudent)
studentRouter.put('/:_id', putOneStudent)
studentRouter.put('/pull/:_id', putPullStudent)
studentRouter.put('/push/:_id',putPushStudent)
studentRouter.delete("/delete/:id", deleteOneStudent)

managementRouter.post('/', postManagement)
managementRouter.get('/', getAllManagement)
managementRouter.get('/:_id', getOneManagement)
managementRouter.put('/:_id', putOneManagement)
managementRouter.put('/pull/:_id', putPullManagement)
managementRouter.put('/push/:_id',putPushManagement)
managementRouter.delete("/delete/:id", deleteOneManagement)

staffRouter.post('/verify',verify)
staffRouter.post('/login',studentLogin,verify)
staffRouter.post('/',postStaff)
staffRouter.get('/', getAllStaff)
staffRouter.get('/:_id', getOneStaff)
staffRouter.put('/:_id', putOneStaff)
staffRouter.put('/pull/:_id', putPullStaff)
staffRouter.put('/push/:_id',putPushStaff)
staffRouter.delete('/delete/:id', deleteOneStaff)

module.exports = {
                 studentRouter,
                 managementRouter,
                 staffRouter };