import User from "../../models/User"
import connectDb from "../../middleware/mongoose"
const handler = async (req, res) => {
    if (req.method == "POST") {
        console.log(req.body)
        let u=new User({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
        })
        await u.save()
        res.status(200).json({ success: "Success" })
    } else {
        res.status(400).json({ error: "Invalid request method" })
    }
    
    // res.status(200).json({ products })
}

export default connectDb(handler)
