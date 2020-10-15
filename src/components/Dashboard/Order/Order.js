import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Order.css';

const Order = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {id} = useParams();
    const [servicesInfo, setServicesInfo] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:8000/services')
        .then(res => res.json())
        .then(data => {
            setServicesInfo(data);
        })
    },[])

    const services = servicesInfo.find(service => service._id === id) || {};
    

    const onSubmit = data => {
        const newOrder = {...data};
        fetch('http://localhost:8000/addNewOrder',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newOrder)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data){
          alert('Your order successfully has done');
        }
      })

}

    return (
        <div>
            <div className="pageHeading">
                 <div className="row justify-content-between">
                    <div className="col-md-4"> <h1 className="pt-5">Order</h1> </div>
                    <div className="col-md-4"><h5 className="pt-5">{loggedInUser.name}</h5></div>
                </div>
            </div>
            <div className="mainBody">
                <div className="row p-5">
                  <div className="col-md-7 mt-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input type="text" name="name" className="form-control" placeholder="Your Name/Company Name" defaultValue={loggedInUser.name} ref={register({ required: true })}/>
                            {errors.name && <span className="error">Name is required</span>}
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" className="form-control" placeholder="Your Email Address" defaultValue={loggedInUser.email} ref={register({ required: true })}/>
                            {errors.name && <span className="error">Email is required</span>}
                        </div>
                        <div className="form-group">
                            <input type="text" name="title" className="form-control" placeholder="Services Title" defaultValue={services.title} ref={register({ required: true })}/>
                            {errors.name && <span className="error">Service Title is required</span>}
                        </div>
                        <div className="form-group">
                            <textarea type="text" name="details" rows="5"  className="form-control" placeholder="Project Details" defaultValue={services.description} ref={register({ required: true })}/>
                            {errors.name && <span className="error">Details is required</span>}
                        </div>
                        <div className="form-group">
                            <input type="number" name="price" className="form-control" placeholder="Price" defaultValue="5000" ref={register({ required: true })}/>
                            {errors.name && <span className="error">Price is required</span>}
                        </div>
                        <input type="submit" className="btn btn-dark px-4" value="Send"/>
                    </form>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Order;