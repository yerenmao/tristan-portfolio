import TransitionEffect from "@/components/TransitionEffect"
import Layout from "@/components/Layout"
import HomePage from "@/pages/HomePage"
import Experience from "@/pages/Experience"

export const metadata = {
  title: 'Tristan | Home',
}

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main className="w-full min-h-screen bg-lightd dark:bg-darkd">
        <Layout className="min-h-screen">
          <HomePage />
        </Layout>
        <Layout className='bg-lightl dark:bg-darkl min-h-screen'>
          <Experience />
        </Layout>
      </main>
    </>
  )
}
