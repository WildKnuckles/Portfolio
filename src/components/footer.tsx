import { IconBrandLinkedin, IconBrandGithub, IconBrandInstagram, IconBrandGoogle} from '@tabler/icons-react';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="flex justify-center lg:px-70">
        <div
        className='w-full h-full p-8 bg-gradient-to-b from-accent/50 to-background border border-muted-foreground border-b-0'
        style={{ clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)" }}
        >
      
      {/* Nome */}
      <h2 className="text-2xl font-semibold relative z-10 text-center">Jonatão Cardoso</h2>
      
      {/* Redes Sociais */}
      <div className="flex justify-center gap-6 mt-4 relative z-10">
      <Link href="https://www.linkedin.com/in/jonatão-cardoso-72853b358" target="_blank" rel="noopener noreferrer"><IconBrandLinkedin/></Link>
        <Link href="https://www.github.com/WildKnuckles" target="_blank" rel="noopener noreferrer"><IconBrandGithub/></Link>
        <Link href="mailto:jonataosacapia@gmail.com"><IconBrandGoogle/></Link>
        <Link href="https://www.instagram.com/johnnycardoso_wk" target="_blank" rel="noopener noreferrer">
          <IconBrandInstagram />
        </Link>
      </div>
      
      {/* Linha divisória */}
      <div className="w-full h-px bg-gray-300 my-4 opacity-50 relative z-10" />
      
      {/* Copyright */}
      <p className="text-sm opacity-75 relative z-10 text-center">&copy; {new Date().getFullYear()} Jonatão Cardoso. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
