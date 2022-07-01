import chai from 'chai'
import chaiHttp from 'chai-http';
import {app} from '../bin/app.js'

chai.should();
chai.use(chaiHttp);

describe('METHOD GET',()=>{       

        it('Should GET the location /v1/location',(done)=>{
            chai.request(app)
                .get('/v1/location')
                .end((err, response)=>{
                    response.headers['content-type'].should.equal('application/json; charset=utf-8')
                    response.should.have.status(200);
                    done();
                })
        });

        it('Should GET error 404 /v1/locat',(done)=>{
            chai.request(app)
                .get('/v1/locat')
                .end((err, response)=>{
                    response.headers['content-type'].should.equal('application/json; charset=utf-8')
                    response.should.have.status(404);
                    done();
                })
        });

        it('Should GET error 500 /v1/current',(done)=>{
            chai.request(app)
                .get('/v1/current')
                .end((err, response)=>{
                    response.headers['content-type'].should.equal('application/json; charset=utf-8')
                    response.should.have.status(500);
                    done();
                })
        });

        it('Should GET the current Weather of Rome City /v1/current/roma',(done)=>{
            chai.request(app)
                .get('/v1/current/roma')
                .end((err, response)=>{
                    response.headers['content-type'].should.equal('application/json; charset=utf-8')
                    response.should.have.status(200);
                    done();
                })
        });

        it('Should GET error 500 /v1/forecast',(done)=>{
            chai.request(app)
                .get('/v1/forecast')
                .end((err, response)=>{
                    response.headers['content-type'].should.equal('application/json; charset=utf-8')
                    response.should.have.status(500);
                    done();
                })
        });

        it('Should GET the forecast of Amsterdam city /v1/forecast/amsterdam',(done)=>{
            chai.request(app)
                .get('/v1/forecast/amsterdam')
                .end((err, response)=>{
                    response.headers['content-type'].should.equal('application/json; charset=utf-8')
                    response.should.have.status(200);
                    done();
                })
        });

});

