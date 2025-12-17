import { motion } from "framer-motion";
import { useState } from "react";

const screenshots = [
    {
        id: 1,
        src: "/screenshot-1.jpg",
        title: "Registre gastos pelo WhatsApp",
        description: "Envie foto do recibo ou apenas descreva o gasto. A IA entende e categoriza automaticamente.",
    },
    {
        id: 2,
        src: "/screenshot-2.jpg",
        title: "Leia contas automaticamente",
        description: "Envie foto da conta de luz, água ou gás. O Pixou extrai os valores e registra pra você.",
    },
    {
        id: 3,
        src: "/screenshot-3.jpg",
        title: "Relatórios financeiros completos",
        description: "Veja entradas, saídas e saldo de forma clara. Acompanhe cada movimentação.",
    },
    {
        id: 4,
        src: "/screenshot-4.jpg",
        title: "Também funciona por áudio!",
        description: "Mande um áudio descrevendo seu gasto. O Pixou transcreve e registra tudo.",
    },
];

export const AppShowcase = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="veja-funcionando" className="relative py-24 overflow-hidden scroll-mt-24">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background" />

            {/* Decorative gradients */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[150px]" />

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
                        📱 Veja na prática
                    </span>
                    <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">
                        O Pixou <span className="gradient-text">funcionando de verdade</span>
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg">
                        Screenshots reais do nosso sistema. Simples, rápido e eficiente.
                    </p>
                </motion.div>

                {/* Screenshot Carousel */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Phone Mockup */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative mx-auto"
                        >
                            {/* Phone Frame */}
                            <div className="relative w-[280px] sm:w-[320px] mx-auto">
                                {/* Phone border with glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-secondary/50 rounded-[3rem] blur-xl opacity-30" />

                                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                                    {/* Notch */}
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20" />

                                    {/* Screen */}
                                    <div className="relative bg-black rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                                        <motion.img
                                            key={activeIndex}
                                            initial={{ opacity: 0, scale: 1.05 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3 }}
                                            src={screenshots[activeIndex].src}
                                            alt={screenshots[activeIndex].title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Screenshot Navigation */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-4"
                        >
                            {screenshots.map((screenshot, index) => (
                                <motion.button
                                    key={screenshot.id}
                                    onClick={() => setActiveIndex(index)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full text-left p-5 rounded-2xl transition-all duration-300 ${activeIndex === index
                                            ? "glass-strong border-2 border-primary/50 shadow-lg shadow-primary/20"
                                            : "glass hover:bg-muted/30"
                                        }`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div
                                            className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold shrink-0 ${activeIndex === index
                                                    ? "bg-primary text-primary-foreground"
                                                    : "bg-muted text-muted-foreground"
                                                }`}
                                        >
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h3
                                                className={`font-semibold mb-1 ${activeIndex === index ? "text-foreground" : "text-muted-foreground"
                                                    }`}
                                            >
                                                {screenshot.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                {screenshot.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.button>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Thumbnails */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center gap-4 mt-12"
                >
                    {screenshots.map((screenshot, index) => (
                        <button
                            key={screenshot.id}
                            onClick={() => setActiveIndex(index)}
                            className={`relative w-16 h-28 rounded-xl overflow-hidden border-2 transition-all duration-300 ${activeIndex === index
                                    ? "border-primary shadow-lg shadow-primary/30 scale-110"
                                    : "border-muted/50 opacity-60 hover:opacity-100"
                                }`}
                        >
                            <img
                                src={screenshot.src}
                                alt={screenshot.title}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default AppShowcase;
