

import { motion } from "framer-motion";
import { Bot, Zap, BarChart3, Clock, Mic, Smartphone } from "lucide-react";
import GlowCard from "@/components/ui/glow-card";

const features = [
  {
    icon: Mic,
    title: "📝 Registre do seu jeito",
    description: "Texto, áudio ou foto de recibo. Mande como preferir, a IA entende tudo.",
    color: "primary" as const,
  },
  {
    icon: Bot,
    title: "🤖 IA que te entende",
    description: "Escreva \"gastei 50 no mercado\" e pronto. Sem formulários, sem complicação.",
    color: "secondary" as const,
  },
  {
    icon: BarChart3,
    title: "📊 Relatórios na hora",
    description: "Pergunte \"quanto gastei essa semana?\" e receba a resposta instantânea.",
    color: "primary" as const,
  },
  {
    icon: Clock,
    title: "📂 Nunca mais esqueça",
    description: "Seu histórico fica salvo e organizado. Consulte quando quiser.",
    color: "secondary" as const,
  },
  {
    icon: Zap,
    title: "⚡ Disponível 24h",
    description: "Registre gastos a qualquer hora do dia ou da noite. O ZapGest nunca dorme.",
    color: "primary" as const,
  },
  {
    icon: Smartphone,
    title: "📲 Zero downloads",
    description: "Funciona direto no WhatsApp que você já usa. Sem baixar nada.",
    color: "secondary" as const,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const Features = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            🎯 Funcionalidades
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">
            Tudo que você precisa pra <span className="gradient-text">nunca mais se perder</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Simples o suficiente pra usar todo dia. Poderoso o suficiente pra mudar sua vida.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlowCard glowColor={feature.color}>
                <div className="space-y-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${feature.color === "primary"
                      ? "bg-primary/20 text-primary"
                      : "bg-secondary/20 text-secondary"
                      }`}
                  >
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
