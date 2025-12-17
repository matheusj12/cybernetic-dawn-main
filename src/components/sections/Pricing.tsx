import { motion } from "framer-motion";
import { ArrowRight, Check, Gift, Zap, Crown } from "lucide-react";
import { MovingBorder } from "@/components/ui/moving-border";

export const Pricing = () => {
    return (
        <section id="precos" className="relative py-24 overflow-hidden scroll-mt-24">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

            {/* Decorative elements */}
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[120px]" />

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
                        💰 Preço justo
                    </span>
                    <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">
                        Um café por mês pra <span className="gradient-text">mudar sua vida</span>
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg">
                        Menos do que você gasta com besteiras. Valor real pro seu bolso.
                    </p>
                </motion.div>

                {/* Pricing Card */}
                <div className="max-w-lg mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-2xl" />

                        {/* Card */}
                        <div className="relative glass-strong rounded-3xl overflow-hidden">
                            {/* Popular badge */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="bg-gradient-to-r from-primary to-secondary px-6 py-2 rounded-full text-white font-semibold text-sm flex items-center gap-2 shadow-lg">
                                    <Crown className="w-4 h-4" />
                                    Mais popular
                                </div>
                            </div>

                            {/* Free trial badge */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="absolute top-4 right-4"
                            >
                                <div className="bg-green-500/20 border border-green-500/50 px-4 py-2 rounded-full text-green-400 font-semibold text-sm flex items-center gap-2">
                                    <Gift className="w-4 h-4" />
                                    50 mensagens GRÁTIS
                                </div>
                            </motion.div>

                            <div className="p-8 pt-12 text-center space-y-6">
                                {/* Plan name */}
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
                                        <Zap className="w-6 h-6 text-primary" />
                                        Plano Mensal
                                    </h3>
                                    <p className="text-muted-foreground mt-1">
                                        Acesso completo ao Pixou
                                    </p>
                                </div>

                                {/* Price */}
                                <div className="py-6">
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="text-2xl font-semibold text-muted-foreground">R$</span>
                                        <span className="text-7xl font-bold gradient-text glow-text">9</span>
                                        <span className="text-2xl font-semibold text-muted-foreground">,00</span>
                                    </div>
                                    <p className="text-muted-foreground mt-2">por mês</p>
                                </div>

                                {/* Divider */}
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-muted to-transparent" />

                                {/* Features */}
                                <ul className="space-y-4 text-left">
                                    {[
                                        "Mensagens ilimitadas após teste",
                                        "Registro por texto, áudio e foto",
                                        "Leitura automática de contas",
                                        "Relatórios financeiros detalhados",
                                        "Categorização automática por IA",
                                        "Histórico completo salvo",
                                        "Suporte via WhatsApp",
                                        "Sem anúncios, sem vendas",
                                    ].map((feature, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 * index }}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                                <Check className="w-3 h-3 text-primary" />
                                            </div>
                                            <span className="text-foreground">{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Free trial highlight */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    className="bg-green-500/10 border border-green-500/30 rounded-2xl p-4"
                                >
                                    <div className="flex items-center justify-center gap-2 text-green-400 font-semibold">
                                        <Gift className="w-5 h-5" />
                                        <span>Comece com 50 mensagens GRÁTIS!</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Teste antes de assinar. Sem cartão de crédito.
                                    </p>
                                </motion.div>

                                {/* CTA Button */}
                                <div className="pt-4">
                                    <a
                                        href="https://pay.kirvano.com/e1c565c8-43bd-4a17-8da8-44cf3571bcde"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <MovingBorder
                                            borderRadius="1.75rem"
                                            duration={3000}
                                            className="w-full px-8 py-4 font-semibold text-foreground hover:text-primary-foreground hover:bg-primary/10 transition-colors"
                                        >
                                            <span className="flex items-center justify-center gap-2">
                                                🚀 Começar grátis agora
                                                <ArrowRight className="w-5 h-5" />
                                            </span>
                                        </MovingBorder>
                                    </a>
                                </div>

                                {/* Trust badges */}
                                <div className="flex flex-wrap justify-center gap-4 pt-4 text-xs text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                        🔒 Pagamento seguro
                                    </span>
                                    <span className="flex items-center gap-1">
                                        ✅ Cancele quando quiser
                                    </span>
                                    <span className="flex items-center gap-1">
                                        💳 Pix ou cartão
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Comparison note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-12 space-y-4"
                >
                    <p className="text-muted-foreground">
                        💡 <span className="text-foreground font-medium">Por menos que um café no Starbucks</span>,
                        você organiza toda sua vida financeira
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                        <span>☕ Café: ~R$15</span>
                        <span>🍔 Lanche: ~R$30</span>
                        <span>🎮 Jogo: ~R$200</span>
                        <span className="text-primary font-semibold">✨ Pixou: R$9</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
