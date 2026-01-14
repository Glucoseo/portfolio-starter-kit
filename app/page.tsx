import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About me
      </h1>
      <p className="mb-4">
        {`I'm an 14 y.o. NIS pupil from Uralsk, Kazakhstan.
        I dream to build my own startup-unicorn, get accepted into one of the top universities in the world and become a great mentor.
        `}
      </p>
      <div className="my-8">
{/*  <BlogPosts /> */}      
      </div>
    </section>
  )
}
