import './index.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useRef, useState } from 'react';

import emailjs from '@emailjs/browser';
import Loader from 'react-loaders';

import AnimatedLetters from '../AnimatedLetters';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_0sebk36',
        'template_2nb8pqk',
        refForm.current,
        'SQ7LkhgWg-NY5I2DQ'
      )
      .then(
        () => {
          alert('Message succesfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again');
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            If you need to get in touch with me, please feel free to use the
            following contact form:
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
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Jaszi
          <br />
          Philippines
          <span>zumikoyazi@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[14.35967606816159, 120.97846094971278]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[14.35967606816159, 120.97846094971278]}>
              <Popup>Jaszi lives here, come over for a cup of coffee UwU</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
