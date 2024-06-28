"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

import { useState } from "react";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export default function Home() {

  const [url, setUrl] = useState("");
  const [downloadflag, setDownloadflag] = useState(false);
  const [HDdownloadurl, setHDdownloadurl] = useState("");
  const [SDdownloadurl, setSDdownloadurl] = useState("");
  const [audioDownloadUrl, setAudioDownloadUrl] = useState("");
  const [thumbnail, setThumbnail] = useState("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");



  const options = {
    method: "POST",
    url: "https://social-download-all-in-one.p.rapidapi.com/v1/social/autolink",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "10ce9c4267msha639dae37dabea5p10164ejsn4ddf4732589b",
      "X-RapidAPI-Host": "social-download-all-in-one.p.rapidapi.com",
    },
    data: {
      url: url,
    },
  };


  
  const handleDownload = async () => {
    try {
      const response = await axios.request(options);

      if (response) {
        setDownloadflag(true);
        console.log(response.data);
        setHDdownloadurl(response.data.medias[0].url);
        setSDdownloadurl(response.data.medias[1].url);
        setAudioDownloadUrl(response.data.medias[2].url);
        setThumbnail(response.data.thumbnail);
      } else {
        alert("Invalid URL");
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Donwload videos
          <br />
          in the right way
        </motion.h1>

        <div className="flex flex-col items-center justify-center">
          <input
            type="text"
            placeholder="Paste the video link here"
            className="w-[500px] mt-20 h-12 p-4 text-lg bg-black border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            value={url}
            onChange={(e) => setUrl(e.target.value)}

            
          />
          <button className="relative mt-10 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Lets Dive ⚡
            </span>
          </button>
        </div>
      </LampContainer>
      <div className="flex w-3/5 flex-row items-center justify-around mt-20 mx-auto">
        <CardContainer className="inter-var mr-7">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Make things float in air
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={thumbnail}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                watch now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                <a href={HDdownloadurl} download> Download HD </a>
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                <a href={SDdownloadurl} download> Download SD </a>
              </CardItem>

            </div>
          </CardBody>
        </CardContainer>

        <div className="relative bg-gray-700 h-96 w-auto p-5 rounded-2xl">
          <div className="absolute top-4 right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              onClick={() =>
                navigator.clipboard.writeText(
                  "Gemini, formerly known as Bard, is a generative artificial intelligence chatbot developed by Google. Based on the large language model of the same name and developed as a direct response to the meteoric rise of OpenAI's ChatGPT, it was launched in a limited capacity in March 2023 before expanding to other countries in May. It was previously based on PaLM, and initially the LaMDA family of large language models."
                )
              }
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 5H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-2M15 3h6v6M10 14L21 3"
              />
            </svg>
          </div>
          <p className="text-xl text-neutral-600 dark:text-white">
            Gemini, formerly known as Bard, is a generative artificial
            intelligence chatbot developed by Google. Based on the large
            language model of the same name and developed as a direct response
            to the meteoric rise of OpenAI&apos;s ChatGPT, it was launched in a
            limited capacity in March 2023 before expanding to other countries
            in May. It was previously based on PaLM, and initially the LaMDA
            family of large language models.
          </p>
        </div>
      </div>
    </>
  );
}
