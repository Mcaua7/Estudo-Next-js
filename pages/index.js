import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Contador from '@/components/Contador'


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    
    <>

    <Contador/>
    </>
  )
}
