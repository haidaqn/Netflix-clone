import { async } from '@firebase/util';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserManagement } from '../Context/AuthContext'

const Signup = () => {

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, signUp } = UserManagement();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signUp(email, password);
            navigator('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='w-full h-screen'>
                <img
                    className='hidden sm:block absolute w-full h-full object-cover'
                    alt='/'
                    // https://bom.so/KuIO0Q ảnh signup to netflix
                    //https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/de4f7034-2dbd-40c1-97cb-09185b4acbf7/VN-vi-20221114-popsignuptwoweeks-perspective_alpha_website_large.jpg
                    src='https://bom.so/KuIO0Q' />        
                <div className='bg-black/60 fixed top-0 left-0 right-0 w-full h-screen '></div>
                <div className='z-[50] fixed w-full py-24 px-4'>
                    <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-bold '>Sign Up</h1>
                        <from
                            onSubmit={handleSubmit}
                            className="w-full flex flex-col py-4">
                            <input  onChange={ (e) => setEmail(e.target.value)}
                                    className='py-3 my-2 rounded bg-gray-700'
                                    type='email'
                                    placeholder='     Email' />
                            <input  onChange={ (e) => setPassword(e.target.value)}
                                    className='py-3 my-2 rounded bg-gray-700'
                                    type="password"
                                    placeholder='     PassWord'
                                    autoComplete='current-password' />
                                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                                <div className='text-[#b3b3b3] flex justify-between items-center text-sm'>
                                    <p className='text-[13px] text-[#b3b3b3]'>
                                        <input type='checkbox' className='mr-[5px]'/>
                                        Remember me
                                    </p>
                                    <a href='https://www.netflix.com/vn-en/LoginHelp'>Need help?</a>
                                </div>
                                <p className='py-8 text-[16px]'>
                                    <span className='text-gray-600 mr-[5px]'>Already subscribed to Netflix?</span>
                                    <Link to="/login">Sign In Now</Link>
                                </p>
                            </from>
                        </div>
                    </div>
                </div>
        </div>
  )
}

export default Signup
