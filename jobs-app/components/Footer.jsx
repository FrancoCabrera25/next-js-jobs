
import styles  from '../styles/Footer.module.css'

export default function Footer() {
  return <footer className={styles.container}>
      <div>
          <p className={styles.copyright}>Copyright © 2021 WeRemoto LLC. Todos los derechos reservados.</p>
      </div>
  </footer>;
}
