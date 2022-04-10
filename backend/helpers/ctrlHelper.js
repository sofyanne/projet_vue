exports.genericCtrl = (req, res, cb) => {
  try {
    return cb();
  } catch(e) {
    res.status(400).json({ error: e });
  }
}