import styles from  "./footer.module.css"
export const Footer = () => {
    return (
       <footer className={styles.footer}>
       <span>Политика конфиденциальности </span>
       <span>Правила пользования</span>
       <span>2025 Все права защищены</span>
       </footer>
    )
}