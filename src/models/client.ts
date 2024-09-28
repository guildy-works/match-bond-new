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

export const fetchNewses = async (): Promise<News[]> => {
    const response = await client.getList<{
        id: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        revisedAt: string;
        title: string;
        body: string;
    }>({
        endpoint: "news",
        
    });

    return response.contents.map<News>(content => ({
        id: content.id,
        createdAt: new Date(content.createdAt),
        updatedAt: new Date(content.updatedAt),
        publishedAt: new Date(content.publishedAt),
        revisedAt: new Date(content.revisedAt),
        title: content.title,
    }))
}

export type News = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    revisedAt: Date;
    title: string;
    content?: string;
};