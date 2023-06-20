import { NextPage } from "next";


/**
 * Custom type definition for Next.js page components.
 * 
 * CustomNextPage extends the NextPage type and adds an optional `auth` property.
 * This type can be used to define page components in Next.js with additional authentication-related behavior.
 * 
 * - NextPage: Represents the type for a Next.js page component.
 * - CustomNextPage: Extends NextPage and adds an optional `auth` property of type boolean.
 *   - The `auth` property can be used to specify whether the page component requires authentication.
 *   - Its value can be used to implement authentication-related behavior in the page component.
 * 
 * By using CustomNextPage, you can define page components in Next.js with the same structure and behavior
 * as regular NextPage components, but with an optional `auth` property for authentication-related requirements.
 */


export type CustomNextPage = NextPage & { auth?: boolean };
