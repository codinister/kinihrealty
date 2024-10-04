'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import contactSchema from '@/data/zod/contactSchema';
import z from 'zod';
import { Error, InternalError } from '@/components/Error';
import { useState } from 'react';
import fetch from '@/data/query/fetch';
import { BeatLoader } from 'react-spinners';

const Contactsection = () => {
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullname: '',
      email: '',
      subject: '',
      phone: '',
      message: '',
    },
  });

  const handleForm = async (formdata: z.infer<typeof contactSchema>) => {
    try {
      const { data } = await fetch({
        url: '/contact',
        method: 'Post',
        data: formdata,
      });

      if (!data?.success) {
        setError(data?.success.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const formTitle = error ? <InternalError err={error} /> : <h4>Contact Us</h4>;

  if (isSubmitSuccessful) {
    return (
      <section className="contactsection">
        <div className="container">
          <div>
            <div>
              <h1>Need Support?​</h1>
              <h4>Contact us for more information</h4>
            </div>
          </div>
          <div>
            <div className="message-sent">
              <h2>Message sent!</h2>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="contactsection">
      <div className="container">
        <div>
          <div>
            <h1>Need Support?​</h1>
            <h4>Contact us for more information</h4>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit(handleForm)}>
            {formTitle}
            <div className="contbx">
              <div className="form-control">
                <input
                  type="text"
                  id="fullname"
                  {...register('fullname')}
                  placeholder=""
                />
                <label htmlFor="fullname">Your Name</label>
                <Error err={errors.fullname?.message} />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  id="email"
                  {...register('email')}
                  placeholder=""
                />
                <label htmlFor="email">Your Email</label>
                <Error err={errors.email?.message} />
              </div>
            </div>
            <div className="contbx">
              <div className="form-control">
                <input
                  type="text"
                  id="subject"
                  {...register('subject')}
                  placeholder=""
                />
                <label htmlFor="subject">Subject</label>
                <Error err={errors.subject?.message} />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  id="phone"
                  {...register('phone')}
                  placeholder=""
                />
                <label htmlFor="phone">Your Phone number</label>
                <Error err={errors.phone?.message} />
              </div>
            </div>

            <div>
              <textarea
                placeholder="Message"
                {...register('message')}
              ></textarea>
              <Error err={errors.message?.message} />
            </div>
            <div className="button-bx">
              {isSubmitting ? <BeatLoader /> : <button>Send Message</button>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactsection;
