import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import emailjs from '@emailjs/browser'; 
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import axios from 'axios';
import 'boxicons'


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const valorInput = e => setForm({ ...form, [e.target.name]: e.target.value });

 
  const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);

      const TemplateParams = {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
    };

    emailjs.send("service_al6mugk", "template_6j334tm", TemplateParams, "NYaf02NB_qmcOyEcC").then((response) => {
      alert("Inscrição enviado com sucesso. Confirme o downloand da sua ficha", response.status, response.text);
      setForm({
        name: '',
        email: '',
        message: ''
    });
    }, (err) => {
      console.log("Erro: ", err);
  });
  }
  

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Entrar em contacto</p>
        <h3 className={styles.sectionHeadText}>Contacto.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
          <span className='text-white font-medium mb-4 flex items-center'>
          Seu Nome
          </span>
          <input type="text"
          name="name"
          value={form.name}
          onChange={valorInput}
          placeholder='Qual é o seu nome?'
          className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
          />
          </label>

          
          <label className='flex flex-col'>
          <span className='text-white font-medium mb-4 flex items-center'>
          Seu Email
          </span>
          <input type="email"
          name="email"
          value={form.email}
          onChange={valorInput}
          placeholder='Qual é o seu email?'
          className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
          />
          </label>


          <label className='flex flex-col'>
          <span className='text-white font-medium mb-4 flex items-center'>
          Assunto
          </span>
          <textarea
          rows='7'
          name="message"
          value={form.message}
          onChange={valorInput}
          placeholder='O que queres dizer?'
          className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
          />
          </label>
          


          <button type='submit'
          className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
            {loading ? 'A Enviar' : 'Enviar'}
          </button>

        </form>
      </motion.div>

      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
