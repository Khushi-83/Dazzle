import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

const IMAGE_URL = "https://plus.unsplash.com/premium_photo-1670360414483-64e6d9ba9038?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const addBlogs = async () => {
    await prisma.blog.createMany({
        data: [
            {
                title: "Embracing Minimalism in Modern Interiors",
                content: JSON.stringify({
                    type: "doc",
                    content: [
                        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "The Art of Minimalist Design" }] },
                        { type: "paragraph", content: [{ type: "text", text: "Minimalism focuses on simplicity and functionality, creating serene spaces that promote clarity and calm." }] },
                        { type: "image", attrs: { src: IMAGE_URL, alt: "Interior Design" } },
                        { type: "paragraph", content: [{ type: "text", text: "Neutral color palettes and clean lines are key elements in minimalist interiors." }] },
                    ]
                }),
                featuredImage: IMAGE_URL,
            },
            {
                title: "Maximizing Small Spaces with Smart Design",
                content: JSON.stringify({
                    type: "doc",
                    content: [
                        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Space-Saving Strategies" }] },
                        { type: "paragraph", content: [{ type: "text", text: "Clever furniture choices and layout adjustments can make small spaces feel expansive." }] },
                        { type: "image", attrs: { src: IMAGE_URL, alt: "Interior Design" } },
                        { type: "paragraph", content: [{ type: "text", text: "Utilizing vertical space and multi-functional furniture are effective techniques." }] },
                    ]
                }),
                featuredImage: IMAGE_URL,
            },
            {
                title: "Incorporating Natural Elements into Home Design",
                content: JSON.stringify({
                    type: "doc",
                    content: [
                        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Bringing the Outdoors In" }] },
                        { type: "paragraph", content: [{ type: "text", text: "Integrating natural materials like wood and stone adds warmth and texture to interiors." }] },
                        { type: "image", attrs: { src: IMAGE_URL, alt: "Interior Design" } },
                        { type: "paragraph", content: [{ type: "text", text: "Natural elements create a harmonious and inviting atmosphere." }] },
                    ]
                }),
                featuredImage: IMAGE_URL,
            },
            {
                title: "The Power of Color in Interior Design",
                content: JSON.stringify({
                    type: "doc",
                    content: [
                        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Color Psychology in Interiors" }] },
                        { type: "paragraph", content: [{ type: "text", text: "Colors influence mood and perception; choosing the right palette is crucial." }] },
                        { type: "image", attrs: { src: IMAGE_URL, alt: "Interior Design" } },
                        { type: "paragraph", content: [{ type: "text", text: "Warm tones can energize, while cool tones promote relaxation." }] },
                    ]
                }),
                featuredImage: IMAGE_URL,
            },
            {
                title: "Lighting Techniques to Enhance Your Space",
                content: JSON.stringify({
                    type: "doc",
                    content: [
                        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Illuminating Design" }] },
                        { type: "paragraph", content: [{ type: "text", text: "Proper lighting can transform a room, highlighting architectural features and creating ambiance." }] },
                        { type: "image", attrs: { src: IMAGE_URL, alt: "Interior Design" } },
                        { type: "paragraph", content: [{ type: "text", text: "Layering different light sources adds depth and functionality." }] },
                    ]
                }),
                featuredImage: IMAGE_URL,
            },
            {
                title: "Sustainable Practices in Interior Design",
                content: JSON.stringify({
                    type: "doc",
                    content: [
                        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Eco-Friendly Design Choices" }] },
                        { type: "paragraph", content: [{ type: "text", text: "Sustainable materials and energy-efficient designs contribute to environmental conservation." }] },
                        { type: "image", attrs: { src: IMAGE_URL, alt: "Interior Design" } },
                        { type: "paragraph", content: [{ type: "text", text: "Recycled materials and energy-efficient appliances are key components." }] },
                    ]
                }),
                featuredImage: IMAGE_URL,
            },
            {
                title: "Designing Functional Home Offices",
                content: JSON.stringify({
                    type: "doc",
                    content: [
                        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Workspace Design" }] },
                        { type: "paragraph", content: [{ type: "text", text: "A well-designed home office enhances productivity and comfort." }] },
                        { type: "image", attrs: { src: IMAGE_URL, alt: "Interior Design" } },
                        { type: "paragraph", content: [{ type: "text", text: "Ergonomic furniture and organized layouts are essential." }] },
                    ]
                }),
                featuredImage: IMAGE_URL,
            },
            {
                title: "Creating Inviting Outdoor Living Spaces",
                content: JSON.stringify({
                    type: "doc",
                    content: [
                        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Outdoor Design" }] },
                        { type: "paragraph", content: [{ type: "text", text: "Outdoor spaces can be extensions of your home, offering relaxation and entertainment areas." }] },
                        { type: "image", attrs: { src: IMAGE_URL, alt: "Interior Design" } },
                        { type: "paragraph", content: [{ type: "text", text: "Comfortable seating and ambient lighting enhance the outdoor experience." }] },
                    ]
                }),
                featuredImage: IMAGE_URL,
            },
            {
                title: "Personalizing Your Space with Art and Decor",
                content: JSON.stringify({
                    type: "doc",
                    content: [
                        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Decorative Touches" }] },
                        { type: "paragraph", content: [{ type: "text", text: "Art and decor reflect personal style and add character to interiors." }] },
                        { type: "image", attrs: { src: IMAGE_URL, alt: "Interior Design" } },
                        { type: "paragraph", content: [{ type: "text", text: "Selecting meaningful pieces creates a cohesive and inviting atmosphere." }] },
                    ]
                }),
                featuredImage: IMAGE_URL,
            },
            {
                title: "Trends to Watch in Modern Interiors",
                content: JSON.stringify({
                    type: "doc",
                    content: [
                        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Interior Design Trends" }] },
                        { type: "paragraph", content: [{ type: "text", text: "Modern interiors are embracing biophilic design, bold textures, and sustainable materials." }] },
                        { type: "image", attrs: { src: IMAGE_URL, alt: "Interior Design" } },
                        { type: "paragraph", content: [{ type: "text", text: "Mixing contemporary and vintage elements creates unique, personalized spaces." }] },
                    ]
                }),
                featuredImage: IMAGE_URL,
            },
        ],
    });
};


addBlogs().then(data=>{
    console.log("inserted")
}).catch(err=>{
    console.log(err)
}).finally(()=>{
    prisma.$disconnect()
})

