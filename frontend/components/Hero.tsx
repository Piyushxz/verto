"use client"
import { PlayCircle, Send } from "lucide-react";
import { motion } from "framer-motion";
import {useRouter} from "next/navigation";
export const Hero = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-screen h-full bg-white flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4, ease: "easeInOut" }}
          className="pt-24 rounded-xl group text-center"
        >
          <div className="relative">
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter font-primary font-bold text-black">
              Verto
            </h2>

            <p className="text-lg md:text-xl max-w-xs mx-auto text-gray-700 px-4 mt-2 tracking-tighter font-primary">
              Piyush submission for full stack assignment
            </p>

            <div className="flex gap-4 justify-center font-primary mt-8">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/home")}
                className="inline-flex gap-2 items-center justify-center bg-black text-white text-sm hover:bg-gray-900 transition-all duration-300 h-11 rounded-lg px-6 md:px-8 shadow-md"
              >
                <Send className="size-4" />
                Start Shopping
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {}}
                className="inline-flex gap-2 items-center justify-center border border-black text-black text-sm hover:bg-gray-100 transition-all duration-300 h-11 rounded-lg px-6 md:px-8 shadow-md"
              >
                <PlayCircle className="size-4" />
                piyushsavale2@gmail.com
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>


    </>
  );
};