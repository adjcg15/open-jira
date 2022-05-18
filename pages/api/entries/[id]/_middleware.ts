import mongoose from 'mongoose';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    let id = req.page.params?.id || '';

    if(typeof id !== 'string') id = '';

    const checkMongoIDRegExp = new RegExp('^[0-9a-fA-F]{24}$');

    if( !checkMongoIDRegExp.test(id) ) {
        return new Response(JSON.stringify({ message: 'El id no es válido: ' + id }), {
            status: 400,
            headers: {
                'Content-type': 'application/json'
            }
        });
    }

    return NextResponse.next();
}