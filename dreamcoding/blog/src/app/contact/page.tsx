import ContactForm from '@/components/ContactForm';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';

const LINKS = [
  {
    icon: <AiFillGithub />,
    name: 'Github',
    url: 'https://github.com/sonky740',
  },
  {
    icon: <AiOutlineLink />,
    name: 'Blog',
    url: 'https://sonkyblog.vercel.app/',
  },
  {
    icon: <AiOutlineLink />,
    name: 'Portfolio',
    url: 'https://sonkypf.gatsbyjs.io/',
  },
];

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center ">
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p>mykiller4@naver.com</p>
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="norefferer" className='flex flex-col text-5xl text-center hover:text-yellow-400'>
              {link.icon}
              <strong className='block text-sm mt-2 text-orange-400'>{link.name}</strong>
            </a>
          </li>
        ))}
      </ul>
      <h2 className='text-3xl font-bold my-8'>Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
