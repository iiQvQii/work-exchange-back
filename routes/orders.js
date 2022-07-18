import express from 'express'
import admin from '../middleware/admin.js'
import * as auth from '../middleware/auth.js'
import {
  createOrder,
  getMyOrders,
  getAllOrders
} from '../controllers/orders.js'

const router = express.Router()

router.post('/', auth.jwt, createOrder) // 把購物車資料放進結帳訂單
router.get('/', auth.jwt, getMyOrders) // 取得個人訂單
router.get('/all', auth.jwt, admin, getAllOrders) // 取得所有人訂單(admin)

export default router
