import BlogSection from "@/components/blogsSection.jsx";
import Common from "@/components/common.jsx";
export default async function Blog() {
    return (
        <main className="flex items-center justify-between w-full flex-col p-8 min-h-screen">
        <Common />
        <BlogSection />
        </main>
    );
}