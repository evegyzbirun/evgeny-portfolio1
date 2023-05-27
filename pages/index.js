import Head from "next/head";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from "next/legacy/image";
import deved from "../public/evgeny1.jpg";
import icon1 from "../public/icon1.png";
import icon2 from "../public/icon2.jpg";
import { SemanticClassificationFormat } from "typescript";
import { useState } from "react";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Evgeny Zbirun Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-45 dark:bg-gray-900">
        <section className=" bg-white-200 min-h-screen">
          <nav className="py-10 mb-14 flex justify-between">
            <h1 className="text-xl font-burtons">developed</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-600 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-12">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Evgeny Zbirun</h2>
            <h3 className="text-2xl py-2">Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              About me.
            </p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-4 text-gray-600">


            <AiFillTwitterCircle />

            <a href="https://www.linkedin.com/in/evgenyzbirun/">
              <AiFillLinkedin />
            </a>

            <a href="https://github.com/evegyzbirun">
              <AiFillGithub />
            </a>

          </div>

          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Experience</h3>
            <h2 className="text-2xl py-2"><spam className="text-teal-500"><a href="https://opineschool.com/">Opine</a></spam> (part-time React Web Developer)</h2>
            <p className="text-md py-2 leading-8 text-gray-80">Added pictures as answers: The application built on REACT, worked on uploading each image as answers for each question card, one image got the correct value, other incorrect.</p>
            <p className="text-md py-2 leading-8">CSV converter: Import and export option for teachers able to make study sets from river competitors and import to the website or export any of the sets.</p>
            <p className="text-md py-2 leading-8">Firebase rules: Different access to unauthorized users, students, and teachers on the website. Keep it organized.</p>
          </div>
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={icon1} width={100} height={100} />
              <h3 className="text-lg font-medium pt-9 pb-2">Languages I use</h3>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">REACT</p>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={icon2} width={100} height={100} />
              <h3 className="text-lg font-medium pt-9 pb-2">Projects:</h3>
              <p className="text-gray-800 py-1"><a href="https://github.com/evegyzbirun/custom-store">Custom-Store</a></p>
              <p className="text-gray-800 py-1"><a href="https://github.com/evegyzbirun/anagram">Anagrams-and-Antigrams</a></p>
              <p className="text-gray-800 py-1"><a href="https://github.com/evegyzbirun/AgeCalc">Age-Calculator</a></p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={icon1} width={100} height={100} />
              <h3 className="text-lg font-medium pt-9 pb-2">Languages I use</h3>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">REACT</p>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Projects</h3>
          </div>
        </section>
      </main>
    </div>
  );
}
