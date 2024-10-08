import { NextResponse } from "next/server";

const posts = [
    {
        title: 'Understanding JavaScript Closures',
        slug: 'understanding-javascript-closures',
        content: 'Closures are a fundamental concept in JavaScript, allowing functions to retain access to variables from an outer scope.'
    },
    {
        title: 'Mastering CSS Grid Layout',
        slug: 'mastering-css-grid-layout',
        content: 'CSS Grid is a powerful layout system available in CSS, enabling developers to create complex, responsive layouts with ease.'
    },
    {
        title: 'A Guide to React Hooks',
        slug: 'guide-to-react-hooks',
        content: 'React hooks allow developers to use state and lifecycle methods inside functional components. This guide explains how to use hooks efficiently.'
    },
    {
        title: 'Node.js Event Loop Explained',
        slug: 'nodejs-event-loop-explained',
        content: 'The event loop is at the heart of Node.js, enabling asynchronous programming and non-blocking I/O operations. Learn how it works here.'
    },
    {
        title: 'Best Practices for REST API Design',
        slug: 'best-practices-rest-api-design',
        content: 'Designing REST APIs involves following certain conventions to ensure scalability, performance, and security. This article covers best practices for designing robust APIs.'
    },
    {
        title: 'Introduction to TypeScript',
        slug: 'introduction-to-typescript',
        content: 'TypeScript brings static typing to JavaScript, helping developers write more reliable code. Learn the basics in this introduction.'
    },
    {
        title: 'JavaScript Promises: An Overview',
        slug: 'javascript-promises-overview',
        content: 'Promises in JavaScript are used to handle asynchronous operations. This overview explains how to use them to write clean, readable code.'
    },
    {
        title: 'Debugging in Chrome DevTools',
        slug: 'debugging-chrome-devtools',
        content: 'Chrome DevTools provides powerful tools for debugging JavaScript, optimizing performance, and inspecting elements. This guide covers essential debugging techniques.'
    },
    {
        title: 'Web Accessibility: Best Practices',
        slug: 'web-accessibility-best-practices',
        content: 'Ensuring your website is accessible to all users is crucial. This article explains best practices for making your site accessible, following WCAG guidelines.'
    },
    {
        title: 'An Introduction to GraphQL',
        slug: 'introduction-to-graphql',
        content: 'GraphQL is a query language for your API, providing a more flexible and efficient way to query and mutate data compared to REST APIs.'
    },
];


export async function GET(){
    return NextResponse.json(posts);
}