import Link from 'next/link';
import React from 'react';

type Props = {
    toc: { id: string; text: string }[];
};

const TableOfContents = (props: Props) => {
    const { toc } = props;

    if (!toc?.length) {
        return <></>;
    }

    return (
        <div className="mt-4 text-xs">
            <ul className="flex flex-col gap-1.5">
                {toc.map((data) => (
                    <li className="text-blue-600 hover:underline" key={data.id}>
                        <Link href={`#${data.id}`}>{data.text}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TableOfContents;
