

import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  Produto: ["Recursos", "Preços", "Integrações", "API"],
  Empresa: ["Sobre", "Blog", "Carreiras", "Imprensa"],
  Suporte: ["Central de Ajuda", "Documentação", "Status", "Contato"],
  Legal: ["Privacidade", "Termos", "LGPD", "Cookies"],
};

const socialLinks = [
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Github, href: "#" },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <a href="/" className="inline-block mb-4">
              <img
                src="/logo-pixou.png"
                alt="Pixou - Finanças por Mensagem"
                className="h-12 w-auto"
              />
            </a>
            <p className="text-muted-foreground text-sm mb-4">
              Finanças por Mensagem. Controle financeiro simples e inteligente direto no WhatsApp.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Pixou © 2025 — Finanças por Mensagem
          </p>
          <p className="text-sm text-muted-foreground">
            Feito com 💚 no Brasil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
