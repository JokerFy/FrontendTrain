import Router from 'koa-router'
import User from '../dbs/models/users'
import passport from './utils/passport'
import axios from './utils/axios'

let router = new Router({
  prefix:'/users'
})

router.post('/signup',async (ctx)=>{
  const{
    uesrname,
    password,
    email,
    code
  } = ctx.request.body;

  if(code){
    const saveCode = await S
  }
})
