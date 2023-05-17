/* eslint-disable @next/next/no-img-element */
import styles from "../../../styles/sass/pages/howToGetToMall/microBus/microBus.module.scss";

const arrow = "/img/howToGetToMall/microBus/arrow.svg";
const marker = "/img/howToGetToMall/microBus/marker.svg";
const location = "/img/howToGetToMall/microBus/location.svg";

import GoogleMap from "./Map";

import { useState } from "react";
import { useGlobalProvider } from "../../../components/Providers/GlobalProvider";
import { translate } from "../../../translations";

const MicroBus = () => {
  const [showRouteData, SetShowRouteData] = useState(-1);

  const { lang } = useGlobalProvider();
  const toggleData = (num) => {
    SetShowRouteData(num == showRouteData ? -1 : num);
  };
  const routeData = [
    {
      id: 1,
      img: location,
      route: " գ. Գետամեջ",
    },
    {
      id: 2,
      img: arrow,
      route: "գ. Պտղնի",
    },
    {
      id: 3,
      img: arrow,
      route: "գ. Վերին Պտղնի",
    },
    {
      id: 4,
      img: marker,
      route: "Multi Magic Mall",
    },
    {
      id: 5,
      img: arrow,
      route: "Մ-4 ավտոճանապարհ",
    },
    {
      id: 6,
      img: arrow,
      route: "գ. Բալահովիտ",
    },
    {
      id: 7,
      img: arrow,
      route: "Հ-1 ավտոճանապարհ",
    },
    {
      id: 8,
      img: arrow,
      route: "Երևանյան փ.",
    },
    {
      id: 9,
      img: arrow,
      route: "Հանրապետության պող.",
    },
    {
      id: 10,
      img: arrow,
      route: "Հատիսի փ.",
    },
    {
      id: 11,
      img: location,
      route: "Աբովյանի ԱԿ",
    },
  ];

  const SecondRouteData = [
    {
      id: 1,
      img: location,
      route: "Աբովյանի ԱԿ",
    },
    {
      id: 2,
      img: arrow,
      route: "Սևանի փ.",
    },
    {
      id: 3,
      img: arrow,
      route: "Հատիսի փ.",
    },
    {
      id: 4,
      img: arrow,
      route: "Հանրապետության պող.",
    },
    {
      id: 5,
      img: arrow,
      route: "Երևանյան փ.",
    },
    {
      id: 6,
      img: arrow,
      route: "Հ-1 ավտոճանապարհ",
    },
    {
      id: 7,
      img: arrow,
      route: " գ. Բալահովիտ",
    },
    {
      id: 8,
      img: arrow,
      route: "Մ-4 ավտոճանապարհ",
    },
    {
      id: 9,
      img: arrow,
      route: "գ. Վերին Պտղնի",
    },
    {
      id: 10,
      img: marker,
      route: "Multi Magic Mall",
    },
    {
      id: 11,
      img: arrow,
      route: "գ. Առինջ",
    },
    {
      id: 12,
      img: location,
      route: "ք․ Երևան, Մ․Բաբաջանյան - Աշխաբադ փող․ խաչմերուկ",
    },
  ];

  const ThirdRouteData = [
    {
      id: 1,
      img: location,
      route: "Բյուրեղավանի ե/կ",
    },
    {
      id: 2,
      img: arrow,
      route: "Հ-2 ավտոճանապարհ",
    },
    {
      id: 3,
      img: arrow,
      route: "Մ-4 ավտոճանապարհ",
    },
    {
      id: 4,
      img: arrow,
      route: "գ. Վերին Պտղնի",
    },
    {
      id: 5,
      img: marker,
      route: "Multi Magic Mall",
    },
    {
      id: 6,
      img: arrow,
      route: "ք․ Երևան Թբիլիսյան խճ.",
    },
    {
      id: 7,
      img: arrow,
      route: " Ազատության պող.",
    },
    {
      id: 8,
      img: arrow,
      route: "Կոմիտասի պող.",
    },
    {
      id: 9,
      img: arrow,
      route: "Կիևյան փ.",
    },
    {
      id: 10,
      img: arrow,
      route: "Ծիծեռնակաբերդի խճ.",
    },
    {
      id: 11,
      img: arrow,
      route: "Աթենքի փ.",
    },
    {
      id: 12,
      img: arrow,
      route: "Ծ. Իսակովի պող.",
    },
    {
      id: 13,
      img: location,
      route: "«Կենտրոնական» ԱԿ",
    },
  ];

  const FourRouteData = [
    {
      id: 1,
      img: location,
      route: "Հրազդանի ե/կ",
    },
    {
      id: 2,
      img: arrow,
      route: "Զ. Անդրանիկի պող.",
    },
    {
      id: 3,
      img: arrow,
      route: "Հ-1 ավտոճանապարհ",
    },
    {
      id: 4,
      img: arrow,
      route: "ք. Քաղսի",
    },
    {
      id: 5,
      img: arrow,
      route: "Մ-4 ավտոճանապարհ",
    },
    {
      id: 6,
      img: marker,
      route: "Multi Magic Mall",
    },
    {
      id: 7,
      img: arrow,
      route: "ք․ Երևան Թբիլիսյան խճ.",
    },
    {
      id: 8,
      img: arrow,
      route: "Ազատության պող.",
    },
    {
      id: 9,
      img: location,
      route: "«Ռելեի գործարան» ե/կ",
    },
  ];

  const FiveRouteData = [
    {
      id: 1,
      img: location,
      route: "Չարենցավանի ԱԿ",
    },
    {
      id: 2,
      img: arrow,
      route: "Հ-7 ավտոճանապարհ",
    },
    {
      id: 3,
      img: arrow,
      route: "Մ-4 ավտոճանապարհ",
    },
    {
      id: 4,
      img: arrow,
      route: "գ. Վերին Պտղնի",
    },
    {
      id: 5,
      img: marker,
      route: "Multi Magic Mall",
    },
    {
      id: 6,
      img: arrow,
      route: "ք. Երևան Աճառյան փ.",
    },
    {
      id: 7,
      img: arrow,
      route: "Մյասնիկյան պող.",
    },
    {
      id: 8,
      img: arrow,
      route: "Աբովյան փ.",
    },
    {
      id: 9,
      img: location,
      route: "Մետրո «Երիտասարդական կայարան» ե/կ",
    },
  ];

  const SixRouteData = [
    {
      id: 1,
      img: location,
      route: "Ծաղկաձորի ե/կ",
    },
    {
      id: 2,
      img: arrow,
      route: "Հ-5 ավտոճանապարհ",
    },
    {
      id: 3,
      img: arrow,
      route: "Հ-28 ավտոճանապարհ",
    },
    {
      id: 4,
      img: arrow,
      route: "Մ-4 ավտոճանապարհ",
    },
    {
      id: 5,
      img: marker,
      route: "Multi Magic Mall",
    },
    {
      id: 6,
      img: arrow,
      route: "ք․ Երևան Թբիլիսյան խճ.",
    },
    {
      id: 7,
      img: arrow,
      route: "Ազատության պող.",
    },
    {
      id: 8,
      img: location,
      route: "«Ռելեի գործարան» ե/կ",
    },
  ];

  return (
    <div className={styles.microBus}>
      <div className={styles.container}>
        <div className={styles.title}>{translate.MicroBus[lang]}</div>

        <div className={styles.routeTitleBlock}>
          <div className={styles.pattern}>
            <img className={styles.pattern} alt="pattern" src="/img/howToGetToMall/microBus/pattern.svg" />
          </div>
          <div className={styles.bus}>
            <img className={styles.bus} alt="bus" src="/img/howToGetToMall/microBus/busFirst.svg" />
          </div>
          <div className={styles.routeTitle} onClick={() => toggleData(1)}>
            գ. Գետամեջ-Աբովյան
          </div>
          <div className={showRouteData == 1 ? styles.minus : styles.minusNone} onClick={() => toggleData(1)}>
            -
          </div>
          <div className={showRouteData == 1 ? styles.plusNone : styles.plus} onClick={() => toggleData(1)}>
            +
          </div>
        </div>
        <div className={styles.routeData}>
          <div className={styles.routeDataBlock}>
            {showRouteData == 1 &&
              routeData.map(({ id, img, route }) => {
                return (
                  <div className={styles.data} key={id}>
                    <div className={styles.patternsArrow}>
                      <img alt="arrow" src={img} />
                    </div>
                    {id == 4 ? (
                      <div className={styles.routeMultiOutletMall}>{route}</div>
                    ) : (
                      <div className={styles.route}>{route}</div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>

        <div className={styles.routeTitleBlock}>
          <div className={styles.pattern}>
            <img className={styles.pattern} alt="pattern" src="/img/howToGetToMall/microBus/pattern.svg" />
          </div>
          <div className={styles.bus}>
            <img className={styles.bus} alt="bus" src="/img/howToGetToMall/microBus/busSecond.svg" />
          </div>
          <div className={styles.routeTitle} onClick={() => toggleData(2)}>
            Աբովյան-գ. Առինջ-Երևան
          </div>
          <div className={showRouteData == 2 ? styles.minus : styles.minusNone} onClick={() => toggleData(2)}>
            -
          </div>
          <div className={showRouteData == 2 ? styles.plusNone : styles.plus} onClick={() => toggleData(2)}>
            +
          </div>
        </div>
        <div className={styles.routeData}>
          <div className={styles.routeDataBlock}>
            {showRouteData == 2 &&
              SecondRouteData.map(({ id, img, route }) => {
                return (
                  <div className={styles.data} key={id}>
                    <div className={styles.patternsArrow}>
                      <img alt="arrow" src={img} />
                    </div>
                    {id == 10 ? (
                      <div className={styles.routeMultiOutletMall}>{route}</div>
                    ) : (
                      <div className={styles.route}>{route}</div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>

        <div className={styles.routeTitleBlock}>
          <div className={styles.pattern}>
            <img className={styles.pattern} alt="pattern" src="/img/howToGetToMall/microBus/pattern.svg" />
          </div>
          <div className={styles.bus}>
            <img className={styles.bus} alt="bus" src="/img/howToGetToMall/microBus/busThird.svg" />
          </div>
          <div className={styles.routeTitle} onClick={() => toggleData(3)}>
            Բյուրեղավան-Երևան
          </div>
          <div className={showRouteData == 3 ? styles.minus : styles.minusNone} onClick={() => toggleData(3)}>
            -
          </div>
          <div className={showRouteData == 3 ? styles.plusNone : styles.plus} onClick={() => toggleData(3)}>
            +
          </div>
        </div>
        <div className={styles.routeData}>
          <div className={styles.routeDataBlock}>
            {showRouteData == 3 &&
              ThirdRouteData.map(({ id, img, route }) => {
                return (
                  <div className={styles.data} key={id}>
                    <div className={styles.patternsArrow}>
                      <img alt="arrow" src={img} />
                    </div>
                    {id == 5 ? (
                      <div className={styles.routeMultiOutletMall}>{route}</div>
                    ) : (
                      <div className={styles.route}>{route}</div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>

        <div className={styles.routeTitleBlock}>
          <div className={styles.pattern}>
            <img className={styles.pattern} alt="pattern" src="/img/howToGetToMall/microBus/pattern.svg" />
          </div>
          <div className={styles.bus}>
            <img className={styles.bus} alt="bus" src="/img/howToGetToMall/microBus/busFour.svg" />
          </div>
          <div className={styles.routeTitle} onClick={() => toggleData(4)}>
            Հրազդան-Երևան
          </div>
          <div className={showRouteData == 4 ? styles.minus : styles.minusNone} onClick={() => toggleData(4)}>
            -
          </div>
          <div className={showRouteData == 4 ? styles.plusNone : styles.plus} onClick={() => toggleData(4)}>
            +
          </div>
        </div>
        <div className={styles.routeData}>
          <div className={styles.routeDataBlock}>
            {showRouteData == 4 &&
              FourRouteData.map(({ id, img, route }) => {
                return (
                  <div className={styles.data} key={id}>
                    <div className={styles.patternsArrow}>
                      <img alt="arrow" src={img} />
                    </div>
                    {id == 6 ? (
                      <div className={styles.routeMultiOutletMall}>{route}</div>
                    ) : (
                      <div className={styles.route}>{route}</div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>

        <div className={styles.routeTitleBlock}>
          <div className={styles.pattern}>
            <img className={styles.pattern} alt="pattern" src="/img/howToGetToMall/microBus/pattern.svg" />
          </div>
          <div className={styles.bus}>
            <img className={styles.bus} alt="bus" src="/img/howToGetToMall/microBus/busFive.svg" />
          </div>
          <div className={styles.routeTitle} onClick={() => toggleData(5)}>
            Չարենցավան - Երևան
          </div>
          <div className={showRouteData == 5 ? styles.minus : styles.minusNone} onClick={() => toggleData(5)}>
            -
          </div>
          <div className={showRouteData == 5 ? styles.plusNone : styles.plus} onClick={() => toggleData(5)}>
            +
          </div>
        </div>
        <div className={styles.routeData}>
          <div className={styles.routeDataBlock}>
            {showRouteData == 5 &&
              FiveRouteData.map(({ id, img, route }) => {
                return (
                  <div className={styles.data} key={id}>
                    <div className={styles.patternsArrow}>
                      <img alt="arrow" src={img} />
                    </div>
                    {id == 5 ? (
                      <div className={styles.routeMultiOutletMall}>{route}</div>
                    ) : (
                      <div className={styles.route}>{route}</div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>

        <div className={styles.routeTitleBlock}>
          <div className={styles.pattern}>
            <img className={styles.pattern} alt="pattern" src="/img/howToGetToMall/microBus/pattern.svg" />
          </div>
          <div className={styles.bus}>
            <img className={styles.bus} alt="bus" src="/img/howToGetToMall/microBus/busSix.svg" />
          </div>
          <div className={styles.routeTitle} onClick={() => toggleData(6)}>
            Ծաղկաձոր-Երևան
          </div>
          <div className={showRouteData == 6 ? styles.minus : styles.minusNone} onClick={() => toggleData(6)}>
            -
          </div>
          <div className={showRouteData == 6 ? styles.plusNone : styles.plus} onClick={() => toggleData(6)}>
            +
          </div>
        </div>
        <div className={styles.routeData}>
          <div className={styles.routeDataBlock}>
            {showRouteData == 6 &&
              SixRouteData.map(({ id, img, route }) => {
                return (
                  <div className={styles.data} key={id}>
                    <div className={styles.patternsArrow}>
                      <img alt="arrow" src={img} />
                    </div>
                    {id == 5 ? (
                      <div className={styles.routeMultiOutletMall}>{route}</div>
                    ) : (
                      <div className={styles.route}>{route}</div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
        <div className={styles.mapBlock}>
          <GoogleMap />
        </div>
      </div>
    </div>
  );
};

export default MicroBus;
