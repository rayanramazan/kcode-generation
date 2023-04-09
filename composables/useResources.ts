import Resources from './dataResources.json'
import {Language} from "~/types/Language";
type Resources ={
    title: String;
    id: number;
    description: String,
    link: String,
}

export default async () =>
    Resources