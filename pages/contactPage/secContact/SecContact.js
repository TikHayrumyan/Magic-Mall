/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "../../../styles/sass/pages/contactPage/secContact/secContact.module.scss";

import Link from "next/link";
import GoogleMap from "./googleMap/Map";
import { translate } from "../../../translations";
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider";

const SecContact = () => {
  const { lang } = useGlobalProvider();

  return (
    <div className={styles.SecContact}>
      <div className={styles.container}>
        <div className={styles.titleBlock}>
          <div className={styles.title}>{translate.FooterMenuContactUs[lang]}</div>
        </div>
        <div className={styles.contact}>
          <div className={styles.contactContainer}>
            <div className={styles.infoBlock}>
              <div className={styles.locationBlock}>
                <div className={styles.locationIcon}>
                  <img className={styles.locationIcon} alt="location" src="/img/icons/location.svg" />
                </div>
                <div className={styles.location}>{translate.contactPageAddres[lang]}</div>
              </div>
              <div className={styles.phoneBlock}>
                <div className={styles.phoneIcon}>
                  <img className={styles.phoneIcon} alt="phoneIcon" src="/img/contactPage/secContact/phoneIcon.svg" />
                </div>
                <div className={styles.number}>
                  <a href="tel:+374 11 880 888">+374 11 880 888</a>
                </div>
              </div>
              <div className={styles.mailBlock}>
                <div className={styles.messageIcon}>
                  <img className={styles.messageIcon} alt="message" src="/img/contactPage/secContact/message.svg" />
                </div>
                <div className={styles.mail}>
                  <a href="mailto:info@magicmall.am">info@magicmall.am</a>
                </div>
              </div>
              <div className={styles.clockBlock}>
                <div className={styles.clockIcon}>
                  <img alt="clock" src="/img/icons/blueTime.svg" />
                </div>
                <div className={styles.clock}>10։00 - 22։00</div>
              </div>
              <div className={styles.network}>
                <div className={styles.facebookIcon}>
                  <Link href="https://www.facebook.com/multimagicmall">
                    <a target="_blank">
                      <img className={styles.facebookIcon} alt="facebook" src="/img/icons/Facebook.svg" />
                    </a>
                  </Link>
                </div>
                <div className={styles.instagram}>
                  <Link href="https://www.instagram.com/multimagic_mall/">
                    <a target="_blank">
                      <img className={styles.instagram} alt="instagram" src="/img/icons/Instagram.svg" />
                    </a>
                  </Link>
                </div>
                <div className={styles.linkedinIcon}>
                  <Link href="https://www.linkedin.com/company/multi-outlet-mall/">
                    <a target="_blank">
                      <img className={styles.linkedinIcon} alt="Linkdin" src="/img/icons/Linkdin.svg" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.mapBlock}>
              <GoogleMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecContact;
