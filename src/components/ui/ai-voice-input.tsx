

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface AIVoiceInputProps {
  className?: string;
}

export const AIVoiceInput = ({ className }: AIVoiceInputProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [message, setMessage] = useState("");

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Simulate recording
      setTimeout(() => {
        setMessage("Enviar mensagem para cliente sobre orçamento...");
        setIsRecording(false);
      }, 3000);
    }
  };

  return (
    <div className={cn("w-full max-w-md mx-auto", className)}>
      <div className="glass rounded-2xl p-6 space-y-4">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-primary text-lg">🤖</span>
          </div>
          <div>
            <h4 className="font-semibold text-foreground">ZapGest AI</h4>
            <p className="text-xs text-muted-foreground">Assistente Virtual</p>
          </div>
        </div>

        {/* Audio Visualization */}
        <AnimatePresence mode="wait">
          {isRecording ? (
            <motion.div
              key="recording"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="h-20 flex items-center justify-center gap-1"
            >
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  className="audio-bar w-2 bg-primary rounded-full"
                  style={{
                    height: "100%",
                    maxHeight: "60px",
                  }}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-20 flex items-center justify-center"
            >
              {message ? (
                <p className="text-sm text-foreground/80 text-center">{message}</p>
              ) : (
                <p className="text-sm text-muted-foreground text-center">
                  Toque no microfone para começar a gravar
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleRecording}
            className={cn(
              "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300",
              isRecording
                ? "bg-destructive glow-primary"
                : "bg-primary hover:bg-primary/90 pulse-glow"
            )}
          >
            {isRecording ? (
              <MicOff className="w-7 h-7 text-primary-foreground" />
            ) : (
              <Mic className="w-7 h-7 text-primary-foreground" />
            )}
          </motion.button>

          {message && !isRecording && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center"
            >
              <Send className="w-5 h-5 text-secondary-foreground" />
            </motion.button>
          )}
        </div>

        {/* Status */}
        <div className="text-center">
          <span
            className={cn(
              "text-xs font-medium",
              isRecording ? "text-primary" : "text-muted-foreground"
            )}
          >
            {isRecording ? "Gravando..." : "Pronto para gravar"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AIVoiceInput;
