import { Heading } from "./Title.styles";

type TitleProps = {
  text: string;
};

export const Title = ({ text }: TitleProps) => {
  return <Heading>{text}</Heading>;
};