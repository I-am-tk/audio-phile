# Audiophile

An audio gear e-commerce web application.

![Audiophile](/public/audiophile.png)

Visit [Audiophile](https://audio-phile-orcin.vercel.app/)

I intended to create a full-stack application after learning about backend development. I, therefore, thought about developing an online store and a social media application. I found a Figma design of a challenge on the Frontend Mentor website that I used to create the e-commerce application. Here is the link to that challenge [Audiophile](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx).

- All pages are pre-rendered to get the best SEO.
- Implemented Authentication with NextAuth with GitHub provider and stored user session in MongoDB using Prisma adaptor.
- Incorporated Prisma ORM, which provides type-safe database queries and produces types for the schema, and Zod to validate user-submitted data.

## TechStack

### NextJS

My main goal for this website was to make it SEO-friendly. NextJS is a React framework designed for production. Some features it offers are Image Optimization, SSG and SSR, and File-system Routing. It also includes built-in code splitting capability. During the build process, each file in the "pages/" directory will be automatically code split into its JavaScript bundle. Since it offers these amazing features, I picked NextJS.

### NextAuth

I used NextAuth for authentication on this project. It is effortless to integrate it with NextJS and supports multiple authentication providers. In this project, I have used github for authentication.

### TailwindCSS

Utility classes allow us to write the style of a component directly in the class, which speeds up development. Additionally, it offers a design system with typeface, colors, spacing, and many other elements.

### MongoDB and Prisma

I used MongoDB to keep the user session and cart items. There are several libraries that can be used to define schemas for MongoDB and work with it, however Prisma ORM is superior because it produces types for the schema and provides type-safe database queries that can be validated at compile time.

## Framer Motion

Websites need animations to be engaging. Declarative animation is simpler to use with Framer Motion. Additionally, it enables us to implement exit animations, which is somewhat challenging to do in React.

### Zod

Verifying the user-submitted data on the server is crucial. For this, there are several libraries available.I decided to use Zod because I was already familiar with it. It permits building a data schema and comparing user-submitted data to it. Furthermore, it offers types for the schemas.

### SWR

I used SWR for data fetching to achieve fast page navigation and to have an optimistic UI.

## Future Scope

- Add more authentication providers
- Allow user to add items to cart even if they are not logged in.
- Make Admin page for adding new products and updating the order status.
