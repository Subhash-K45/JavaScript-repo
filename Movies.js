const Movies=require("./mongoose/mongoose");

const PostMovies = async (req,res)=>{
    try{
        const { movies } =req.body;
        const FindMovie = await Movies.findOne({movie:movies});
        if(FindMovie){
            res.status(200).json({
                message:"Movie Already Found"
            })
        }
        else{
            const insertMovie =new Movies({
                movie:movies
            })
            await insertMovie.save()
            console.log(`saved ${movies}`)
            res.send({
                message:"saved sucessfully"
            })
        }
    }catch(err){
        res.status(500).json({
            status:"failed",
            message:err
        })
    }
}


const GetAllMovies= async (req,res)=>{
    try{
        const { movies } = req.body;
        const FindMovie= await Movies.find({});
        if(FindMovie){
            res.status(200).json({
                status:"success",
                message:FindMovie
            })
        }
        else{
            res.status(404).json({
                status:"Not found",
                message:"There is No Movie Present in the DB"
            }
            )
        }
    }catch(err){
        res.status(500).json({
            status:"failed",
            message:err
        })
    }
}

const GetSingleMovie = async (req,res) =>{
    try{
        const id =req.params.id;
        const FindMovie = await Movies.findOne({ _id:id })
        if(FindMovie){
            res.status(200).json({
                status:"success",
                message:FindMovie
            })
        }else{
            res.status(404).json({
                message:"Movie Not Found",
            })
        }
    }catch(err){
        res.status(500).json({
            status:"failed",
            message:err
        })
    }
}

const GetPaginatedMovies = async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const size = parseInt(req.query.size) || 10;
      const skip = (page - 1) * size;
  
      const totalMovies = await Movies.countDocuments({});
      const totalPages = Math.ceil(totalMovies / size);
  
      const movies = await Movies.find({})
        .skip(skip)
        .limit(size);
  
      res.status(200).json({
        status: "success",
        totalPages: totalPages,
        currentPage: page,
        pageSize: size,
        movies: movies,
      });
    } catch (err) {
      res.status(500).json({
        status: "failed",
        message: err,
      });
    }
  };
  
module.exports = {
    PostMovies,
    GetAllMovies,
    GetSingleMovie,
    GetPaginatedMovies
}