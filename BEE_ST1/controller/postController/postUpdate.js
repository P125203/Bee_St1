const postModel = require('../../model/postModel');

exports.update = async (req ,res) => {
    try{
        const id = req.params.id
        var { blogTitle , blogContent , blogAuthor , blogTags , blogComments } = req.body
        const user = await postModel.findOne({id : id})
        // console.log(id)
        if(!user){
            res.status(404).json({msg : "No User"})
        }
        if(!blogTitle){
            blogTitle = user.blogTitle
        }
        if(!blogContent){
            blogContent = user.blogContent
        }
        if(!blogAuthor){
            blogAuthor = user.blogAuthor
        }
        if(!blogTags){
            blogTags = user.blogTags
        }
        if(!blogComments){
            blogComments = user.blogComments
        }
        await postModel.updateOne({id : id} , {blogTitle , blogContent , blogAuthor , blogTags , blogComments})
        res.status(200).json({msg : "Successfully updated"})
    }catch(err){
        res.status(500).json({msg : "Unable to update"})
    }
}