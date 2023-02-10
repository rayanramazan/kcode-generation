import { Language } from '~~/types/Language';
import dataPage from './dataPage.json'
type Page ={
    slug: String;
    id: number;
    title: Language,
    titlePage: Language;
    children: any[];
}

export default async () =>
    dataPage