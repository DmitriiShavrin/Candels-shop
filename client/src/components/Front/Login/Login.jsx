import React from 'react';
import { observer } from 'mobx-react-lite';
import './Login.css';
import storeLogin from '../../../store/storeLogin';

const Login = observer(() => {
    return (
        <>
            <div className="login_form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6 login">
                            <form onSubmit={(e) => storeLogin.login(e)}>
                                <h1>Login</h1>
                                <div className="my-2">
                                    <label className="form-label">Login: </label>
                                    <input type="text" className="form-control" placeholder='Enter login' onInput={(e) => { storeLogin.setFormLogin('email', e.target.value) }} />
                                </div>
                                <div className="my-2">
                                    <label className="form-label">Password: </label>
                                    <input type="text" className="form-control" placeholder='Enter password' onInput={(e) => { storeLogin.setFormLogin('pass', e.target.value) }} />
                                </div>
                                <div className="my-2">
                                    <button className="btn btn-success mt-3">Login</button>
                                </div>
                                <p className='text-danger'></p>
                            </form>
                            <p className="text-danger text-center">{storeLogin.error}</p>
                            <p className="text-success text-center">{storeLogin.notify}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})

export default Login