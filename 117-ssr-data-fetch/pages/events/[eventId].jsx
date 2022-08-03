import { getEventById, getFeaturedEvents } from '../../helpers/api-util';
import Head from 'next/head';
import EventSummary from '../../components/EventDetail/EventSummary';
import EventLogistics from '../../components/EventDetail/EventLogistics';
import EventContent from '../../components/EventDetail/EventContent';
import ErrorAlert from '../../components/UI/ErrorAlert';

function EventDetailPage({ selectedEvent }) {
  const event = selectedEvent;

  if (!event) {
    return (
      <ErrorAlert>
        <div className="center">
          <p>Loading...</p>
        </div>
      </ErrorAlert>
    );
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta
          name="description"
          content={event.description}
        />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

// 동적 페이지라서 getStaticProps만 있으면 작동을 안함.
export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths: paths,
    fallback: true, // false = 404, isFeatured가 true인 것만 사전 재생성을 했끼에 true로 설정
  };
}

export default EventDetailPage;
