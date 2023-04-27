/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/sass/pages/reportPage/secMain.module.scss"
import { useGlobalProvider } from "../../components/Providers/GlobalProvider"
import { useEffect } from "react"
import Link from "next/link"
import { translate } from "../../translations"

const SecMain = () => {

    const { GetFinancialReportData,
        financialReportsData, HOST_API_IMG, lang } = useGlobalProvider()

    useEffect(() => {
        GetFinancialReportData()
    }, [GetFinancialReportData])
    useEffect(() => {

    }, [financialReportsData.loading])


    return (
        <div className={styles.secMain}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles.accounting}>{translate.FooterMenuReport[lang]}</div>
                </div>
                <div className={styles.dataContainer}>
                    <div className={styles.dataBlock}>
                        {
                            financialReportsData.data.map(({ id, pdfFile, title, title_am, title_ru }) => {

                                return (
                                    <Link key={id} href={HOST_API_IMG + pdfFile}>
                                        <a target="_blank">
                                            <div className={styles.reportBlock} >
                                                <div className={styles.adobeImg}><img alt="file" src="/img/reportPage/adobeIcon.svg" /></div>
                                                <div className={styles.descrip}>{lang == "en" ? title : lang == "ru" ? title_ru : title_am}</div>
                                            </div>
                                        </a>
                                    </Link>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}


export default SecMain