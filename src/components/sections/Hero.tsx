import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageSquare, Bot } from "lucide-react";
import { MovingBorder } from "@/components/ui/moving-border";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />

      {/* Decorative gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />

      {/* Animated particles effect using CSS */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{
              y: [null, Math.random() * -100 + "%"],
              opacity: [null, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex"
          >
            <div className="glass rounded-full px-4 py-2 flex items-center gap-2 text-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">✨ +10.000 pessoas já usam o Pixou</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-foreground">Chega de planilhas.</span>
              <br />
              <span className="gradient-text glow-text">Organize seu dinheiro</span>
              <br />
              <span className="text-foreground">só conversando.</span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Mande uma mensagem no WhatsApp, registre um gasto. Simples assim.
            A IA organiza tudo pra você automaticamente. 🤖
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4"
          >
            {/* Free trial badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="bg-green-500/20 border border-green-500/50 px-5 py-2 rounded-full text-green-400 font-semibold text-sm flex items-center gap-2"
            >
              🎁 50 mensagens GRÁTIS para novos usuários!
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://pay.kirvano.com/e1c565c8-43bd-4a17-8da8-44cf3571bcde"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MovingBorder
                  borderRadius="1.75rem"
                  duration={3000}
                  className="px-8 py-4 font-semibold text-foreground hover:text-primary-foreground hover:bg-primary/10 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    👉 Começar grátis agora
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </MovingBorder>
              </a>

              <motion.a
                href="#veja-funcionando"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass px-8 py-4 rounded-full font-semibold text-foreground hover:bg-muted/50 transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-5 h-5 text-primary" />
                Ver funcionando
              </motion.a>
            </div>

            {/* Price tag */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-sm"
            >
              Depois do teste gratuito: apenas <span className="text-primary font-bold">R$9/mês</span> 💚
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { value: "10K+", label: "Pessoas no controle" },
              { value: "R$50M+", label: "Já organizados" },
              { value: "4.9★", label: "Avaliação" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary glow-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-1/4 left-10 hidden lg:block"
        >
          <div className="glass rounded-2xl p-4 float">
            <MessageSquare className="w-8 h-8 text-primary" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute top-1/3 right-10 hidden lg:block"
        >
          <div className="glass rounded-2xl p-4 float-delayed">
            <Bot className="w-8 h-8 text-secondary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
