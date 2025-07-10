import SharePage from './SharePage';
import ShowEventsData from '@/app/shared/events/ShowEventsData';
import ShowSessionData from '@/app/shared/sessions/ShowSessionData';
import ShowRealTimeData from '@/app/shared/realtime/ShowRealTimeData';
import ShowCompareData from '@/app/shared/compare/ShowCompareData';
import ShowSessionById from '@/app/shared/sessions/ShowSessionById';

export default async function ({ params }: { params: Promise<{ shareId: string }> }) {
  const { shareId } = await params;

  if (shareId[2] == 'events') {
    return <ShowEventsData shareId={shareId[0]} />;
  }

  if (shareId[2] == 'sessions' && shareId[3]) {
    return <ShowSessionById shareId={shareId[0]} sessionId={shareId[3]} />;
  }

  if (shareId[2] == 'sessions') {
    return <ShowSessionData shareId={shareId[0]} />;
  }

  if (shareId[2] == 'realtime') {
    return <ShowRealTimeData shareId={shareId[0]} />;
  }

  if (shareId[2] == 'compare') {
    return <ShowCompareData shareId={shareId[0]} />;
  }

  return <SharePage shareId={shareId[0]} />;
}
