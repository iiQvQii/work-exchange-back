export default (req, res, next) => {
  if (req.user.role !== 1) {
    res.status(403).send({ success: false, message: '無管理權限' })
  } else {
    next()
  }
}
