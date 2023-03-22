import "./index.scss";
import { useEffect, useRef, useState } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import emailjs from "@emailjs/browser";
import Loader from "react-loaders";

import AnimatedLetters from "../AnimatedLetters";
import Earth from "./Earth";

function Contact() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [success, setSuccess] = useState(null);

  const refForm = useRef();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ohxltgn",
        "template_2nb8pqk",
        refForm.current,
        "SQ7LkhgWg-NY5I2DQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            For inquiries or to schedule a consultation, please fill out the
            form below or contact me directly:
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  {success && (
                    <p
                      className={`message ${
                        success ? "success-message" : "error-message"
                      }`}
                    >
                      {success
                        ? "Your message has been sent. I'll get back to you soon UwU."
                        : "There was an error sending your message. (╥﹏╥)"}
                    </p>
                  )}
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="earth">
          <Canvas>
            <Stage environment="city" intensity={0.6}>
              <Earth />
            </Stage>
            <OrbitControls autoRotate enableRotate={false} enableZoom={false} />
          </Canvas>
        </div>
      </div>
      <Loader type="line-scale-pulse-out-rapid" />
    </>
  );
}

export default Contact;
