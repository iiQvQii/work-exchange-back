前後台購物網站

models 寫資料格式 密碼的驗證格式寫在
controllers 寫res回覆
passport 寫驗證策略
middleware 寫關卡，express是一關一關的middleware

router.post('/', content('application./json'), register)
router.post('/login', content('application./json'), login)
router.delete('/logout', auth.jwt, logout)
router.post('/extend', auth.jwt, extend)
router.get('/', auth.jwt, getUser)
