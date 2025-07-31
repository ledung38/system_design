import { componentMap } from "@/app/flex-layout/page.client";
import { Actions, DockLocation, IJsonTabNode, Model } from "flexlayout-react";
import React, { useEffect } from "react";

export const FlexLayoutHeader = ({
  model,
  layoutRef,
}: {
  model: Model;
  layoutRef: any;
}) => {
  //   const { addTab } = model;

  console.log("model", model?.getActiveTabset());
  const addNode = (e) => {
    layoutRef(e);
    return;
    const activeTabset = model?.getRoot();
    console.log("activeTabset", activeTabset);
    model.doAction(
      //   Actions.addNode(
      //     {
      //       type: "tabset",
      //       name: "New Tab",
      //       component: "FlexLayoutFour",
      //     },
      //     activeTabset?.attributes?.id, // ID tabset đang được chọn, hoặc ID cụ thể
      //     DockLocation.CENTER,
      //     -1 // vị trí -1 nghĩa là thêm vào cuối
      //   )
      Actions.addNode(
        {
          type: "tabset",
          name: "New Tab",
          weight: 25,
          children: [
            {
              type: "tab",
              name: "Tabset mới",
              component: "FlexLayoutFive",
            },
          ],
        },
        activeTabset?.attributes?.id, // ID tabset đang được chọn, hoặc ID cụ thể
        DockLocation.CENTER,
        -1 // vị trí -1 nghĩa là thêm vào cuối
      )
    );
  };

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    tabJson: IJsonTabNode
  ) => {
    console.log("handleDragStart");
    const jsonTab: IJsonTabNode = {
      component: tabJson.component,
      name: tabJson.name,
    };

    layoutRef.current?.setDragComponent(e, <div>Dragging</div>); // <-- đảm bảo e là DragEvent thật
    layoutRef.current?.addTabWithDragAndDrop(e, jsonTab, () => {
      console.log("Tab dropped");
    });
  };
  return (
    <div className=" mt-2">
      <div className="relative group p-2 text-3xl cursor-pointer">
        +
        <div className="absolute left-0 top-10 mt-2 hidden group-hover:block bg-white shadow-lg rounded p-2 z-10">
          <div
            className="p-2 hover:bg-gray-100 rounded"
            draggable
            onDragStart={(e) =>
              handleDragStart(e, {
                component: "FlexLayoutFour",
                name: "Tab Four",
              })
            }
          >
            {<componentMap.FlexLayoutFour />}
          </div>
          <div
            className="p-2 hover:bg-gray-100 rounded"
            draggable
            onDragStart={(e) =>
              handleDragStart(e, {
                component: "FlexLayoutFive",
                name: "Tab Five",
              })
            }
          >
            {<componentMap.FlexLayoutFive />}
          </div>
        </div>
      </div>
    </div>
  );
};
