/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div class="row section-head">
        <div class="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div class="ten columns">
          <p class="lead">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="eight columns">
          <form action="" method="post" id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label for="contactName">
                  Name <span class="required">*</span>
                </label>
                <input
                  type="text"
                  value=""
                  size="35"
                  id="contactName"
                  name="contactName"
                />
              </div>

              <div>
                <label for="contactEmail">
                  Email <span class="required">*</span>
                </label>
                <input
                  type="text"
                  value=""
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                />
              </div>

              <div>
                <label for="contactSubject">Subject</label>
                <input
                  type="text"
                  value=""
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                />
              </div>

              <div>
                <label for="contactMessage">
                  Message <span class="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="15"
                  id="contactMessage"
                  name="contactMessage"
                ></textarea>
              </div>

              <div>
                <button class="submit">Submit</button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>

          <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <i class="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </div>

        <aside class="four columns footer-widgets">
          <div class="widget widget_contact">
            <h4>Address and Phone</h4>
            <p class="address">
              Jonathan Doe
              <br />
              1600 Amphitheatre Parkway <br />
              Mountain View, CA 94043 US
              <br />
              <span>(123) 456-7890</span>
            </p>
          </div>

          <div class="widget widget_tweets">
            <h4 class="widget-title">Latest Tweets</h4>

            <ul id="twitter">
              <li>
                <span>
                  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor, nisi elit consequat ipsum
                  <a href="#">http://t.co/CGIrdxIlI3</a>
                </span>
                <b>
                  <a href="#">2 Days Ago</a>
                </b>
              </li>
              <li>
                <span>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi
                  <a href="#">http://t.co/CGIrdxIlI3</a>
                </span>
                <b>
                  <a href="#">3 Days Ago</a>
                </b>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
