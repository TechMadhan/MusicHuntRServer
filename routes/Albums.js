const express = require('express')
const album = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const axios = require('axios');
const Album = require('../models/Album')
const Favourite = require('../models/Album');
const Track = require('../models/Track');
album.use(cors())
const request = require('request');
process.env.SECRET_KEY = 'secret'
const http = require('http');
const fs = require('fs');

var download = require('download-file')
var fma = require('free-music-archive');

let albumArr = [];



album.get('/getAllAlbums', (req, res) => {
  Album.find().then(response => {
      res.send(response);
  })
})

album.get('/search', (req, res) => {
  let search = req.query.searchKey;

  Album.find({
    album_title : {$regex : new RegExp(".*"+search+".*","i") }
  }).then(response=>{
    res.send(response);    
  })
});

// var fma = require('free-music-archive');
//
// album.get('/getAllAlbums', (req, res) => {
//   // Album.find().then(response => {
//   //   response.filter(function(val, index, err){
//   //       trackUrl = "https://freemusicarchive.org/api/get/tracks.json?api_key=WS35J1MULKPQQOEI&album_id="+val.albumId;
//   //       request(trackUrl, (err, response1, body) =>{
//   //           // var options = {
//   //           //   directory : "/home/lenovo/Downloads/TracksDump",
//   //           //   filename
//   //           // }
//   //           console.log(response1);
//   //       })
//   //   })
//   // })
//   fma.tracks({limit: 2}, function(err, results) {
//     if (err) console.error(err);
//     console.log("=================================recent======================================");
//     console.log(results);
//     console.log("=================================end of recent======================================");
//   })
//
// })







// album.get('/getAllAlbums', (req, res) => {
      // request("https://freemusicarchive.org/api/get/tracks.json?api_key=CFEFES9JPKBN4T7H&album_id=2461", {json : true}, (err, response1, body) =>{
      //       res.send(response1);
      // })



    // Album.find().then(response => {

//
      // response.filter(function(val, index, err){
      //   request("https://freemusicarchive.org/api/get/tracks.json?api_key=CFEFES9JPKBN4T7H&album_id=" +val.album_id, {json : true}, (err, response1, body) =>{
            // res.send(response);
      //   })
      // albumArr.push(val.album_id);
    // })
      // albumArr.filter(function(val,index,err){
      //     request("https://freemusicarchive.org/api/get/tracks.json?api_key=CFEFES9JPKBN4T7H&album_id=" +val.album_id, {json : true}, (err, response1, body) =>{
      //           res.send(response1);
      //     })
      // })
  // })

    // let count = 0;
    // Album.find().then(response => {
    //   response.forEach(function(val){
          // request("https://freemusicarchive.org/api/get/tracks.json?api_key=CFEFES9JPKBN4T7H&album_id="+val.album_id, {json:true}, (err,res1, body) => {
                // let obj = {
                //   album_id : val.album_id,
                //   album_title : val.album_title,
                //   album_url : val.album_url,
                //   track_composer : val.track_composer,
                //   track_duration : val.track_duration,
                //   track_favorites : val.track_favorites,
                //   track_file : val.track_file,
                //   track_id : val.track_id,
                //   track_image_file : val.track_image_file,
                //   track_lyricist  : val.track_lyricist,
                //   track_title : val.track_title,
                //   track_url : val.track_url
                // }
                // count += Number(val.album_tracks);
                // console.log(count);
                // Track.create(obj);
          // })
      // })
    // })
// })

// albums.get('/getAlbumsById', (req, res) => {
//
// })

module.exports = album
