
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Gift } from "lucide-react";
import { MovingBorder } from "@/components/ui/moving-border";

const benefits = [
  "🎁 50 mensagens grátis",
  "💰 Apenas R$9/mês depois",
  "⚡ Setup em 10 segundos",
  "✅ Cancele quando quiser",
];

export const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Card */}
          <div className="glass-strong rounded-3xl p-8 md:p-12 text-center space-y-8 relative overflow-hidden">
            {/* Glow effects */}
            <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary/20 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-secondary/20 blur-[100px] rounded-full" />

            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Pronto pra <span className="gradient-text">mudar sua relação</span>
                <br />
                com dinheiro?
              </h2>

              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                O melhor momento pra começar era ontem. O segundo melhor é agora.
                Quanto mais você espera, mais dinheiro escapa. 💸
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap justify-center gap-4 py-4">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-primary" />
                    {benefit}
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://pay.kirvano.com/e1c565c8-43bd-4a17-8da8-44cf3571bcde"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MovingBorder
                    borderRadius="1.75rem"
                    duration={2500}
                    className="px-10 py-5 font-bold text-lg text-foreground hover:text-primary-foreground hover:bg-primary/10 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      🚀 Quero controlar meu dinheiro no WhatsApp
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </MovingBorder>
                </a>
              </div>

              <p className="text-xs text-muted-foreground">
                🇧🇷 Feito no Brasil, para brasileiros. Sem complicação, sem conhecimento técnico.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
