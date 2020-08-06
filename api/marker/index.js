const {
    Router
} = require("express");
const router = Router();
const ctrl = require("./marker.ctrl");

router.post("/", ctrl.create);
router.post("/list", ctrl.list);
router.post("/detail", ctrl.detail);
//router.delete("/start", ctrl.scheduler);

module.exports = router;