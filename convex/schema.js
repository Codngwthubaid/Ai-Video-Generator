import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users : defineTable({
        name: v.string(),
        email: v.string(),
        photoURL: v.string(),
        credits: v.number()
    }),
    videoData : defineTable({
        title : v.string(),
        topic : v.string(),
        script : v.string(),
        videoStyle : v.string(),
        voice : v.string(),
        caption : v.any(),
        images : v.any(),
        audioUrl : v.string(),
        captionJson : v.string(),
        uid : v.id("users"),
        createdBy : v.string() 
    })
})

