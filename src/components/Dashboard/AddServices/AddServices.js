import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const AddServices = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [serviceInfo, setServiceInfo] = useState({});
    const[file, setFile] = useState(null)

   const handleBlur = e =>{
    const newService = {...serviceInfo};
    newService[e.target.name] = e.target.value;
    setServiceInfo(newService);
   }

   const handleFileChange = e =>{
       const newFile = e.target.files[0];
       setFile(newFile);
   }
 
   const handleSubmit = () => {
    const formData = new FormData()
    formData.append('file', file);
    formData.append('title', serviceInfo.title);
    formData.append('description', serviceInfo.description);
  
    fetch('http://localhost:8000/addServices', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error(error)
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
                    <div className="col-md-4"> <h1 className="pt-5">Add Services</h1> </div>
                    <div className="col-md-4"><h5 className="pt-5">{loggedInUser.name}</h5></div>
                </div>
            </div>
            <div className="mainBody">
                <div className="row p-5">
                    <div className="col-md-12 mt-4">
                    <form onSubmit={handleSubmit}>
                         <div className="row bg-light p-4">
                            <div className="col-md-6">
                                <div className="form-group">
                                <label for="serviceTitle">Service Title</label>
                                    <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Title" required/>
                                </div>
                                <div className="form-group">
                                <label for="description">Description</label>
                                    <textarea onBlur={handleBlur} className="form-control" name="description" rows="5" placeholder="Enter Description"></textarea>
                                </div>
                            </div>
                            <div className="col-md-6">
                                 <div className="form-group">
                                    <label for="files"> Upload Image</label>
                                    <input onChange={handleFileChange} type="file" className="form-control-file w-25 py-4" name="file" id="files" required/>
                                </div>
                            </div>
                         </div>
                        <button type="submit" className="btn btn-success px-4">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AddServices;