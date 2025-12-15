import { motion } from "framer-motion";
import { X } from "lucide-react";

const painPoints = [
    "Esquece onde gastou o dinheiro",
    "Baixa apps financeiros e abandona em 1 semana",
    "Planilhas são complicadas demais",
    "Final do mês não sabe pra onde foi o salário",
    "Promete se organizar... e nunca acontece",
    "Sente que o dinheiro some e você nem percebe",
];

export const Pain = () => {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-destructive/5 to-background" />

            <div className="relative z-10 container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <span className="text-destructive font-semibold text-sm uppercase tracking-wider">
                        😰 Isso parece familiar?
                    </span>
                    <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">
                        Cansado de <span className="text-destructive">perder o controle</span> do seu dinheiro?
                    </h2>
                </motion.div>

                {/* Pain points grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
                >
                    {painPoints.map((pain, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-3 glass rounded-xl p-4"
                        >
                            <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                                <X className="w-4 h-4 text-destructive" />
                            </div>
                            <span className="text-muted-foreground text-sm">{pain}</span>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-muted-foreground mt-12 text-lg"
                >
                    Se você se identificou com pelo menos uma dessas situações, <br />
                    <span className="text-primary font-semibold">o ZapGest foi feito pra você.</span>
                </motion.p>
            </div>
        </section>
    );
};

export default Pain;
