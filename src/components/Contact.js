function Contact() {
    return (
        <section id="contact">
        <div class="contact-container">
            <h2>Contact Me</h2>
            <div class="contact-card">
                <div class="contact-form">
                    <form action="https://formsubmit.co/abdulhakeemalavi94@gmail.com" method="POST">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required/>
    
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required/>
    
                        <label for="message">Message</label>
                        <textarea id="message" name="message" required></textarea>

                        <input type="hidden" name="_next" value="http://localhost/DE2-Personal-Portfolio/"/>
                        <input type="hidden" name="_subject" value="New Contact Submission"/>

                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    );
}
export default Contact;