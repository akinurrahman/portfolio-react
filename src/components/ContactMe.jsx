import React from 'react'

const ContactMe = () => {
  return (
    <>
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me</span></h2>

      <form>
        <div className="input-box">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
        </div>
        <div className="input-box">
          <input type="number" placeholder="Mobile Number" />
          <input type="text" placeholder="Email Subject" />
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Your messege"
        ></textarea>
        <input type="submit" value="Send Message" className="btn" onClick={()=> alert(`Sorry! you can't send message`)} />
      </form>
    </section>

    </>
  )
}

export default ContactMe

// const submitBtn = document.querySelector('[value="Send Message"]')
// submitBtn.addEventListener('click',()=>{
// alert("Sorry! Messege cann't sent")

// })