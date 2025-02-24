import Image from "next/image";
import About from "./About";

export default function Home() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col gap-3 items-start ">
          <h1 className="text-6xl font-Ibm-sans leading-tight tracking-tighter font-bold">Hello me</h1>
          <p className="text-text max-w-2xl leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem amet perferendis quis architecto eos laboriosam nesciunt impedit veritatis ducimus, quisquam consequuntur, cumque magni excepturi dolorem nemo odio doloribus dolorum et.</p>
          <button className="py-2 px-6 bg-primary hover:bg-secondary duration-300 rounded-xl ">Try Free</button>
        </div>
        <Image src={"/pic.jpg"} height={400} width={400} alt="" className="rounded-lg" />
      </div>
      <About />
    </>
  )
}
