const express=require('express');
const router=express.Router();

let courses=[
{
    id:1,
    name:'farhang'
}
];

router.get('/' , (req,res)=>{
    res.send(courses);
})


module.exports=router;