const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const multer = require('multer')
const path = require('path')

const storage = multer.memoryStorage() // or use disk storage
const upload = multer({ storage })

const yoloController = require('../controller/yoloController')

router.post('/test', upload.single('image'), yoloController.getMsg)

module.exports = router