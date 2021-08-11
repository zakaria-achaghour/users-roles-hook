import React from 'react'


function AddRole() {
    return (
        <div className="card mb-3">
            <div className="card-header">Add Role</div>
            <div className="card-body">
                <form>

                    <div className="form-group">
                        <label htmlFor="name">Role name</label>
                        <input type="text" name="name" id="name" className="form-control" />
                    
                    </div>
                
                    <input type="submit" value="Add Role" className="btn btn-success btn-block mt-2"/>
                </form>
            </div>
      </div>
    )
}

export default AddRole
