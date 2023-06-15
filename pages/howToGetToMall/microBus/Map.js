import React from "react";
import { useGoogleMaps} from "react-hook-google-maps";
import styles from "../../../styles/sass/pages/contactPage/secContact/secContact.module.scss";

const GoogleMap = () => {
  const { ref } = useGoogleMaps(
      "AIzaSyBCiJRvCAHw_XBuuv3R_xwQyzTAwryG530",
      {
          center: { lat:  40.244014, lng: 44.574557 },
          zoom: 15,

      },
  );

  return (
    <>
    {/* <h1>map not loaded</h1> */}
      <div className={styles.Map} ref={ref} style={{ width: "89vw", height: "40vw" }}></div>
    </>
  );
};

export default GoogleMap;
