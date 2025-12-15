

import { motion } from "framer-motion";
import { AIVoiceInput } from "@/components/ui/ai-voice-input";

export const Solution = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                💡 A solução é simples
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">
                Funciona como conversar com um <span className="gradient-text">amigo que entende de finanças</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Você manda mensagens normais, a IA entende e organiza tudo automaticamente.
                Não precisa mudar sua rotina — o WhatsApp já faz parte do seu dia.
              </p>
            </div>

            {/* AI Voice Demo */}
            <AIVoiceInput />

            {/* Benefits list */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "💬 \"Gastei 50 reais no mercado\"",
                "💰 \"Recebi 120 de um freelance\"",
                "📊 \"Quanto gastei essa semana?\"",
                "❌ \"Apaga aquela despesa errada\"",
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 glass rounded-xl px-3 py-2"
                >
                  <span className="text-muted-foreground text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Interactive Demo Area */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] rounded-3xl overflow-hidden"
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-secondary/20 rounded-3xl" />

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/30 via-transparent to-transparent opacity-50" />

            {/* Interactive visual */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Central orb */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-secondary blur-xl"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-32 h-32 rounded-full border-2 border-primary/30 border-dashed" />
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-card glass flex items-center justify-center">
                    <span className="text-3xl">🤖</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 left-4 glass rounded-xl px-4 py-2 text-xs text-muted-foreground">
              💬 Exemplos de mensagens reais
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
