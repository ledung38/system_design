"use client";
import React, { useEffect, useRef } from "react";
import "flexlayout-react/style/light.css";
import { IJsonTabNode, Layout, Model, TabNode } from "flexlayout-react";
import { FlexLayoutOne } from "@/modules/flexLayout/FlexLayoutOne";
import { FlexLayoutTwo } from "@/modules/flexLayout/FlexLayoutTwo";
import { FlexLayoutThree } from "@/modules/flexLayout/FlexLayoutThree";
import { FlexLayoutFour } from "@/modules/flexLayout/FlexLayoutFour";
import { FlexLayoutFive } from "@/modules/flexLayout/FlexLayoutFive";
import { FlexLayoutHeader } from "@/modules/flexLayout/FlexLayoutHeader";
export const componentMap = {
  FlexLayoutOne,
  FlexLayoutTwo,
  FlexLayoutThree,
  FlexLayoutFour,
  FlexLayoutFive,
};

const json = {
  global: {},
  borders: [],
  layout: {
    type: "row",
    weight: 100,
    children: [
      {
        type: "tabset",
        weight: 50,
        children: [
          {
            type: "tab",
            name: "One",
            component: "FlexLayoutOne",
          },
        ],
      },
      {
        type: "tabset",
        weight: 50,
        children: [
          {
            type: "tab",
            name: "Two",
            component: "FlexLayoutTwo",
          },
          {
            type: "tab",
            name: "Three",
            component: "FlexLayoutThree",
          },
        ],
      },
    ],
  },
};

const model = Model.fromJson(json);

export const FlexLayoutClient = () => {
  const layoutRef = useRef<Layout | null>(null);
  const refDrag = useRef<HTMLDivElement>(null);

  const factory = (node: TabNode) => {
    const componentName = node.getComponent();
    const component = componentMap[componentName as keyof typeof componentMap];

    if (component) {
      return component();
    }
  };

  return (
    <div className="h-[100vh] flex flex-col">
      <FlexLayoutHeader model={model} layoutRef={layoutRef} />
      <div className="relative flex-1">
        <Layout model={model} factory={factory} ref={layoutRef} />
      </div>
    </div>
  );
};
