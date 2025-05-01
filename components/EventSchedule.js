"use client";

import Link from "next/link";
import { useState } from "react";

export const EventSchedule1 = () => {
  const [toggle, setToggle] = useState("nav-1");
  return (
    <section className="event-one">
      <div className="event-one__shape-1 zoominout">
        <img src="assets/images/shapes/event-one-shape-1.png" alt="" />
      </div>
      <div className="container">
        <div className="event-one__inner">
          <div className="section-title text-left">
            <div className="section-title__tagline-box">
              <p className="section-title__tagline">
                <span>//</span> Event Schedule
              </p>
            </div>
            <h2 className="section-title__title">
              Follow Our Event <br /> <span>Schedule</span>
            </h2>
          </div>
          <div className="event-one__main-tab-box tabs-box">
            <ul as={"ul"} className="tab-buttons clearfix list-unstyled">
              <li
                className={`tab-btn ${toggle == "nav-1" ? "active-btn" : ""}`}
                onClick={() => setToggle("nav-1")}
              >
                <h3>
                  1<span>st</span> Day
                </h3>
                <p>February 08 , 2024</p>
              </li>
              <li
                className={`tab-btn ${toggle == "nav-2" ? "active-btn" : ""}`}
                onClick={() => setToggle("nav-2")}
              >
                <h3>
                  2<span>nd</span> Day
                </h3>
                <p>February 16 , 2024</p>
              </li>
              <li
                className={`tab-btn ${toggle == "nav-3" ? "active-btn" : ""}`}
                onClick={() => setToggle("nav-3")}
              >
                <h3>
                  3<span>rd</span> Day
                </h3>
                <p>February 17 , 2024</p>
              </li>
            </ul>
            <div className="tabs-content">
              {/*tab*/}
              <div
                className={`tab ${toggle == "nav-1" ? "active-tab" : ""}`}
                style={{ display: toggle == "nav-1" ? "active-tab" : "" }}
              >
                <div className="event-one__main-content-box">
                  <div className="event-one__circle-one" />
                  <div className="event-one__circle-two" />
                  <div className="event-one__main-content-single">
                    <div className="row">
                      <div className="col-xl-7">
                        <div className="event-one__main-content-left">
                          <div className="event-one__main-content-img-box">
                            <div className="event-one__main-content-img">
                              <img
                                src="assets/images/resources/event-one-main-content-img-1-1.jpg"
                                alt=""
                              />
                            </div>
                            <h4 className="event-one__main-content-img-title">
                              <a href="#">
                                Historical Song &amp; <br />
                                Music Fest
                              </a>
                            </h4>
                          </div>
                          <ul className="event-one__main-content-address-box list-unstyled">
                            <li>
                              <div className="icon">
                                <span className="icon-pin" />
                              </div>
                              <div className="text">
                                <p>New Hyde, 11040</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-time" />
                              </div>
                              <div className="text">
                                <p>
                                  08 : 00 am-05 : 00 pm <br />
                                  16 March , 2024
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-5">
                        <div className="event-one__main-content-right">
                          <div className="event-one__main-content-right-shape-1">
                            <img
                              src="assets/images/shapes/event-one-main-content-right-shape-1.png"
                              alt=""
                            />
                          </div>
                          <ul className="event-one__main-content-img-list-box list-unstyled">
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-1.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-2.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-3.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                          </ul>
                          <div className="event-one__main-content-btn-box">
                            <a href="#" className="event-one__main-content-btn">
                              {" "}
                              <span className="fas fa-arrow-circle-right" /> Buy
                              Tickets
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="event-one__main-content-single event-one__main-content-single--two">
                    <div className="row">
                      <div className="col-xl-5">
                        <div className="event-one__main-content-right">
                          <div className="event-one__main-content-right-shape-1">
                            <img
                              src="assets/images/shapes/event-one-main-content-right-shape-1.png"
                              alt=""
                            />
                          </div>
                          <div className="event-one__main-content-btn-box">
                            <a href="#" className="event-one__main-content-btn">
                              {" "}
                              <span className="fas fa-arrow-circle-right" /> Buy
                              Tickets
                            </a>
                          </div>
                          <ul className="event-one__main-content-img-list-box list-unstyled">
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-1.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-2.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-3.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-7">
                        <div className="event-one__main-content-left">
                          <div className="event-one__main-content-title-and-address-box">
                            <h4 className="event-one__main-content-img-title">
                              <a href="#">
                                Classical Music Fest <br />
                                2024
                              </a>
                            </h4>
                            <ul className="event-one__main-content-address-box list-unstyled">
                              <li>
                                <div className="icon">
                                  <span className="icon-pin" />
                                </div>
                                <div className="text">
                                  <p>New Hyde, 11040</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="icon-time" />
                                </div>
                                <div className="text">
                                  <p>
                                    08 : 00 am-05 : 00 pm <br />
                                    16 March , 2024
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="event-one__main-content-img-box">
                            <div className="event-one__main-content-img">
                              <img
                                src="assets/images/resources/event-one-main-content-img-1-2.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="event-one__main-content-single">
                    <div className="row">
                      <div className="col-xl-7">
                        <div className="event-one__main-content-left">
                          <div className="event-one__main-content-img-box">
                            <div className="event-one__main-content-img">
                              <img
                                src="assets/images/resources/event-one-main-content-img-1-3.jpg"
                                alt=""
                              />
                            </div>
                            <h4 className="event-one__main-content-img-title">
                              <a href="#">
                                Dj Mixers Isolated <br />
                                Music Fest
                              </a>
                            </h4>
                          </div>
                          <ul className="event-one__main-content-address-box list-unstyled">
                            <li>
                              <div className="icon">
                                <span className="icon-pin" />
                              </div>
                              <div className="text">
                                <p>New Hyde, 11040</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-time" />
                              </div>
                              <div className="text">
                                <p>
                                  08 : 00 am-05 : 00 pm <br />
                                  16 March , 2024
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-5">
                        <div className="event-one__main-content-right">
                          <div className="event-one__main-content-right-shape-1">
                            <img
                              src="assets/images/shapes/event-one-main-content-right-shape-1.png"
                              alt=""
                            />
                          </div>
                          <ul className="event-one__main-content-img-list-box list-unstyled">
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-1.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-2.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-3.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                          </ul>
                          <div className="event-one__main-content-btn-box">
                            <a href="#" className="event-one__main-content-btn">
                              {" "}
                              <span className="fas fa-arrow-circle-right" /> Buy
                              Tickets
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*tab*/}
              <div
                className={`tab ${toggle == "nav-2" ? "active-tab" : ""}`}
                style={{ display: toggle == "nav-2" ? "active-tab" : "" }}
              >
                <div className="event-one__main-content-box">
                  <div className="event-one__circle-one" />
                  <div className="event-one__circle-two" />
                  <div className="event-one__main-content-single">
                    <div className="row">
                      <div className="col-xl-7">
                        <div className="event-one__main-content-left">
                          <div className="event-one__main-content-img-box">
                            <div className="event-one__main-content-img">
                              <img
                                src="assets/images/resources/event-one-main-content-img-1-3.jpg"
                                alt=""
                              />
                            </div>
                            <h4 className="event-one__main-content-img-title">
                              <a href="#">
                                Historical Song &amp; <br />
                                Music Fest
                              </a>
                            </h4>
                          </div>
                          <ul className="event-one__main-content-address-box list-unstyled">
                            <li>
                              <div className="icon">
                                <span className="icon-pin" />
                              </div>
                              <div className="text">
                                <p>New Hyde, 11040</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-time" />
                              </div>
                              <div className="text">
                                <p>
                                  08 : 00 am-05 : 00 pm <br />
                                  16 March , 2024
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-5">
                        <div className="event-one__main-content-right">
                          <div className="event-one__main-content-right-shape-1">
                            <img
                              src="assets/images/shapes/event-one-main-content-right-shape-1.png"
                              alt=""
                            />
                          </div>
                          <ul className="event-one__main-content-img-list-box list-unstyled">
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-1.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-2.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-3.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                          </ul>
                          <div className="event-one__main-content-btn-box">
                            <a href="#" className="event-one__main-content-btn">
                              {" "}
                              <span className="fas fa-arrow-circle-right" /> Buy
                              Tickets
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="event-one__main-content-single event-one__main-content-single--two">
                    <div className="row">
                      <div className="col-xl-5">
                        <div className="event-one__main-content-right">
                          <div className="event-one__main-content-right-shape-1">
                            <img
                              src="assets/images/shapes/event-one-main-content-right-shape-1.png"
                              alt=""
                            />
                          </div>
                          <div className="event-one__main-content-btn-box">
                            <a href="#" className="event-one__main-content-btn">
                              {" "}
                              <span className="fas fa-arrow-circle-right" /> Buy
                              Tickets
                            </a>
                          </div>
                          <ul className="event-one__main-content-img-list-box list-unstyled">
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-1.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-2.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-3.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-7">
                        <div className="event-one__main-content-left">
                          <div className="event-one__main-content-title-and-address-box">
                            <h4 className="event-one__main-content-img-title">
                              <a href="#">
                                Classical Music Fest <br />
                                2024
                              </a>
                            </h4>
                            <ul className="event-one__main-content-address-box list-unstyled">
                              <li>
                                <div className="icon">
                                  <span className="icon-pin" />
                                </div>
                                <div className="text">
                                  <p>New Hyde, 11040</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="icon-time" />
                                </div>
                                <div className="text">
                                  <p>
                                    08 : 00 am-05 : 00 pm <br />
                                    16 March , 2024
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="event-one__main-content-img-box">
                            <div className="event-one__main-content-img">
                              <img
                                src="assets/images/resources/event-one-main-content-img-1-1.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="event-one__main-content-single">
                    <div className="row">
                      <div className="col-xl-7">
                        <div className="event-one__main-content-left">
                          <div className="event-one__main-content-img-box">
                            <div className="event-one__main-content-img">
                              <img
                                src="assets/images/resources/event-one-main-content-img-1-2.jpg"
                                alt=""
                              />
                            </div>
                            <h4 className="event-one__main-content-img-title">
                              <a href="#">
                                Dj Mixers Isolated <br />
                                Music Fest
                              </a>
                            </h4>
                          </div>
                          <ul className="event-one__main-content-address-box list-unstyled">
                            <li>
                              <div className="icon">
                                <span className="icon-pin" />
                              </div>
                              <div className="text">
                                <p>New Hyde, 11040</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-time" />
                              </div>
                              <div className="text">
                                <p>
                                  08 : 00 am-05 : 00 pm <br />
                                  16 March , 2024
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-5">
                        <div className="event-one__main-content-right">
                          <div className="event-one__main-content-right-shape-1">
                            <img
                              src="assets/images/shapes/event-one-main-content-right-shape-1.png"
                              alt=""
                            />
                          </div>
                          <ul className="event-one__main-content-img-list-box list-unstyled">
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-1.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-2.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-3.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                          </ul>
                          <div className="event-one__main-content-btn-box">
                            <a href="#" className="event-one__main-content-btn">
                              {" "}
                              <span className="fas fa-arrow-circle-right" /> Buy
                              Tickets
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*tab*/}
              <div
                className={`tab ${toggle == "nav-3" ? "active-tab" : ""}`}
                style={{ display: toggle == "nav-3" ? "active-tab" : "" }}
              >
                <div className="event-one__main-content-box">
                  <div className="event-one__circle-one" />
                  <div className="event-one__circle-two" />
                  <div className="event-one__main-content-single">
                    <div className="row">
                      <div className="col-xl-7">
                        <div className="event-one__main-content-left">
                          <div className="event-one__main-content-img-box">
                            <div className="event-one__main-content-img">
                              <img
                                src="assets/images/resources/event-one-main-content-img-1-1.jpg"
                                alt=""
                              />
                            </div>
                            <h4 className="event-one__main-content-img-title">
                              <a href="#">
                                Historical Song &amp; <br />
                                Music Fest
                              </a>
                            </h4>
                          </div>
                          <ul className="event-one__main-content-address-box list-unstyled">
                            <li>
                              <div className="icon">
                                <span className="icon-pin" />
                              </div>
                              <div className="text">
                                <p>New Hyde, 11040</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-time" />
                              </div>
                              <div className="text">
                                <p>
                                  08 : 00 am-05 : 00 pm <br />
                                  16 March , 2024
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-5">
                        <div className="event-one__main-content-right">
                          <div className="event-one__main-content-right-shape-1">
                            <img
                              src="assets/images/shapes/event-one-main-content-right-shape-1.png"
                              alt=""
                            />
                          </div>
                          <ul className="event-one__main-content-img-list-box list-unstyled">
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-1.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-2.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-3.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                          </ul>
                          <div className="event-one__main-content-btn-box">
                            <a href="#" className="event-one__main-content-btn">
                              {" "}
                              <span className="fas fa-arrow-circle-right" /> Buy
                              Tickets
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="event-one__main-content-single event-one__main-content-single--two">
                    <div className="row">
                      <div className="col-xl-5">
                        <div className="event-one__main-content-right">
                          <div className="event-one__main-content-right-shape-1">
                            <img
                              src="assets/images/shapes/event-one-main-content-right-shape-1.png"
                              alt=""
                            />
                          </div>
                          <div className="event-one__main-content-btn-box">
                            <a href="#" className="event-one__main-content-btn">
                              {" "}
                              <span className="fas fa-arrow-circle-right" /> Buy
                              Tickets
                            </a>
                          </div>
                          <ul className="event-one__main-content-img-list-box list-unstyled">
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-1.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-2.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-3.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-7">
                        <div className="event-one__main-content-left">
                          <div className="event-one__main-content-title-and-address-box">
                            <h4 className="event-one__main-content-img-title">
                              <a href="#">
                                Classical Music Fest <br />
                                2024
                              </a>
                            </h4>
                            <ul className="event-one__main-content-address-box list-unstyled">
                              <li>
                                <div className="icon">
                                  <span className="icon-pin" />
                                </div>
                                <div className="text">
                                  <p>New Hyde, 11040</p>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <span className="icon-time" />
                                </div>
                                <div className="text">
                                  <p>
                                    08 : 00 am-05 : 00 pm <br />
                                    16 March , 2024
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="event-one__main-content-img-box">
                            <div className="event-one__main-content-img">
                              <img
                                src="assets/images/resources/event-one-main-content-img-1-2.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="event-one__main-content-single">
                    <div className="row">
                      <div className="col-xl-7">
                        <div className="event-one__main-content-left">
                          <div className="event-one__main-content-img-box">
                            <div className="event-one__main-content-img">
                              <img
                                src="assets/images/resources/event-one-main-content-img-1-3.jpg"
                                alt=""
                              />
                            </div>
                            <h4 className="event-one__main-content-img-title">
                              <a href="#">
                                Dj Mixers Isolated <br />
                                Music Fest
                              </a>
                            </h4>
                          </div>
                          <ul className="event-one__main-content-address-box list-unstyled">
                            <li>
                              <div className="icon">
                                <span className="icon-pin" />
                              </div>
                              <div className="text">
                                <p>New Hyde, 11040</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-time" />
                              </div>
                              <div className="text">
                                <p>
                                  08 : 00 am-05 : 00 pm <br />
                                  16 March , 2024
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-5">
                        <div className="event-one__main-content-right">
                          <div className="event-one__main-content-right-shape-1">
                            <img
                              src="assets/images/shapes/event-one-main-content-right-shape-1.png"
                              alt=""
                            />
                          </div>
                          <ul className="event-one__main-content-img-list-box list-unstyled">
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-1.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-2.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li>
                              <div className="event-one__main-content-img-list">
                                <img
                                  src="assets/images/resources/event-one-main-content-img-list-1-3.jpg"
                                  alt=""
                                />
                              </div>
                            </li>
                          </ul>
                          <div className="event-one__main-content-btn-box">
                            <a href="#" className="event-one__main-content-btn">
                              {" "}
                              <span className="fas fa-arrow-circle-right" /> Buy
                              Tickets
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const EventSchedule2 = () => {
  const [toggle, setToggle] = useState("1stday");
  return (
    <section className="events-three">
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__tagline-box">
            <p className="section-title__tagline">
              <span>//</span> Schedule <span>//</span>{" "}
            </p>
          </div>
          <h2 className="section-title__title">
            Information Program &amp; Event <br /> <span>Schedule</span>
          </h2>
        </div>
        <div className="events-three__main-tab-box tabs-box">
          <ul className="tab-buttons clearfix list-unstyled">
            <li
              data-tab="#1stday"
              className={`tab-btn ${toggle == "1stday" ? "active-btn" : ""}`}
              onClick={() => setToggle("1stday")}
            >
              <div className="events-three__tab-btn-content">
                <h4>
                Global Climate Leadership Main Stage
                </h4>
              </div>
            </li>
            <li
              data-tab="#2ndday"
              className={`tab-btn ${toggle == "2ndday" ? "active-btn" : ""}`}
              onClick={() => setToggle("2ndday")}
            >
              <div className="events-three__tab-btn-content">
              <h4>
              <br/>ESG Innovation & Leadership Stage
                </h4>
              </div>
            </li>
          </ul>
          <div className="tabs-content">
            {/*tab*/}
            <div
              id="1stday"
              className={`tab ${toggle == "1stday" ? "active-tab" : ""}`}
            >
              <div className="events-three__main-content-box">
                <ul className="list-unstyled events-three__content-list">
                  {/* DAY1.1  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                            Opening Ceremony & Welcome Remarks 
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 1 (6 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>9.30 am - 9.45 am</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-6 col-lg-6">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/william_yu.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Dr. William Yu
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Founder & Chief Executive Officer, World Green Organisation
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                      {/* Speaker 2 Start*/}
                      <div className="events-three__content-user col-xl-6 col-lg-6">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/kin_sang_cheung.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Mr. Alex Cheung
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Chairman of the Board of Governors, World Green Organisation
                          </p>
                        </div>
                      </div>
                      {/* Speaker 2 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY1.2  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                              Opening Remarks
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 1 (6 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>9.45 am - 10.00 am</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-6 col-lg-6">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/johnathan_wong.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Mr. Jonathan Tsuen Yip Wong
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Chief of Innovation, Enterprise and Investment, Trade, Investment and Innovation Division, UNESCAP
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                      {/* Speaker 2 Start*/}
                      <div className="events-three__content-user col-xl-6 col-lg-6">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/joseph_chan.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Mr Joseph H. L. Chan
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          JP, Under Secretary, Financial Services and the Treasury of Hong Kong
                          </p>
                        </div>
                      </div>
                      {/* Speaker 2 End*/}
                      {/* Speaker 3 Start*/}
                      <div className="events-three__content-user col-xl-6 col-lg-6">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/diane_wong.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Miss Diane Wong Shuk Han
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          JP, Under Secy for Env & Ecology, Environment and Ecology Bureau
                          </p>
                        </div>
                      </div>
                      {/* Speaker 3 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY1.3  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                              Officiating Guest Keynote Speech 
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 1 (6 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>10.15 am - 10.50 am</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-6 col-lg-6">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/harvey_rouse.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Mr. Harvey Rouse
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Head of the European Union Office to Hong Kong and Macao
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                      {/* Speaker 2 Start*/}
                      <div className="events-three__content-user col-xl-6 col-lg-6">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/ken_chiu.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Mr. Ken Chiu
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Head of Carbon and ESG Products Market, Hong Kong Exchanges and Clearing Limited (HKEX)
                          </p>
                        </div>
                      </div>
                      {/* Speaker 2 End*/}
                      {/* Speaker 3 Start*/}
                      <div className="events-three__content-user col-xl-6 col-lg-6">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/au_kl.png"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Dr. Au King Lun
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          MH, Executive Director and Board Member, Financial Services Development Council (FSDC)
                          </p>
                        </div>
                      </div>
                      {/* Speaker 3 End*/}
                      {/* Speaker 4 Start*/}
                      <div className="events-three__content-user col-xl-6 col-lg-6">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/guo_peiyuan.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Dr. Peiyuan Guo
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Advisor, United Nations Environment Programme Finance Initiative (UNEP FI)
                          </p>
                        </div>
                      </div>
                      {/* Speaker 4 End*/}
                      {/* Speaker 5 Start*/}
                      <div className="events-three__content-user col-xl-6 col-lg-6">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/mark_kai.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Mr. Mark Kai
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Chief Financial Officer, BOC Group Life Assurance Company Limited (BOC Life)
                          </p>
                        </div>
                      </div>
                      {/* Speaker 5 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY1.4  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                           Keynote Presentation: Innovating for Impact: Driving Sustainable Development through Enterprise and Investment in Asia-Pacific
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 1 (6 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>10.35 am - 10.50 am</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/johnathan_wong.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Mr. Jonathan Tsuen Yip Wong
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Chief of Innovation, Enterprise and Investment, Trade, Investment and Innovation Division, UNESCAP
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY1.5  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                           Keynote Presentation: The European Green Deal: Opportunities for Asia's Carbon Neutral and Sustainable Future
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 1 (6 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>10.50 am - 11.05 am</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/harvey_rouse.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Mr. Harvey Rouse
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Head, European Union Office to Hong Kong and Macao
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY1.6  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                           Keynote Presentation: From Net-Zero to Nature-Positive: Aligning Financial Systems with Planetary Boundaries
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 1 (6 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>11.05 am - 11.20 am</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/guo_peiyuan.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Dr. Guo Peiyuan
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Advisor in China, United Nations Environment Programme Finance Initiative (UNEP FI)
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY1.7  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                           Keynote Presentation: The Global Baseline and the HK Adoption (Recording)
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 1 (6 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>11.20 am - 11.35 am</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/bing_leng.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Dr. Bing Leng
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Member, International Sustainability Standards Board (ISSB)
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY1.8  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                           Keynote Presentation: Designing for Net-Zero: How Real Estate Developer Can Lead the Climate Transition
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 1 (6 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>11.35 am - 11.50 am</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/patrick_ho.JPG"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Mr. Patrick Ho
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Head of Sustainable Development, Swire Properties Limited
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY1.9  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                           Keynote Presentation: From Crisis to Opportunity Through Innovation: How to Build a Successful Business
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 1 (6 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>14.10 pm - 14.35 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/song_hoisee.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Mr. Song Hoi-see
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Founder & Chief Executive Officer, Plaza Premium Group
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY1.10  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                           Keynote Presentation: ESG-Driven AI Transformation: Lifewood’s Path to one of the World’s Largest Inclusive Data-Collection Centre
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 1 (6 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>14.35 pm - 15.00 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/roanld_cheung.png"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Mr. Ronald Cheung
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Founder & Chief Executive Officer, Lifewood Data Technology Limited 
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY1.11  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                          Panel Discussion: Harnessing Technology for a Circular Economy: Opportunities and Challenges
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 1 (6 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>15.00 pm - 15.45 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/toa_charm.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Dr Toa Charm
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Founding Chairman, Data Literacy & AI Association 
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                      {/* Speaker 2 Start*/}
                      <div className="events-three__content-user col-xl-6 col-lg-6">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/gloria_yao.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Dr. Gloria Lei Yao
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Director, Project Development, The Hong Kong Research Institute of Textiles and Apparel (HKRITA)
                          </p>
                        </div>
                      </div>
                      {/* Speaker 2 End*/}
                      {/* Speaker 3 Start*/}
                      <div className="events-three__content-user col-xl-6 col-lg-6">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/phoebe_leung.JPG"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Ms. Phoebe Leung
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Senior Manager, Sustainable Development, Swire Properties Limited
                          </p>
                        </div>
                      </div>
                      {/* Speaker 3 End*/}
                      {/* Speaker 4 Start*/}
                      <div className="events-three__content-user col-xl-6 col-lg-6">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/calvin_cheng.jpeg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Mr. Calvin Cheng
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Founder & Chief Executive Officer, Wizpresso 
                          </p>
                        </div>
                      </div>
                      {/* Speaker 4 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY1.12  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                           Keynote Presentation: Development trend of AI industry (Virtual)
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 1 (6 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>15.45 pm - 16.00 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/johnathan_lin.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Prof. Jonathan Lin
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          General Partner, Andra Capital
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY1.13  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                           Keynote Presentation: On Care for Our Common Home
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 1 (6 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>16.00 pm - 16.15 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/sun_ta_chien.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Dr. Sun Ta-Chien
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Professor, Graduate School of Financial Management, CTBC Business School
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY1.14  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                           Keynote Presentation: Building Resilient Communities Through ESG-Driven Life Insurance Ecosystems
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 1 (6 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>16.15 pm - 16.30 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/toni_tse.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Mr Toni Tse
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Head of Digital Innovation and Growth, BOC Group Life Assurance Company Limited (BOC Life) 
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY1.15  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                           Keynote Presentation: 
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 1 (6 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>16.30 pm - 16.45 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/kerr_xu.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Dr. Kerr XU
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Chief Executive Officer & Co-founder, LaSense Technology Limited
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY1.16  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                           Keynote Presentation: A Sharing on the Development of the National Conservation and Carbon Ecosystem by Malaysia Forest Fund  – How Corporations can benefit
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 1 (6 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>16.45 pm - 17.00 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/dato.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Dato’ Shah Redza Hussein
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Chief Executive Officer, Malaysia Forest Fund
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY1.17  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                           Keynote Presentation: Nature Beyond Climate - Market momentum created by the TNFD (Virtual)
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 1 (6 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>17.00 pm - 17.15 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/candice_dott.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Ms. Candice Dott
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Director of Market Engagement, Taskforce on Nature‑related Financial Disclosures (TNFD)
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY1.18  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                           Keynote Presentation: 
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 1 (6 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>17.15 pm - 17.55 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          TBC
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          百度飛槳會客廳
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY1.19  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                            Closing Remarks
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 1 (6 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>17.55 pm - 18.00 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/william_yu.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Dr. William Yu
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Founder & Chief Executive Officer, World Green Organisation (WGO)
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY2.1  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                            Opening Ceremony & Welcome Remarks 
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 2 (7 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>9.30 am - 9.45 am</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-6 col-lg-6">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/william_yu.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Dr. William Yu
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Founder & Chief Executive Officer, World Green Organisation
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                      {/* Speaker 2 Start*/}
                      <div className="events-three__content-user col-xl-6 col-lg-6">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/albert_oung.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Mr. Albert Oung
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          President, World Green Organisation
                          </p>
                        </div>
                      </div>
                      {/* Speaker 2 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY2.2  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                              Opening Remarks
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 2 (7 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>9.45 am - 10.00 am</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/masato_abe.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Dr. Masato Abe
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Economist, United Nations Multi-Country Office for Micronesia, Kolonia, Pohnpei, Federated States of Micronesia
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY2.3  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                              Officiating Guest Keynote Speech 
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 2 (7 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>10.00 am - 10.20 am</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-6 col-lg-6">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/maihar_sham.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Professor Mai-har Sham
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Pro-Vice-Chancellor (Research), The Chinese University of Hong Kong (CUHK)
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                      {/* Speaker 2 Start*/}
                      <div className="events-three__content-user col-xl-6 col-lg-6">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/allinnettes_go_adigue.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Dr. Allinnettes Adigue
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Head of ASEAN Regional Hub, Global Reporting Initiative (GRI)
                          </p>
                        </div>
                      </div>
                      {/* Speaker 2 End*/}
                      {/* Speaker 3 Start*/}
                      <div className="events-three__content-user col-xl-6 col-lg-6">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/kitikorn.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Dr. Kitikorn, Dean
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Faculty of Environment and Resource Studies, Mahidol University
                          </p>
                        </div>
                      </div>
                      {/* Speaker 3 End*/}
                      {/* Speaker 4 Start*/}
                      <div className="events-three__content-user col-xl-6 col-lg-6">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/jie_zhou.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Ms. Jie Zhou
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Head of International Engagement, Accelerator and Canopy, Cambridge Institute for Sustainability Leadership (CISL), Cambridge University
                          </p>
                        </div>
                      </div>
                      {/* Speaker 4 End*/}
                      {/* Speaker 5 Start*/}
                      <div className="events-three__content-user col-xl-6 col-lg-6">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/christopher_chao.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Prof. Christopher Chao
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Vice President, The Hong Kong Polytechnic University (PolyU)
                          </p>
                        </div>
                      </div>
                      {/* Speaker 5 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY2.4  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                           Keynote Presentation: United Nations’ work in Micronesia
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 2 (7 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>10.20 am - 10.35 am</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/masato_abe.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Dr. Masato Abe
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Economist, United Nations Multi-Country Office for Micronesia, Kolonia, Pohnpei, Federated States of Micronesia
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY2.5  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                           Keynote Presentation: Integrating Climate and Social Dimensions: Advancing Resilient Sustainability Reporting through GRI Standards
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 2 (7 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>10.35 am - 10.50 am</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/allinnettes_go_adigue.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Dr. Allinnettes Adigue
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Head of ASEAN Regional Hub, Global Reporting Initiative (GRI)
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY2.6  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                           Keynote Presentation: Strengthening Supply Chains through ESG Integration
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 2 (7 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>10.50 am - 11.05 am</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/ryan_foo.jpeg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Mr. Ryan Foo
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Senior Technology Manager, TÜV Rheinland Hong Kong Limited
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY2.7  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                           Keynote Presentation: Lifewood’s Approach to ESG-Driven AI Talent Development: How Lifewood Maintains Continuous Innovation and Workforce for AI Development
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 2 (7 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>11.05 am - 11.20 am</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/roanld_cheung.png"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Mr. Ronald Cheung
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Founder & Chief Executive Officer, Lifewood Data Technology Limited
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY2.8  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                          Carbon Neutrality Alliance Parallel Session: Multidisciplinary discussion on Sustainability and Governance
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 2 (7 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>11.20 am - 12.30 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/kitikorn.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Dr. Kitikorn
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Dean, Faculty of Environment and Resource Studies, Global University Alliance, Carbon Neutrality Campus (CNC)
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY2.9  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                          Panel Discussion: Driving Sustainability through Effective Stakeholder Engagement across Corporate Supply Chains
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 2 (7 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>14.20 pm - 15.15 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/jean_sebastien_jacquetin.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Mr. Jean-Sebastien Jacquetin
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Managing Partner, Cavendish Investment Corp
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                      {/* Speaker 2 Start*/}
                      <div className="events-three__content-user col-xl-6 col-lg-6">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/vivienne_chiu.jpeg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Ms. Vivienne Chiu
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Chief Brand and Communications Officer, BOC Group Life Assurance Company Limited (BOC Life)
                          </p>
                        </div>
                      </div>
                      {/* Speaker 2 End*/}
                      {/* Speaker 3 Start*/}
                      <div className="events-three__content-user col-xl-6 col-lg-6">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/felix_lee.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Mr. Felix Lee
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Head of Group Corporate Affairs & Sustainability, The Hong Kong and China Gas Company Ltd (Towngas)
                          </p>
                        </div>
                      </div>
                      {/* Speaker 3 End*/}
                      {/* Speaker 4 Start*/}
                      <div className="events-three__content-user col-xl-6 col-lg-6">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Ms. Wendy M.Y. Chan
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Chairlady, Activities & Events Committee, The Institute of Purchasing & Supply of Hong Kong (IPSHK)
                          </p>
                        </div>
                      </div>
                      {/* Speaker 3 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY2.10  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                           Keynote Presentation: Green Infra-Equity Investment
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 2 (7 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>15.15 pm - 15.30 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/terry_yung.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Mr. Terry Yung
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Chief Investment Officer, BOC Group Life Assurance Company Limited (BOC Life)
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY2.11  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                          Keynote Presentation: Assessing Transition Plans Credibility to Catalyse Transition Finance
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 2 (7 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>15.30 pm - 15.45 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/dennis_wan.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Mr. Dennis Wan
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Head of Capital Markets APAC, CDP
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY2.12  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                           Keynote Presentation: EU CBAM and Carbon Pricing Trends in the Asia Pacific
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 2 (7 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>15.45 pm - 16.00 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/mei_zi_tan.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Ms. Mei Zi Tan
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Manager of International Research and Projects, Carbon Market Institute (CMI)
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY2.13  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                           Keynote Presentation: A Smart Way to Net Zero
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 2 (7 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>16.00 pm - 16.15 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/nick_zhong.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Mr. Nick Zhong
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Chief Operating Officer, Smart Zeroing Ltd
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY2.14  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                           Keynote Presentation: Beyond Compliance - Climate Transition Plans, Credibility, Transparency and Corporate Reporting
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 2 (7 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>16.15 pm - 16.30 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/ryan_cook.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Mr. Ryan Cook
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Program Impact Manager (Sustainable Finance), Climateworks Centre
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY2.15  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                           Keynote Presentation: "Shaping a Greener Future: Strategic Outlook on the Evolution of China’s Carbon Market 中國碳市場發展現況與未來展望 (Virtual)"
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: Mandarin</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 2 (7 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>16.30 pm - 16.45 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/peng_feng.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Mr. Peng Feng
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Deputy General Manager, Shanghai Environment and Energy Exchanges
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY2.16  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                           Keynote Presentation: Overseas Business Expansion: Unlocking Opportunities in Bahrain (Bahrain Market)
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 2 (7 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>16.45 pm - 17.10 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/abduljabbar_abdulkarim.png"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Mr. Abduljabbar Abdulkarim
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Chief Executive Officer, Bahrain Green Energy
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY2.17  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                           Keynote Presentation: Overseas Business Expansion: Unlocking Opportunities in UAE (Dubai)
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 2 (7 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>17.10 pm - 17.30 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/sam_tang.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Mr. Sam Tang
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Managing Partner, Pembroke Capital Partners
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY2.18  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                           Keynote Presentation: Government Support and Opportunities for Global Partners in Australia’s Net Zero Transition
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 2 (7 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>17.30 pm - 17.50 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/jeanne_wang.png"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Ms. Jeanne Wang
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Investment Director, Australian Trade and Investment Commission (Austrade)
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY2.19  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                            Closing Remarks
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 2 (7 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>17.55 pm - 18.00 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/william_yu.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Dr. William Yu
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Founder & Chief Executive Officer, World Green Organisation (WGO)
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/*tab*/}

            {/*tab*/}
            <div
              id="2ndday"
              className={`tab ${toggle == "2ndday" ? "active-tab" : ""}`}
            >
              <div className="events-three__main-content-box">
                <ul className="list-unstyled events-three__content-list">
                  {/* DAY1.1  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                          Workshop Session: Requirements of the New ISSB Standards: Implications for ESG Strategy and Reporting 
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 1 (6 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>10.45 am - 11.15 am</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/cyrus_cheung.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Mr. Cyrus Cheung
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Partner, PwC – Sustainability Consulting & Chairperson of Sustainability Committee, Hong Kong Institute of Certified Public Accountants 
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY1.2  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                          Workshop Session: Redesign Procurement: Leveraging the Principles of Circular Economy
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 1 (6 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>11.15 am - 12.00 nn</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/felix_lam.png"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Mr. Felix Lam
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Chairman of Communication Committee, The Institute of Purchasing and Supply of Hong Kong (IPSHK)
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY1.3  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                          Workshop Session: Health and Well-being in ESG
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 1 (6 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>14.30 pm - 15.30 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/samson_leong.jpeg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Mr. Samson Leong
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Senior Manager, Intertek Testing Services HK Ltd.
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY1.4  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                          Workshop Session: Understanding CBAM: A Game Changer for Global Trade, Carbon Pricing, and Corporate Decarbonisation
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 1 (6 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>15.30 pm - 16.15 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/cloris_cai.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Ms. Cloris Cai
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Sustainability Solutions Manager, Green Initiatives, Intertek China
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY1.5  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                          Tech Session: ESG Accelerator Program Introduction
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 1 (6 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>16.30 pm - 16.45 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/vivienne_chiu.jpeg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Ms. Vivienne Chiu
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Chief Brand and Communications Officer, BOC Group Life Assurance Company Limited (BOC Life)
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY1.6  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                          Tech Session: ESG Tech Ventures Pitching Session
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 1 (6 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>16.45 pm - 18.00 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/vivienne_chiu.jpeg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Ms. Vivienne Chiu
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Chief Brand and Communications Officer, BOC Group Life Assurance Company Limited (BOC Life)
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                      {/* Speaker 2 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                        </div>
                        <p>12 Shortlisted Tech Ventures, BOC Life, Cyberport, HKSTP, DALA, CityU HKTech 300</p>
                      </div>
                      {/* Speaker 2 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY2.1  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                          Documentary Screening Session: Wang Kelian: Uncovering the Forest, Remembering the Forgotten
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 2 (7 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>14.15 pm - 15.15 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/TP_lim.png"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Mr. TP Lim
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          President, Roots & Shoots Malaysia
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY2.2  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                          Keynote Presentation: 一扇窗的溫度，一個星球的未來—安柏瑞門窗ESG創新與實踐"
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: Mandarin</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 2 (7 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>15.15 pm - 15.30 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/hu.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          胡超
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          廣東安柏瑞門窗有限公司 總經理 
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY2.3  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                          Workshop Session: Overseas Business Expansion (Malaysia Market) (Virtual)
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 2 (7 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>15.30 pm - 16.00 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/justin_teoh.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Mr. Justin Teoh
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Managing Director, Bispoint (Malaysia)
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                  {/* DAY2.4  */}
                  <li className="events-three__content-single">
                  {/* Session Title and timing row */}
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                          Climate Youth Leadership Forum: "Combating Energy Poverty: My Journey and the Transformative Power of Solar Energy in Underserved Communities & Campus Net Zero: What Can Students Do On and Beyond Campus?"
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="text">
                                <p>Language: English</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Day 2 (7 May)
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>16.00 pm - 17.00 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Speakers go here */}
                      <div className="events-three__content-left row">
                      {/* Speaker 1 Start*/}
                      <div className="events-three__content-user col-xl-12 col-lg-12">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/speakers/amos_cheng.jpeg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                          Mr. Amos Cheng
                          </h4>
                          <p className="events-three__content-user-sub-title">
                          Founder and President, Eco-Humanitarian Advocate (EHA) 
                          </p>
                        </div>
                      </div>
                      {/* Speaker 1 End*/}
                    </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/*tab*/}
            {/*tab*/}
            <div
              id="3rdday"
              className={`tab ${toggle == "3rdday" ? "active-tab" : ""}`}
            >
              <div className="events-three__main-content-box">
                <ul className="list-unstyled events-three__content-list">
                  <li className="events-three__content-single">
                    <div className="events-three__content-left">
                      <div className="events-three__content-img">
                        <img
                          src="assets/images/resources/events-three-content-img-1-1.jpg"
                          alt=""
                        />
                        <div className="events-three__video-link">
                          <a
                            href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                            className="video-popup"
                          >
                            <div className="events-three__video-icon">
                              <span className="icon-play" />
                              <i className="ripple" />
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="events-three__content-user">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/resources/events-three-content-user-img-1-1.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                            John Singh
                          </h4>
                          <p className="events-three__content-user-sub-title">
                            UX Design
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                            <Link href="/schedule-list">
                              Kelimontos DJ Party 2019
                            </Link>
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="icon">
                                <span className="icon-coffee-cup" />
                              </div>
                              <div className="text">
                                <p>Coffee &amp; Snacks</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-youtube" />
                              </div>
                              <div className="text">
                                <p>Video Streming</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Wednesday
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>10.00 am - 12.00 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="events-three__btn-box">
                        <Link
                          href="https://esgxchangehk.com/register"
                          className="about-three__btn thm-btn-two"
                        >
                          <span className="fas fa-arrow-circle-right" />
                          Reserve Your Seat
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="events-three__content-single">
                    <div className="events-three__content-left">
                      <div className="events-three__content-img">
                        <img
                          src="assets/images/resources/events-three-content-img-1-2.jpg"
                          alt=""
                        />
                        <div className="events-three__video-link">
                          <a
                            href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                            className="video-popup"
                          >
                            <div className="events-three__video-icon">
                              <span className="icon-play" />
                              <i className="ripple" />
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="events-three__content-user">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/resources/events-three-content-user-img-1-2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                            Mitra Smith
                          </h4>
                          <p className="events-three__content-user-sub-title">
                            UX Design
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                            <Link href="/schedule-list">Meeting With Word</Link>
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="icon">
                                <span className="icon-coffee-cup" />
                              </div>
                              <div className="text">
                                <p>Coffee &amp; Snacks</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-youtube" />
                              </div>
                              <div className="text">
                                <p>Video Streming</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Wednesday
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>10.00 am - 12.00 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="events-three__btn-box">
                        <Link
                          href="https://esgxchangehk.com/register"
                          className="about-three__btn thm-btn-two"
                        >
                          <span className="fas fa-arrow-circle-right" />
                          Reserve Your Seat
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="events-three__content-single">
                    <div className="events-three__content-left">
                      <div className="events-three__content-img">
                        <img
                          src="assets/images/resources/events-three-content-img-1-3.jpg"
                          alt=""
                        />
                        <div className="events-three__video-link">
                          <a
                            href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                            className="video-popup"
                          >
                            <div className="events-three__video-icon">
                              <span className="icon-play" />
                              <i className="ripple" />
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="events-three__content-user">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/resources/events-three-content-user-img-1-3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                            Kowlant Smith
                          </h4>
                          <p className="events-three__content-user-sub-title">
                            UX Design
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                            <Link href="/contact">Humble Hill Running Day</Link>
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="icon">
                                <span className="icon-coffee-cup" />
                              </div>
                              <div className="text">
                                <p>Coffee &amp; Snacks</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-youtube" />
                              </div>
                              <div className="text">
                                <p>Video Streming</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Wednesday
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>10.00 am - 12.00 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="events-three__btn-box">
                        <Link
                          href="https://esgxchangehk.com/register"
                          className="about-three__btn thm-btn-two"
                        >
                          <span className="fas fa-arrow-circle-right" />
                          Reserve Your Seat
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/*tab*/}
            {/*tab*/}
            <div
              id="4thdday"
              className={`tab ${toggle == "4thdday" ? "active-tab" : ""}`}
            >
              <div className="events-three__main-content-box">
                <ul className="list-unstyled events-three__content-list">
                  <li className="events-three__content-single">
                    <div className="events-three__content-left">
                      <div className="events-three__content-img">
                        <img
                          src="assets/images/resources/events-three-content-img-1-1.jpg"
                          alt=""
                        />
                        <div className="events-three__video-link">
                          <a
                            href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                            className="video-popup"
                          >
                            <div className="events-three__video-icon">
                              <span className="icon-play" />
                              <i className="ripple" />
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="events-three__content-user">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/resources/events-three-content-user-img-1-1.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                            John Singh
                          </h4>
                          <p className="events-three__content-user-sub-title">
                            UX Design
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                            <Link href="/schedule-list">
                              ISSB Workshop: IFRS S1 & S2 in Practice: Building Resilient and Transparent Sustainability Reports
                            </Link>
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="icon">
                                <span className="icon-coffee-cup" />
                              </div>
                              <div className="text">
                                <p>Coffee &amp; Snacks</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-youtube" />
                              </div>
                              <div className="text">
                                <p>Video Streming</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Wednesday
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>10.00 am - 12.00 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="events-three__btn-box">
                        <Link
                          href="https://esgxchangehk.com/register"
                          className="about-three__btn thm-btn-two"
                        >
                          <span className="fas fa-arrow-circle-right" />
                          Reserve Your Seat
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="events-three__content-single">
                    <div className="events-three__content-left">
                      <div className="events-three__content-img">
                        <img
                          src="assets/images/resources/events-three-content-img-1-2.jpg"
                          alt=""
                        />
                        <div className="events-three__video-link">
                          <a
                            href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                            className="video-popup"
                          >
                            <div className="events-three__video-icon">
                              <span className="icon-play" />
                              <i className="ripple" />
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="events-three__content-user">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/resources/events-three-content-user-img-1-2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                            Mitra Smith
                          </h4>
                          <p className="events-three__content-user-sub-title">
                            UX Design
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                            <Link href="/schedule-list">Meeting With Word</Link>
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="icon">
                                <span className="icon-coffee-cup" />
                              </div>
                              <div className="text">
                                <p>Coffee &amp; Snacks</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-youtube" />
                              </div>
                              <div className="text">
                                <p>Video Streming</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Wednesday
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>10.00 am - 12.00 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="events-three__btn-box">
                        <Link
                          href="https://esgxchangehk.com/register"
                          className="about-three__btn thm-btn-two"
                        >
                          <span className="fas fa-arrow-circle-right" />
                          Reserve Your Seat
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="events-three__content-single">
                    <div className="events-three__content-left">
                      <div className="events-three__content-img">
                        <img
                          src="assets/images/resources/events-three-content-img-1-3.jpg"
                          alt=""
                        />
                        <div className="events-three__video-link">
                          <a
                            href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                            className="video-popup"
                          >
                            <div className="events-three__video-icon">
                              <span className="icon-play" />
                              <i className="ripple" />
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="events-three__content-user">
                        <div className="events-three__content-user-img">
                          <img
                            src="assets/images/resources/events-three-content-user-img-1-3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="events-three__content-user-info">
                          <h4 className="events-three__content-user-name">
                            Kowlant Smith
                          </h4>
                          <p className="events-three__content-user-sub-title">
                            UX Design
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="events-three__content-right">
                      <div className="events-three__content-right-content">
                        <div className="events-three__content-right-content-left">
                          <h4 className="events-three__content-right-content-title">
                            <Link href="/schedule-list">
                              Humble Hill Running Day
                            </Link>
                          </h4>
                          <ul className="list-unstyled events-three__content-right-content-list">
                            <li>
                              <div className="icon">
                                <span className="icon-coffee-cup" />
                              </div>
                              <div className="text">
                                <p>Coffee &amp; Snacks</p>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <span className="icon-youtube" />
                              </div>
                              <div className="text">
                                <p>Video Streming</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="events-three__content-right-content-right">
                          <h4 className="events-three__content-right-content-title-two">
                            Wednesday
                          </h4>
                          <div className="events-three__content-right-content-time">
                            <div className="icon">
                              <span className="icon-time" />
                            </div>
                            <div className="text">
                              <p>10.00 am - 12.00 pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="events-three__btn-box">
                        <Link
                          href="https://esgxchangehk.com/register"
                          className="about-three__btn thm-btn-two"
                        >
                          <span className="fas fa-arrow-circle-right" />
                          Reserve Your Seat
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/*tab*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export const EventSchedule3 = () => {
  return (
    <section className="event-two">
      <div className="container">
        <div className="event-two__top">
          <div className="section-title text-left">
            <div className="section-title__tagline-box">
              <p className="section-title__tagline section-title__tagline--two">
                <span>//</span> About The Event
              </p>
            </div>
            <h2 className="section-title__title">
              Our Event Agenda And <br />
              <span>Schedule</span>
            </h2>
          </div>
          <div className="event-two__btn-box">
            <Link href="/schedule-list" className="event-two__btn thm-btn-two">
              <span className="fas fa-arrow-circle-right" />
              more Schedule
            </Link>
          </div>
        </div>
        <div className="row">
          {/*Event Two Single Start*/}
          <div className="col-xl-6 wow fadeInLeft" data-wow-delay="300ms">
            <div className="event-two__single">
              <div className="event-two__day-box">
                <div className="event-two__day">
                  <div className="event-two__day-shape">
                    <img
                      src="assets/images/shapes/event-two-day-box-shape.png"
                      alt=""
                    />
                  </div>
                  <h4>1st Day</h4>
                  <p>March 17, 2019</p>
                </div>
              </div>
              <div className="event-two__list-box">
                <ul className="event-two__list list-unstyled">
                  <li>
                    <div className="event-two__client-img-box">
                      <div className="event-two__client-img">
                        <img
                          src="assets/images/resources/event-two-client-img-1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="event-two__content">
                      <div className="event-two__meta">
                        <p>
                          <span className="fas fa-clock" />
                          08:00am - 05:00pm
                        </p>
                        <p>
                          <span className="fas fa-map-marker" />
                          New Hyde, 11040
                        </p>
                      </div>
                      <h3 className="event-two__title">
                        <Link href="/schedule-list-2">
                          Meeting With World Class Investors
                        </Link>
                      </h3>
                      <p className="event-two__text">
                        Undertake specific mandates to address global challenges
                        the the authority by delegated to the highest methood...
                      </p>
                      <div className="event-two__btn-box">
                        <Link
                          href="schedule-list-2"
                          className="event-two__btn-2 thm-btn-two"
                        >
                          <span className="fas fa-arrow-circle-right" />
                          JHON sMITH
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="event-two__client-img-box">
                      <div className="event-two__client-img">
                        <img
                          src="assets/images/resources/event-two-client-img-2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="event-two__content">
                      <div className="event-two__meta">
                        <p>
                          <span className="fas fa-clock" />
                          08:00am - 05:00pm
                        </p>
                        <p>
                          <span className="fas fa-map-marker" />
                          New Hyde, 11040
                        </p>
                      </div>
                      <h3 className="event-two__title">
                        <Link href="/schedule-list-2">
                          Registration For Opening Workshop
                        </Link>
                      </h3>
                      <p className="event-two__text">
                        Undertake specific mandates to address global challenges
                        the the authority by delegated to the highest methood...
                      </p>
                      <div className="event-two__btn-box">
                        <Link
                          href="schedule-list-2"
                          className="event-two__btn-2 thm-btn-two"
                        >
                          <span className="fas fa-arrow-circle-right" />
                          JHON sMITH
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*Event Two Single End*/}
          {/*Event Two Single Start*/}
          <div className="col-xl-6 wow fadeInRight" data-wow-delay="300ms">
            <div className="event-two__single event-two__single-2">
              <div className="event-two__day-box">
                <div className="event-two__day">
                  <div className="event-two__day-shape">
                    <img
                      src="assets/images/shapes/event-two-day-box-shape.png"
                      alt=""
                    />
                  </div>
                  <h4>2nd Day</h4>
                  <p>March 18, 2019</p>
                </div>
              </div>
              <div className="event-two__list-box">
                <ul className="event-two__list list-unstyled">
                  <li>
                    <div className="event-two__client-img-box">
                      <div className="event-two__client-img">
                        <img
                          src="assets/images/resources/event-two-client-img-3.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="event-two__content">
                      <div className="event-two__meta">
                        <p>
                          <span className="fas fa-clock" />
                          08:00am - 05:00pm
                        </p>
                        <p>
                          <span className="fas fa-map-marker" />
                          New Hyde, 11040
                        </p>
                      </div>
                      <h3 className="event-two__title">
                        <Link href="/schedule-list-2">
                          Humble Hill Running Day
                        </Link>
                      </h3>
                      <p className="event-two__text">
                        Undertake specific mandates to address global challenges
                        the the authority by delegated to the highest methood...
                      </p>
                      <div className="event-two__btn-box">
                        <Link
                          href="schedule-list-2"
                          className="event-two__btn-2 thm-btn-two"
                        >
                          <span className="fas fa-arrow-circle-right" />
                          JHON sMITH
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="event-two__client-img-box">
                      <div className="event-two__client-img">
                        <img
                          src="assets/images/resources/event-two-client-img-4.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="event-two__content">
                      <div className="event-two__meta">
                        <p>
                          <span className="fas fa-clock" />
                          08:00am - 05:00pm
                        </p>
                        <p>
                          <span className="fas fa-map-marker" />
                          New Hyde, 11040
                        </p>
                      </div>
                      <h3 className="event-two__title">
                        <Link href="/schedule-list-2">
                          Greetings and Opening Event
                        </Link>
                      </h3>
                      <p className="event-two__text">
                        Undertake specific mandates to address global challenges
                        the the authority by delegated to the highest methood...
                      </p>
                      <div className="event-two__btn-box">
                        <Link
                          href="schedule-list-2"
                          className="event-two__btn-2 thm-btn-two"
                        >
                          <span className="fas fa-arrow-circle-right" />
                          JHON sMITH
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*Event Two Single End*/}
        </div>
      </div>
    </section>
  );
};

