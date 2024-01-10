import { v4 as uuidv4 } from "uuid";

interface ShowcaseProps {
  id: string;
  title: string;
  number: number;
  featured: boolean;
}

export class Showcase {
  protected id: string;
  protected title: string;
  protected number: number;
  protected featured: boolean;

  constructor(props: ShowcaseProps, id?: string) {
    this.id = id || uuidv4();
    this.title = props.title;
    this.number = props.number;
    this.featured = props.featured;
  }
}

let numberStyle = 323;
const booleanStyle = true;
