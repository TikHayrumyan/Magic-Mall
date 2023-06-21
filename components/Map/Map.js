/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/sass/pages/map/map.module.scss";
import Link from "next/link";

const Map = ({ data, changeFloor }) => {

  const keys = Object.keys(data.data);
  const numFirst = data.data[1];
  const numSecond = data.data[2];

  function getDoorName(num) {
    let result = numFirst?.filter(({ door }) => {
      return door == num;
    });

    return result[0]?.name;
  }
  function getDoorId(num) {
    let result = numFirst?.filter(({ door }) => {
      return door == num;
    });

    return result[0]?.id;
  }
  function getType(num) {
    let result = numFirst?.filter(({ door }) => {
      return door == num;
    });

    return result[0]?.type;
  }
  function getDoorNameTwo(num) {
    let result = numSecond.filter(({ door }) => {
      return door == num
    });

    return result[0]?.name
  }
  function getDoorIdTwo(num) {
    let result = numSecond.filter(({ door }) => {
      return door == num
    });

    return result[0]?.id
  }
  function getTypeTwo(num) {
    let result = numSecond.filter(({ door }) => {
      return door == num
    });

    return result[0]?.type
  }
  return (
    <div className={styles.map}>
      <div className={styles.container}>
        {changeFloor == keys[0] ? (
          <div className={styles.firstFloor}>
            <div className={styles.topIcons}>
              <div className={styles.door}>
                <img alt="door" className={styles.doorIcon} src="/img/map/map/door.svg" />
              </div>
              <div className={styles.stairs}>
                <img alt="stairs" className={styles.stairsIcon} src="/img/map/map/Stairs.svg" />
              </div>
            </div>
            <div className={styles.mapDesign}>
              <div  className={styles.topEnter}>    
                <div className={styles.entryArm}>ՄՈՒՏՔ</div>
                <div className={styles.entryEng}>ENTRY</div>
                <div className={styles.containerImg}>
                  <img alt="Entry" className={styles.doorIcon} src="/img/map/map/entry.svg" />
                </div>
              </div>
              <div className={styles.leftContainer}>
                <Link href={`/${getType(1)}SinglePage/${getDoorId(1)}`}>
                  <div className={styles.A1}>{getDoorName(1)}</div>
                </Link>
                <div className={styles.top}>
                  <div className={styles.row}>
                    <Link href={`/${getType(2)}SinglePage/${getDoorId(2)}`}>
                      <div className={styles.A2}>{getDoorName(2)}</div>
                    </Link>
                    <Link href={`/${getType(3)}SinglePage/${getDoorId(3)}`}>
                      <div className={styles.A3}>
                        <p>{getDoorName(3)}</p>
                      </div>
                    </Link>
                    <Link href={`${getType(4)}SinglePage/${getDoorId(4)}`}>
                      <div className={styles.A4}><span>{getDoorName(4)}</span></div>
                    </Link>
                    <div className={styles.changedTopLeft}>
                      <Link href={`${getType(5)}SinglePage/${getDoorId(5)}`}><div className={styles.A5}>{getDoorName(5)}</div></Link>
                     
                    </div>
                  </div>
                  <div className={styles.bottom}>
                    <Link href={`/${getType(8)}SinglePage/${getDoorId(8)}`}>
                      <div className={styles.A7}>
                        <span>{getDoorName(8)}</span>
                      </div>
                    </Link>
                    <div className={styles.flexColumn}>
                      <Link href={`/${getType(9)}SinglePage/${getDoorId(9)}`}><div className={styles.A8}>{getDoorName(9)}</div></Link>
                      <Link href={`/${getType(10)}SinglePage/${getDoorId(10)}`}><div className={styles.A9}>{getDoorName(10)}</div></Link>
                    </div>
                    <Link href={`/${getType(11)}SinglePage/${getDoorId(11)}`}><div className={styles.A10}><span>{getDoorName(11)}</span></div></Link>
                  </div>
                </div>
              </div>
              <div className={styles.middleContainer}>
                <div className={styles.middleTop}>
                  <div className={styles.AA1}>
                    <div className={styles.topPartA1}></div>
                    <div className={styles.AA1forFLex}>
                      <div>
                        <div className={styles.columParts}>
                          <div className={styles.AA1Top}></div>
                          <Link href={`/${getType(12)}SinglePage/${getDoorId(12)}`}><div className={styles.AA2}>{getDoorName(12)}</div></Link>
                        </div>
                      </div>
                      <section className={styles.containerBigPart}>
                        <Link href={`/${getType(13)}SinglePage/${getDoorId(13)}`}><div className={styles.bigPart}>{getDoorName(13)}</div></Link>
                        <Link href={`/${getType(14)}SinglePage/${getDoorId(14)}`}><div className={styles.bigPartNew}><span>{getDoorName(14)}</span></div></Link>
                      </section>
                    </div>
                  </div>
                   <Link href={`/${getType(94)}SinglePage/${getDoorId(94)}`}><div className={styles.bigPartNewLast}><span>{getDoorName(94)}</span></div></Link>
                  <Link href={`/${getType(15)}SinglePage/${getDoorId(15)}`}><div className={styles.AA3}>{getDoorName(15)}</div></Link>
                </div>
                <div className={styles.middleBottom}>
                  <div className={styles.leftCenter}>
                    <Link href={`/${getType(16)}SinglePage/${getDoorId(16)}`}><div className={styles.AA4}>{getDoorName(16)}</div></Link>
                    <Link href={`/${getType(17)}SinglePage/${getDoorId(17)}`}><div className={styles.AA5}>{getDoorName(17)}</div></Link>
                  </div>
                  <div className={styles.middleEscalator}>
                    <img alt="Escalator" className={styles.doorIcon} src="/img/map/map/Escalator.svg" />
                  </div>
                  <div className={styles.middleCenter}>
                    <div className={styles.MiddleCenterTop}>
                      <Link href={`/${getType(18)}SinglePage/${getDoorId(18)}`}><div className={styles.AA6}>{getDoorName(18)}</div></Link>
                      <Link href={`/${getType(19)}SinglePage/${getDoorId(19)}`}><div className={styles.AA8}>{getDoorName(19)}</div></Link>
                    </div>
                    <div className={styles.MiddleCenterMid}>
                      <Link href={`/${getType(20)}SinglePage/${getDoorId(20)}`}><div className={styles.AA9}>{getDoorName(20)}</div></Link>
                      {/* <Link href={`/${getType(21)}SinglePage/${getDoorId(21)}`}><div className={styles.AA10Top}>{getDoorName(21)}</div></Link> */}
                      <div className={styles.AA10Top}></div>
                      <Link href={`/${getType(22)}SinglePage/${getDoorId(22)}`}><div className={styles.AA11}>{getDoorName(22)}</div></Link>
                    </div>
                    <div className={styles.MiddleCenterBottom}>
                      {/* <div className={styles.AA10left}></div> */}
                      {/* <div className={styles.AA10bottom}></div> */}
                      
                      <Link href={`/${getType(21)}SinglePage/${getDoorId(21)}`}><div className={styles.AA10left}>{getDoorName(21)}</div></Link> 
                      <Link href={`/${getType(23)}SinglePage/${getDoorId(23)}`}><div className={styles.AA12}>{getDoorName(23)}</div></Link>
                    </div>
                  </div>
                  <div className={styles.MiddleRight}>
                    <div className={styles.AA3Bottom}></div>
                    <div className={styles.newAA13Container}>
                      <Link href={`/${getType(244)}SinglePage/${getDoorId(244)}`}><div className={styles.AA13TopNew}>{getDoorName(244)}</div></Link>
                      <Link href={`/${getType(24)}SinglePage/${getDoorId(24)}`}><div className={styles.AA13}>{getDoorName(24)}</div></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.rightContainer}>
                <Link href={`/${getType(25)}SinglePage/${getDoorId(25)}`}>
                  <div className={styles.AA14}>
                    <div>
                      <img alt="backgroundEscalator" className={styles.doorIcon} src="/img/map/map/Escalator.svg" />
                    </div>
                    {getDoorName(25)}
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles.escalatorBottom}>
            <Link href={`/${getType(155)}SinglePage/${getDoorId(155)}`}><div className={styles.exchange}><span>{getDoorName(155)}</span></div></Link>
              <img alt="escalator" className={styles.doorIcon} src="/img/map/map/Escalator.svg" />
            </div>
          
            <div className={styles.bottomPart}>
              <div className={styles.WC}>
                <img alt="WC" className={styles.doorIcon} src="/img/map/map/WC.svg" />
              </div>

              <Link href={`/${getType(26)}SinglePage/${getDoorId(26)}`}><div className={styles.AA15}>{getDoorName(26)}</div></Link>
              <Link href={`/${getType(27)}SinglePage/${getDoorId(27)}`}><div className={styles.AA16}>{getDoorName(27)}</div></Link>
              <div className={styles.WCCenter}>
                <img alt="WC" className={styles.doorIcon} src="/img/map/map/WC.svg" />
              </div>
              <div className={styles.AA17ForColumn}>
                <div className={styles.AA17Top}>
                  <div>
                    <img alt="door" className={styles.doorIcon} src="/img/map/map/door.svg" />
                  </div>
                  <div className={styles.AA17T}></div>
                </div>
                <Link href={`/${getType(28)}SinglePage/${getDoorId(28)}`}><div className={styles.AA17Bottom}>{getDoorName(28)}</div></Link>
              </div>
              <Link href={`/${getType(29)}SinglePage/${getDoorId(29)}`}><div className={styles.AA18}>{getDoorName(29)}</div></Link>
              <Link href={`/${getType(30)}SinglePage/${getDoorId(30)}`}><div className={styles.AA19}>{getDoorName(30)}</div></Link>
              <div className={styles.AA20ForColumn}>
                <Link href={`/${getType(31)}SinglePage/${getDoorId(31)}`}><div className={styles.AA20Bottom}>{getDoorName(31)}</div></Link>
                <div className={styles.AA20Top}>
                  <div>
                    <img alt="door" className={styles.doorIcon} src="/img/map/map/door.svg" />
                  </div>
                  <div className={styles.AA20T}></div>
                </div>
              </div>
              <div className={styles.WCRight}>
                <img alt="WC" className={styles.doorIcon} src="/img/map/map/WC.svg" />
              </div>
              <Link href={`/${getType(32)}SinglePage/${getDoorId(32)}`}><div className={styles.AA21}>{getDoorName(32)}</div></Link>
              <Link href={`/${getType(33)}SinglePage/${getDoorId(33)}`}><div className={styles.AA22}>{getDoorName(33)}</div></Link>
              <div className={styles.WCEnd}>
                <img alt="WC" className={styles.doorIcon} src="/img/map/map/WC.svg" />
              </div>
            </div>
            <div className={styles.EntryBlock}>
              <div className={styles.blockContainer}>
                <div  className={styles.block1}>    
                  <div className={styles.entryArm}>ՄՈՒՏՔ</div>
                  <div className={styles.entryEng}>ENTRY</div>
                  <div className={styles.containerImg}>
                    <img alt="Entry" className={styles.doorIcon} src="/img/map/map/entry.svg" />
                  </div>
                </div>

                <div className={styles.block2}>    
                  <div className={styles.entryArm}>ՄՈՒՏՔ</div>
                  <div className={styles.entryEng}>ENTRY</div>
                  <div className={styles.containerImg}>
                    <img alt="Entry" className={styles.doorIcon} src="/img/map/map/entry.svg" />
                  </div>
                </div>
                
                <div className={styles.block3}>    
                  <div className={styles.entryArm}>ՄՈՒՏՔ</div>
                  <div className={styles.entryEng}>ENTRY</div>
                  <div className={styles.containerImg}>
                    <img alt="Entry" className={styles.doorIcon} src="/img/map/map/entry.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {changeFloor == keys[1] ? (
          <div className={styles.secondFloor}>
            <div className={styles.topIcons}>
              <div className={styles.door}>
                <img alt="doors" className={styles.doorIcon} src="/img/map/map/door.svg" />
              </div>
              <div className={styles.stairs}>
                <img alt="stairs" className={styles.stairsIcon} src="/img/map/map/Stairs.svg" />
              </div>
            </div>
            <div className={styles.mapSecondDesign}>
              <div className={styles.leftContainer}>
                <div className={styles.leftContainerTop}>
                    <div className={styles.S1}>
                  <Link href={`/${getTypeTwo(60)}SinglePage/${getDoorIdTwo(60)}`}>
                      <div className={styles.S1Left}>
                        <span>{getDoorNameTwo(60)}</span>
                      </div>
                  </Link>
                  <Link href={`/${getTypeTwo(34)}SinglePage/${getDoorIdTwo(34)}`}>
                      <div className={styles.S1Right}>
                        <span>{getDoorNameTwo(34)}</span>
                      </div>
                  </Link>
                    </div>
                  <Link href={`/${getTypeTwo(35)}SinglePage/${getDoorIdTwo(35)}`}><div className={styles.S2}><span>{getDoorNameTwo(35)}</span></div></Link>
                  <Link href={`/${getTypeTwo(36)}SinglePage/${getDoorIdTwo(36)}`}><div className={styles.S3}><span>{getDoorNameTwo(36)}</span></div></Link>
                  <Link href={`/${getTypeTwo(37)}SinglePage/${getDoorIdTwo(37)}`}><div className={styles.S4}><span>{getDoorNameTwo(37)}</span></div></Link>
                  <Link href={`/${getTypeTwo(38)}SinglePage/${getDoorIdTwo(38)}`}><div className={styles.S5}><span>{getDoorNameTwo(38)}</span></div></Link>
                  <Link href={`/${getTypeTwo(39)}SinglePage/${getDoorIdTwo(39)}`}><div className={styles.S6}><span>{getDoorNameTwo(39)}</span></div></Link>
                  <div className={styles.S7Flex}>
                    <Link href={`/${getTypeTwo(40)}SinglePage/${getDoorIdTwo(40)}`}><div className={styles.S7}><span>{getDoorNameTwo(40)}</span></div></Link>
                    <div className={styles.S7Part}></div>
                  </div>
                </div>
                <div className={styles.leftContainerBottom}>
                    <div className={styles.S8New}>
                  <Link href="#">
                        <div className={styles.S8_topNew}>
                          {/* foodCourt */}

                            <span>Food Court</span>
                        </div>
                  </Link>
                      <Link href={`/${getTypeTwo(57)}SinglePage/${getDoorIdTwo(57)}`}>
                        <div className={styles.S8_CenterNew}>
                            {/* wonderland play garden */}
                           <span>{getDoorNameTwo(57)}</span>
                            
                        </div>
                      </Link>
                        <div className={styles.S8_BottomNew}>
                      <Link href={`/${getTypeTwo(58)}SinglePage/${getDoorIdTwo(58)}`}>
                            <div className={styles.S8_BottomNew_leftSide}>
                           <span>{getDoorNameTwo(58)}</span>
                              
                            </div>
                      </Link>
                      <Link href={`/${getTypeTwo(59)}SinglePage/${getDoorIdTwo(59)}`}>
                            <div className={styles.S8_BottomNew_RightSide}>
                            {/* mandarin */}
                           <span>{getDoorNameTwo(59)}</span>
                              
                            </div>
                      </Link>
                        </div>
                    </div>
                  <div className={styles.LeftContainerBottomEscalator}>
                    <img alt="escalator" className={styles.doorIcon} src="/img/map/map/Escalator.svg" />
                  </div>
                </div>
              </div>
              <div className={styles.middleContainer}>
                <div className={styles.middleContainerTop}>
                  <Link href={`/${getTypeTwo(42)}SinglePage/${getDoorIdTwo(42)}`}><div className={styles.S9}><span>{getDoorNameTwo(42)}</span></div></Link>
                  <Link href={`/${getTypeTwo(43)}SinglePage/${getDoorIdTwo(43)}`}><div className={styles.S10}><span>{getDoorNameTwo(43)}</span></div></Link>
                  <div className={styles.S11forFlex}>
                    
                      <div className={styles.S11leftPart}>
                  <Link href={`/${getTypeTwo(65)}SinglePage/${getDoorIdTwo(65)}`}>
                        <div className={styles.S11leftPartTop}>
                           <span>{getDoorNameTwo(65)}</span>
                            
                        </div>
                    </Link>
                    <Link href={`/${getTypeTwo(44)}SinglePage/${getDoorIdTwo(44)}`}>
                        <div className={styles.S11leftPartBottom}>
                        <span>{getDoorNameTwo(44)}</span>
                          
                        </div>
                    </Link>
                      </div>
                    <div className={styles.S11RightPart}></div>
                  </div>
                  <Link href={`/${getTypeTwo(45)}SinglePage/${getDoorIdTwo(45)}`}><div className={styles.S12}><span>{getDoorNameTwo(45)}</span></div></Link>
                  <div className={styles.S13Flex}>
                    <Link href={`/${getTypeTwo(46)}SinglePage/${getDoorIdTwo(46)}`}><div className={styles.S13Left}><span>{getDoorNameTwo(46)}</span></div></Link>
                    <div className={styles.S13Right}></div>
                  </div>
                </div>
                <div className={styles.middleContainerBottom}>
                  <div className={styles.center}>
                    <Link href={`/${getTypeTwo(47)}SinglePage/${getDoorIdTwo(47)}`}><div className={styles.S14}><span>{getDoorNameTwo(47)}</span></div></Link>
                    <Link href={`/${getTypeTwo(48)}SinglePage/${getDoorIdTwo(48)}`}><div className={styles.S15}><span>{getDoorNameTwo(48)}</span></div></Link>
                    <Link href={`/${getTypeTwo(49)}SinglePage/${getDoorIdTwo(49)}`}><div className={styles.S16}><span>{getDoorNameTwo(49)}</span></div></Link>
                    <div className={styles.middleContainerBottomEscalator}>
                      <img alt="Escalator" className={styles.doorIcon} src="/img/map/map/Escalator.svg" />
                    </div>
                    <Link href={`/${getTypeTwo(50)}SinglePage/${getDoorIdTwo(50)}`}><div className={styles.S17}><span>{getDoorNameTwo(50)}</span></div></Link>
                  </div>
                  <div className={styles.right}>
                    <Link href={`/${getTypeTwo(51)}SinglePage/${getDoorIdTwo(51)}`}><div className={styles.S18}><span>{getDoorNameTwo(51)}</span></div></Link>
                    <Link href={`/${getTypeTwo(52)}SinglePage/${getDoorIdTwo(52)}`}><div className={styles.S19}><span>{getDoorNameTwo(52)}</span></div></Link>
                    <Link href={`/${getTypeTwo(53)}SinglePage/${getDoorIdTwo(53)}`}><div className={styles.S20}><span>{getDoorNameTwo(53)}</span></div></Link>
                  </div>
                </div>
              </div>
              <div className={styles.rightContainer}>
                <div>
                  <img alt="stairs" className={styles.doorIcon} src="/img/map/map/Stairs.svg" />
                </div>
                <div className={styles.rightBottom}>
                  <div className={styles.S21Right}></div>
                  <div className={styles.S21middleFlex}>
                    <Link href={`/shopSinglePage/17`}><div className={styles.S21Middle}><span>VESTA</span></div></Link>
                    <div>
                      <img alt="escalator" className={styles.doorIcon} src="/img/map/map/Escalator.svg" />
                    </div>
                  </div>
                  <div className={styles.S21Left}></div>
                </div>
              </div>
            </div>
            <div className={styles.bottomContainer}>
              <div className={styles.right}>
                <div className={styles.S22flex}>
                  <div className={styles.S22doorsRight}>
                    <img alt="doors" className={styles.doorIcon} src="/img/map/map/door.svg" />
                  </div>
                  <div className={styles.S22left}></div>
                </div>
                <Link href={`/${getTypeTwo(55)}SinglePage/${getDoorIdTwo(55)}`}><div className={styles.S22Right}><span>{getDoorNameTwo(55)}</span></div></Link>
              </div>
              <div className={styles.left}></div>
              <div className={styles.left}>
                <Link href={`/${getTypeTwo(56)}SinglePage/${getDoorIdTwo(56)}`}><div className={styles.S23Right}><span>{getDoorNameTwo(56)}</span></div></Link>
                <div className={styles.S23flex}>
                  <div className={styles.S23doorsRight}>
                    <img alt="doors" className={styles.doorIcon} src="/img/map/map/door.svg" />
                  </div>
                  <div className={styles.S23left}></div>
                </div>
              </div>
              <div className={styles.left}></div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Map;
