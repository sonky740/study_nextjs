import { getFeaturedEvents } from '../data/dummy-data';
import EventList from '../components/Events/EventList';

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
