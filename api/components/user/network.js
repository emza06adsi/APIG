// const express =require('express');
// const secure=require('./secure');
// const response=require(`../../../network/response`)
// const Controller =require(`./index`);


// const router=express.Router();
// //routes
// router.get('/',list)
// router.get('/:id',get)
// router.post('/',upsert)
// router.put('/', secure('update'),upsert)

// function list(req,res,next) {
//     // res.send('todo esta en orden');
//    Controller.list()
//    .then((lista)=> {
//     response.success(req,res,lista,200 )
//    })
//    .catch(next);
// }
// function get(req,res,next) {
//     Controller.get(req.params.id)
//         .then((user)=>{
//             response.success(req,res,user,200)
//         })
//         .catch(next);
//     }
   
// function upsert(req,res,next) {
//         Controller.upsert(req.body)
//    .then((user)=>{
//         response.success(req,res,user,200)
//    })
//    .catch(next);
// }

// module.exports=router;