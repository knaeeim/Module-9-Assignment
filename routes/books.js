const express = require('express');

const router = express.Router(); 


const { getallbooks, getbookbyid, createbooklist, updatebook, deletebook } = require("../controllar/books");

router.get("/getallbooks", getallbooks);

router.post("/createbooklist", createbooklist);

router.get("/getbookbyid/:id", getbookbyid);

router.put("/updatebook",updatebook );

router.delete("/deletebook", deletebook);



module.exports = router; 