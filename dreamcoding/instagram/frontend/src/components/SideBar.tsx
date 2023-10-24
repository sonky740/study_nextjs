import Avatar from './Avatar';

interface Props {
  user: User;
}

const DUMMYLIST = [
  'About',
  'Help',
  'Press',
  'API',
  'Jobs',
  'Privacy',
  'Terms',
  'Locations',
  'Language',
];

export default function SideBar({ user: { name, username, image } }: Props) {
  return (
    <>
      <div className="flex items-center">
        {image && <Avatar image={image} />}
        <div className="ml-4">
          <p className="font-bold">{username}</p>
          <p className="text-lg text-neutral-500 leading-4">{name}</p>
        </div>
      </div>
      <ul className="flex flex-wrap gap-2 text-sm text-neutral-500 mt-8">
        {DUMMYLIST.map((item, index) => (
          <li
            key={index}
            className={`relative ${
              index !== DUMMYLIST.length - 1
                ? 'before:absolute before:top-2/4 before:-right-1.5 before:w-0.5 before:h-0.5 before:bg-neutral-500 before:-translate-y-2/4'
                : ''
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
      <p className='font-bold text-sm mt-8 text-neutral-500'>@Copyright INSTAGRAM from SONKY</p>
    </>
  );
}
