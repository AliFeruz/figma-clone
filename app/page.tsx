'use client'
import LeftSideBar from "@/components/LeftSideBar";
import Live from "@/components/Live";
import NavBar from "@/components/NavBar";
import RightSideBar from "@/components/RightSideBar";
import fabric from 'fabric'
import { useRef } from "react";


export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null)

  return (
    <main className="h-screen overflow-hidden">
    <NavBar/>
    <section className="flex h-full flex-row">
    <LeftSideBar/>
    <Live/>
    <RightSideBar/>
    </section>
    </main>
  );
}