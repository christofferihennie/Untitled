import styles from '@/styles/components/currentlyReading.module.scss';
import { createClient } from '@/utils/supabase/server';
import Image from 'next/image';

export default async function CurrentlyReading() {
    const supabase = createClient();

    const { data: currentlyReading, error } = await supabase
        .from('read')
        .select(
            `
            status,
            edition(
            title,
            isbn,
            book!book_id(
                author!id (
                    contributor!author_id (
                        firstname,
                        lastname
                    )
                )
            )
            )
        `,
        )
        .single();

    const book = currentlyReading?.edition!;

    const { data: url } = supabase.storage.from('book_covers').getPublicUrl(`${book.isbn}.png`);

    const title = book.title;
    const author: { firstname: string; lastname: string } = book.book.author[0].contributor;

    return (
        <div className={styles.wrapper}>
            <div className={styles.cover}>
                <Image
                    src={url.publicUrl}
                    className={styles.cover_img}
                    alt={title}
                    height={500}
                    width={350}
                    priority={true}
                />
            </div>
            <div className={styles.main}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{title}</h1>
                    <h2 className={styles.author}>Av {author.firstname + ' ' + author.lastname}</h2>
                </div>
                <div className={styles.progress}></div>
            </div>
        </div>
    );
}
