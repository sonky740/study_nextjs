import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/Events/EventList';

function HomePage({ events }) {
  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800 // 새로운 요청이 있을 시 1800초 후에 페이지 재생성
  };
}

export default HomePage;
