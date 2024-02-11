import '../styles/emailForm.css'

export default function EmailForm () {
    return(
        // onsubmit também...
        <form method='post' action='data'>
            <input calssName="email-entry" type="email" placeholder="Endereço de e-mail..."></input>
            <input className = "remember-me" type='submit' value='Lembre-me'/>
        </form>
    );
};