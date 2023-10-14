export interface Props {
    toggleNav: boolean;
    handleToggle: () => void;
  }
  export interface CardProps {
    title:string;
    description:string;
    image:string;
  }
  export interface ContactCardProps {
    title:string;
    description:string;
    hours?:string;
  }