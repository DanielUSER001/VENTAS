const express = require("express")
const user = require("../controllers/controllerAuth")
const router = express.Router()

router.post("/singup", user.signUp)
router.post("/singin", user.signIn)
router.post("/singout", user.signOut)

module.exports = router