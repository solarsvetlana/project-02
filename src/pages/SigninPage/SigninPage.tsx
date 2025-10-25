import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";

interface Values {
  password: string;
  email: string;
}

const SigninPage = () => {
     const navigate = useNavigate();
    async function fetchLogin(credentials: Values){
        const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });
        const data = await res.json();
        console.log(data);
        localStorage.setItem("access_token", data.access_token);
        if(res.ok){
            navigate("/account/profile");
        }
    }
    
  return (
    <div>
      <h1>Signin</h1>
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        onSubmit={(values: Values) => {
          fetchLogin(values);
        }}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          />

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" placeholder="********" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SigninPage;