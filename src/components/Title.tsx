import React from "react";

type Props = {
  content: string;
};

function Title({ content }: Props) {
  return <h1>{content}</h1>;
}

export default Title;
