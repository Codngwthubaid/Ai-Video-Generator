import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateVideoData = mutation({
    args: {
        title: v.string(),
        topic: v.string(),
        script: v.string(),
        videoStyle: v.string(),
        voice: v.string(),
        caption: v.any(),
        uid: v.string(v.id('users')),
        createdBy: v.string()
    },

    handler: async (ctx, args) => {
        const result = await ctx.db.insert("videoData", {
            title: args.title,
            topic: args.topic,
            script: args.script,
            videoStyle: args.videoStyle,
            voice: args.voice,
            caption: args.caption,
            uid: args.uid,
            createdBy: args.createdBy
        });
        return result;
    }
});