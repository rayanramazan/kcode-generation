import dataPage from './dataResources.json'
type Page ={
    slug: String;
    id: number;
    img: String,
}

export default async () =>
    dataPage