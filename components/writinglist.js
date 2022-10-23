import WritingPreview from './writing-preview'

export default function WritingsList({ posts }) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <WritingPreview
            coverImage={post.bannerImage}
            key={post.slug}
            title={post.title}
            udate={post.postedOn}
            slug={post.slug}
            excerpt={post.brief}
          />
        ))}
      </div>
    </section>
  )
}
