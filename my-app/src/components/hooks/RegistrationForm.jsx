import {useState} from "react";
import '../../index.css'; 
// import '../../App.css';

export const RegistrationForm =() =>{
    const [user,setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
    });


    const handleInputChange = (e) =>{
        const {name,value} = e.target;

        setUser((prev) => ({...prev, [name]: value}));
    };
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = {
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
        };
    
        console.log(formData);
    };


    return(
        <>
        <form onSubmit={handleFormSubmit}>
            <div className="container">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>

                <label htmlFor="firstName">
                    <b>First Name</b>
                </label>

                <input type="text" 
                       name="firstName" 
                       placeholder="Enter your first name"
                       required value={user.firstName}
                       onChange={handleInputChange}
                />

                <label htmlFor="lastName">
                    <b>Last Name</b>
                </label>

                <input type="text" 
                       name="lastName" 
                       placeholder="Enter your last name"
                       required value={user.lastName}
                       onChange={handleInputChange}
                />

                <label htmlFor="email">
                    <b>Email</b>
                </label>

                <input type="text" 
                       name="email" 
                       placeholder="Enter your email"
                       required value={user.email}
                       onChange={handleInputChange}
                />

                <label htmlFor="password">
                    <b>Password</b>
                </label>

                <input type="password" 
                       name="password" 
                       placeholder="Enter your password"
                       required value={user.password}
                       onChange={handleInputChange}
                />

                <label htmlFor="phoneNumber">
                    <b>Phone Number</b>
                </label>

                <input type="phone" 
                       name="phoneNumber" 
                       placeholder="Enter your Phone Number"
                       required value={user.phoneNumber}
                       onChange={handleInputChange}
                />


                <p>
                    By creating an account you agree to our 
                    <a href="#" style={{color:"dodgerblue"}}>
                        Terms & Privacy
                    </a>
                </p>

                <div className="clearfix">
                    <button type="submit" className="btn">
                        Sign Up
                    </button>
                </div>
            </div>
        </form>

        <section className="summary" style={{textAlign:"center",marginTop:"30px"}}>
            <p>
                Hello, my name is 
                <span>
                    {user.firstName} {user.lastName}
                </span>
                . My email address is <span>{user.email}</span> and my phone number is <span>{user.phoneNumber}</span>.
            </p>
        </section>
        </>
    );
};

