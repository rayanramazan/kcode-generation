import Resources from './dataResources.json'
import {Language} from "~/types/Language";
type Resources ={
    slug: String;
    id: number;
    img: String,
}

export default async () =>
    Resources