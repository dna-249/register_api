const express = require('express');
const studentRouter = express.Router()
const staffRouter = express.Router()
const managementRouter = express.Router()
const { getOneStudent,putOneStudent, getAllStudent, postStudent,putPullStudent, putPushStudent, deleteOneStudent } = require('../controllers/student');
const { getOneStaff, putOneStaff, getAllStaff, postStaff,putPullStaff, putPushStaff, deleteOneStaff } = require('../controllers/staff');
const { getOneManagement,putOneManagement, getAllManagement, postManagement,putPullManagement, putPushManagement, deleteOneManagement } = require('../controllers/management');
const { staffLogin,managementLogin,studentLogin}=require("../middlewares/middleware")
const {staffVerify,managementVerify,studentVerify }= require("../middlewares/verify")   




studentRouter.post('/verify',studentVerify)
studentRouter.post('/login',studentLogin)
studentRouter.post('/', postStudent)
studentRouter.get('/', getAllStudent)
studentRouter.get('/:_id', getOneStudent)
studentRouter.put('/:_id', putOneStudent)
studentRouter.put('/pull/:_id', putPullStudent)
studentRouter.put('/push/:_id',putPushStudent)
studentRouter.delete("/delete/:_id", deleteOneStudent)

managementRouter.post('/verify',managementVerify)
managementRouter.post('/login',managementLogin)
managementRouter.post('/', postManagement)
managementRouter.get('/', getAllManagement)
managementRouter.get('/:_id', getOneManagement)
managementRouter.put('/:_id', putOneManagement)
managementRouter.put('/pull/:_id', putPullManagement)
managementRouter.put('/push/:_id',putPushManagement)
managementRouter.delete("/delete/:_id", deleteOneManagement)

staffRouter.post('/verify',staffVerify)
staffRouter.post('/login',staffLogin)
staffRouter.post('/',postStaff)
staffRouter.get('/', getAllStaff)
staffRouter.get('/:_id', getOneStaff)
staffRouter.put('/:_id', putOneStaff)
staffRouter.put('/pull/:_id', putPullStaff)
staffRouter.put('/push/:_id',putPushStaff)
staffRouter.delete('/delete/:_id', deleteOneStaff)

module.exports = {
                 studentRouter,
                 managementRouter,
                 staffRouter };