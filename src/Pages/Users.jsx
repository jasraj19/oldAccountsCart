import React, {useState} from "react";
import Navbar from "../Components/Navbar";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Footer from "../Components/Footer";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
function Users() {
  const user = [
    {
      id: 1,
      firstName: "Jasraj",
      lastName: "Singh",
      email: "Don@example.com",
      role: "Moderator",
      action: "edit"
    },
    {
      id: 2,
      firstName: "YashRaj",
      lastName: "Singh",
      email: "Dondedon@example.com",
      role: "Admin",
      action: "edit"
    },
    {
      id: 3,
      firstName: "Sanjay",
      lastName: "Thakur",
      email: "Dondondon@example.com",
      role: "client",
      action: "edit"
    },
    {
      id: 4,
      firstName: "Ranjodh",
      lastName: "Doe",
      email: "Don@example.com",
      role: "Moderator",
      action: "edit"
    },
    {
      id: 5,
      firstName: "Bittu",
      lastName: "Kumar",
      email: "Dondedon@example.com",
      role: "Admin",
      action: "edit"
    },
    {
      id: 6,
      firstName: "Harninder",
      lastName: "Singh",
      email: "Dondondon@example.com",
      role: "client",
      action: "edit"
    },
  ];

    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const [addUser ,setAddUser] = useState(user);
    const [AddForm, setAddForm] = useState({
      id:'',
      firstName:'',
      lastName:'',
      email:'',
      role:'',
      action:''
    });
  const handleAddFormchange = (event) => {
    event.preventdefault();
      const fieldName = event.target.getattribute('firstName');
      const fieldValue = event.target.value;

      const newAddForm = {...setAddForm};
      newAddForm[fieldName] = fieldValue;

      setAddForm(newAddForm);
  }
  return (
    <>
      <section className="Users">
          <div className="userhead">
            <Navbar />
          </div>

        <div className="container-fluid">
            <p className="userTableHead pt-3 fs-4">User Table</p>
            <div>

      <button className="btn-button adduserbtn" onClick={onOpenModal}>add User</button>
      <Modal open={open} onClose={onCloseModal} center>
      <form className='post'>
               <div className='row'>
                    <h1>Add An User</h1>
                    <div className='col py-2'>
                        <div className=''>
                            <label className="">First Name</label>
                            <input type='text' className='form-control' onChange={handleAddFormchange} placeholder='First Name' />
                        </div>
                        <div className=''>
                            <label>Last Name</label>
                            <input type='text' className='form-control' onChange={handleAddFormchange} placeholder='Last Name' />
                        </div>
                        <div className=''>
                            <label>Email</label>
                            <input type='email' className='form-control' onChange={handleAddFormchange}  placeholder='Email' />
                        </div>
                        <div className=''>
                            <label>Role</label>
                            <input class="form-control" id="disabledInput" onChange={handleAddFormchange} type="text" placeholder="Role" disabled/>
                        </div>
                        <button type='submit' className='btn-button btn btn-success border-0'>add</button>
                    </div>
                </div> 
            </form>
      </Modal>
    </div>
              <table className="table">
              <thead>
                <tr>
                  <th >id</th>
                  <th >FirstName</th>
                  <th >lastName</th>
                  <th >email</th>
                  <th >role</th>
                  <th >action</th>
                </tr>
              </thead>
                {user.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{val.id}</td>
                      <td>{val.firstName}</td>
                      <td>{val.lastName}</td>
                      <td>{val.email}</td>
                      <td>{val.role}</td>
                      <td><button className="btn-button actionButton">{val.action}</button></td>
                    </tr>
                  );
                })}
              </table>
        </div>
        <Footer/>
      </section> 
    </>
  );
}

export default Users;
