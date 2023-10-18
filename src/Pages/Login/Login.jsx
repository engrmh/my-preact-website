import "./Login.css";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "preact/hooks";
import { gsap } from "gsap";
import { Button } from "react-bootstrap";
import Turnstile from "react-turnstile";


export default function Login({loginDataTransfer}) {
  const [isVerifyCaptcha, setIsVerifyCaptcha] = useState(false);
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });
      tl.fromTo(
        ".loginGlassMorphism",
        {
          scale: 3,
          opacity: 0,
        },
        {
          duration: 2.5,
          scale: 1,
          opacity: 1,
        }
      );
    });
    // return ctx.revert()
  }, []);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  const formSubmiting = (data) => {
    const userDataForLogin = {
      userName: data.userName,
      password: data.password,
      rememberMe: true,
    };
    loginDataTransfer(userDataForLogin)
  };

  return (
    <div className="loginContainer vh-100 d-flex justify-content-center align-items-center">
      <div class="p-2">
        <div class="loginGlassMorphism glassMorphism p-3 text-center">
          <h3 className="text-white fst-italic mb-5 mt-3">Login</h3>
          <form
            onSubmit={handleSubmit(formSubmiting)}
            className="d-flex flex-column justify-content-center align-items-center mb-2"
          >
            <input
              type="text"
              className="loginInput border-0 rounded bg-white p-2 mb-2"
              placeholder="Username"
              {...register("userName", {
                required: "Username is required",
                minLength: {
                  value: 5,
                  message: "Name should be have 5 characters and more",
                },
                maxLength: {
                  value: 30,
                  message: "Maximum Characters is 30",
                },
              })}
            />
            <span className="text-white mb-2" style={{ fontSize: "0.8rem" }}>
              {errors.userName && errors.userName.message}
            </span>
            <input
              type="password"
              className="loginInput border-0 rounded bg-white p-2 mb-2"
              placeholder="Password"
              {...register("password", {
                required: "Required",
                minLength: {
                  value: 8,
                  message: "Password should be have 8 characters and more",
                },
                maxLength: {
                  value: 20,
                  message: "Maximum Characters is 20",
                },
              })}
            />
            <span className="text-white mb-2" style={{ fontSize: "0.8rem" }}>
              {errors.password && errors.password.message}
            </span>
            <Turnstile
              className="w-100 rounded"
              sitekey="1x00000000000000000000AA"
              onVerify={(token) => {
                setIsVerifyCaptcha(true);
              }}
            />
            <Button
              type="submit"
              disabled={isVerifyCaptcha ? false : true}
              className="w-100 bg-dark bg-opacity-75 border-1 border-white py-2"
            >
              Enter
            </Button>
          </form>
          <a href="/" className="text-decoration-none text-white">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
