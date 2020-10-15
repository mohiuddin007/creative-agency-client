import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        const newReview = {...data};
        fetch('http://localhost:8000/addNewReview',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newReview)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data){
          alert('Your review saved in database and home page');
        }
      })

}
    return (
        <div className="row">
            <div className="col-md-3">
               <Sidebar/>
            </div>
            <div className="col-md-9">
            <div className="pageHeading">
                 <div className="row justify-content-between">
                    <div className="col-md-4"> <h1 className="pt-5">Review</h1> </div>
                    <div className="col-md-4"><h5 className="pt-5">{loggedInUser.name}</h5></div>
                </div>
            </div>
            <div className="mainBody">
                <div className="row p-5">
                  <div className="col-md-7 mt-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input type="text" name="name" className="form-control" placeholder="Your Name" ref={register({ required: true })}/>
                            {errors.name && <span className="error">Name is required</span>}
                        </div>
                        <div className="form-group">
                            <input type="text" name="designation" className="form-control" placeholder="Company's Name Designation" ref={register({ required: true })}/>
                            {errors.name && <span className="error">Designation is required</span>}
                        </div>
                        <div className="form-group">
                            <textarea type="text" name="description" className="form-control" rows="5" placeholder="Description" ref={register({ required: true })}/>
                            {errors.name && <span className="error">Description is required</span>}
                        </div>
                        <button type="submit" className="btn btn-dark px-4">Submit</button>
                    </form>
                  </div>
                </div>
            </div>
        
            </div>
        </div>
    );
};

export default Review;