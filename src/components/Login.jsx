import Navbar from "./Navbar";
import React, { useRef, useState } from "react";
import { styles } from "../styles";
import { EarthCanvas, StarsCanvas } from "./canvas";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    checkPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`이름 : ${form.name}\n비밀번호 : ${form.password}`);
    alert(`로그인 성공!`);
    navigate("/main");
  };

  return (
    <section className="relativ z-0  bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-current">
        <Navbar />
        <div className="relative w-full h-screen mx-auto">
          <div className=" xl:mt-12 w-full min-w-[500px] flex-row flex gap-10 overflow-hidden">
            <motion.div
              variants={slideIn("left", "tween", 0.2, 1)}
              className="flex-[0.3] p-8 min-w-[500px] mt-20 ml-40 bg-black-100 rounded-2xl"
            >
              <p className={styles.sectionSubText}>Join Our Community</p>
              <h3 className={styles.sectionHeadText}>LOGIN</h3>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className=" mt-12 flex flex-col gap-8"
              >
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What is your name"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What is your email"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Password</span>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="your Password"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">
                    {" "}
                    Check Password
                  </span>
                  <input
                    type="password"
                    name="checkPassword"
                    value={form.checkPassword}
                    onChange={handleChange}
                    placeholder="Check your password"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                </label>
                <button
                  type="submit"
                  className="bg-white py-3 px-8 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium w-fit"
                >
                  Sign in
                </button>
              </form>
            </motion.div>
            <motion.div className="hidden xl:block  xl:flex-1 xl:h-auto md:h-auto h-auto absolute inset-0 z-0 left-[600px]">
              <EarthCanvas />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
