import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, handleResetPassword, getUserEmail, getUserPassword, handleRegistration } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    //handle google sign in button
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri)
            })
    }


    return (
        <div className="container">

            <div className="mt-5">

                <Form onSubmit={handleRegistration} className="w-50 mx-auto pt-5">
                    <h2 className="pt-5 text-uppercase fw-bolder">Please Login</h2>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control onBlur={getUserEmail} type="email" placeholder="abc@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control onBlur={getUserPassword} type="password" placeholder="Password" />
                    </FloatingLabel>

                    <Button className="w-100 mt-3" type="submit">Sign in</Button>


                </Form>

                <Button variant="outline-danger" className="mt-3"
                    onClick={handleGoogleLogIn}
                >Google Sign In
                </Button>
                <div className="d-flex justify-content-center  my-4">

                    <p className="ms-3">Don't have account? </ p>
                    <NavLink to="/signup">SignUp Now </NavLink>
                </div>

            </div >
        </div>
    );
};

export default Login;