import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Maria S.",
        role: "Autônoma",
        text: "Nunca mais usei planilha. Agora faço tudo pelo WhatsApp. É muito mais prático!",
        stars: 5,
    },
    {
        name: "Carlos R.",
        role: "MEI",
        text: "Finalmente consegui entender meus gastos. Simples e funciona de verdade.",
        stars: 5,
    },
    {
        name: "Juliana M.",
        role: "Freelancer",
        text: "Em 1 mês usando, economizei mais do que no ano inteiro tentando com outros apps.",
        stars: 5,
    },
    {
        name: "Pedro L.",
        role: "Empreendedor",
        text: "Parece mágica. Mando uma mensagem e tá tudo organizado. Recomendo demais!",
        stars: 5,
    },
];

export const SocialProof = () => {
    return (
        <section id="depoimentos" className="relative py-24 overflow-hidden scroll-mt-24">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

            <div className="relative z-10 container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                        💚 Quem usa, aprova
                    </span>
                    <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">
                        +10.000 pessoas já <span className="gradient-text">no controle</span>
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg">
                        Veja o que nossos usuários estão falando sobre o Pixou
                    </p>
                </motion.div>

                {/* Testimonials grid */}
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass rounded-2xl p-6 relative"
                        >
                            {/* Quote icon */}
                            <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.stars)].map((_, j) => (
                                    <Star key={j} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-foreground mb-4">"{testimonial.text}"</p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                    <span className="text-primary font-semibold text-sm">
                                        {testimonial.name.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                                    <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-center mt-12"
                >
                    <div className="glass rounded-full px-6 py-3 flex items-center gap-3">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            ))}
                        </div>
                        <span className="text-muted-foreground text-sm">
                            <span className="text-foreground font-semibold">4.9/5</span> — Avaliação média dos usuários
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SocialProof;
