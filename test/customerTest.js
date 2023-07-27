// const chai=require('chai');
// const chaiHttp=require('chai-http')
// const should=chai.should();

// const Server='http://localhost:8000'

// chai.use(chaiHttp);

// const userLogin={
//     email:'user@example.com',
//     password:`string123`
// }

// const postCustomer={
//     customerName:'durga'
// }

// describe('for GetAll routes',()=>{
//     it('without using tokens test the error response while getting all the customers.',(done)=>{
//         chai.request(Server)
//             .get('/api/customer')
//             .end((err,res)=>{
//                 res.should.have.status(404);
//                 res.body.should.be.a('object');
//                 res.body.should.have.property('message');
//                 res.body.message.should.be.eql("No token provided!");
//                 done();
//             })

//     })
// })

// describe('for Get routes',()=>{
//     it('without using tokens test the error response while getting the customer with id.',(done)=>{
//         const id=1;
//         chai.request(Server)
//             .get('/api/customer/'+id)
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
//     it('without using tokens test the error response while creating the customer.',(done)=>{
//         chai.request(Server)
//             .post('/api/customer')
//             .send(postCustomer)
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
//     it('without using tokens test the error response while updating the customer with id.',(done)=>{
//         const id=2;
//         chai.request(Server)
//             .patch('/api/customer/'+id)
//             .send(postCustomer)
//             .end((err,res)=>{
//                 res.should.have.status(404);
//                 res.body.should.be.a('object');
//                 res.body.should.have.property('message');
//                 res.body.message.should.be.eql("No token provided!");
//                 done();
//             })

//     })
// })

// describe('for delete routes',()=>{
//     it('without using tokens test the error response while deleting the customer with id.',(done)=>{
//         const id=2;
//         chai.request(Server)
//             .delete('/api/customer/'+id)
//             .end((err,res)=>{
//                 res.should.have.status(404);
//                 res.body.should.be.a('object');
//                 res.body.should.have.property('message');
//                 res.body.message.should.be.eql("No token provided!");
//                 done();
//             })
//         })
//     })

// describe('for post routes',()=>{
//     it('using tokens test the error response while creating the customer with duplicate customer name.',(done)=>{
//         chai.request(Server)
//             .post('/api/user/login')
//             .send(userLogin)
//             .end((err,res)=>{
//                 res.body.should.be.a('object');
//                 const token=res.body.token;
//                 chai.request(Server)
//                     .post('/api/customer')
//                     .set('Authorization','JWT ' + token)
//                     .send(postCustomer)
//                     .end((err,res)=>{
//                         res.should.have.status(400);
//                         res.body.should.have.property('errors');
//                         done();
//                     })
//             })
//     })
// })

// describe('for post routes',()=>{
//     it('using tokens test the error response while creating the customer  without customer name.',(done)=>{
//         chai.request(Server)
//             .post('/api/user/login')
//             .send(userLogin)
//             .end((err,res)=>{
//                 res.body.should.be.a('object');
//                 const token=res.body.token;
//                 chai.request(Server)
//                     .post('/api/customer')
//                     .set('Authorization','JWT ' + token)
//                     .send(postCustomer)
//                     .end((err,res)=>{
//                         res.should.have.status(400);
//                         res.body.should.have.property('errors');
//                         done();
//                     })
//             })
//     })
// })

// describe('for get routes',()=>{
//     it('using tokens test the error response while getting the customer  with invalid id.',(done)=>{
//         const id=10;
//         chai.request(Server)
//             .post('/api/user/login')
//             .send(userLogin)
//             .end((err,res)=>{
//                 res.body.should.be.a('object');
//                 const token=res.body.token;
//                 chai.request(Server)
//                     .get('/api/customer/'+id)
//                     .set('Authorization','JWT ' + token)
//                     .end((err,res)=>{
//                         res.should.have.status(500);
//                         res.body.should.be.a('object');
//                         res.body.should.have.property('message');
//                         res.body.message.should.be.eql("Customer not found!");
//                         done();
//                     })
//             })
//     })
// })

// describe('for patch routes',()=>{
//     it('using tokens test the error response while updating the customer  with invalid id.',(done)=>{
//         const id=10;
//         chai.request(Server)
//             .post('/api/user/login')
//             .send(userLogin)
//             .end((err,res)=>{
//                 res.body.should.be.a('object');
//                 const token=res.body.token;
//                 chai.request(Server)
//                     .patch('/api/customer/'+id)
//                     .set('Authorization','JWT ' + token)
//                     .send(postCustomer)
//                     .end((err,res)=>{
//                         res.should.have.status(401);
//                         res.body.should.be.a('object');
//                         res.body.should.have.property('message');
//                         res.body.message.should.be.eql("No details found!");
//                         done();
//                     })
//             })
//     })
// })

// describe('for delete routes',()=>{
//     it('using tokens test the error response while deleting the customer  with invalid id.',(done)=>{
//         const id=10;
//         chai.request(Server)
//             .post('/api/user/login')
//             .send(userLogin)
//             .end((err,res)=>{
//                 res.body.should.be.a('object');
//                 const token=res.body.token;
//                 chai.request(Server)
//                     .delete('/api/customer/'+id)
//                     .set('Authorization','JWT ' + token)
//                     .end((err,res)=>{
//                         res.should.have.status(500);
//                         res.body.should.be.a('object');
//                         res.body.should.have.property('message');
//                         res.body.message.should.be.eql("No details of Customer!");
//                         done();
//                     })
//             })
//     })
// })