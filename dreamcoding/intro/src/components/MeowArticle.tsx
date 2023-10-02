'use client';

import { useEffect, useState } from 'react';

export default function MeowArticle() {
  const [text, setText] = useState('로딩 중...');

  useEffect(() => {
    const fetchMeowFacts = async () => {
      const res = await fetch('https://meowfacts.herokuapp.com');
      const data = await res.json();
      const factText = data.data[0];

      setText(factText);
    };
    fetchMeowFacts();
  }, []);

  return <article className="text-xl m-1 p-2 bg-green-800">{text}</article>;
}
