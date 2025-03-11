"use client"
import { ConvexProvider, ConvexReactClient } from "convex/react";
import Provider from "./provider";

export default function ConvexClientProvider({ children }) {
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
    return (
        <ConvexProvider client={convex}>
            <Provider>
                {children}
            </Provider>
        </ConvexProvider>
    )
}