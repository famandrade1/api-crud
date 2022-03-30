import express from 'express';

class RequestTime{
    

    time (req, res, next) {
        req.requestTime = { time: Date.now() };
        next();
    };
}
