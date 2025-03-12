// crud oprations done by mutations
// features record done by queries


import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const CreateNewUser = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        photoURL: v.string()
    },
    handler: async (ctx, args) => {
        // check if user is present 
        const user = await ctx.db.query("users").filter(q => q.eq(q.field("email"), args.email)).collect();

        // if not present then create user
        if (!user?.email) {
            const userDetails = {
                name: args.name,
                email: args.email,
                photoURL: args.photoURL,
                credits: 100
            }
    
            await ctx.db.insert("users", userDetails)
            return userDetails
        }
        return user
    }
})