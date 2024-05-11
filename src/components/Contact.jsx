import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import emailjs from '@emailjs/browser'; // Modificado para 'emailjs-com' devido à mudança de nome
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/send-email', form);
      console.log(response.data);
      // Faça algo com a resposta, se necessário
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
    }
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Entrar em contacto</p>
        <h3 className={styles.sectionHeadText}>Contacto.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
          <span className='text-white font-medium mb-4 flex items-center'>
          <box-icon name='whatsapp' type='logo' animation='flashing' color='#288531' size='50px'></box-icon>
        <a className='text-secondary text-bold text-[14px] ml-2' href='https://wa.me/944072491'>944072491</a>
          </span>
          </label>

          <label className='flex flex-col'>
          <span className='text-white font-medium mb-4 flex items-center'>
          <box-icon name='instagram' type='logo' animation='spin' color='#C13584' size='50px'></box-icon>
        <a className='text-secondary text-bold text-[14px] ml-2' href='https://www.instagram.com/johnnycardoso_wk/'>@johnnycardoso_wk</a>
          </span>
          </label>

          <label className='flex flex-col'>
          <span className='text-white font-medium mb-4 flex items-center'>
          <box-icon name='google' type='logo' animation='tada' color='#405DE6' size='50px'></box-icon>
        <a className='text-secondary text-bold text-[14px] ml-2' href='https://www.jonataosacapia@gmail.com'>jonataosacapia@gmail</a>
          </span>
          </label>

          <label className='flex flex-col'>
          <span className='text-white font-medium mb-4 flex items-center'>
        <a className='text-secondary text-bold text-[14px] ml-2' href='#'>"Olá! Fico feliz em saber que você quer entrar em contato comigo. Estou ansioso para ouvir suas perguntas, comentários ou ideias. Sinta-se à vontade para me enviar uma mensagem a qualquer momento. Estou aqui para ajudar e responder a todas as suas dúvidas da melhor maneira possível. Vamos conversar e colaborar juntos!"</a>
          </span>
          </label>

        </form>
      </motion.div>

      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350]:'>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
