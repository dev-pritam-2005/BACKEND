import { serve, Response } from 'bun';

serve({
    fetch(request) {
        const url = new URL(request.url);
        if (url.pathname === '/') {
            return new Response('Hello baccho', { status: 200 });
        } else if (url.pathname === '/about') {
            return new Response('hello bhosadi walo tum abhi about pe ageye ho ,ab gand marao', { status: 200 });
        } else {
            return new Response('404 ho gya hain madarchod', { status: 404 });
        }
    },
    port: 4000,
    hostname: '127.0.0.1'
});