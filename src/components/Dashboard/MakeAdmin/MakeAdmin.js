import React, { useContext } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data, event) => {
        const newAdmin = {...data}
        fetch('https://immense-island-63375.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newAdmin)
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                alert('You have created a new admin');
                event.target.reset();
            }
        })
    }
    return (
        <div className="row">
        <div className="col-md-3">
           <AdminSidebar/>
        </div>
        <div className="col-md-9">
        <div className="pageHeading">
                <div className="row justify-content-between">
                    <div className="col-md-4"> <h1 className="pt-3">Make Admin</h1> </div>
                    <div className="col-md-4"><h5 className="pt-3">{loggedInUser.name}</h5></div>
                </div>
            </div>
            <div className="mainBody container" style={{ height: "80vh" }}>
                <div className="row p-5 justify-content-center">
                    <div className="col-md-10 bg-light mt-5 p-4">
                        <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" name="email" className="form-control" placeholder="anyone@gmail.com" ref={register({ required: true })}/>
                                    {errors.name && <span className="error">Email is required</span>}
                                </div> 
                                <input type="submit" className="btn btn-success px-4" defaultValue="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default MakeAdmin;