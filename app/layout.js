import "./globals.css";

import "@vendors/animate/animate.min.css";
import "@vendors/animate/custom-animate.css";
import "@vendors/bootstrap-select/css/bootstrap-select.min.css";
import "@vendors/bootstrap/css/bootstrap.min.css";
import "@vendors/envens-icons/style.css";
import "@vendors/fontawesome/css/all.min.css";
import "@vendors/jarallax/jarallax.css";
import "@vendors/jquery-magnific-popup/jquery.magnific-popup.css";
import "@vendors/jquery-ui/jquery-ui.css";
import "@vendors/nice-select/nice-select.css";
import "@vendors/odometer/odometer.min.css";
import "@vendors/reey-font/stylesheet.css";
import "@vendors/swiper/swiper.min.css";

import Preloader from "@/components/Preloader";
import ScrollTop from "@/layouts/ScrollTop";
import "@css/envens-responsive.css";
import "@css/envens.css";

export const metadata = {
  title: "ESG Xchange 2025",
  description: "ESG Xchange 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
      </head>
      <body>
        <Preloader />
        {children}
        <ScrollTop />
      </body>
    </html>
  );
}
