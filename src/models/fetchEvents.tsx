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

export const fetchEvents = async (): Promise<EventMetaData[]> => {
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
        queries: {
            limit: 100,
            fields: "id,publishedAt,title,summary,thumbnail,date",
        }
    });

    return response.contents.map<EventMetaData>(content => ({
        id: content.id,
        publishedAt: new Date(content.publishedAt),
        title: content.title,
        date: content.date ? new Date(content.date) : undefined,
        thumbnail: content.thumbnail,
        summary: content.summary,
    }))
}

export type EventMetaData = {
    id: string;
    publishedAt: Date;
    date?: Date;
    title?: string;
    thumbnail?: { url: string, width: number, height: number };
    summary?: string;
};

export type EventData = EventMetaData & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    revisedAt: Date;
    body?: string;
};