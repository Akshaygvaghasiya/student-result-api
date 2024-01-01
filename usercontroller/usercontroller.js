var usermodel = require('../usermodel/usermodel');

exports.insert = async(req,res) => {

    var data = await usermodel.create(req.body)

    var s1 = Number(req.body.s1)
    var s2 = Number(req.body.s2)
    var s3 = Number(req.body.s3)
    var s4 = Number(req.body.s4)
    var s5 = Number(req.body.s5)

    var total = s1+s2+s3+s4+s5
    var rolno = req.body.rollno;
    var data2 = await usermodel.findOneAndUpdate({ rollno: rolno},{total: total})

    res.status(200).json({
        status : 'success',
        data,
        data2
    })
}

exports.update = async(req,res)=>{
    var id = req.params.id;
    var s1 =Number( req.body.s1);
    var s2 =Number(req.body.s2);
    var s3 =Number( req.body.s3);
    var s4 =Number( req.body.s4);
    var s5 = Number(req.body.s5);
   var total = s1+s2+s3+s4+s5;
   var rno=req.body.rollno;
   var data = await user.findByIdAndUpdate(id,req.body);
   var data2 = await user.findOneAndUpdate({ rollno: rno }, { total: total });

     res.status(200).json({
        status:'success',
        data,data2
     })
}
exports.select_data = async(req,res) => {

    var data = await usermodel.find()
    res.status(200).json({
        status : 'success',
        data
    })
}

exports.delete = async(req, res) => {
    var id = req.params.id
    var data = await usermodel.findByIdAndDelete(id)

    res.status(200).json({
        status:"data delete"
    })
}
exports.five = async(req,res)=>{
    
    var data = await usermodel.find().limit(5).sort({total:1});
 
     res.status(200).json({
        status:'Top five results',
        data
     })
 }
 exports.ten= async(req,res)=>{
    
    var data = await usermodel.find().limit(10).sort({total:1});
 
     res.status(200).json({
        status:'Top ten results',
        data
     })
 }