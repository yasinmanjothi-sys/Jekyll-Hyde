import { EventSlug } from "@/lib/posters-data";
import ArchiveClient from "./ArchiveClient";

export function generateStaticParams() {
    return [
        { eventSlug: 'wednesday' },
        { eventSlug: 'thursday' },
        { eventSlug: 'friday' },
        { eventSlug: 'saturday' },
        { eventSlug: 'closing-rituals' },
    ];
}

export default async function ArchivePage({ params }: { params: Promise<{ eventSlug: EventSlug }> }) {
    const resolvedParams = await params;
    return <ArchiveClient eventSlug={resolvedParams.eventSlug} />;
}
