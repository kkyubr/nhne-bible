export const runtime = "edge";

export async function generateStaticParams() {
    const books = new Array(10).fill(0).map((_, i) => `${i}`);
    return books.map(book => ({book}));
}

export default function Book({params}: {params: {book: string}}) {

    return <div>
        params::book::{params.book}
    </div>
}