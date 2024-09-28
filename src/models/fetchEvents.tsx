import { client } from "./client";

export const fetchEvent = async (id: string): Promise<EventData> => {
    const content = await client.get<{
        id: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        revisedAt: string;
        title?: string;
        body?: string;
        date?: string;
        thumbnail?: { url: string, width: number, height: number };
        summary?: string;
    }>({
        endpoint: "events",
        contentId: id,
    });

    return {
        id: content.id,
        createdAt: new Date(content.createdAt),
        updatedAt: new Date(content.updatedAt),
        publishedAt: new Date(content.publishedAt),
        revisedAt: new Date(content.revisedAt),
        title: content.title,
        body: content.body,
        date: content.date ? new Date(content.date) : undefined,
        thumbnail: content.thumbnail,
        summary: content.summary,
    }
}

export const fetchEvents = async (): Promise<EventData[]> => {
    const response = await client.getList<{
        id: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        revisedAt: string;
        title?: string;
        body?: string;
        date?: string;
        thumbnail?: { url: string, width: number, height: number };
        summary?: string;
    }>({
        endpoint: "events",
    });

    return response.contents.map<EventData>(content => ({
        id: content.id,
        createdAt: new Date(content.createdAt),
        updatedAt: new Date(content.updatedAt),
        publishedAt: new Date(content.publishedAt),
        revisedAt: new Date(content.revisedAt),
        title: content.title,
        body: content.body,
        date: content.date ? new Date(content.date) : undefined,
        thumbnail: content.thumbnail,
        summary: content.summary,
    }))
}

export type EventData = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    revisedAt: Date;
    date?: Date;
    title?: string;
    thumbnail?: { url: string, width: number, height: number };
    body?: string;
    summary?: string;
};