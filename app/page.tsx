import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About me, about this project
      </h1>
      <p className="mb-4">
        {`I'm an 14 y.o. NIS pupil from Uralsk, Kazakhstan. This is one of my training projects where i gain experience in web development.
        I dream to build my own startup-unicorn, get accepted into one of the top universities in the world and become a great mentor.
        Right now im in FirstLegoLeague Challenge team Tidal Tumble as a builder/game strategist(28.12.2025). Currently i'm making projects for my CVs, portfolio, Github, to gain experience in Next.js.(I NEED TO CHANGE BLOG INTO "MY THOUGHTS")
        
        I hope that in the futue i would inspire and teach someone.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