export const EventSchedule4 = () => {
  const [toggle, setToggle] = useState("nav-1");
  return (
    <section className="schedule-list">
      <div
        className="schedule-list__bg"
        style={{
          backgroundImage:
            "url(assets/images/backgrounds/schedule-list-bg.jpg)",
        }}
      />
      <div className="container">
        <div className="schedule-list__inner">
          <div className="schedule-list__main-tab-box tabs-box">
            <div className="schedule-list__main-tab-buttons">
              <ul className="tab-buttons clearfix list-unstyled">
                <li
                  data-tab="#firstday"
                  className={`tab-btn ${toggle == "nav-1" ? "active-btn" : ""}`}
                  onClick={() => setToggle("nav-1")}
                >
                  <p>First Day</p>
                </li>
                <li
                  data-tab="#secondday"
                  className={`tab-btn ${toggle == "nav-2" ? "active-btn" : ""}`}
                  onClick={() => setToggle("nav-2")}
                >
                  <p>second Day</p>
                </li>
                <li
                  data-tab="#thirdday"
                  className={`tab-btn ${toggle == "nav-3" ? "active-btn" : ""}`}
                  onClick={() => setToggle("nav-3")}
                >
                  <p>Third Day</p>
                </li>
              </ul>
            </div>
            <div className="schedule-list__main-tab-content">
              <div className="tabs-content">
                {/*tab*/}
                <div
                  className={`tab ${toggle == "nav-1" ? "active-tab" : ""}`}
                  style={{ display: toggle == "nav-1" ? "active-tab" : "" }}
                >
                  <div className="schedule-list__content-inner">
                    <div className="schedule-list__first-half">
                      <p>1st half</p>
                    </div>
                    <div className="schedule-list__second-half">
                      <p>2nd Half</p>
                    </div>
                    <div className="schedule-list__more">
                      <p>MOre</p>
                    </div>
                    <div className="schedule-list__single">
                      <div className="schedule-list__date">
                        <p>April 20</p>
                      </div>
                      <div className="schedule-list__img">
                        <img
                          src="assets/images/resources/schedule-list-img-1-1.jpg"
                          alt
                        />
                      </div>
                      <div className="schedule-list__content">
                        <h3>Registration Opening Workshop</h3>
                        <p>
                          The event conference, scheduled for next month,
                          promises to be a dynamic{" "}
                        </p>
                      </div>
                    </div>
                    <div className="schedule-list__single schedule-list__single-2">
                      <div className="schedule-list__date">
                        <p>June 20</p>
                      </div>
                      <div className="schedule-list__img">
                        <img
                          src="assets/images/resources/schedule-list-img-1-2.jpg"
                          alt
                        />
                      </div>
                      <div className="schedule-list__content">
                        <h3>Introduction About Speakers</h3>
                        <p>
                          The event conference, scheduled for next month,
                          promises to be a dynamic{" "}
                        </p>
                      </div>
                    </div>
                    <div className="schedule-list__single schedule-list__single-3">
                      <div className="schedule-list__date">
                        <p>March 20</p>
                      </div>
                      <div className="schedule-list__img">
                        <img
                          src="assets/images/resources/schedule-list-img-1-3.jpg"
                          alt
                        />
                      </div>
                      <div className="schedule-list__content">
                        <h3>Marketing And Empathy Psycology</h3>
                        <p>
                          The event conference, scheduled for next month,
                          promises to be a dynamic{" "}
                        </p>
                      </div>
                    </div>
                    <div className="schedule-list__single schedule-list__single-2 schedule-list__single-4">
                      <div className="schedule-list__date">
                        <p>January 20</p>
                      </div>
                      <div className="schedule-list__img">
                        <img
                          src="assets/images/resources/schedule-list-img-1-4.jpg"
                          alt
                        />
                      </div>
                      <div className="schedule-list__content">
                        <h3>Greeting And Opening Event</h3>
                        <p>
                          The event conference, scheduled for next month,
                          promises to be a dynamic{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*tab*/}
                {/*tab*/}
                <div
                  className={`tab ${toggle == "nav-2" ? "active-tab" : ""}`}
                  style={{ display: toggle == "nav-2" ? "active-tab" : "" }}
                >
                  <div className="schedule-list__content-inner">
                    <div className="schedule-list__first-half">
                      <p>1st half</p>
                    </div>
                    <div className="schedule-list__second-half">
                      <p>2nd Half</p>
                    </div>
                    <div className="schedule-list__more">
                      <p>MOre</p>
                    </div>
                    <div className="schedule-list__single">
                      <div className="schedule-list__date">
                        <p>April 20</p>
                      </div>
                      <div className="schedule-list__img">
                        <img
                          src="assets/images/resources/schedule-list-img-1-1.jpg"
                          alt
                        />
                      </div>
                      <div className="schedule-list__content">
                        <h3>Registration Opening Workshop</h3>
                        <p>
                          The event conference, scheduled for next month,
                          promises to be a dynamic{" "}
                        </p>
                      </div>
                    </div>
                    <div className="schedule-list__single schedule-list__single-2">
                      <div className="schedule-list__date">
                        <p>June 20</p>
                      </div>
                      <div className="schedule-list__img">
                        <img
                          src="assets/images/resources/schedule-list-img-1-2.jpg"
                          alt
                        />
                      </div>
                      <div className="schedule-list__content">
                        <h3>Introduction About Speakers</h3>
                        <p>
                          The event conference, scheduled for next month,
                          promises to be a dynamic{" "}
                        </p>
                      </div>
                    </div>
                    <div className="schedule-list__single schedule-list__single-3">
                      <div className="schedule-list__date">
                        <p>March 20</p>
                      </div>
                      <div className="schedule-list__img">
                        <img
                          src="assets/images/resources/schedule-list-img-1-3.jpg"
                          alt
                        />
                      </div>
                      <div className="schedule-list__content">
                        <h3>Marketing And Empathy Psycology</h3>
                        <p>
                          The event conference, scheduled for next month,
                          promises to be a dynamic{" "}
                        </p>
                      </div>
                    </div>
                    <div className="schedule-list__single schedule-list__single-2 schedule-list__single-4">
                      <div className="schedule-list__date">
                        <p>January 20</p>
                      </div>
                      <div className="schedule-list__img">
                        <img
                          src="assets/images/resources/schedule-list-img-1-4.jpg"
                          alt
                        />
                      </div>
                      <div className="schedule-list__content">
                        <h3>Greeting And Opening Event</h3>
                        <p>
                          The event conference, scheduled for next month,
                          promises to be a dynamic{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*tab*/}
                {/*tab*/}
                <div
                  className={`tab ${toggle == "nav-3" ? "active-tab" : ""}`}
                  style={{ display: toggle == "nav-3" ? "active-tab" : "" }}
                >
                  <div className="schedule-list__content-inner">
                    <div className="schedule-list__first-half">
                      <p>1st half</p>
                    </div>
                    <div className="schedule-list__second-half">
                      <p>2nd Half</p>
                    </div>
                    <div className="schedule-list__more">
                      <p>MOre</p>
                    </div>
                    <div className="schedule-list__single">
                      <div className="schedule-list__date">
                        <p>April 20</p>
                      </div>
                      <div className="schedule-list__img">
                        <img
                          src="assets/images/resources/schedule-list-img-1-1.jpg"
                          alt
                        />
                      </div>
                      <div className="schedule-list__content">
                        <h3>Registration Opening Workshop</h3>
                        <p>
                          The event conference, scheduled for next month,
                          promises to be a dynamic{" "}
                        </p>
                      </div>
                    </div>
                    <div className="schedule-list__single schedule-list__single-2">
                      <div className="schedule-list__date">
                        <p>June 20</p>
                      </div>
                      <div className="schedule-list__img">
                        <img
                          src="assets/images/resources/schedule-list-img-1-2.jpg"
                          alt
                        />
                      </div>
                      <div className="schedule-list__content">
                        <h3>Introduction About Speakers</h3>
                        <p>
                          The event conference, scheduled for next month,
                          promises to be a dynamic{" "}
                        </p>
                      </div>
                    </div>
                    <div className="schedule-list__single schedule-list__single-3">
                      <div className="schedule-list__date">
                        <p>March 20</p>
                      </div>
                      <div className="schedule-list__img">
                        <img
                          src="assets/images/resources/schedule-list-img-1-3.jpg"
                          alt
                        />
                      </div>
                      <div className="schedule-list__content">
                        <h3>Marketing And Empathy Psycology</h3>
                        <p>
                          The event conference, scheduled for next month,
                          promises to be a dynamic{" "}
                        </p>
                      </div>
                    </div>
                    <div className="schedule-list__single schedule-list__single-2 schedule-list__single-4">
                      <div className="schedule-list__date">
                        <p>January 20</p>
                      </div>
                      <div className="schedule-list__img">
                        <img
                          src="assets/images/resources/schedule-list-img-1-4.jpg"
                          alt
                        />
                      </div>
                      <div className="schedule-list__content">
                        <h3>Greeting And Opening Event</h3>
                        <p>
                          The event conference, scheduled for next month,
                          promises to be a dynamic{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*tab*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
