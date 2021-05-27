const {User} = require('../../database/models')
// const User = require('../../database/models')
console.log({User})

//create 구현
exports.create = async (ctx) => { 
  const {
    name,
    password,
    email,
    kakao_token
  } = ctx.request.body;
  // console.log(ctx.request.body)
 
  const user = new User({ 
    name,
    password,
    email,
    kakao_token
  })

  try {
    await user.save();
  } catch(e){
    return ctx.throw(500,e)
  }
  ctx.body = user;
}

//index 구현
exports.index = async (ctx) => {
  let users;
  try{
    users = await User.findAll();
    //https://backend-intro.vlpt.us/2/05.html 도큐에서 find().exec()라고 치라고 나오는데 그러면 ypeError: User.find is not a function 라고 에러뜬다. findAll()이라해야함.
  }catch(e){
    return ctx.throw(500,e)
  }
  ctx.body = users;
};

//show 구현 (에러처리 구현은 아직..)
exports.show = async (ctx) => {
  const { id } = ctx.params;
  let user;
  try{
    user = await User.findByPk(id);
    
  }catch(e){
    if(e.name === 'CastError'){
      ctx.status = 400;
      return
    }
    return ctx.throw(500,e)
  }
  if(!user){
    ctx.status = 404;
    ctx.body = {message: 'user not found'}
    return
  }
  ctx.body = user;
};

//delete 구현
exports.delete = async (ctx) => {
  const { id } = ctx.params;
  try{
    await User.destroy({where: {id}})
    console.log('삭제성공')
  }catch(e){
    if(e.name === 'CastError'){
      ctx.status = 400;
      return
    }
  }
  ctx.status = 204; //no content
};

//update(patch) 구현
// exports.update = async (ctx) => {
//   const {id} = ctx.params

//   let users;
//   try{
//     book = await User.findByPkAndUpdate({where: {id}}, ctx.request.body, {
//       new: true
//     })
//   } catch (e){
//     return ctx.throw(500,e)
//   }
//   ctx.body = user;
// };
