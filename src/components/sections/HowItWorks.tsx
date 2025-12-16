import { motion } from "framer-motion";
import { MessageSquare, Bot, BarChart3, Sparkles } from "lucide-react";

const steps = [
    {
        icon: MessageSquare,
        step: "1",
        title: "Clique e comece",
        description: "Toque no botão e inicie a conversa no WhatsApp. Leva 10 segundos.",
    },
    {
        icon: Bot,
        step: "2",
        title: "Converse normalmente",
        description: "Mande mensagens como faria com um amigo. Texto, áudio ou foto.",
    },
    {
        icon: Sparkles,
        step: "3",
        title: "A IA organiza tudo",
        description: "Nossa inteligência artificial categoriza e salva automaticamente.",
    },
    {
        icon: BarChart3,
        step: "4",
        title: "Acompanhe quando quiser",
        description: "Peça relatórios a qualquer momento. Você no controle total.",
    },
];

export const HowItWorks = () => {
    return (
        <section id="como-funciona" className="relative py-24 overflow-hidden scroll-mt-24">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

            <div className="relative z-10 container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                        🔄 Como funciona
                    </span>
                    <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">
                        Simples assim: <span className="gradient-text">4 passos</span>
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg">
                        Mande uma mensagem → A IA organiza → Você no controle 💚
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="relative"
                        >
                            {/* Connector line */}
                            {i < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
                            )}

                            <div className="glass rounded-2xl p-6 text-center relative z-10">
                                {/* Step number */}
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">
                                    {step.step}
                                </div>

                                {/* Icon */}
                                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                                    <step.icon className="w-8 h-8 text-primary" />
                                </div>

                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
