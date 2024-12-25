import React from "react";

function Profile() {
  return (
    <div className="container col-md-6">
      <form className="border 5px solid black p-5">
        <h4 className="my-3">Persnol Information</h4>
        <div >

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            First Name
          </label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Last Name
          </label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Contact
          </label>
          <input type="text" className="form-control" />
        </div>

        <h4 className="my-3">Education</h4>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            College
          </label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Passing Year
          </label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Course
          </label>
          <input type="text" className="form-control" />
        </div>

        <h4 className="my-3">Experience</h4>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Company Name
          </label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Duration
          </label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Job Type
          </label>
          <input type="text" className="form-control" />
        </div>

        <h4 className="my-3">Skills</h4>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Inseret Your Skill
          </label>
          <input type="text" className="form-control" />
        </div>

        <button className="btn btn-primary text-center">Update</button>
      </form>
    </div>
  );
}

export default Profile;
