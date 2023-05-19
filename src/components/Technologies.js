import React from "react";
import { projects } from "../Projects";

export default function Technologies() {
  return (
    <section id="tech" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <div className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Technologies
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Below are a few of the Technologies i have used and been exposed
            too.
            <a href="https://github.com/PJoll"></a>
          </p>
        </div>
        <div class="flex justify-center">
          <ul class="bg-white rounded-lg border border-red-400 w-96 text-gray-900">
            <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
              React{" "}
            </li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">HTML</li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">CSS</li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">
              JavaScript
            </li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">Nodejs</li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">Tailwind</li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">MongoDB</li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">SQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
