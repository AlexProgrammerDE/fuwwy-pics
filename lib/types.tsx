/**
 * Definition of post types and vote types in the application.
 * 
 * - postType: An array of string literals representing different types of posts.
 *   - Possible values: "TEXT", "IMAGES", "VIDEO"
 *   - This array is asserted as a tuple of string literals using `as const` to preserve the exact types.
 * 
 * - PostType: A union type that represents the possible values of post types.
 *   - Union type: "TEXT" | "IMAGES" | "VIDEO"
 *   - Variables of type PostType can only hold one of these three specific values.
 * 
 * - VoteType: A union type representing the possible values for a vote type.
 *   - Union type: "LIKE" | "DISLIKE" | "HEART"
 *   - Variables of type VoteType can only have one of these three string literal values.
 * 
 * By defining these types, the code ensures that variables assigned or compared to these types
 * can only hold specific, predefined values. This adds type safety and prevents accidental usage
 * of invalid or unexpected values for post types and vote types.
 */

export const postType = ["TEXT", "IMAGES", "VIDEO"] as const;
export type PostType = typeof postType[number];
export type VoteType = "LIKE" | "DISLIKE" | "HEART";
