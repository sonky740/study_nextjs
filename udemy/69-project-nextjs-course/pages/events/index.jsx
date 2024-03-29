import { useRouter } from 'next/router';

import { getAllEvents } from '../../data/dummy-data';
import EventList from '../../components/Events/EventList';
import EventSearch from '../../components/Events/EventSearch';

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export default AllEventsPage;
