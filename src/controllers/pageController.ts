import { Request, Response } from "express";

export const home = (req: Request, res: Response)=>{
    res.render('pages/page.mustache')
}

export const dogs = (req: Request, res: Response)=>{
    res.send('dogs')
}

export const cats = (req: Request, res: Response)=>{
    res.send('cats')
}

export const fishes = (req: Request, res: Response)=>{
    res.send('fishes')
}