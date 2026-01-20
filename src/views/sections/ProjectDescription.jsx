import React from "react";
import Section from "../../components/common/Section";
import { RevealStaggeredInView } from "../../components/common/Reveal";

export const ProjectDescription = ({
  id,
  desc,
  research,
  findings,
  result,
}) => {
  const tabs = [
    { name: "Research", id: "research", content: research },
    { name: "Findings", id: "findings", content: findings },
    { name: "Result", id: "result", content: result },
  ];

  return (
    <>
      <Section p="py-36">
        <div className="flex flex-col lg:flex-row lg:space-y-0 space-y-14 justify-between">
          <div className="w-full max-w-[800px] mx-auto space-y-3 text-center">
            <p className="text-neutral-500 text-base font-secondary">TL;DR</p>
            <p className="text-2xl text-neutral-900 whitespace-pre-line">
              {desc}
            </p>
          </div>
        </div>
      </Section>
      {id !== "provento" ||
        (id !== "wp_tech" && (
          <Section p="py-36">
            <div className="flex flex-col lg:flex-row gap-6 lg:flex-row lg:space-y-0 space-y-14 justify-between">
              {tabs.map(({ id, name, content }) => (
                <div
                  key={id}
                  className="flex flex-col gap-6 w-full items-center"
                >
                  <p className="font-secondary text-teal-700 text-3xl">
                    {name}
                  </p>
                  <div className="flex flex-col items-start gap-6">
                    {content.map((item, index) => (
                      <RevealStaggeredInView
                        stagger={0.2}
                        key={item.title}
                        motionClass={`flex flex-col gap-4 rounded-xl bg-clip-padding px-4 py-4 backdrop-filter backdrop-blur-sm bg-opacity-[100%] shadow border border-[#ffffff20] ${
                          index % 2 === 0 ? "rotate-1" : "-rotate-1"
                        } hover:rotate-0 transition-all duration-500 ease-out`}
                      >
                        <p className="text-neutral-900 text-xl">{item.title}</p>
                        <p className="text-neutral-500 text-base">
                          {item.desc}
                        </p>
                      </RevealStaggeredInView>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        ))}
      {/* <Section p="pt-36 pb-12">
        <RevealStaggeredInView
          stagger={0.2}
          motionClass="flex flex-row justify-between lg:justify-evenly font-secondary lg:text-3xl"
        >
          {tabs.map(({ id, name }) => (
            <motion.button
              key={id}
              whileTap={{
                scale: 0.9,
                rotate: 0,
              }}
              initial={{ scale: 1, rotate: 2 }}
              onClick={() => setChoice(id)}
              className={` 
           text-neutral-400 hover:text-teal-700 transition-all ease-out duration-500 ${
             choice === id ? "text-teal-700" : "text-neutral-400 "
           }`}
            >
              {name}
            </motion.button>
          ))}
        </RevealStaggeredInView>
      </Section>
      <Section p="pt-0 pb-36">
        <div className="flex flex-col lg:flex-row lg:space-y-0 space-y-14 justify-between mx-auto w-full">
          <AnimatePresence mode="wait">
            {tabs.map(
              (tab) =>
                tab.id === choice && (
                  <motion.div
                    key={choice}
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    className="text-neutral-900 w-full"
                  >
                    {tab.id === "research" && (
                      <Research content={tab.content} />
                    )}
                    {tab.id === "findings" && (
                      <Findings content={tab.content} />
                    )}
                    {tab.id === "improvement" && (
                      <Improvement content={tab.content} />
                    )}
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div> 
      </Section>*/}
    </>
  );
};
