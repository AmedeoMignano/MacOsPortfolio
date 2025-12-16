import React from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {socials} from "#constants/index.js";
import {WindowControls} from "#components/index.js";

const Contact = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="contact" />
                <h2>Contact Me</h2>
            </div>
            <div className="p-5 space-y-5">
                <img src="/images/ames.jpg"
                     alt="profile"
                     className="w-30 h-30 rounded-full"/>
                <h3>Let's connect!</h3>
                <p>Here you can find my personal profiles!</p>
                <ul>
                    {socials.map(({id, text, icon, bg, link}) => (
                        <li key={id} style={{backgroundColor: bg}}>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <img src={icon} alt={text} className="size-5"/>
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
const ContactWindow = WindowWrapper(Contact, "contact")
export default ContactWindow
