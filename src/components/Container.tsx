import { ReactNode, useEffect } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import CommonHead from './CommonHead';

type Props = {
    children: ReactNode;
};

const Container = ({ children }: Props) => {
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        router.push(pathname);
    }, []);

    return (
        <>
            <CommonHead />
            <div className="flex flex-col bg-gray-50">{children}</div>
        </>
    );
};

export default Container;
