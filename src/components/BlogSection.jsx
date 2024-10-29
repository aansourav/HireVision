import BlogCards from "./BlogCards";

export default function BlogSection() {
    return (
        <>
            <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 bg-[#eef1f2] rounded-full my-8">
                    <span className="text-xs font-beVietnam font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        BLOG
                    </span>
                </span>
                <h2 className="mt-1 section-head">From our Blog</h2>
            </div>
            <BlogCards />
        </>
    );
}
