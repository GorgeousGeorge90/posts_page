import styles from './Pagination.module.scss'


const Pagination = ({totalPages,pagePortion,currentPage,setCurrent})=> {

    let pages = []
    let pageInfo = Math.ceil(totalPages/pagePortion)

    for (let i = 1; i <= pageInfo; i++) {
        pages.push(i)
    }

    return (<div className={styles.container}>
        <ul>
            {
                pages.map((page, i) => <li key={i}
                                                   onClick={()=> setCurrent(page)}
                                                   style={{backgroundColor: page === currentPage ? 'darkslateblue': null}}
                >{page}
                </li>)
            }
        </ul>
    </div>)
}


export default Pagination