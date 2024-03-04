import PageContent from './globalComponents/content/PageContent'
import Navigation from './globalComponents/navigation/Navigation'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation />
      <PageContent />
    </main>
  )
}
