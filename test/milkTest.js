// const chai=require('chai');
// const chaiHttp=require('chai-http')
// const should=chai.should();

// const Server='http://localhost:8000'

// chai.use(chaiHttp);

// const userLogin={
//     email:'user@example.com',
//     password:`string123`
// }

// const postMilk={
//     litre:'2',
//     customerId:1
// }

// describe('For get routes',()=>{
//     it('without using tokens test the error response while getting all the Milks.',(done)=>{
//         chai.request(Server)
//             .get('/api/milk')
//             .end((err,res)=>{
//                 res.should.have.status(404);
//                 res.body.should.be.a('object');
//                 res.body.should.have.property('message');
//                 res.body.message.should.be.eql("No token provided!");
//                 done();
//             })
//     })
// })

// describe('For get routes',()=>{
//     it('without using tokens test the error response while getting the milk with id.',(done)=>{
//         const id=1;
//         chai.request(Server)
//             .get('/api/milk/'+id)
//             .end((err,res)=>{
//                 res.should.have.status(404);
//                 res.body.should.be.a('object');
//                 res.body.should.have.property('message');
//                 res.body.message.should.be.eql("No token provided!");
//                 done();
//             })
//     })
// })

// describe('For patch routes',()=>{
//     it('without using tokens test the error response while updating the milk with id.',(done)=>{
//         const id=1;
//         chai.request(Server)
//             .patch('/api/milk/'+id)
//             .send(postMilk)
//             .end((err,res)=>{
//                 res.should.have.status(404);
//                 res.body.should.be.a('object');
//                 res.body.should.have.property('message');
//                 res.body.message.should.be.eql("No token provided!");
//                 done();
//             })
//     })
// })

// describe('For delete routes',()=>{
//     it('without using tokens test the error response while updating the milk with id.',(done)=>{
//         const id=1;
//         chai.request(Server)
//             .delete('/api/milk/'+id)
//             .end((err,res)=>{
//                 res.should.have.status(404);
//                 res.body.should.be.a('object');
//                 res.body.should.have.property('message');
//                 res.body.message.should.be.eql("No token provided!");
//                 done();
//             })
//     })
// })

// describe('for post routes',()=>{
//     it('using tokens test the error response while creating the section with invalid CustomerID.',(done)=>{
//         chai.request(Server)
//             .post('/auth/user/login')
//             .send(userLogin)
//             .end((err,res)=>{
//                 res.body.should.be.a('object');
//                 const token=res.body.token;
//                 chai.request(Server)
//                     .post('/api/milk')
//                     .set('Authorization','JWT ' + token)
//                     .send(postMilk)
//                     .end((err,res)=>{
//                         res.should.have.status(400);
//                         res.body.should.have.property('errors');
//                         done();
//                     })
//             })
//     })
// })


// describe('for post routes',()=>{
//     it('using tokens test the error response while creating the section without litre.',(done)=>{
//         chai.request(Server)
//             .post('/auth/user/login')
//             .send(userLogin)
//             .end((err,res)=>{
//                 res.body.should.be.a('object');
//                 const token=res.body.token;
//                 chai.request(Server)
//                     .post('/api/milk')
//                     .set('Authorization','JWT ' + token)
//                     .send(postMilk)
//                     .end((err,res)=>{
//                         res.should.have.status(400);
//                         res.body.should.have.property('errors');
//                         done();
//                     })
//             })
//     })
// })

// describe('for get routes',()=>{
//     it('using tokens test the error response while getting the milk with invalid id.',(done)=>{
//         const id=15;
//         chai.request(Server)
//             .post('/auth/user/login')
//             .send(userLogin)
//             .end((err,res)=>{
//                 res.body.should.be.a('object');
//                 const token=res.body.token;
//                 chai.request(Server)
//                     .get('/api/milk/'+id)
//                     .set('Authorization','JWT ' + token)
//                     .end((err,res)=>{
//                         res.should.have.status(500);
//                         res.body.should.be.a('object');
//                         res.body.should.have.property('message');
//                         res.body.message.should.be.eql("Milk not found!");
//                         done();
//                     })
//             })
//     })
// })

// describe('for get routes',()=>{
//     it('using tokens test the error response while updating the milk with invalid id.',(done)=>{
//         const id=15;
//         chai.request(Server)
//             .post('/auth/user/login')
//             .send(userLogin)
//             .end((err,res)=>{
//                 res.body.should.be.a('object');
//                 const token=res.body.token;
//                 chai.request(Server)
//                     .patch('/api/milk/'+id)
//                     .set('Authorization','JWT ' + token)
//                     .send(postMilk)
//                     .end((err,res)=>{
//                         res.should.have.status(404);
//                         res.body.should.be.a('object');
//                         res.body.should.have.property('message');
//                         res.body.message.should.be.eql("Milk not found!");
//                         done();
//                     })
//             })
//     })
// })


// describe('for get routes',()=>{
//     it('using tokens test the error response while updating the milk with invalid id.',(done)=>{
//         const id=15;
//         chai.request(Server)
//             .post('/auth/user/login')
//             .send(userLogin)
//             .end((err,res)=>{
//                 res.body.should.be.a('object');
//                 const token=res.body.token;
//                 chai.request(Server)
//                     .delete('/api/milk/'+id)
//                     .set('Authorization','JWT ' + token)
//                     .end((err,res)=>{
//                         res.should.have.status(404);
//                         res.body.should.be.a('object');
//                         res.body.should.have.property('message');
//                         res.body.message.should.be.eql("milk not found!");
//                         done();
//                     })
//             })
//     })
// })