import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
   const {token} = req.headers;

   if(!token){
      return res.json({
         success: false,
         message: "Please login first"
      })
   }

   try {
      const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

      if(tokenDecode.id){
         req.body.userID = tokenDecode.id;

      }
   } catch (error) {
      
   }
   }
}

