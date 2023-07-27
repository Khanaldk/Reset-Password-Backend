// const chai=require('chai');
// const chaiHttp=require('chai-http')
// const should=chai.should();

// const Server='http://localhost:8000'

// chai.use(chaiHttp);

// const userSignup={
    
//     email:'user@example.com',
//     password:`durga123`
// }

// const userLogin={
   
//     password:`string123`
// }

// describe('for signup',()=>{
//     it('test the error response while creating the user with duplicate Username.',(done)=>{
//         chai.request(Server)
//             .post('/api/user/signup')
//             .send(userSignup)
//             .end((err,res)=>{
//                 res.should.have.status(400);
//                 res.body.should.have.property('errors');
//                 done();
//             })
//     })
// })

// describe('for signup',()=>{
//     it('test the error response while creating the user with duplicate email.',(done)=>{
//         chai.request(Server)
//             .post('/api/user/signup')
//             .send(userSignup)
//             .end((err,res)=>{
//                 res.should.have.status(400);
//                 res.body.should.have.property('errors');
//                 done();
//             })
//     })
// })

// describe('for signup',()=>{
//     it('test the error response while creating the user without userName.',(done)=>{
//         chai.request(Server)
//             .post('/api/user/signup')
//             .send(userSignup)
//             .end((err,res)=>{
//                 res.should.have.status(400);
//                 res.body.should.have.property('errors');
//                 done();
//             })
//         })
//     })

// describe('for login',()=>{
//     it('test the error response while logging the user .',(done)=>{
//         chai.request(Server)
//             .post('/api/user/login')
//             .send(userLogin)
//             .end((err,res)=>{
//                 res.should.have.status(200);
//                 res.body.should.be.a('object');
//                 res.body.should.have.property('message');
//                 res.body.message.should.be.eql("Login successfully");
//                 done();
//             })
//         })
//     })

    // describe('for login',()=>{
    //     it('test the error response while logging the user .',(done)=>{
    //         chai.request(Server)
    //             .post('/api/user/login')
    //             .send(userLogin)
    //             .end((err,res)=>{
    //                 res.should.have.status(501);
    //                 res.body.should.be.a('object');
    //                 res.body.should.have.property('message');
    //                 res.body.message.should.be.eql("Not registered User!");
    //                 done();
    //             })
    //         })
    //     })
    
    // describe('for login',()=>{
    //     it('test the error response while logging the user .',(done)=>{
    //         chai.request(Server)
    //             .post('/api/user/login')
    //             .send(userLogin)
    //             .end((err,res)=>{
    //                 res.should.have.status(502);
    //                 res.body.should.be.a('object');
    //                 res.body.should.have.property('message');
    //                 res.body.message.should.be.eql("Email or password required!");
    //                 done();
    //             })
    //         })
    //     })
    




