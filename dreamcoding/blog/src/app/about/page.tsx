import Hero from '@/components/Hero';

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2';
const SKILLS = [
  'React',
  'Vue',
  'HTML',
  'CSS(SCSS)',
  'Javascript',
  'Typescript',
  'Git',
  'Node',
  'Linux',
];

export default function AboutPage() {

  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>개발이 재밌는 프론트엔드 개발자</p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <ul>
          <li>엑셈 (2022 ~ Now)</li>
          <li>민앤지 (2021 ~ 2022)</li>
          <li>인픽스 (2016 ~ 2021)</li>
        </ul>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <ul className="flex gap-2 justify-center leading-none">
          {SKILLS.map((skill) => (
            <li key="skill" className='p-1 bg-green-200 rounded-md line'>{skill}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
