import React from 'react';
import classes from './contact.module.css'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import {themeContext} from '../../context'
import { useContext } from "react";
const Contact = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_ckvw1os', 'template_ta7313k', form.current, 'r19Jls06NGJYoD8tP')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
        };
    return (
        <div className={classes.contactForm} id="Contact">

            <div className={classes.left}>
                <div className={classes.awesome}>
                    <span style={{color : darkMode ? 'white' : ''}}>Get in touch</span>
                    <span>Contact Me</span>
                    <div className={`${classes.blur} ${classes.blurContact}`} style={{background:'#ABF1FF95'}}>

                    </div>
                </div>
            </div>

            <div className={classes.right}>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' className={classes.user} placeholder="Name"/>
                    <input type="email" name='email' value='georgeatefmetry@gmail.com' className={classes.user} placeholder="Email"/>
                    <input type="email" name='user_email' className={classes.user} placeholder="Email"/>
                    <textarea name='message' className={classes.user} placeholder="Message"></textarea>
                    <input type="submit" value="send" className={`button ${classes.button}`}></input>
                    <span>{done && "❤️ Thanks For Contacting Me ❤️"}</span>
                    <div className={`${classes.blur} ${classes.formBlur}`} style={{background:'var(--purple)'}}>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default Contact;
