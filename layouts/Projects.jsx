import ProjectCardHorizontal from '@/components/ProjectCardHorizontal'
import RepositoryCard from '@/components/RepositoryCard'
import ContentRenderer from '@/components/ContentRenderer'
import Reveal from '@/components/Reveal'
import ProfileDetails from "@/components/ProfileDetails";
import GithubUser from "@/components/GithubUser"

const GitPhoto = ({ main }) =>
  main.images?.[1] && (
    <div className="relative mx-auto w-full text-center">
      <Reveal
        delay={1000}
        animation="fade-in slide-in-top"
        className="prose absolute -bottom-4 left-1/2 z-20 w-full -translate-x-1/2"
      >
        <h1 className="text-gradient-500 m-0 text-7xl drop-shadow-md md:text-8xl">{main.name}</h1>
      </Reveal>
      <Reveal
        animation="fade-in zoom-in"
        className="absolute left-1/2 h-72 w-72 -translate-x-1/2 md:bottom-0 md:h-96 md:w-96"
      >
        <div
          className={classNames(
            'h-full w-full rounded-full md:animate-spin-slow',
            'bg-gradient-to-tr from-alpha-600 via-beta to-accent'
          )}
        />
      </Reveal>
      <Image
        src={main.images[1].src}
        width={main.images[1].width}
        height={main.images[1].height}
        alt={main.images[1].alt}
        animation="fade-in slide-in-top"
        className="mx-auto"
        priority
      />
    </div>
  )


const GitDetails = ({ achievements }) => (
  <>
    <Reveal
      animation="fade-in slide-in-bottom"
      className={classNames(
        'relative z-10',
        'mx-auto max-w-5xl p-10 text-center md:p-6',
        'ld:grid-cols-4 prose prose-invert grid grid-cols-2 lg:grid-cols-4',
        'bg-gradient-omega-900 shadow-lg',
        'divide-omega-700/30 lg:divide-x'
      )}
    >
      {achievements?.map((item, i) => (
        <Reveal key={i} animation="fade-in" delay={i * 250} className="flex-1 p-2">
          <h3 className="m-0 text-accent">{item.number}</h3>
          <p className="mt-2 mb-0 text-omega-300">{item.text}</p>
        </Reveal>
      ))}
    </Reveal>
    <Reveal
      animation="fade-in scale-x"
      className="mx-auto h-px max-w-5xl bg-gradient-to-r from-accent via-beta to-alpha"
    />
  </>
)

const Layout = ({ projects, github }) => {
  return (
    <div className="mx-auto p-3 md:p-6 lg:p-12">
      <div className="prose prose-headings:mb-4 dark:prose-invert">
        <ProfileDetails data={github} />
        <ContentRenderer source={github} />
        <div className="my-6 md:my-12"></div>
        <ContentRenderer source={projects} />
        <div className="mt-4 grid gap-4 md:mt-12 md:gap-6">
          {projects?.collection?.records?.map((item, i) => (
            <ProjectCardHorizontal key={item.slug} index={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Layout
