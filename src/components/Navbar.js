import { Link } from 'react-router-dom'

export function Navbar() {
    const styling = {
        border: "3px",
        listStyleType:"none",
        color:"grey", 
        
       
    }
    return (
        <navbar className=" d-flex flex-row justify-content-between align-items-center gap-2">
            <div>
                <span className='fw-bold fs-3'>Welcome </span>
            </div>
            <div>
                <ul className="d-flex flex-row gap-4 align-items-center">
                    <li><Link to="/" style={styling}>Home</Link></li>
                    <li><Link to="/users" style={styling}>List of Users</Link></li>
                    <li><Link to="/create-user" style={styling}>Create User</Link></li>
                    <li><Link to={"/edit-user/"} style={styling}>Edit User</Link></li>
                    <li><Link to="edit-profile" style={styling}>Edit Profile</Link></li>
                </ul>
            </div>
        </navbar>
    );
}