import { Feature } from "./feature";

export class Scenario {
    feature: Feature;
    name: string;
    tags: Set<String>;
}
