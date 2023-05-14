import TransitionEffect from "@/components/TransitionEffect"
import Layout from "@/components/Layout"

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main className="w-full min-h-screen bg-lightd dark:bg-darkd">
        <Layout className="min-h-screen">
        </Layout>
      </main>
    </>
  )
}
