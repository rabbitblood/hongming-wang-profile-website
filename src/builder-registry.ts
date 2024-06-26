"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import HackerCodeContainer from "./components/HackerUIComponents/atoms/HackerCodeContainer/HackerCodeContainer";
import HackerStyleContainer from "./components/HackerUIComponents/atoms/HackerStyleContainer/HackerStyleContainer";
import HackerStyleHeading from "./components/HackerUIComponents/atoms/HackerStyleHeading/HackerStyleHeading";
import HackerStyleParagraph from "./components/HackerUIComponents/atoms/HackerStyleParagraph/HackerStyleParagraph";
import HackerLink from "./components/HackerUIComponents/atoms/HackerLink/HackerLink";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(withChildren(HackerStyleContainer), {
  name: "HackerStyleContainer",
  inputs: [
    {
      name: "additionalClass",
      type: "string",
    },
    {
      name: "bg",
      type: "string",
      enum: ["half-transparent", "solid", "transparent"],
    },
    {
      name: "children",
      type: "string",
      hideFromUI: false,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "parentSize",
      type: "boolean",
    },
  ],
  noWrap: true,
});

Builder.registerComponent(withChildren(HackerCodeContainer), {
  name: "HackerCodeContainer",
  inputs: [
    {
      name: "attributes",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "children",
      type: "longText",
      hideFromUI: false,
      meta: {
        ts: "ReactNode",
      },
    },
  ],
  noWrap: true,
});

Builder.registerComponent(withChildren(HackerStyleHeading), {
  name: "HackerStyleHeading",
  inputs: [
    {
      name: "children",
      type: "longText",
      hideFromUI: false,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "headingNumber",
      type: "string",
      enum: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
  ],
  noWrap: true,
});

Builder.registerComponent(withChildren(HackerStyleParagraph), {
  name: "HackerStyleParagraph",
  inputs: [
    {
      name: "children",
      type: "longText",
      hideFromUI: false,
      meta: {
        ts: "ReactNode",
      },
    },
  ],
  noWrap: true,
});

Builder.registerComponent(withChildren(HackerLink), {
  name: "HackerLink",
  inputs: [
    {
      name: "children",
      type: "longText",
      hideFromUI: false,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "href",
      type: "string",
    },
  ],
  noWrap: true,
});
