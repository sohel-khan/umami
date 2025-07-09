import classNames from 'classnames';
import Favicon from '@/components/common/Favicon';
import { useMessages, useTeamUrl, useWebsite } from '@/components/hooks';
import Icons from '@/components/icons';
import ActiveUsers from '@/components/metrics/ActiveUsers';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { Button, Icon, Text } from 'react-basics';
import Lightning from '@/assets/lightning.svg';
import styles from './WebsiteHeader.module.css';

export function WebsiteHeader({
  websiteId,
  showLinks = true,
  children,
}: {
  websiteId: string;
  showLinks?: boolean;
  children?: ReactNode;
}) {
  const { formatMessage, labels } = useMessages();
  const { renderTeamUrl } = useTeamUrl();
  const pathname = usePathname();
  const { data: website } = useWebsite(websiteId);
  const { name, domain } = website || {};

  const links = [
    {
      label: formatMessage(labels.overview),
      icon: <Icons.Overview />,
      path: '',
    },
    {
      label: formatMessage(labels.events),
      icon: <Lightning />,
      path: '/events',
    },
    {
      label: formatMessage(labels.sessions),
      icon: <Icons.User />,
      path: '/sessions',
    },
    {
      label: formatMessage(labels.realtime),
      icon: <Icons.Clock />,
      path: '/realtime',
    },
    {
      label: formatMessage(labels.compare),
      icon: <Icons.Compare />,
      path: '/compare',
    },
    {
      label: formatMessage(labels.reports),
      icon: <Icons.Reports />,
      path: '/reports',
    },
  ];

  const isFromShareLink = pathname.includes('/share/');
  const routeDir = isFromShareLink ? 'share' : 'websites';

  const routeId = isFromShareLink ? website.shareId : websiteId;

  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <Favicon domain={domain} />
        <Text>{name}</Text>
        <ActiveUsers websiteId={websiteId} />
      </div>
      <div className={styles.actions}>
        {(true || showLinks) && (
          <div className={styles.links}>
            {links.map(({ label, icon, path }) => {
              if (isFromShareLink && path == '/reports') {
                return;
              }
              const selected = path
                ? pathname.includes(path)
                : isFromShareLink
                ? pathname.match(/^\/share\/[\w-]+$/)
                : pathname.match(/^\/websites\/[\w-]+$/);

              return (
                <Link
                  key={label}
                  href={renderTeamUrl(
                    isFromShareLink
                      ? `/${routeDir}/${routeId}/${website?.domain}/${path}`
                      : `/${routeDir}/${routeId}${path}`,
                  )}
                  shallow={true}
                >
                  <Button
                    variant="quiet"
                    className={classNames({
                      [styles.selected]: selected,
                    })}
                  >
                    <Icon className={styles.icon}>{icon}</Icon>
                    <Text className={styles.label}>{label}</Text>
                  </Button>
                </Link>
              );
            })}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

export default WebsiteHeader;
