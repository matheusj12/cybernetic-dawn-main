import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "Preciso baixar algum aplicativo?",
        answer: "Não! Tudo funciona diretamente no WhatsApp que você já usa. Sem downloads, sem cadastros complicados.",
    },
    {
        question: "A IA entende áudio e foto?",
        answer: "Sim! Você pode mandar mensagem de texto, gravar um áudio ou até tirar foto de um recibo. A IA entende tudo.",
    },
    {
        question: "Meus dados estão seguros?",
        answer: "Totalmente. Seus dados são criptografados e armazenados com segurança. Suas finanças são só suas.",
    },
    {
        question: "Funciona no meu celular?",
        answer: "Se você usa WhatsApp, funciona. Android, iPhone, qualquer um. Simples assim.",
    },
    {
        question: "E se eu errar um lançamento?",
        answer: "Sem problema! É só pedir pra corrigir ou apagar. Mande algo como \"apaga aquela despesa errada\" e pronto.",
    },
    {
        question: "Posso cancelar quando quiser?",
        answer: "Claro! Sem fidelidade, sem multa. Você pode cancelar a qualquer momento, sem burocracia.",
    },
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="relative py-24 overflow-hidden">
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
                        ❓ Dúvidas frequentes
                    </span>
                    <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">
                        Ainda tem <span className="gradient-text">perguntas?</span>
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg">
                        Respondemos as dúvidas mais comuns sobre o ZapGest
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full glass rounded-2xl p-5 text-left transition-all hover:bg-muted/50"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span className="font-semibold text-foreground">{faq.question}</span>
                                    </div>
                                    <ChevronDown
                                        className={`w-5 h-5 text-muted-foreground transition-transform ${openIndex === i ? "rotate-180" : ""
                                            }`}
                                    />
                                </div>

                                {openIndex === i && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="mt-4 pl-8"
                                    >
                                        <p className="text-muted-foreground">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
