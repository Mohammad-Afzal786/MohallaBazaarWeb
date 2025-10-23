import React from "react";

const ContactPage = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{ backgroundImage: "url(assets/images/backgrounds/page-header-bg.jpg)" }}
        ></div>
        <div
          className="page-header__ripped-paper"
          style={{ backgroundImage: "url(assets/images/shapes/page-header-ripped-paper.png)" }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <ul className="thm-breadcrumb list-unstyled">
              <li><a href="/">Home</a></li>
              <li><span>/</span></li>
              <li>Contact</li>
            </ul>
            <h2>Contact</h2>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="google-map">
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
            className="google-map__one"
            allowFullScreen
            title="Google Map"
          ></iframe>
        </div>
      </section>

      {/* Contact Details */}
      <section className="contact-details">
        <div className="container">
          <div className="contact-details__inner">
            <ul className="contact-details__contact-list list-unstyled">
              <li>
                <div className="icon"><span className="icon-help"></span></div>
                <div className="content">
                  <p>Have question?</p>
                  <h4><a href="tel:923076806860">+ 92 ( 307 ) 68 - 06860</a></h4>
                </div>
              </li>
              <li>
                <div className="icon"><span className="icon-mailbox"></span></div>
                <div className="content">
                  <p>Write email</p>
                  <h4><a href="mailto:needhelp@company.com">needhelp@company.com</a></h4>
                </div>
              </li>
              <li>
                <div className="icon"><span className="icon-maps-and-flags"></span></div>
                <div className="content">
                  <p>Visit store</p>
                  <h4>Valentin, Street Road 24, New York</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center">
                <span className="section-title__tagline">Write a Message</span>
                <h2 className="section-title__title">We’re always here to<br /> help you</h2>
              </div>
              <div className="contact-page__content">
                <form
                  action="assets/inc/sendemail.php"
                  className="contact-page__form contact-form-validated"
                  noValidate
                >
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="contact-page__form-input-box">
                        <input type="text" placeholder="Your name" name="name" />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="contact-page__form-input-box">
                        <input type="email" placeholder="Email address" name="email" />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="contact-page__form-input-box">
                        <input type="text" placeholder="Subject" name="Subject" />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="contact-page__form-input-box">
                        <input type="text" placeholder="Phone" name="phone" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="contact-page__form-input-box text-message-box">
                      <textarea name="message" placeholder="Write a message"></textarea>
                    </div>
                    <div className="contact-page__btn-box">
                      <button type="submit" className="thm-btn contact-page__btn">Send a message</button>
                    </div>
                  </div>
                </form>
                <div className="result"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
