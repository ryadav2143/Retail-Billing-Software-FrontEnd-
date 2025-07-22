const UserForm =()=>{
    return (
        <div className="mx-2 mt-2">
            <div className="row">
                <div className="card col-md-8 form-container">
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" name="name" id="name" className="form-control" placeholder="Jhon Doe"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input  name="email" id="email" className="form-control" placeholder="yournameexample@gmail.com"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input  name="password" id="password" className="form-control" placeholder="Password"/>
                            </div>
                            <button type="submit" className="btn btn-warning w-100">Submit</button>

                        </form>

                    </div>
                </div>
            </div>
            <div className="col">

            </div>
        </div>
    )
}

export default UserForm;