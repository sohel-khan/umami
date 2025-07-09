'use client';
import { useShareToken } from '@/components/hooks';
import Page from '@/components/layout/Page';
import Header from '../../share/[...shareId]/Header';
import Footer from '../../share/[...shareId]/Footer';
import styles from '../SharePage.module.css';
import { WebsiteProvider } from '@/app/(main)/websites/[websiteId]/WebsiteProvider';
import SessionsPage from '@/app/(main)/websites/[websiteId]/sessions/SessionsPage';
export default function ShowSessionData({ shareId }) {
  const { shareToken, isLoading } = useShareToken(shareId);

  if (isLoading || !shareToken) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Page>
        <Header />
        <WebsiteProvider websiteId={shareToken.websiteId}>
          <SessionsPage websiteId={shareToken.websiteId} />
        </WebsiteProvider>
        <Footer />
      </Page>
    </div>
  );
}
