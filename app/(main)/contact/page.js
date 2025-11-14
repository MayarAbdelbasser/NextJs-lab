function contact() {
  return (
    <div className="">
      <div className="">
        <div className="">
          <h2>contact us</h2>
          <form>
            <input type="text" placeholder="Your Name"></input>
            <input type="text" placeholder="Phone Number"></input>
            <input type="text" placeholder="Email"></input>
            <input
              type="text"
              placeholder="Message"
              className="message"
            ></input>
            <a href="#" className="btn btn-primary">
              SEND
            </a>
          </form>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.378094222026!2d31.299664105382693!3d30.05948202820089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1761819570956!5m2!1sar!2seg"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default contact;
