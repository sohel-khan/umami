import SharePage from './SharePage';
import ShowEventsData from '@/app/shared/events/ShowEventsData';
import ShowSessionData from '@/app/shared/sessions/ShowSessionData';
import ShowRealTimeData from '@/app/shared/realtime/ShowRealTimeData';
import ShowCompareData from '@/app/shared/compare/ShowCompareData';
export default async function ({ params }: { params: Promise<{ shareId: string }> }) {
  const { shareId } = await params;

  if (shareId[2] == 'events') {
    return <ShowEventsData shareId={shareId[0]} />;
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
