import React, { Component } from "react";
import ScriptTag from "react-script-tag";
import parse from "html-react-parser";
import { appendScript, removeScript } from "./LoadScritp";

import "./style.css";
import {Helmet} from "react-helmet";

import ElFooter from "./Footer";

export default class App extends Component {
  render() {
    return (
      <>
      <Helmet>           
    <link rel="shortcut icon" href="../img/favicon.ico" type="image/x-icon" />
    <link rel="apple-touch-icon" href="../img/apple-touch-icon.png" />    
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no"
    />    
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800%7CShadows+Into+Light%7CPlayfair+Display:400"
      rel="stylesheet"
      type="text/css"
    />    
    <link rel="stylesheet" href="../vendor/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../vendor/fontawesome-free/css/all.min.css" />
    <link rel="stylesheet" href="../vendor/animate/animate.min.css" />
    <link
      rel="stylesheet"
      href="../vendor/simple-line-icons/css/simple-line-icons.min.css"
    />
    <link
      rel="stylesheet"
      href="../vendor/owl.carousel/assets/owl.carousel.min.css"
    />
    <link
      rel="stylesheet"
      href="../vendor/owl.carousel/assets/owl.theme.default.min.css"
    />
    <link
      rel="stylesheet"
      href="../vendor/magnific-popup/magnific-popup.min.css"
    />    
    <link rel="stylesheet" href="../css/theme.css" />
    <link rel="stylesheet" href="../css/theme-elements.css" />
    <link rel="stylesheet" href="../css/theme-blog.css" />
    <link rel="stylesheet" href="../css/theme-shop.css" />    
    <link rel="stylesheet" href="../vendor/rs-plugin/css/settings.css" />
    <link rel="stylesheet" href="../vendor/rs-plugin/css/layers.css" />
    <link rel="stylesheet" href="../vendor/rs-plugin/css/navigation.css" />    
    <link rel="stylesheet" href="../css/skins/skin-corporate-11.css" />    
    <link rel="sty.lesheet" href="../css/custom.css" />    
    <script src="../vendor/modernizr/modernizr.min.js"></script>
    {/* <script src="../vendor/jquery/jquery.min.js"></script>
    <script src="../vendor/jquery.appear/jquery.appear.min.js"></script>
    <script src="../vendor/jquery.easing/jquery.easing.min.js"></script>
    <script src="../vendor/jquery.cookie/jquery.cookie.min.js"></script>
    <script src="../vendor/popper/umd/popper.min.js"></script>
    <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>
    <script src="../vendor/common/common.min.js"></script>
    <script src="../vendor/jquery.validation/jquery.validate.min.js"></script>
    <script src="../vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js"></script>
    <script src="../vendor/jquery.gmap/jquery.gmap.min.js"></script>
    <script src="../vendor/jquery.lazyload/jquery.lazyload.min.js"></script>
    <script src="../vendor/isotope/jquery.isotope.min.js"></script>
    <script src="../vendor/owl.carousel/owl.carousel.min.js"></script>
    <script src="../vendor/magnific-popup/jquery.magnific-popup.min.js"></script>
    <script src="../vendor/vide/jquery.vide.min.js"></script>
    <script src="../vendor/vivus/vivus.min.js"></script>
    <script src="../js/theme.js"></script>
    <script src="../vendor/rs-plugin/js/jquery.themepunch.tools.min.js"></script>
    <script src="../vendor/rs-plugin/js/jquery.themepunch.revolution.min.js"></script>
    <script src="../js/custom.js"></script>
    <script src="../js/theme.init.js"></script> */}
    </Helmet>
    {/* <div class="loading-overlay">
      <div class="bounce-loader">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
    </div> */}
        <div class="side-header-narrow-bar">
          <div class="side-header-narrow-bar-logo bg-color-dark d-flex justify-content-center">
            <a href="index.html" class="p-3 mb-4 mt-2">
              <img
                alt="Porto"
                width="40"
                height="40"
                src="img/logo-symbol-light.png"
              />
            </a>
          </div>
          <div class="side-header-narrow-bar-content d-flex align-items-center text-center h-100">
            <strong class="side-header-narrow-bar-content-vertical">
              Porto Template
            </strong>
          </div>
          <div class="side-header-narrow-bar-bottom d-flex justify-content-center">
            <div class="mb-4">
              <button class="hamburguer-btn hamburguer-btn-sticky-dark">
                <span class="hamburguer">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span class="close">
                  <span></span>
                  <span></span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <header
          id="header"
          class="side-header side-header-lg side-header-hide d-flex"
        >
          <div class="header-body">
            <div class="header-container container d-flex h-100">
              <div class="header-column flex-column justify-content-center h-100">
                <div class="header-row flex-row justify-content-center py-5">
                  <div class="header-logo">
                    <a href="index.html">
                      <img
                        alt="Porto"
                        width="100"
                        height="48"
                        src="img/logo.png"
                      />
                    </a>
                  </div>
                </div>
                <div class="header-row header-row-side-header flex-row h-100 overflow-hidden pb-5">
                  <div class="header-nav header-nav-links header-nav-links-side-header header-nav-links-vertical header-nav-links-vertical-slide align-self-center">
                    <div class="header-nav-main header-nav-main-square header-nav-main-dropdown-no-borders header-nav-main-effect-4 header-nav-main-sub-effect-1">
                      <nav className="collapse">
                        <ul className="nav nav-pills" id="mainNav">
                          <li className="">
                            <a
                              className="dropdown-item dropdown-toggle active"
                              href="#"
                            >
                              Inicio
                            </a>
                          </li>
                          <li className="">
                            <a
                              className="dropdown-item dropdown-toggle active"
                              href="#"
                            >
                              Nosotros
                            </a>
                          </li>
                          <li className="">
                            <a
                              className="dropdown-item dropdown-toggle active"
                              href="#"
                            >
                              Nuestras marcas
                            </a>
                          </li>
                          <li className="">
                            <a
                              className="dropdown-item dropdown-toggle active"
                              href="#"
                            >
                              Nuestros proyectos
                            </a>
                          </li>
                          <li className="">
                            <a
                              className="dropdown-item dropdown-toggle active"
                              href="#"
                            >
                              Contáctanos
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div class="header-row justify-content-end pb-3">
                  <ul class="header-social-icons social-icons social-icons-clean">
                    <li class="social-icons-facebook">
                      <a
                        href="http://www.facebook.com/"
                        target="_blank"
                        title="Facebook"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="social-icons-twitter">
                      <a
                        href="http://www.twitter.com/"
                        target="_blank"
                        title="Twitter"
                      >
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li class="social-icons-linkedin">
                      <a
                        href="http://www.linkedin.com/"
                        target="_blank"
                        title="Linkedin"
                      >
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                  <p class="text-1 pt-3">
                    © 2020 GHR International. All rights reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Inicio de Cuerpo */}
        
        <div role="main" class="main">

				<section class="page-header page-header-modern bg-color-light-scale-1 page-header-md ">
					<div class="container-fluid">
						<div class="row align-items-center">

							<div class="col">
								<a href="#" class="portfolio-prev text-decoration-none d-block appear-animation" data-appear-animation="fadeInRightShorter">
									<div class="d-flex align-items-center line-height-1">
										<i class="fas fa-arrow-left text-dark text-4 mr-3"></i>
										<div class="d-none d-sm-block line-height-1">
											<span class="text-dark opacity-4 text-1">PREVIOUS PROJECT</span>
											<h4 class="font-weight-bold text-3 mb-0">Okler Website Design</h4>
										</div>
									</div>
								</a>
							</div>
							<div class="col">
								<div class="row">
									<div class="col-md-12 align-self-center p-static order-2 text-center">
										<div class="overflow-hidden pb-2">
											<h1 class="text-dark font-weight-bold text-9 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="100">Porto Branding</h1>
										</div>
									</div>
									<div class="col-md-12 align-self-center order-1">
										<ul class="breadcrumb d-block text-center appear-animation" data-appear-animation="fadeIn" data-appear-animation-delay="300">
											<li><a href="#">Home</a></li>
											<li><a href="#">Portfolio</a></li>
											<li class="active">Small Slider</li>
										</ul>
									</div>
								</div>
							</div>

							<div class="col">
								<a href="#" class="portfolio-next text-decoration-none d-block float-right appear-animation" data-appear-animation="fadeInLeftShorter">
									<div class="d-flex align-items-center text-right line-height-1">
										<div class="d-none d-sm-block line-height-1">
											<span class="text-dark opacity-4 text-1">NEXT PROJECT</span>
											<h4 class="font-weight-bold text-3 mb-0">Porto Admin Dev</h4>
										</div>
										<i class="fas fa-arrow-right text-dark text-4 ml-3"></i>
									</div>
								</a>
							</div>
						</div>
					</div>
				</section>

				<div class="container pt-2 pb-4">

					<div class="row pb-4 mb-2">
						<div class="col-md-6 mb-4 mb-md-0 appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="300">

							<div class="owl-carousel owl-theme nav-inside nav-inside-edge nav-squared nav-with-transparency nav-dark mt-3" data-plugin-options="{'items': 1, 'margin': 10, 'loop': false, 'nav': true, 'dots': false}">
								<div>
									<div class="img-thumbnail border-0 border-radius-0 p-0 d-block">
										<img src="img/projects/project-short.jpg" class="img-fluid border-radius-0" alt=""/>
									</div>
								</div>
								<div>
									<div class="img-thumbnail border-0 border-radius-0 p-0 d-block">
										<img src="img/projects/project-short-2.jpg" class="img-fluid border-radius-0" alt=""/>
									</div>
								</div>
								<div>
									<div class="img-thumbnail border-0 border-radius-0 p-0 d-block">
										<img src="img/projects/project-short-3.jpg" class="img-fluid border-radius-0" alt=""/>
									</div>
								</div>
							</div>

							<hr class="solid my-5 appear-animation" data-appear-animation="fadeIn" data-appear-animation-delay="1000"/>

							<div class="appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="1100">
								<strong class="text-uppercase text-1 mr-3 text-dark float-left position-relative top-2">Share</strong>
								<ul class="social-icons">
									<li class="social-icons-facebook"><a href="http://www.facebook.com/" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
									<li class="social-icons-twitter"><a href="http://www.twitter.com/" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a></li>
									<li class="social-icons-linkedin"><a href="http://www.linkedin.com/" target="_blank" title="Linkedin"><i class="fab fa-linkedin-in"></i></a></li>
								</ul>
							</div>

						</div>
						<div class="col-md-6">
							<div class="overflow-hidden">
								<h2 class="text-color-dark font-weight-normal text-4 mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="600">Project <strong class="font-weight-extra-bold">Description</strong></h2>
							</div>
							<p class="appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="800">Donec volutpat nibh sit amet libero ornare non laoreet arcu luctus. Donec id arcu quis mauris euismod placerat sit amet ut metus. Sed imperdiet fringilla sem eget euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

							<div class="overflow-hidden mt-4">
								<h2 class="text-color-dark font-weight-normal text-4 mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="1000">Project <strong class="font-weight-extra-bold">Details</strong></h2>
							</div>
							<ul class="list list-icons list-primary list-borders text-2 appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="1200">
								<li><i class="fas fa-caret-right left-10"></i> <strong class="text-color-primary">Client:</strong> Okler Themes</li>
								<li><i class="fas fa-caret-right left-10"></i> <strong class="text-color-primary">Date:</strong> January 2020</li>
								<li><i class="fas fa-caret-right left-10"></i> <strong class="text-color-primary">Skills:</strong> <a href="#" class="badge badge-dark badge-sm badge-pill px-2 py-1 ml-1">DESIGN</a><a href="#" class="badge badge-dark badge-sm badge-pill px-2 py-1 ml-1">BRAND</a><a href="#" class="badge badge-dark badge-sm badge-pill px-2 py-1 ml-1">WEBSITES</a></li>
								<li><i class="fas fa-caret-right left-10"></i> <strong class="text-color-primary">Project URL:</strong> <a href="#" target="_blank" class="text-dark">http://www.okler.net</a></li>
							</ul>
						</div>
					</div>

				</div>

			</div>
      

        {/* Fin de Cuerpo */}
        <ElFooter/>
        {/* Control */}
        <ScriptTag src="../vendor/jquery/jquery.min.js"/>
      <ScriptTag src="../vendor/jquery.appear/jquery.appear.min.js"/>
      <ScriptTag src="../vendor/jquery.easing/jquery.easing.min.js"/>
      <ScriptTag src="../vendor/jquery.cookie/jquery.cookie.min.js"/>
      <ScriptTag src="../vendor/popper/umd/popper.min.js"/>
      <ScriptTag src="../vendor/bootstrap/js/bootstrap.min.js"/>
      <ScriptTag src="../vendor/common/common.min.js"/>
      <ScriptTag src="../vendor/jquery.validation/jquery.validate.min.js"/>
      <ScriptTag src="../vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js"/>
      <ScriptTag src="../vendor/jquery.gmap/jquery.gmap.min.js"/>
      <ScriptTag src="../vendor/jquery.lazyload/jquery.lazyload.min.js"/>
      <ScriptTag src="../vendor/isotope/jquery.isotope.min.js"/>
      <ScriptTag src="../vendor/owl.carousel/owl.carousel.min.js"/>
      <ScriptTag src="../vendor/magnific-popup/jquery.magnific-popup.min.js"/>
      <ScriptTag src="../vendor/vide/jquery.vide.min.js"/>
      <ScriptTag src="../vendor/vivus/vivus.min.js"/>
      <ScriptTag src="../js/theme.js"/>
      <ScriptTag src="../vendor/rs-plugin/js/jquery.themepunch.tools.min.js"/>
      <ScriptTag src="../vendor/rs-plugin/js/jquery.themepunch.revolution.min.js"/>
      <ScriptTag src="../js/custom.js"/>
      <ScriptTag src="../js/theme.init.js"/>
        
      </>
    );
  }
}