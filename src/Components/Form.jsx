import React, {useState} from 'react'

export default function Form(props) {  

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password:"",
    })

    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        emailPattern: false,
        password: false,
    })

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData((prevItems) => ({
            ...prevItems,
            [name]: value
        } ));
        
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: false
            }))
        }
        
    }

    const formValidation = (data) => {

        for (const [key, value] of Object.entries(data))  {
            if (!value) {
                setErrors(prev => ({
                    ...prev,
                    [key]: true,
                }))
            }
        }
    }

    const emailValidation = ({email}) => {
        const re = /\S+@\S+\.\S+/;

        if (email) {
            setErrors(prev => ({
                ...prev,
                emailPattern: re.test(email) ? false : true
            }))
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(formData);
        formValidation(formData)
        emailValidation(formData)
    }

    return (
        <div className="form--container">
            <form action="submit" onSubmit={handleSubmit} noValidate>
                <input className={errors.firstName && "invalid"} type="text" placeholder="First Name" id="fName" name="firstName" value={formData.firstName} onChange={handleChange}/>
                {errors.firstName && <span className="error">First Name cannot be empty</span>}
                <input className={errors.lastName && "invalid"} type="text" placeholder="Last Name" id="lName" name="lastName" value={formData.lastName} onChange={handleChange}/>
                {errors.lastName && <span className="error">Last Name cannot be empty</span>}
                <input className={(errors.email || errors.emailPattern) && "invalid"} type="email" placeholder="Email Address" id="email" name="email" value={formData.email} onChange={handleChange}/>
                {errors.email && <span className="error">Email cannot be empty</span>}
                {errors.emailPattern && <span className="error">Looks like this is not an email</span>}

                <input className={errors.password && "invalid"} type="password" placeholder="Password" id="password" name="password" value={formData.password} onChange={handleChange}/>
                {errors.password && <span className="error">Password cannot be empty</span>}
                <button type="submit" id="submit">Claim your free trial</button>
            </form>
            <p> By clicking the button, you are agreeing to our <a href="#">Terms and Services</a>
</p>
        </div>
    )
}