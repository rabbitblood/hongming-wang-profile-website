import React from "react";
import HackerStyleHeading from "@/components/HackerUIComponents/atoms/HackerStyleHeading/HackerStyleHeading";
import HackerStyleParagraph from "@/components/HackerUIComponents/atoms/HackerStyleParagraph/HackerStyleParagraph";
import HackerLink from "@/components/HackerUIComponents/atoms/HackerLink/HackerLink";
import HackerStyleContainer from "@/components/HackerUIComponents/atoms/HackerStyleContainer/HackerStyleContainer";
import "./BlogCard.css";

interface BlogCardProps {
  title: string;
  shortDesc: string;
  link: string;
}

export default function BlogCard({
  title,
  shortDesc,
  link,
  ...props
}: BlogCardProps) {
  return (
    <HackerStyleContainer additionalClass="blog-card">
      <div className="blog-card__content">
        <HackerStyleHeading headingNumber="h3">{title}</HackerStyleHeading>
        <HackerStyleParagraph>{shortDesc}</HackerStyleParagraph>
        <HackerLink href={link}>Read More</HackerLink>
      </div>
    </HackerStyleContainer>
  );
}
