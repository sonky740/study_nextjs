'use client';

import { useState, type ChangeEvent, FormEvent } from 'react';
import Banner from './Banner';
import { sendContactEmail } from '@/api/contact';

const DEFAULT_DATA = {
  from: '',
  subject: '',
  message: '',
};
export default function ContactForm() {
  const [form, setForm] = useState<EmailData>(DEFAULT_DATA);
  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await sendContactEmail(form);

      setBanner({
        message: '메일을 성공적으로 보냈습니다.',
        state: 'success',
      });
      setForm(DEFAULT_DATA);
    } catch (error) {
      setBanner({
        message: '메일을 보내는데 실패했습니다.',
        state: 'error',
      });
    } finally {
      setTimeout(() => {
        setBanner(null);
      }, 3000);
    }
  };

  return (
    <section className="w-full max-w-md">
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className="w-full flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-sm text-white"
      >
        <label htmlFor="from" className="font-semibold">
          Your Email
        </label>
        <input
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
          className="text-black"
        />
        <label htmlFor="subject" className="font-semibold">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={onChange}
          className="text-black"
        />
        <label htmlFor="message" className="font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={10}
          required
          value={form.message}
          onChange={onChange}
          className="text-black"
        />
        <button
          type="submit"
          className="bg-yellow-300 text-black font-bold hover:bg-yellow-400 rounded-md"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
