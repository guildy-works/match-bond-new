import { createClient } from "microcms-js-sdk"

export const client = createClient({
    serviceDomain: "matchbond",
    apiKey: "y4QXFFWvZgVWMHbqyRmoRCmNwxvqkshmYXmL",
});

export const fetchNews = async (id: string): Promise<News> => {
    const response = await client.get<{
        id: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        revisedAt: string;
        title: string;
        content: string;
    }>({
        endpoint: "news",
        contentId: id,
    });

    return {
        id: response.id,
        createdAt: new Date(response.createdAt),
        updatedAt: new Date(response.updatedAt),
        publishedAt: new Date(response.publishedAt),
        revisedAt: new Date(response.revisedAt),
        title: response.title,
        content: response.content,
    }
}

export const fetchAllNewses = async (): Promise<NewsMeta[]> => {
    const response = await client.getList<{
        id: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        revisedAt: string;
        title: string;
        content: string;
    }>({
        endpoint: "news",
        queries: {
            limit: 100,
            fields: "id,publishedAt,title",
        }
    });

    return response.contents.map<NewsMeta>(content => ({
        id: content.id,
        publishedAt: new Date(content.publishedAt),
        title: content.title,
    }))
}


export type NewsMeta= {
    id: string;
    publishedAt: Date;
    title: string;
};

export type News = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    revisedAt: Date;
    title: string;
    content?: string;
};