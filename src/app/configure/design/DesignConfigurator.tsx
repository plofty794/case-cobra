"use client";
import HandleComponent from "@/components/HandleComponent";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Rnd } from "react-rnd";
import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import { useState } from "react";
import { CheckCircleIcon } from "lucide-react";

const plans = [
  { name: "Startup", ram: "12GB", cpus: "6 CPUs", disk: "256GB SSD disk" },
  { name: "Business", ram: "16GB", cpus: "8 CPUs", disk: "512GB SSD disk" },
  { name: "Enterprise", ram: "32GB", cpus: "12 CPUs", disk: "1TB SSD disk" },
];

interface DesignConfiguratorProps {
  imageUrl: string;
  width: number;
  height: number;
}

function DesignConfigurator({
  imageUrl,
  height,
  width,
}: DesignConfiguratorProps) {
  const [selected, setSelected] = useState(plans[0]);

  return (
    <div className="relative grid grid-cols-3 my-20 pb-20">
      <div className="overflow-hidden relative col-span-2 flex items-center justify-center border-dashed border-2 border-gray-300 text-center p-12 rounded-lg w-full h-[37.5rme] max-w-4xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
        <div className="relative w-60 bg-opacity-50 pointer-events-none aspect-[896/1831] ">
          <AspectRatio
            ratio={896 / 1831}
            className="relative w-full pointer-events-none z-50 aspect-[896/1831]"
          >
            <Image
              className="select-none pointer-events-none z-50"
              fill
              src="/phone-template.png"
              alt="phone image"
            />
          </AspectRatio>
          <div
            className="absolute inset-0 top-px bottom-px left-[3px] right-[3px] z-40 rounded-[32px] 
          shadow-[0_0_0_99999px_rgba(229,231,235,0.6)]"
          />
          <div
            className={cn(
              "absolute inset-0 top-px bottom-px left-[3px] right-[3px] rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.6)]",
              "bg-gray-950"
            )}
          />
        </div>
        <Rnd
          className="absolute z-20 border-[3px] border-primary"
          default={{
            x: 150,
            y: 205,
            width: width / 4,
            height: height / 4,
          }}
          lockAspectRatio
          resizeHandleComponent={{
            bottomRight: <HandleComponent />,
            bottomLeft: <HandleComponent />,
            topRight: <HandleComponent />,
            topLeft: <HandleComponent />,
          }}
        >
          <Image
            className="pointer-events-none"
            src={imageUrl}
            fill
            alt="your image"
          />
        </Rnd>
      </div>
      <div className="h-[37.5rem] w-full col-span-full lg:col-span-1 flex flex-col bg-white">
        <ScrollArea className="relative flex-1 overflow-auto">
          <div
            aria-hidden="true"
            className="absolute z-10 inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white pointer-events-none"
          />
          <div className="px-8 pb-12 pt-8">
            <h2 className="tracking-tight font-bold text-3xl">
              Customize your case
            </h2>
            <div className="w-full h-px bg-zinc-200 my-6" />
            <div className="relative mt-4 h-full flex flex-col justify-between">
              <div className="flex flex-col gap-6">
                <RadioGroup
                  value={selected}
                  onChange={setSelected}
                  aria-label="Server size"
                  className="space-y-2"
                >
                  {plans.map((plan) => (
                    <Radio
                      key={plan.name}
                      value={plan}
                      className="group relative flex cursor-pointer rounded-lg bg-white/5 py-4 px-5 shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10"
                    >
                      <div className="flex w-full items-center justify-between">
                        <div className="text-sm/6">
                          <p className="font-semibold">{plan.name}</p>
                          <div className="flex gap-2 text-white/50">
                            <div>{plan.ram}</div>
                            <div aria-hidden="true">&middot;</div>
                            <div>{plan.cpus}</div>
                            <div aria-hidden="true">&middot;</div>
                            <div>{plan.disk}</div>
                          </div>
                        </div>
                        <CheckCircleIcon className="size-6 fill-white opacity-0 transition group-data-[checked]:opacity-100" />
                      </div>
                    </Radio>
                  ))}
                </RadioGroup>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

export default DesignConfigurator;
