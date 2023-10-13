import { useEffect, useState } from "react";
import useMagneticHover from "@/hooks/useMagneticHover";
import Script from "next/script";

import "../../public/assets/css/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "../../public/assets/css/preloader.css";
import "../../public/assets/css/animate.min.css";
import "../../public/assets/css/style2.css";
import "node_modules/react-modal-video/css/modal-video.css";
import Preloader from "@/components/common/Preloader";
import Layout from "@/components/layout/Layout";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  useMagneticHover();
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      {loading ? (
        <>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Script
            id="wow"
            src="//cdnjs.cloudflare.com/ajax/libs/wow/0.1.12/wow.min.js"
          ></Script>
          <Script
            id="initWow"
            strategy="lazyOnload"
          >{`new WOW().init();`}</Script>
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
}
