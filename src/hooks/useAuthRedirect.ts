import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function useAuthRedirect() {
    const [url, setUrl] = useState('');
    const pathname = usePathname();

    useEffect(() => {
        if (pathname.startsWith('/login')) {
            setUrl('/signup');
        }
        if (pathname.startsWith('/signup')) {
            setUrl('/login');
        }
        if (!pathname.startsWith('/login') && !pathname.startsWith('/signup')) {
            setUrl('/login');
        }
    }, [pathname]);

    console.log(pathname, url);

    return url;
}
