import React, { useEffect, useState, useRef } from "react";
import ButtonWithIcon from "../ButtonWithIcon/ButtonWithIcon/ButtonWithIcon";
import HackerStyleContainer from "../../atoms/HackerStyleContainer/HackerStyleContainer";
import "./HackerDropDown.css";

export interface HackerDropDownItem {
  symbol: string | undefined;
  imgUrl?: string;
  name: string;
}

export interface HackerDropDownProps
  extends React.HTMLAttributes<HTMLDivElement> {
  selectedItem: HackerDropDownItem;
  setSelectedItem: (item: HackerDropDownItem) => void;
  items: HackerDropDownItem[];
}

export default function HackerDropDown({
  selectedItem,
  setSelectedItem,
  items,
  ...props
}: HackerDropDownProps) {
  const thisDropDown = useRef<HTMLDivElement | null>(null);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [clickEventListener, setClickEventListener] = useState<any>(null);

  function handleOpenMenu() {
    setOpenDropDown(!openDropDown);

    const mouseClick = addEventListener("click", (e) => {
      if (
        thisDropDown.current &&
        !thisDropDown.current.contains(e.target as Node)
      ) {
        setOpenDropDown(false);
        removeEventListener("click", clickEventListener);
      }
    });

    setClickEventListener(mouseClick);
  }

  return (
    <div className="hacker-style-dropdown" ref={thisDropDown} {...props}>
      <ButtonWithIcon
        icon={selectedItem.imgUrl}
        marginx="extra"
        style={{
          marginBottom: "0",
          marginTop: "0",
        }}
        onClick={() => {
          handleOpenMenu();
        }}
      >
        {selectedItem.name}
      </ButtonWithIcon>
      {openDropDown && (
        <div className="drop-down-items-container">
          <HackerStyleContainer
            bg="solid"
            style={{
              margin: "0",
            }}
          >
            {items.map((item, index) => {
              return (
                <ButtonWithIcon
                  icon={item.imgUrl}
                  marginx="extra"
                  key={index}
                  onClick={() => {
                    setSelectedItem(item);
                    setOpenDropDown(false);
                  }}
                >
                  {item.name}
                </ButtonWithIcon>
              );
            })}
          </HackerStyleContainer>
        </div>
      )}
    </div>
  );
}
