import React from 'react';
import classes from './footer.module.css'
import Wave from '../../img/wave.png'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'

const Footer = () => {
    return (
        <div className={classes.footer}>
            <img src={Wave} style={{width:'100%'}}></img>
            <div className={classes.footerContent}>
                <span>Mobile: 01212456962</span>
                <span>Email: georgeatefmetry@gmail.com</span>
                <div className={classes.icons}>
                    <a href='https://www.facebook.com/TERO.FELO'><Facebook color="white" size="3rem"/></a>
                    <a href='https://github.com/GeorgeAtefMetry'><Github color="white" size="3rem"/></a>
                    <a href='https://www.linkedin.com/in/george-atef-0a5bb6141/'><Linkedin color="white" size="3rem"/></a>
                </div>
            </div>

        </div>
    );
}

export default Footer;
