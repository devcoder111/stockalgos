"use strict";

const User = require("../../models/user");
const Algo = require("../../models/algo");
const AlgoReview = require("../../models/algoReview");
const Message = require("./../../common/constant");
const validator = require("./../../common/schemaValidator");

const AlgoValidator = require("./../../validators/Algo");
var Promise = require('promise');

exports.createAlgo = function (req, res) {
  
  let body=req.body;
  const {isError, errors} = validator(body, AlgoValidator.saveAlgo);

  if (isError) {
    return res.json({
      status: 0,
      message: 'Invalid Input, Contact Support',
      error: errors,
      status_code:400
    });
  }

  User.findOne({_id:body.userId}, function (err,user){
    if(err){

      return res.json({
        status: 0,
        message: Message.SERVER_ERROR,
        status_code:500
      });

    }else{

      if(user){
        Algo.create(body, function(err,algo){
          if(err){
            console.log(err);
            return res.json({
              status: 0,
              message: Message.SERVER_ERROR,
              status_code:500
            });
             
          }else{

            return res.json({
              status: 1,
              message: Message.SUCCESS,
              status_code:200
            });
          
          }
        });
      }else{

        return res.json({
          status: 0,
          message: Message.USER_NOT_EXIST,
          status_code:400
        });
      
      }
    }
  });

};

exports.saveAlgoReview = function (req, res) {
  
  let body=req.body;

  const {isError, errors} = validator(body, AlgoValidator.saveAlgoReview);

  if (isError) {
    return res.json({
      status: 0,
      message: Message.INVALID_INPUT,
      error: errors,
      status_code:400
    });
  }
  
  User.findOne({_id:body.userId}, function (err,user){
    if(err){

      return res.json({
        status: 0,
        message: Message.SERVER_ERROR,
        status_code:500
      });

    }else{
      
      if(user){
        
        Algo.findOne({_id:body.algoId}, function (err,algo){
          if(err){
            
            return res.json({
              status: 0,
              message: Message.SERVER_ERROR,
              status_code:500
            });

          }else{

            if(algo){

              AlgoReview.create(body, function(err,algoReview){
                if(err){
                  
                  return res.json({
                    status: 0,
                    message: Message.SERVER_ERROR,
                    status_code:500
                  });
                   
                }else{

                  return res.json({
                    status: 1,
                    message: Message.SUCCESS,
                    status_code:200
                  });
                
                }
              });
            
            }else{
              return res.json({
                status: 0,
                message: 'Algo Not Exist',
                status_code:400
              });
            }

          }
        });
      }else{
        return res.json({
          status: 0,
          message: Message.USER_NOT_EXIST,
          status_code:404
        });
      }
    }
  });

};

exports.getAlgoDetails = function (req, res) {
  
  let body={}
  if(req.params.algoId){
    body.algoId=req.params.algoId;
  }else{
    body.algoId="";
  }
  
  const {isError, errors} = validator(body, AlgoValidator.algoDetails);

  if (isError) {
    return res.json({
      status: 0,
      message: 'Invalid Input, Contact Support',
      error: errors,
      status_code:400
    });
  }

  let query={_id:body.algoId};

  Algo.findOne({_id:body.algoId}, function (err,algo){
    if(err){

      return res.json({
        status: 0,
        message: Message.SERVER_ERROR,
        status_code:500
      });

    }else{

      if(algo){
        AlgoReview.find({algoId:body.algoId},function(err,algoReview){
          if(err){
            return res.json({
              status: 0,
              message: Message.SERVER_ERROR,
              status_code:500
            });
          }else{
            if(algoReview.length>0){
              var promises = [];
              for(let review of algoReview){
                let promise = new Promise(function(resolve, reject) {
                    let reviewRecords={};
                    User.findOne({_id:review.userId}, function (err,user){
                      if(err){
                        reviewRecords.review=review;
                        reviewRecords.user={};
                      }else{
                        
                        reviewRecords.review=review;
                        reviewRecords.user={};
                        reviewRecords.user.name=user.name;
                        reviewRecords.user.email=user.email;
                        
                        resolve(reviewRecords);
                      
                      }
                    });
                
                });
                promises.push(promise);
              }
              
              Promise.all(promises).then(function(response) {
                  return res.json({
                    status: 1,
                    message: Message.SUCCESS,
                    status_code:200,
                    data:algo,
                    reviewsDetails:response
                  });
              });

            }else{
              
              return res.json({
                status: 1,
                message: Message.SUCCESS,
                status_code:200,
                data:algo,
                reviewsDetails:algoReview
              });
           
            }
          }
        });
      }else{
        return res.json({
          status: 0,
          message: 'Algo Not Exist',
          status_code:400
        });
      }
    }
  });

};



