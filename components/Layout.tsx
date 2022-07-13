import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Image from "next/image";
import TypewriterComponent from "typewriter-effect";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Layout = (props: any) => {
  return (
    <div className="layout">
      <Head>
        <title>Sabitha Kuppusamy</title>
        <link
          rel="shortcut icon"
          href="/logo-without-background.png"
          type="image/x-icon"
        />
      </Head>
      <div className="flex flex-col">
        <div className="flex justify-between fixed z-10 top-0 w-full">
          <div className="logo-bg">
            <Image
              src="/logo-without-background.png"
              alt="logo"
              width={150}
              height={150}
            />
          </div>
        </div>
        <div className="font-extralight text-7xl text-right text-white mr-20 mt-[40vh]">
          <TypewriterComponent
            options={{
              strings: ["Welcome!", "Life changing CSS tricks by Sabi"],
              autoStart: true,
              loop: true,
              delay: 200,
            }}
            onInit={(typewriter) => {
              typewriter.pauseFor(1000).deleteAll().start();
            }}
          />
          <div className="mt-[35vh]">
            <a href="#body">
              <FontAwesomeIcon
                icon={faChevronDown}
                className="scroll-down float-right"
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>

        <div id="body" className="mt-20">
          {props.children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
