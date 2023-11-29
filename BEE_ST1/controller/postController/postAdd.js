const blogServices = require('../../services/blogServices');

exports.home = async (res) => {
    try{
        const abc = await bookModel.find();
        console.log(abc)
        res.send(abc)
    }catch(err){
        console.log(err)
    }
}

exports.add = async (req ,res) => {
    try{
        const inputdata = req.body;
        const addblog = await blogServices.addBlogPost(inputdata);
        res.status(200).json({ msg : 'Created Successfully', data : addblog})
    }catch(err){
        res.status(500).json({msg : 'Not Created' })
    }
}
