import React from "react";
import Signindata from "./Signindata";
import './Login.css';
import { useForm } from 'react-hook-form';
import { useState } from "react";
import { Link } from "react-router-dom";
import validator from 'validator';
import PasswordChecklist from 'react-password-checklist';
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { mycontext } from "./ExContext";
import {  AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css";
import Custombutton from "./Custombutton";

const LoginPage = () => {

    //useContext to share data 
    const [contextValue, setContextValue] = useState({ data: [] });

    

    const [pass, setPass] = useState('');
    const [checkpass, setCheckpass] = useState('password'); //Login page icon control
    const [Icon, setIcon] = useState('');

    const [signinpass,setSignpass]=useState('password');
    const [signIcon,setSignIcon]=useState('');
   

    const [emailError, setEmailError] = useState(' ');

    const [signemailerror, setSignemailerror] = useState(' '); //Sign page email
    const [phverify, setPhverify] = useState(' ');   //Sign page Phone Number

    const [vfpass, setVfpass] = useState(' ');  //Sign page Password
    const [cnfpass, setCnfpass] = useState('');  //Sign page Confirm Password

    const[name,setName]=useState('');
    const [password, verifyPassword] = useState('');
    const [show, setShow] = useState(false);

    const [signindata, setSignindata] = useState({
        Firstname: '',
        Lastname: '',
        Email: '',
        PhoneNUmber: '',
        password: '',
        cnfpassword: ''
    });  // sign in page data store

    const [showData, setShowData] = useState(false);

    const [user, setUser] = useState([]);

    const [data, setData] = useState([]);
    const [dataSubmitted, setDataSubmitted] = useState(false);
    const [exdata, setExdata] = useState("Siddhu");
    const onClick = () => alert("Edit button Clicked");
    const [rowdata,setRowdata]=useState('');
    const [tablehead,setTablehead]=useState(
        [{
            field:'Firstname',
            editable: true
        },
        {
            field:'Lastname',
            editable: true
        },
        {
            field:'Email',
            editable: true

        },
        {
            field:'PhoneNUmber',
            
        },
        {
            field:'password',
            type:"hidden"
        },{
            field:'cnfpassword'
        }]
    )

    const handleShowData = () => {
        setShowData(true);
    };

    const MyEditor=props=>
        <span>{props.value}</span>;


    // on click function to store sign in data
    const handleSignin = (e) => {
        const { name, value } = e.target;
        if (name === 'PhoneNUmber' && value.length > 10) {
            return;
        }
        setSignindata(prevData => ({
            ...prevData,
            [name]: value
        }));

        // Email Sign
        var email=e.target.value;
        if (validator.isEmail(email)) {
            setSignemailerror(' ')
        }
        
        // if(signindata.Firstname.trim()){
        //     setName(' ')
        // }

        if (validator.isMobilePhone(signindata.PhoneNUmber, "en-IN")) {
            setPhverify(' ')
           
        } 



    };


    // Login Page Email verififcation FUnction
    const validateEmail = (e) => {
        var email = e.target.value

        if (validator.isEmail(email)) {
            setEmailError(' ')
        } else {
            setEmailError('Enter valid Email!')
        }
    };

    // const validatesigninemail=()=>{
    //     handleSignin();
    //     validateEmail();
    // }




    const { register, formState: { errors }, handleSubmit } = useForm();


    //Login page password icon control 
    const handleChange = () => {
        if (checkpass === 'password') {
            <svg style={{ marginTop: '-60px', marginLeft: '160px' }} onClick={handleChange} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
            </svg>
            setCheckpass('text')
        } else {
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
            </svg>
            setCheckpass('password')
        }
    }

    //Sign in page password icon control 
    const handlepassword = () => {
        if (signinpass === 'password') {
            setSignpass('text')
        } else {
            setSignpass('password')
        }
    }


    //login data printing in console
    const registeruser = (data) => {
        console.log(data);
    };


    //Sign in button on click function
    const handleSignindata = (e) => {
        e.preventDefault();

        //Sign in page Name 
        // if(!signindata.Firstname.trim()){
        //     setName("Please enter first name");
        //     return;
        // }
        // else{
        //     setName('');
        // }

        //sign page email verification
        if (!validator.isEmail(signindata.Email)) {
            setSignemailerror('Please enter a valid email.');
            return;
        } else {
            setSignemailerror('');
        }


        // Verify phone number format
        if (!validator.isMobilePhone(signindata.PhoneNUmber, "en-IN", { strictMode: false })) {
            setPhverify("Invalid Mobile No.")
            return;
        } else {
            setPhverify(" ")
        }

        //Password verification
        if (!validator.isStrongPassword(signindata.password)) {
            setVfpass('please Enter valid Password');
            return;
        }
        else {
            setVfpass('');
        }

        //Confirm password verification
        if (signindata.password !== signindata.cnfpassword) {
            setCnfpass('Password did not match');
            return;

        } else {
            setCnfpass(' ');
        }

        //Sign in page email toastify data
        const duplicate = data.some(key =>
            key.Email.toLowerCase() === signindata.Email.toLowerCase()
        );

        //sign in page phone Number toastify data
        const dataPass = data.some(role =>
            role.PhoneNUmber === signindata.PhoneNUmber
        );
        
        //Sign in page First name, Last name verification Toasity
        const isDuplicate = data.some(entry =>
            entry.Firstname.toLowerCase() === signindata.Firstname.toLowerCase() &&
            entry.Lastname.toLowerCase() === signindata.Lastname.toLowerCase()
        );
       
        //Toastify 
        if (isDuplicate) {
            //Toastify for name
            toast.error('Name already exists!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            // setSignindata({
            //     Firstname: '',
            //     Lastname: '',
            //     Email: '',
            //     PhoneNUmber: '',
            //     password: ''
            // });
        }
        else if (duplicate) {
            //toastify for email
            toast.error('Email already exists!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

        }
        else if (dataPass) {
            //toastify for phone number
            toast.error('Phone Number already exists!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

        }

        else {
            setData([...data, signindata]);
            toast.success('successfully Registered!');
            handleClose();
        }
        console.log(data);

        setContextValue({ data: data });


    };
    const handleClear=()=>{
        setSignindata({
                Firstname: '',
                Lastname: '',
                Email: '',
                PhoneNUmber: '',
                password: '',
                cnfpassword:''
            });

    }

    const handlePrint = (e) => {
        console.log(e.target.value);

    };

    //Forget password on click function
    const handleforgotpass = () => {
        alert("Please contact admin for resetting password");

    }

    const handleagGrid=(params)=>{
        handleshow();
        // setSigninparam(params);

    //     if(onClick === 'Edit'){
    //         setSignindata(params.data);
    //         }else{
    //             setSignindata({
    //                     Firstname: '',
    //                     Lastname: '',
    //                     Email: '',
    //                     PhoneNUmber: '',
    //                     password: ''
    //                 });
            
    // }

    // if (
    //     params.column === 'action' &&
    //     params.event.target.dataset.action
    //   ) {
    //     let action = params.event.target.dataset.action;
  
        if (onClick === 'Edit') {
        //   params.api.startEditingCell({
        //     rowIndex: params.node.rowIndex,
        //     // gets the first columnKey
        //     colKey: params.columnApi.getDisplayedCenterColumns()[0].colId,
        //   });
        }
  
        // if (onClick === 'Save') {
        //     if(signindata.id === params.id){
        //         setSignindata(signindata)
            
        //     }
        // }

}
    
    // Modal show control
    const handleshow = () => {
        setShow(true);

    }

    // Modal Close control
    const handleClose = () => {
        setShow(false);
    };

    // const handleSave=()=>{
    //     if(tablehead.data !== signindata.data){
            
    //         setTablehead(signindata)
    //         console.log(tablehead.Firstname)
    //         console.log(signindata.Firstname)
    //         console.log("Save Clicked")
    //     }
       

    //     handleClose();

    
    const handleEdit = (data) => {
        setSignindata(data);
        setShow(true);
      };
      const handleSave = (e) => {
        e.preventDefault();
        const updatedData = data.map(item => (item.id === signindata.id ? signindata : item)); 
        setData(updatedData); 
        setShow(false); 
    };
    


    return (
        <div className="container-fluid text-center" style={{ marginTop: '15vh' }}>

            {/* Login Page */}

            <h3>Login Page</h3>
            <form onSubmit={handleSubmit(registeruser)}>

                <label htmlFor="email" style={{ marginTop: '60px' }}>Email</label><br />
                <input type="text" id="email" {...register('email')}
                    placeholder="Enter Email" onChange={(e) => validateEmail(e)} /><br />

                {/* <p className="text-danger">{errors['email'] && 'please Enter Email'}</p> */}
                <span className="text-danger">{emailError}</span>
                {/* style={{
                    fontWeight: 'bold',
                    color: 'red', */}



                <div className="">
                    <label htmlFor="password" style={{ marginTop: '5vh' }}>Password</label><br />
                    <input type={checkpass} id="password" {...register('password', { required: true })}
                        placeholder="Enter Password" value={pass} onChange={(e) => setPass(e.target.value)}  /><br />

                    <span class=" justify-around items-center"  >
                        <svg style={{ marginTop: '-60px', marginLeft: '160px' }} onClick={handleChange} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                        </svg>

                    </span>
                    <PasswordChecklist
                        rules={["minLength", "specialChar", "number", "capital"]}
                        minLength={5}
                        value={pass}

                        onChange={(isValid) => { }}
                    />

                    <p className="text-danger">{errors['password'] && 'Please Enter password'}</p>
                </div>

                <span style={{ fontSize: '13px', color: 'blueviolet', cursor: 'pointer' }} onClick={handleforgotpass}>Forgot Password</span> <br />

                <button className="m-4" onClick={(e) => (handlePrint)}>Login</button> <br />

                <span style={{ fontSize: '13px' }}>New User? <a to='signin' style={{ color: 'blueviolet', cursor: 'pointer' }} onClick={handleshow}>Sign in</a></span> <br />
            </form>

            <Modal show={show} onHide={handleClose} className="modal-xl" >
                <form className="text-center " style={{ display: 'flex', flexWrap: 'wrap', rowGap: '20px', flexDirection: 'column', height: '95vh' }}>
                    <Modal.Header closeButton>
                        <Modal.Title>Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">


                            <div className="in">
                                <label for='fname' className="">First Name</label> <br />
                                <input type="text" id="fname" name="Firstname" value={signindata.Firstname} onChange={handleSignin} placeholder="First name" style={{ width: '60%' }} />
                                {name && <p className="text-danger">{name}</p>}
                            </div>
                            <div className="in">


                                <label for='lname' className="">Last Name</label> <br />
                                <input type="text" id="lname" name="Lastname" value={signindata.Lastname} onChange={handleSignin} placeholder="Last name" style={{ width: '60%' }} />
                            </div>
                            <div className="in">

                                <label for='email' className="">Email</label> <br />
                                <input type="text" id="email" name="Email" placeholder="Email" value={signindata.Email} onChange={handleSignin} style={{ width: '60%' }} />
                                {signemailerror && <p className="text-danger">{signemailerror}</p>}
                            </div>
                            <div className="in">

                                <label for='number' className="">Phone Number</label> <br />
                                <input type="text" id="number" name="PhoneNUmber" placeholder="Phone Number" value={signindata.PhoneNUmber} onChange={handleSignin} style={{ width: '60%' }} />
                                {phverify && <p className="text-danger">{phverify}</p>}
                            </div>
                            <div className="in">

                                <label for='Password' className="">Password</label> <br />
                                <input type={signinpass} id="Password" name="password" placeholder="Password" value={signindata.password} onChange={handleSignin} style={{ width: '60%' }} />
                                {vfpass && <p className="text-danger">{vfpass}</p>}
                                <br/>
                                
                
                           <a onClick={handlepassword} style={{cursor:'pointer',fontSize:'12px',color:'blue'}}>Show password</a>

                   
                            </div>
                            <div className="in">

                                <label for='conpass' className="">Confirm Password</label> <br />
                                <input type="text" id="conpass" placeholder="Password" name="cnfpassword" value={signindata.cnfpassword} onChange={handleSignin} style={{ width: '60%' }} />
                                {cnfpass && <p className="text-danger">{cnfpass}</p>}
                            </div>

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={(e)=>handleSave(e)}>Update</Button>
                        <Button variant="info" onClick={handleClear}>Clear</Button>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>

                        <div>
                            <mycontext.Provider value={{ ...contextValue, setData: setContextValue }}>
                                <Signindata />
                            </mycontext.Provider>
                            <Button variant="primary" onClick={handleSignindata}>Submit</Button>


                        </div>


                    </Modal.Footer>
                </form>


            </Modal>
            {/* {showData && <Signindata data="siddhu"/>} */}
            {/* <mycontext.Provider value={{ ...contextValue, setData: setContextValue }}>
            <Signindata/>
        </mycontext.Provider> */}

            {/* <table className=" my-4 table table-bordered">
                <thead >
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.Firstname}</td>
                            <td>{entry.Lastname}</td>
                            <td>{entry.Email}</td>
                            <td>{entry.PhoneNUmber}</td>
                            <td>{entry.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
            <div className="ag-theme-quartz" style={{ height:'500px' }}>
            <AgGridReact
        rowData={data}
        columnDefs={[...tablehead,
            {
                headerName: 'Action', 
                field: 'action',
                cellRenderer: Custombutton,
                colId : "action",
                cellRendererParams:
                       { onClick: handleEdit}


            }
        ]}
        onRowDoubleClicked={(e) => handleEdit(e.data)}
      >
        {/* <AgGridColumn field="Firstname" sortable={true} filter={true}></AgGridColumn>
        <AgGridColumn field="Lastname" sortable={true} filter={true}></AgGridColumn>
        <AgGridColumn field="Email" sortable={true} filter={true}></AgGridColumn>
        <AgGridColumn field="PhoneNUmber" sortable={true} filter={true}></AgGridColumn>
        <AgGridColumn field="password" sortable={true} filter={true}></AgGridColumn>
        <AgGridColumn field="cnfpassword" sortable={true} filter={true}></AgGridColumn>
        <AgGridColumn
          headerName="Actions"
          cellRenderer={(params) => (
            <button onClick={() => handleEdit(params.data)}>Edit</button>
          )}
        ></AgGridColumn> */}
      </AgGridReact>
                {/* <AgGridReact
                rowData={data}
                columnDefs={[...tablehead,
                    {
                        headerName: 'Action', 
                        field: 'action',
                        cellRenderer: Custombutton,
                        colId : "action",
                        cellRendererParams:
                       { onClick: handleagGrid}


                    }
                ]}
                // frameworkComponents={{
                //     MyEditor,
                // }}
                ></AgGridReact> */}

            </div>



            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    )
}

export default LoginPage;