/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="row">
        <div class="twelve columns">
          <ul class="social-links">
            <li>
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-dribbble"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-skype"></i>
              </a>
            </li>
          </ul>

          <ul class="copyright">
            <li>&copy; Copyright 2020 Kenneth Michael</li>
          </ul>
        </div>

        <div id="go-top">
          <a class="smoothscroll" title="Back to Top" href="#home">
            <i class="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
