const postModel = require('../../model/postModel');

exports.delete = async (req ,res) => {
    try{
        const id = req.params.id;
        const user = await postModel.findOneAndDelete({id : id})

        if(user){
            res.status(200).json({msg : "Deleted Successfully" , user})
        }else{
            res.status(404).json({msg : "Not Found"})   
        }

    }catch(err){
        console.log(err)
        res.status(404).json({msg : "Not Found"})
    }
}