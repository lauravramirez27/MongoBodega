import { rateLimit } from "express-rate-limit";

export let limitGrt=()=>{
    return rateLimit({
        windowMs:30*1000,
        max:20,
        standardHeaders:true,
        legacyHeaders:false,
        skip:(req,res)=>{
            if (req.headers["content-length"]>200){
                res.status(413).send({
                    status:413,
                    message:"se ha pasado el limite de solicitudes"
            });        
            return true;
        }
        
    },
    message: (req,res)=>{
        res.status(429).send({
            status:429,
            message:"Limite de consultas alcanzado"
        });
    }
})
}