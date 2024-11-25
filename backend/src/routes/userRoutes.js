const express=require("express");
const verifyToken=require("../middlewares/authMiddleware");
const router=express.Router();
const authorizeRole =require("../middlewares/roleMiddleware");
const User = require("../models/userModel");

//Only Admin can access this route
router.get("/admin", verifyToken,authorizeRole("admin"),(req, res)=>{
    res.json({message: "Welcome Admin"});
});

//Both admin and manager can acces this router
router.get("/manager",verifyToken,authorizeRole("admin","manager") ,(req, res)=>{
    res.json({message: "Welcome Manager"});
});

//All can access this router
router.get("/user",verifyToken,authorizeRole("admin", "manager", "user"), (req, res)=>{
    res.json({message: "Welcome User"});
});

router.get("/all-users", verifyToken, authorizeRole("admin"), async (req, res) => {
    try {
      const users = await User.find({}, "username role");
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch users" });
    }
  });
  
  // Update user role (admin only)
  router.put(
    "/update-role/:id",
    verifyToken,
    authorizeRole("admin"),
    async (req, res) => {
      const { role } = req.body;
      const { id } = req.params;
  
      try {
        const user = await User.findByIdAndUpdate(id, { role }, { new: true });
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: `Updated role for user ${user.username} to ${role}` });
      } catch (error) {
        res.status(500).json({ message: "Failed to update role" });
      }
    }
  );
  

module.exports=router;