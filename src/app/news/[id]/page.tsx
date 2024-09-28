'use client'

export default function EventDetailsPage({ params }: { params: { id: string } }) {
    return <div>イベントID: {params.id}</div>
  }